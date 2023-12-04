import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'

import { ModalProvider } from '@/providers/modal-provider'
import ToastProvider from '@/components/modals/toast-provider'

import './globals.css'

export const metadata: Metadata = {
  title: 'Admin DashBoard',
  description: 'DashBoard for Admin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ToastProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
