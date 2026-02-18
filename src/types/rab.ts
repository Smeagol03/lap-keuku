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

export interface RABAnalysis {
  rab: RAB;
  totalRealization: number;
  remainingBudget: number;
  absorptionPercentage: number;
  categoryBreakdown: {
    category_id: string;
    category_name: string;
    budgeted: number;
    realized: number;
    remaining: number;
  }[];
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
