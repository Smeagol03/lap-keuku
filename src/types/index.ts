// Database table types based on perencanaan.md

export interface Profile {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  email: string | null;
  currency: string;
  created_at: string;
}

export interface Category {
  id: string;
  user_id: string;
  name: string;
  type: 'income' | 'expense';
  icon: string | null;
  color: string;
  is_default: boolean;
  created_at: string;
}

export interface Transaction {
  id: string;
  user_id: string;
  category_id: string | null;
  type: 'income' | 'expense';
  amount: number;
  description: string | null;
  date: string;
  created_at: string;
  updated_at: string;
  // RAB relation
  rab_id?: string | null;
  rab_item_id?: string | null;
  // Joined relation
  category?: Category;
  rab?: {
    id: string;
    name: string;
  };
  rab_item?: {
    id: string;
    name: string;
  };
}

export interface Budget {
  id: string;
  user_id: string;
  category_id: string;
  amount: number;
  month: number;
  year: number;
  created_at: string;
  // Joined relation
  category?: Category;
}

// Dashboard summary types
export interface DashboardSummary {
  totalBalance: number;
  totalIncome: number;
  totalExpense: number;
  recentTransactions: Transaction[];
}

// Form types
export interface TransactionFormData {
  type: 'income' | 'expense';
  amount: number;
  category_id: string | null;
  description: string;
  date: string;
  // RAB relation (optional, only for expense)
  rab_id?: string | null;
  rab_item_id?: string | null;
}

export interface CategoryFormData {
  name: string;
  type: 'income' | 'expense';
  icon: string | null;
  color: string;
}

export interface BudgetFormData {
  category_id: string;
  amount: number;
  month: number;
  year: number;
}

// Auth types
export interface AuthState {
  user: {
    id: string;
    email: string;
    created_at: string;
  } | null;
  profile: Profile | null;
  loading: boolean;
  isAuthenticated: boolean;
}

// Re-export RAB types
export * from './rab';
