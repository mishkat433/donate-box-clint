import { Toaster } from 'react-hot-toast'
import Footer from '../components/Common/Footer/Footer'
import Header from '../components/Common/Header/Header'
import './globals.css'
import { Suspense } from "react";
import DotLoading from '../components/ReusableComponent/DotLoading';
import AuthStorage from "../contex.jsx/AuthStorage"
// import { Mulish} from 'next/font/google'

// const mulish = Mulish({ subsets: ['latin',] })

export const metadata = {
  title: 'Donate Box',
  description: 'Your donation can save the a life',
}

export default function RootLayout({ children, }) {

  return (
    <html lang="en">
      <body className='font-mulish'>
        <AuthStorage>
          <Suspense fallback={<DotLoading size="lg" text="black" />}>
            <Toaster position="top-center" reverseOrder={false} />
            <Header />
            {children}
            <Footer />
          </Suspense>
        </AuthStorage>
      </body>

    </html>
  )
}
