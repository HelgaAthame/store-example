import { Suspense } from 'react';
import { Loading } from '~/components/loading';
import { Nav } from '~/components/nav';
import '~/styles/globals.css';
import { Providers } from "~/red/provider";

export const metadata = {
  title: 'Store',
  description: 'Created by Olga Khmaruk',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Nav/>

            {children}

        </Providers>
      </body>
    </html>
  )
}