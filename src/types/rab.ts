// RAB (Rencana Anggaran Biaya) Types for Lap-Keu

import type { Category } from './index';

export type RABStatus = 'draft' | 'active' | 'completed' | 'cancelled';

export interface RAB {
  id: string;
  user_id: string;
  name: string;
  description: string | null;
  status: RABStatus;
  total_budget: number;
  created_at: string;
  updated_at: string;
  items?: RABItem[];
}

export interface RABItem {
  id: string;
  rab_id: string;
  category_id: string | null;
  template_id: string | null;
  name: string;
  quantity: number;
  unit: string;
  price_per_unit: number;
  total_price: number;
  template?: RABItemTemplate | null;
  category?: Category;
}

// Form types untuk create/update RAB
export interface RABFormData {
  name: string;
  description: string;
  status: RABStatus;
  items: RABItemFormData[];
}

export interface RABItemFormData {
  id?: string; // untuk update existing item
  template_id?: string | null; // referensi ke template (jika ada)
  category_id: string | null;
  name: string;
  quantity: number;
  unit: string;
  price_per_unit: number;
}

// Filter types
export interface RABFilters {
  status?: RABStatus;
  search?: string;
}

// RAB Item Template Types (untuk katalog item independen)
export interface RABItemTemplate {
  id: string;
  user_id: string;
  category_id: string | null;
  name: string;
  unit: string;
  default_price: number;
  description: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  category?: Category;
}

export interface RABItemTemplateFormData {
  category_id: string | null;
  name: string;
  unit: string;
  default_price: number;
  description?: string;
}

export interface RABItemTemplateFilters {
  category_id?: string;
  search?: string;
  is_active?: boolean;
}

// RAB Progress Types (untuk tracking progress berbasis quantity)
export interface RABProgressUpdate {
  rab_item_id: string;
  quantity_added: number;  // Quantity yang ditambahkan
  description?: string;     // Catatan optional
}

export interface RABItemProgress {
  item_id: string;
  item_name: string;
  category_id: string | null;
  category_name?: string;
  budgeted_quantity: number;
  realized_quantity: number;
  remaining_quantity: number;
  unit: string;
  price_per_unit: number;
  budgeted_amount: number;
  realized_amount: number;
  absorption_percentage: number;
  last_updated?: string;
}

export interface RABProgressSummary {
  rab_id: string;
  rab_name: string;
  total_items: number;
  completed_items: number;
  overall_progress_percentage: number;
  total_budgeted: number;
  total_realized: number;
  remaining_budget: number;
}

export interface RABProgressHistory {
  id: string;
  rab_item_id: string;
  quantity_added: number;
  description: string | null;
  user_id: string;
  created_at: string;
  user?: {
    name?: string;
    email?: string;
  };
}
