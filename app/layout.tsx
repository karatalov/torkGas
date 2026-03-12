import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import LayoutSite from '@/components/layout/LayoutSite'

import './globals.scss'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
})

export const metadata: Metadata = {
	title: 'Газовые баллоны | Аренда и заправка',
	description:
		'Аренда, заправка и продажа газовых баллонов. Доставка по городу. Безопасность и качество.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="ru">
			<body className={`${montserrat.variable} antialiased`}>
				<LayoutSite>{children}</LayoutSite>
			</body>
		</html>
	)
}
