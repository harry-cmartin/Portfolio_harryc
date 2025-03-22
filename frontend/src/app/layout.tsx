import type { Metadata } from 'next'
import { Geist, Geist_Mono, Montserrat } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
    title: 'Portfolio Harry',
    description: 'Portfolio de projetos Harry',
}

const fonte = Montserrat({
    subsets: ['latin'],
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${fonte.className} antialiased`}>{children}</body>
        </html>
    )
}
