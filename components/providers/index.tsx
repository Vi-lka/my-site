import React from 'react'
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from './theme-provider'
import DockProvider from './dock-provider'

export default function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NextIntlClientProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <DockProvider>
          {children}
        </DockProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}
