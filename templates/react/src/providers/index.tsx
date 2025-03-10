'use client';

import { PropsWithChildren } from 'react';
import { QueryProvider } from './query.provider';
import { Toaster } from 'react-hot-toast';

export const Providers = ({ children }: PropsWithChildren) => {
    return (
        <QueryProvider>
            <Toaster />
            {children}
        </QueryProvider>
    );
};
