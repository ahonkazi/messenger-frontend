import { Inter } from 'next/font/google'
import './globals.css'
import './app.css'
import ReduxProvider from '@/redux/app/ReduxProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Messenger',
  description: 'Build by Ahon khan',
}

export default function RootLayout({ children }) {
  return (
    <html data-theme='dark' lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
