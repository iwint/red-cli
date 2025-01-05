'use client';

import { PropsWithChildren } from 'react';
import { QueryProvider } from './query-provider';
import { Toaster } from 'react-hot-toast';

export const Provider = ({ children }: PropsWithChildren) => {
    return (
        // <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <QueryProvider>
            <Toaster />
            {children}
        </QueryProvider>
        // </GoogleOAuthProvider>
    );
};
