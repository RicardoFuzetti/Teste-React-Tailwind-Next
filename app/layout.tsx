import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
//
import { LoginProvider } from './contexts/authContext'


const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-main'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html suppressHydrationWarning lang="en">
      <LoginProvider>
        <body className={roboto.className}>
          {children}
        </body>
      </LoginProvider>
    </html>
  )
}
