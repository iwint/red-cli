'use client';

import { PropsWithChildren } from 'react';
import { QueryProvider } from './query-provider';
import { Toaster } from 'react-hot-toast';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GOOGLE_CLIENT_ID } from '@/constants/definitions';

export const Provider = ({ children }: PropsWithChildren) => {
    return (
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <QueryProvider>
                <Toaster />
                {children}
            </QueryProvider>
        </GoogleOAuthProvider>
    );
};
