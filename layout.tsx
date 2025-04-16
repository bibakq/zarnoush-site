import type { Metadata } from 'next'
import { Vazirmatn } from 'next/font/google'
import './globals.css'

const vazir = Vazirmatn({ subsets: ['arabic'] })

export const metadata: Metadata = {
  title: 'زعفران اصیل ایرانی',
  description: 'فروشگاه آنلاین زعفران با کیفیت و اصیل ایرانی',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazir.className} bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  )
} 