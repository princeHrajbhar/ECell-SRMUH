// app/layout.tsx (or app/layout.js if not using TypeScript)
import Sidebar from '@/Components/Sidebar';
import { ReactNode } from 'react';
import '@/app/globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>My Dashboard</title>
        <meta name="description" content="A versatile dashboard for various industries" />
      </head>
      <body className="flex bg-gray-100 text-gray-800">
        <Sidebar />
        <div className="flex-1 p-6">
          {children}
        </div>
      </body>
    </html>
  );
}
