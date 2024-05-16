import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { Suspense } from 'react';

import './globals.css';
import Loading from './loading';

import { ToastProvider } from '@/components/providers/toaster-provider';
import { ConfettiProvider } from '@/components/providers/confetti-provider';
import { ModalProvider } from '@/components/providers/modal-provider';
import { SocketProvider } from '@/components/providers/socket-provider';
import { QueryProvider } from '@/components/providers/query-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lms Education',
  description: 'Generated by create next app',
};

export const maxDuration = 30;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ConfettiProvider />
          <ModalProvider />
          <ToastProvider />
          <SocketProvider>
            <QueryProvider>
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </QueryProvider>
          </SocketProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
