import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "@fortawesome/fontawesome-svg-core/styles.css";
import Sidebar from '@/components/siderbar/Sidebar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Finacial Manager App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar></Sidebar>
        {children}
      </body>
    </html>
  )
}
