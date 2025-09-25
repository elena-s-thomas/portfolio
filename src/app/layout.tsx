import { Inter } from 'next/font/google'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'A modern portfolio website built with Next.js and Mantine',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider
          theme={{
            colors: {
              // Neutral color palette
              gray: [
                '#f8f9fa',
                '#e9ecef',
                '#dee2e6',
                '#ced4da',
                '#adb5bd',
                '#6c757d',
                '#495057',
                '#343a40',
                '#212529',
                '#000000'
              ],
              slate: [
                '#f8fafc',
                '#f1f5f9',
                '#e2e8f0',
                '#cbd5e1',
                '#94a3b8',
                '#64748b',
                '#475569',
                '#334155',
                '#1e293b',
                '#0f172a'
              ]
            },
            primaryColor: 'gray',
            fontFamily: 'Inter, sans-serif',
            headings: {
              fontFamily: 'Inter, sans-serif',
            },
          }}
        >
          <Notifications />
          {children}
        </MantineProvider>
      </body>
    </html>
  )
}