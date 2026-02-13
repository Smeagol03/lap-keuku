import { useEffect } from 'react';
import { useAuthStore } from '@/stores/authStore';

export function useAuth() {
  const { 
    user, 
    profile, 
    loading, 
    isAuthenticated,
    signInWithGoogle, 
    signOut,
    initialize,
  } = useAuthStore();

  useEffect(() => {
    const cleanupPromise = initialize();
    return () => {
      cleanupPromise.then((cleanup) => cleanup());
    };
  }, [initialize]);

  return {
    user,
    profile,
    loading,
    isAuthenticated,
    signInWithGoogle,
    signOut,
  };
}
