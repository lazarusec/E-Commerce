import { Inter } from 'next/font/google'
import '../globals.css'
import RootLayouts from '../../src/features/core/layouts/RootLayouts'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootLayouts children={children} />
      </body>
    </html>
  )
}
