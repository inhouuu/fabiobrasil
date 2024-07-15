import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.scss'
import Footer from '@/components/footer/page';

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fabio Enrique Brasil',
  description: 'Portfólio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${montserrat.className} h-full relative`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
