import { useEffect, useState } from "react";
import { useForm, useFieldArray, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Trash2, Package } from "lucide-react";
import { useCategories } from "@/hooks/useCategories";
import RABItemSelector from "./RABItemSelector";
import type { RAB, RABItemTemplate } from "@/types/rab";

const rabItemSchema = z.object({
  id: z.string().optional(),
  template_id: z.string().nullable().optional(),
  category_id: z.string().nullable(),
  name: z.string().min(1, "Nama item harus diisi"),
  quantity: z.number().positive("Qty harus lebih dari 0"),
  unit: z.string().min(1, "Satuan harus diisi"),
  price_per_unit: z.number().min(0, "Harga tidak boleh negatif"),
});

const rabSchema = z.object({
  name: z.string().min(1, "Nama proyek harus diisi"),
  description: z.string(),
  status: z.enum(["draft", "active", "completed", "cancelled"]),
  tax_rate: z.number().min(0, "Pajak tidak boleh negatif"),
  items: z.array(rabItemSchema).min(1, "Minimal harus ada 1 item"),
});

type RABFormValues = z.infer<typeof rabSchema>;

interface RABFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  rab?: RAB | null;
  onSubmit: (data: RABFormValues) => Promise<void>;
}

// Format number to Indonesian locale string
const formatNumberInput = (value: number): string => {
  if (value === 0) return "";
  return value.toLocaleString("id-ID");
};

// Parse Indonesian formatted number
const parseFormattedNumber = (value: string): number => {
  if (!value) return 0;
  const digitsOnly = value.replace(/[^\d]/g, "");
  return parseInt(digitsOnly, 10) || 0;
};

