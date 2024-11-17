import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Provider } from '@/providers';
import { Suspense } from 'react';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export const metadata: Metadata = {
    title: 'Greyfeathers Template',
    description: 'Greyfeathers Template',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Provider>
                    <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
                </Provider>
            </body>
        </html>
    );
}
