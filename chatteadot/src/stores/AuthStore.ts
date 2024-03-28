import { UserType } from "@/types/User.type";
import create from "zustand";
import { createClient, Provider } from "@supabase/supabase-js";

const supabaseUrl = "https://pajebfhwgpkbxuqzixjf.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhamViZmh3Z3BrYnh1cXppeGpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk4NTg2NjAsImV4cCI6MjAyNTQzNDY2MH0.wikKAdxSpNpr2DydzVdHSkrR8eFWdJJ5quPIkwYCE7o";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface AuthState {
    user: UserType | null;
    signup: ({ email, password } : UserType) => Promise<void>;
    signin: ({ email, password } : UserType) => Promise<void>;
    signout: () => Promise<void>;
    signInWithOAuth: (provider: Provider) => Promise<void>;
}

const useAuthStore = create<AuthState>((set) => ({
    user: null,
    signup: async ({ email = "", password = "", userId, name } : UserType) => {
        const { error } = await supabase.auth.signUp({ 
            email, 
            password,
        });
        if (error) throw error;

        const user : UserType = { userId, name, email, password };

        set({ user });
    },
    signin: async ({ email = "", password = "" } : UserType) => {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;

        const user : UserType = { email, password };

        set({ user });
    },
    signout: async () => {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
    },
    signInWithOAuth: async (provider: Provider) => {
        const { error } = await supabase.auth.signInWithOAuth({ provider });

        if (error) throw error;
    },
}));

export default useAuthStore;
