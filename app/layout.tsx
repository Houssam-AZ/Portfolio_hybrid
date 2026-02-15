import './globals.css'
import { Inter } from 'next/font/google' // 1. Import the font
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

// 2. Configure the font
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

export const metadata = {
    title: 'Houssam - Portfolio',
    description: 'Full Stack Developer Portfolio',
    // Added icons for the browser tab
    icons: {
        icon: '/favicon.ico',
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="scroll-smooth"> {/* Added scroll-smooth for anchor links */}
        {/* 3. Apply the font class to the body */}
        <body className={`${inter.className} min-h-screen flex flex-col bg-gray-900 text-white`}>
        <Header />
        <main className="flex-grow">
            {children}
        </main>
        <Footer />
        </body>
        </html>
    )
}