'use client';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { useUserStore } from './useAuthStore';

export const useAppStore = create<useAppStoreProps>()(
    devtools(
        persist(
            (set, get, api) => {
                return {
                    ...useUserStore(set, get, api), //* Add stores which are needed
                };
            },
            {
                name: 'app-store', //* Name of the store
                storage: createJSONStorage(() => localStorage),
            }
        )
    )
);
