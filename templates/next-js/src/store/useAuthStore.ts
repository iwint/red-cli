'use client';

import { StateCreator } from 'zustand';

export const useUserStore: StateCreator<useUserStoreProps> = (set, get) => ({
    user: null,
    setUserData: data => {
        set({ user: data.user });
    },
});
