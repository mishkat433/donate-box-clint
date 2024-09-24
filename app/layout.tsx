import './globals.css'
import { Suspense } from "react";
import Providers from '../lib/Providers';
import DotLoading from './../components/ReusableComponent/DotLoading';
import "../components/Authentication/Authentication.css";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Donate Box',
  description: 'Your donation can save a life',
}

export default function RootLayout({ children, }) {

  return (
    <html lang="en">
      <body className='font-mulish'>
        <Providers>
          <Suspense fallback={<DotLoading size="lg" text="primary-text" height="h-[100vh]" />}>
            {children}
          </Suspense>
        </Providers>
      </body>
    </html>
  )
}