export default function RABFormDialog({
  open,
  onOpenChange,
  rab,
  onSubmit,
}: RABFormDialogProps) {
  const [loading, setLoading] = useState(false);
  const [selectorOpen, setSelectorOpen] = useState(false);

  const { data: categories } = useCategories();
  const expenseCategories =
    categories?.filter((c) => c.type === "expense") ?? [];

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm<RABFormValues>({
    resolver: zodResolver(rabSchema),
    defaultValues: {
      name: "",
      description: "",
      status: "draft",
      tax_rate: 0,
      items: [
        {
          template_id: null,
          category_id: null,
          name: "",
          quantity: 1,
          unit: "ls",
          price_per_unit: 0,
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const watchItems = useWatch({
    control,
    name: "items",
    defaultValue: [
      {
        template_id: null,
        category_id: null,
        name: "",
        quantity: 1,
        unit: "ls",
        price_per_unit: 0,
      },
    ],
  });

  // Calculate total budget
  const subtotal = watchItems.reduce(
    (sum, item) => sum + (item.quantity || 0) * (item.price_per_unit || 0),
    0,
  );
  const taxRate = watch("tax_rate") || 0;
  const taxAmount = (subtotal * taxRate) / 100;
  const grandTotal = subtotal + taxAmount;

  // Reset form when dialog opens with RAB data
  useEffect(() => {
    if (open) {
      if (rab) {
        reset({
          name: rab.name,
          description: rab.description || "",
          status: rab.status,
          tax_rate: rab.tax_rate || 0,
          items: rab.items?.map((item) => ({
            id: item.id,
            template_id: item.template_id || null,
            category_id: item.category_id,
            name: item.name,
            quantity: item.quantity,
            unit: item.unit,
            price_per_unit: item.price_per_unit,
          })) || [
            {
              template_id: null,
              category_id: null,
              name: "",
              quantity: 1,
              unit: "ls",
              price_per_unit: 0,
            },
          ],
        });
      } else {
        reset({
          name: "",
          description: "",
          status: "draft",
          tax_rate: 0,
          items: [
            {
              template_id: null,
              category_id: null,
              name: "",
              quantity: 1,
              unit: "ls",
              price_per_unit: 0,
            },
          ],
        });
      }
    }
  }, [open, rab, reset]);

  const handleFormSubmit = async (data: RABFormValues) => {
    setLoading(true);
    try {
      await onSubmit(data);
      onOpenChange(false);
      reset();
    } catch (error) {
      console.error("Error saving RAB:", error);
    } finally {
      setLoading(false);
    }
  };

  const addItem = () => {
    append({
      template_id: null,
      category_id: null,
      name: "",
      quantity: 1,
      unit: "ls",
      price_per_unit: 0,
    });
  };

  const handlePriceChange = (index: number, value: string) => {
    const numericValue = parseFormattedNumber(value);
    setValue(`items.${index}.price_per_unit`, numericValue);
  };

  const handleTemplateSelect = (template: RABItemTemplate) => {
    append({
      template_id: template.id,
      category_id: template.category_id,
      name: template.name,
      quantity: 1,
      unit: template.unit,
      price_per_unit: template.default_price,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{rab ? "Edit RAB" : "Tambah RAB Baru"}</DialogTitle>
          <DialogDescription>
            {rab
              ? "Edit informasi RAB proyek ini"
              : "Isi form di bawah untuk membuat RAB baru"}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="grid gap-4 py-4">
            {/* Header Fields */}
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="name">Nama Proyek *</Label>
                <Input
                  id="name"
                  placeholder="Contoh: Renovasi Rumah"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="status">Status</Label>
                <Select
                  value={watch("status")}
                  onValueChange={(
                    value: "draft" | "active" | "completed" | "cancelled",
                  ) => setValue("status", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="active">Aktif</SelectItem>
                    <SelectItem value="completed">Selesai</SelectItem>
                    <SelectItem value="cancelled">Dibatalkan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="description">Deskripsi (opsional)</Label>
                <Input
                  id="description"
                  placeholder="Keterangan tambahan tentang proyek"
                  {...register("description")}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="tax_rate">Pajak (%)</Label>
                <div className="relative">
                  <Input
                    id="tax_rate"
                    type="number"
                    min="0"
                    step="0.1"
                    placeholder="0"
                    {...register("tax_rate", { valueAsNumber: true })}
                    className="pr-8"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                    %
                  </span>
                </div>
                {errors.tax_rate && (
                  <p className="text-sm text-destructive">
                    {errors.tax_rate.message}
                  </p>
                )}
              </div>
            </div>

            {/* Items Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-base font-semibold">Rincian Item</Label>
                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectorOpen(true)}
                  >
                    <Package className="h-4 w-4 mr-1" />
                    Pilih dari Katalog
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={addItem}
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Tambah Item
                  </Button>
                </div>
              </div>

              {errors.items && !errors.items.root && (
                <p className="text-sm text-destructive">
                  Minimal harus ada 1 item
                </p>
              )}

              {/* Desktop Table View */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-2 text-sm font-medium">
                        Nama Item *
                      </th>
                      <th className="text-left py-2 px-2 text-sm font-medium w-32">
                        Kategori
                      </th>
                      <th className="text-right py-2 px-2 text-sm font-medium w-20">
                        Qty *
                      </th>
                      <th className="text-left py-2 px-2 text-sm font-medium w-24">
                        Satuan *
                      </th>
                      <th className="text-right py-2 px-2 text-sm font-medium w-36">
                        Harga/Unit *
                      </th>
                      <th className="text-right py-2 px-2 text-sm font-medium w-32">
                        Total
                      </th>
                      <th className="w-10"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {fields.map((field, index) => (
                      <tr key={field.id} className="border-b">
                        <td className="py-2 px-2">
                          <Input
                            placeholder="Nama item"
                            value={watchItems[index]?.name || ""}
                            onChange={(e) =>
                              setValue(`items.${index}.name`, e.target.value)
                            }
                            className="h-8"
                          />
                          {errors.items?.[index]?.name && (
                            <p className="text-xs text-destructive">
                              {errors.items[index]?.name?.message}
                            </p>
                          )}
                        </td>
                        <td className="py-2 px-2">
                          <div className="w-full">
                            <Select
                              value={watchItems[index]?.category_id || "none"}
                              onValueChange={(value) =>
                                setValue(
                                  `items.${index}.category_id`,
                                  value === "none" ? null : value,
                                )
                              }
                            >
                              <SelectTrigger className="h-8 w-full">
                                <SelectValue placeholder="-" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem key="none" value="none">
                                  Tidak ada
                                </SelectItem>
                                {expenseCategories
                                  .filter((cat) => cat.id)
                                  .map((cat, idx) => (
                                    <SelectItem
                                      key={`${cat.id}-${idx}`}
                                      value={cat.id}
                                    >
                                      {cat.name}
                                    </SelectItem>
                                  ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </td>
                        <td className="py-2 px-2">
                          <Input
                            type="number"
                            min="0.01"
                            step="0.01"
                            value={watchItems[index]?.quantity || ""}
                            onChange={(e) =>
                              setValue(
                                `items.${index}.quantity`,
                                parseFloat(e.target.value) || 0,
                              )
                            }
                            className="text-right h-8 w-20"
                          />
                        </td>
                        <td className="py-2 px-2">
                          <Input
                            placeholder="ls"
                            value={watchItems[index]?.unit || ""}
                            onChange={(e) =>
                              setValue(`items.${index}.unit`, e.target.value)
                            }
                            className="h-8 w-24"
                          />
                        </td>
                        <td className="py-2 px-2">
                          <Input
                            type="text"
                            inputMode="numeric"
                            placeholder="0"
                            value={formatNumberInput(
                              watchItems[index]?.price_per_unit || 0,
                            )}
                            onChange={(e) =>
                              handlePriceChange(index, e.target.value)
                            }
                            className="text-right h-8"
                          />
                        </td>
                        <td className="py-2 px-2 text-right font-medium">
                          {new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                            minimumFractionDigits: 0,
                          }).format(
                            (watchItems[index]?.quantity || 0) *
                              (watchItems[index]?.price_per_unit || 0),
                          )}
                        </td>
                        <td className="py-2 px-2">
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => remove(index)}
                            disabled={fields.length === 1}
                            className="h-8 w-8"
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View */}
              <div className="md:hidden space-y-4">
                {fields.map((field, index) => (
                  <div
                    key={field.id}
                    className="border rounded-lg p-4 space-y-3"
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-sm font-medium">
                        Item {index + 1}
                      </span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => remove(index)}
                        disabled={fields.length === 1}
                        className="h-8 w-8"
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>

                    <div className="grid gap-2">
                      <Label className="text-xs">Nama Item *</Label>
                      <Input
                        placeholder="Nama item"
                        value={watchItems[index]?.name || ""}
                        onChange={(e) =>
                          setValue(`items.${index}.name`, e.target.value)
                        }
                      />
                      {errors.items?.[index]?.name && (
                        <p className="text-xs text-destructive">
                          {errors.items[index]?.name?.message}
                        </p>
                      )}
                    </div>

                    <div className="grid gap-2">
                      <Label className="text-xs">Kategori</Label>
                      <Select
                        value={watchItems[index]?.category_id || "none"}
                        onValueChange={(value) =>
                          setValue(
                            `items.${index}.category_id`,
                            value === "none" ? null : value,
                          )
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih kategori" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem key="none" value="none">
                            Tidak ada
                          </SelectItem>
                          {expenseCategories
                            .filter((cat) => cat.id)
                            .map((cat, idx) => (
                              <SelectItem
                                key={`${cat.id}-${idx}`}
                                value={cat.id}
                              >
                                {cat.name}
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="grid gap-2">
                        <Label className="text-xs">Qty *</Label>
                        <Input
                          type="number"
                          min="0.01"
                          step="0.01"
                          value={watchItems[index]?.quantity || ""}
                          onChange={(e) =>
                            setValue(
                              `items.${index}.quantity`,
                              parseFloat(e.target.value) || 0,
                            )
                          }
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label className="text-xs">Satuan *</Label>
                        <Input
                          placeholder="ls"
                          value={watchItems[index]?.unit || ""}
                          onChange={(e) =>
                            setValue(`items.${index}.unit`, e.target.value)
                          }
                        />
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <Label className="text-xs">Harga/Unit (Rp) *</Label>
                      <Input
                        type="text"
                        inputMode="numeric"
                        placeholder="0"
                        value={formatNumberInput(
                          watchItems[index]?.price_per_unit || 0,
                        )}
                        onChange={(e) =>
                          handlePriceChange(index, e.target.value)
                        }
                      />
                    </div>

                    <div className="text-right font-medium pt-2 border-t">
                      Total:{" "}
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                      }).format(
                        (watchItems[index]?.quantity || 0) *
                          (watchItems[index]?.price_per_unit || 0),
                      )}
                    </div>
                  </div>
                ))}

                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={addItem}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Tambah Item
                </Button>
              </div>

              {/* Total Budget Summary */}
              <div className="flex flex-col items-end pt-4 border-t space-y-2">
                <div className="flex justify-between w-full sm:w-64">
                  <span className="text-sm text-muted-foreground">
                    Subtotal
                  </span>
                  <span className="font-medium">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    }).format(subtotal)}
                  </span>
                </div>

                {taxRate > 0 && (
                  <div className="flex justify-between w-full sm:w-64 text-muted-foreground">
                    <span className="text-sm">Pajak ({taxRate}%)</span>
                    <span className="text-sm">
                      +{" "}
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                      }).format(taxAmount)}
                    </span>
                  </div>
                )}

                <div className="flex justify-between w-full sm:w-64 pt-2 border-t">
                  <span className="font-medium">Grand Total</span>
                  <span className="text-xl font-bold text-primary">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    }).format(grandTotal)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="w-full sm:w-auto"
            >
              Batal
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto"
            >
              {loading ? "Menyimpan..." : rab ? "Simpan" : "Tambah"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
      <RABItemSelector
        open={selectorOpen}
        onOpenChange={setSelectorOpen}
        onSelect={handleTemplateSelect}
      />
    </Dialog>
  );
}
