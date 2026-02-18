import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { useEffect, useState } from 'react';

// Layout
import Layout from '@/components/layout/Layout';

// Auth components
import LoginPage from '@/components/features/auth/LoginPage';
import AuthCallback from '@/components/features/auth/AuthCallback';
import ProtectedRoute from '@/components/features/auth/ProtectedRoute';

// PWA
import PWAInstallPrompt from '@/components/features/pwa/PWAInstallPrompt';
import { usePWAInstall } from '@/hooks/usePWAInstall';

// Pages
import DashboardPage from '@/pages/DashboardPage';
import TransactionsPage from '@/pages/TransactionsPage';
import CategoriesPage from '@/pages/CategoriesPage';
import ReportsPage from '@/pages/ReportsPage';
import SettingsPage from '@/pages/SettingsPage';
import { MemberManagementPage } from '@/pages/MemberManagementPage';
import { JoinAccountPage } from '@/pages/JoinAccountPage';
import RABPage from '@/pages/RABPage';
import RABDetailPage from '@/pages/RABDetailPage';
import RABItemTemplatesPage from '@/pages/RABItemTemplatesPage';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0, // Always consider data stale to ensure fresh data on mount
      gcTime: 1000 * 60 * 5, // Keep unused data in cache for 5 minutes (formerly cacheTime)
      retry: 1,
      refetchOnMount: true, // Always refetch when component mounts
      refetchOnWindowFocus: true, // Refetch when window regains focus
    },
  },
});

export default function App() {
  const { isInstallable, isInstalled, showPrompt, executeInstall, closePrompt } = usePWAInstall();
  const [autoShowPrompt, setAutoShowPrompt] = useState(false);

  useEffect(() => {
    // Show prompt after 3 seconds if installable and not already installed
    if (isInstallable && !isInstalled) {
      const hasDismissed = localStorage.getItem('pwa-install-dismissed');
      const dismissedAt = hasDismissed ? parseInt(hasDismissed) : 0;
      const now = Date.now();
      
      // Don't show if dismissed in the last 7 days
      if (now - dismissedAt < 7 * 24 * 60 * 60 * 1000) {
        return;
      }

      const timer = setTimeout(() => {
        setAutoShowPrompt(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isInstallable, isInstalled]);

  const handlePromptClose = () => {
    setAutoShowPrompt(false);
    closePrompt();
    // Remember dismissal for 7 days
    localStorage.setItem('pwa-install-dismissed', Date.now().toString());
  };

  const handleInstall = async () => {
    const success = await executeInstall();
    if (success) {
      handlePromptClose();
    }
  };

  // Show modal if either auto-triggered or hook-triggered
  const showModal = autoShowPrompt || showPrompt;

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/auth/callback" element={<AuthCallback />} />

          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/transactions" element={<TransactionsPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/rab" element={<RABPage />} />
              <Route path="/rab/templates" element={<RABItemTemplatesPage />} />
              <Route path="/rab/:id" element={<RABDetailPage />} />
              <Route path="/reports" element={<ReportsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/settings/members" element={<MemberManagementPage />} />
              <Route path="/join" element={<JoinAccountPage />} />
            </Route>
          </Route>

          {/* Redirect root to dashboard or login */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          {/* Catch all - redirect to dashboard */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
      <Toaster richColors position="top-right" />
      
      {/* PWA Install Prompt */}
      <PWAInstallPrompt
        isOpen={showModal}
        onClose={handlePromptClose}
        onInstall={handleInstall}
      />
    </QueryClientProvider>
  );
}
