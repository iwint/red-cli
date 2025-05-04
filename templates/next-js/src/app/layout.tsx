import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/providers';
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: 'Red ClI Next Js',
    description: 'Red CLI with Next.js',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
                </Providers>
            </body>
        </html>
    );
}
