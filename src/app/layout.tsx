import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbars from './commpoenents/navbar/Navbars'
import Footer from './commpoenents/footer/Footer'
import { ThemeContextProvider } from '@/context/ThemeContext'
import ThemeProvider from "../provider/ThemeProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog App',
  description: 'The best bog app!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className='container'>
              <div className='wrapper'>
                <Navbars />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
