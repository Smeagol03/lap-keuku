import { create } from 'zustand';
import type { Profile, AuthState } from '@/types';
import { supabase } from '@/lib/supabase';

interface AuthActions {
  setUser: (user: AuthState['user']) => void;
  setProfile: (profile: Profile | null) => void;
  setLoading: (loading: boolean) => void;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  fetchProfile: (userId: string) => Promise<void>;
  initialize: () => Promise<() => void>;
}

export const useAuthStore = create<AuthState & AuthActions>((set, get) => ({
  user: null,
  profile: null,
  loading: true,
  isAuthenticated: false,

  setUser: (user) => set({ user, isAuthenticated: !!user }),
  setProfile: (profile) => set({ profile }),
  setLoading: (loading) => set({ loading }),

  fetchProfile: async (userId: string) => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (!error && data) {
      set({ profile: data });
    }
    set({ loading: false });
  },

  signInWithGoogle: async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    if (error) throw error;
  },

  signOut: async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    set({ user: null, profile: null, isAuthenticated: false });
  },

  initialize: async () => {
    // Get initial session
    const { data: { session } } = await supabase.auth.getSession();
    
    if (session?.user) {
      set({ 
        user: {
          id: session.user.id,
          email: session.user.email ?? '',
          created_at: session.user.created_at,
        },
        isAuthenticated: true,
      });
      await get().fetchProfile(session.user.id);
    } else {
      set({ loading: false });
    }

    // Subscribe to auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (session?.user) {
          set({
            user: {
              id: session.user.id,
              email: session.user.email ?? '',
              created_at: session.user.created_at,
            },
            isAuthenticated: true,
          });
          await get().fetchProfile(session.user.id);
        } else {
          set({ 
            user: null, 
            profile: null, 
            isAuthenticated: false,
            loading: false,
          });
        }
      }
    );

    // Return cleanup function
    return () => subscription.unsubscribe();
  },
}));
