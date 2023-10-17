import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

export const metadata: Metadata = {
	title: 'Mist ToDo'
}

const interFont = Inter({
	weight: ['400', '700'],
	style: 'normal',
	subsets: ['latin'],
	variable: '--font-inter'
})

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<head>
				<link rel='icon' href='/favicon.ico' sizes='any' type='image/x-icon' />
			</head>
			<body className={interFont.variable}>{children}</body>
		</html>
	)
}
