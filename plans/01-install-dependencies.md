# Plan: Install Dependencies & Setup Project Structure

## Overview
This plan outlines the steps to install all missing dependencies from [`knowledge/perencanaan.md`](../knowledge/perencanaan.md) and set up the project structure for the FinTrack financial tracking application.

---

## Phase 1: Install Missing Dependencies

### 1.1 Core Dependencies

| Package | Purpose | Command |
|---------|---------|---------|
| `react-router-dom` | Client-side routing | `npm install react-router-dom` |
| `zustand` | State management | `npm install zustand` |
| `@tanstack/react-query` | Server state & caching | `npm install @tanstack/react-query` |
| `date-fns` | Date manipulation | `npm install date-fns` |
| `zod` | Schema validation | `npm install zod` |
| `react-hook-form` | Form management | `npm install react-hook-form` |
| `@hookform/resolvers` | Zod + React Hook Form integration | `npm install @hookform/resolvers` |
| `recharts` | Charts (post-MVP) | `npm install recharts` |
| `lucide-react` | Icons for shadcn/ui | `npm install lucide-react` |

### 1.2 shadcn/ui Setup

shadcn/ui requires special setup. Steps:

1. Initialize shadcn/ui:
   ```bash
   npx shadcn@latest init
   ```

2. During initialization, select:
   - Style: Default
   - Base color: Slate (or preference)
   - CSS variables: Yes

3. Install commonly used components:
   ```bash
   npx shadcn@latest add button card input label dialog dropdown-menu avatar tabs form table
   ```

---

## Phase 2: Project Folder Structure

Create the following structure based on [`knowledge/perencanaan.md`](../knowledge/perencanaan.md):

```
src/
├── assets/
├── components/
│   ├── ui/                    # shadcn/ui components
│   ├── layout/                # Navbar, Sidebar, Layout wrapper
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   └── Layout.tsx
│   └── features/
│       ├── auth/
│       │   ├── LoginPage.tsx
│       │   ├── AuthCallback.tsx
│       │   └── ProtectedRoute.tsx
│       ├── dashboard/
│       │   └── DashboardPage.tsx
│       ├── transactions/
│       │   └── TransactionsPage.tsx
│       ├── categories/
│       │   └── CategoriesPage.tsx
│       └── reports/
│           └── ReportsPage.tsx
├── hooks/
│   └── useAuth.ts
├── lib/
│   ├── supabase.ts            # Move from src/js/supabaseClient.js
│   └── utils.ts               # Utility functions
├── pages/
│   ├── DashboardPage.tsx
│   ├── TransactionsPage.tsx
│   ├── ReportsPage.tsx
│   └── SettingsPage.tsx
├── stores/
│   └── authStore.ts
├── types/
│   └── index.ts               # TypeScript type definitions
├── App.tsx
├── main.tsx
└── index.css
```

---

## Phase 3: Configuration Files

### 3.1 Update tsconfig.json
Ensure proper path aliases for clean imports:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### 3.2 Update vite.config.ts
Add path alias resolution:
```ts
import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

---

## Phase 4: Type Definitions

Create TypeScript types for the database models:

```typescript
// src/types/index.ts

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
}

export interface Budget {
  id: string;
  user_id: string;
  category_id: string;
  amount: number;
  month: number;
  year: number;
  created_at: string;
}
```

---

## Execution Order

1. **Install core dependencies** - Single npm install command
2. **Initialize shadcn/ui** - Interactive CLI
3. **Add shadcn/ui components** - Install needed components
4. **Update configuration files** - tsconfig and vite.config
5. **Create folder structure** - Create directories and placeholder files
6. **Create type definitions** - TypeScript interfaces
7. **Move supabaseClient.js** - Convert to TypeScript and move to lib/

---

## Commands Summary

```bash
# Phase 1: Install all core dependencies at once
npm install react-router-dom zustand @tanstack/react-query date-fns zod react-hook-form @hookform/resolvers recharts lucide-react

# Phase 2: Initialize shadcn/ui (interactive)
npx shadcn@latest init

# Phase 3: Add shadcn/ui components
npx shadcn@latest add button card input label dialog dropdown-menu avatar tabs form table
```

---

## Notes

- The current [`src/js/supabaseClient.js`](../src/js/supabaseClient.js) uses `VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY` but the plan uses `VITE_SUPABASE_ANON_KEY`. We should standardize the environment variable name.
- React 19 is installed (current), but the plan mentions React 18. React 19 should work fine with all dependencies.
- Tailwind CSS v4 is installed (current), which has a different configuration approach than v3. shadcn/ui may need adjustments.
