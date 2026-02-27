import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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
import { useCategories } from "@/hooks/useCategories";
import type { RABItemTemplate } from "@/types/rab";

const itemTemplateSchema = z.object({
  category_id: z.string().nullable(),
  name: z.string().min(1, "Nama item harus diisi"),
  unit: z.string().min(1, "Satuan harus diisi"),
  default_price: z.number().min(0, "Harga tidak boleh negatif"),
  description: z.string().optional(),
});

type ItemTemplateFormValues = z.infer<typeof itemTemplateSchema>;

interface RABItemTemplateDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  template?: RABItemTemplate | null;
  onSubmit: (data: ItemTemplateFormValues) => Promise<void>;
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

export default function RABItemTemplateDialog({
  open,
  onOpenChange,
  template,
  onSubmit,
}: RABItemTemplateDialogProps) {
  const [loading, setLoading] = useState(false);

  const { data: categories } = useCategories();
  const expenseCategories =
    categories?.filter((c) => c.type === "expense") ?? [];

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ItemTemplateFormValues>({
    resolver: zodResolver(itemTemplateSchema),
    defaultValues: {
      category_id: null,
      name: "",
      unit: "",
      default_price: 0,
      description: "",
    },
  });

  // Reset form when dialog opens with template data
  useEffect(() => {
    if (open) {
      if (template) {
        reset({
          category_id: template.category_id,
          name: template.name,
          unit: template.unit,
          default_price: template.default_price,
          description: template.description || "",
        });
      } else {
        reset({
          category_id: null,
          name: "",
          unit: "",
          default_price: 0,
          description: "",
        });
      }
    }
  }, [open, template, reset]);

  const handleFormSubmit = async (data: ItemTemplateFormValues) => {
    setLoading(true);
    try {
      await onSubmit(data);
      onOpenChange(false);
      reset();
    } catch (error) {
      console.error("Error saving item template:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePriceChange = (value: string) => {
    const numericValue = parseFormattedNumber(value);
    setValue("default_price", numericValue);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            {template ? "Edit Item Template" : "Tambah Item Template Baru"}
          </DialogTitle>
          <DialogDescription>
            {template
              ? "Edit informasi item template ini"
              : "Isi form di bawah untuk membuat item template baru"}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Nama Item *</Label>
              <Input
                id="name"
                placeholder="Contoh: Semen Portland"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-sm text-destructive">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="category">Kategori</Label>
              <Select
                value={watch("category_id") || "none"}
                onValueChange={(value) =>
                  setValue("category_id", value === "none" ? null : value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem key="none" value="none">
                    Tidak ada kategori
                  </SelectItem>
                  {expenseCategories
                    .filter((cat) => cat.id)
                    .map((cat, idx) => (
                      <SelectItem key={`${cat.id}-${idx}`} value={cat.id}>
                        {cat.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="unit">Satuan *</Label>
                <Input
                  id="unit"
                  placeholder="Contoh: pcs, m2, ls"
                  {...register("unit")}
                />
                {errors.unit && (
                  <p className="text-sm text-destructive">
                    {errors.unit.message}
                  </p>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="default_price">Harga (Rp) *</Label>
                <Input
                  id="default_price"
                  type="text"
                  inputMode="numeric"
                  placeholder="0"
                  value={formatNumberInput(watch("default_price") || 0)}
                  onChange={(e) => handlePriceChange(e.target.value)}
                />
                {errors.default_price && (
                  <p className="text-sm text-destructive">
                    {errors.default_price.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">Deskripsi (opsional)</Label>
              <Input
                id="description"
                placeholder="Deskripsi tambahan tentang item"
                {...register("description")}
              />
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
              {loading ? "Menyimpan..." : template ? "Simpan" : "Tambah"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
