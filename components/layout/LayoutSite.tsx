import Footer from './Footer/Footer'
import Header from './Header/Header'
import './LayoutSite.scss'

export default function LayoutSite({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='APP'>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	)
}
