import Header from '@/components/Common/Header/Header'
import './globals.css'
import Footer from '@/components/Common/Footer/Footer'
// import { Mulish} from 'next/font/google'

// const mulish = Mulish({ subsets: ['latin',] })

export const metadata = {
  title: 'Donate Box',
  description: 'Your donation can save the a life',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className='font-mulish'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
