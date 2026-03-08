'use client'

import { Mail, MapPin, Phone } from 'lucide-react'
import { HEADER_NAVIGATION } from '../data/HeaderNavigation'
import { usePathname } from 'next/navigation'
import { JSX } from 'react'
import HeaderMainLogo from '@/public/images/headerMainLogo.png'
import Image from 'next/image'
import './Header.scss'

const NAV_ICONS: Record<number, JSX.Element> = {
	1: (
		<svg className="nav-icon" viewBox="0 0 24 24">
			<path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9.5z" />
			<path d="M9 21V12h6v9" />
		</svg>
	),
	2: (
		<svg className="nav-icon" viewBox="0 0 24 24">
			<circle cx="12" cy="8" r="4" />
			<path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
		</svg>
	),
	3: (
		<svg className="nav-icon" viewBox="0 0 24 24">
			<rect x="3" y="3" width="7" height="7" rx="1" />
			<rect x="14" y="3" width="7" height="7" rx="1" />
			<rect x="3" y="14" width="7" height="7" rx="1" />
			<rect x="14" y="14" width="7" height="7" rx="1" />
		</svg>
	),
	4: (
		<svg className="nav-icon" viewBox="0 0 24 24">
			<circle cx="12" cy="12" r="3" />
			<path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
		</svg>
	),
	5: (
		<svg className="nav-icon" viewBox="0 0 24 24">
			<circle cx="9" cy="7" r="3" />
			<path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
			<circle cx="17" cy="7" r="3" />
			<path d="M21 20c0-3.3-2.7-6-6-6" />
		</svg>
	),
	6: (
		<svg className="nav-icon" viewBox="0 0 24 24">
			<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
			<line x1="3" y1="6" x2="21" y2="6" />
			<path d="M16 10a4 4 0 0 1-8 0" />
		</svg>
	),
	7: (
		<svg className="nav-icon" viewBox="0 0 24 24">
			<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
		</svg>
	),
}

const DROP_ICON = (
	<svg className="drop-icon" viewBox="0 0 24 24">
		<polyline points="9 18 15 12 9 6" />
	</svg>
)

const ChevronDown = () => (
	<svg className="nav-arrow" viewBox="0 0 24 24">
		<polyline points="6 9 12 15 18 9" />
	</svg>
)

export default function Header() {
	const pathname = usePathname()

	return (
		<header id="header">
			<div className="header">
				<div className="header--top">
					<div className="header--top__left">
						<p>
							<Phone size={14} /> +90 123 456 78 90
						</p>
						<p>
							<Mail size={14} /> info@torkgas.com
						</p>
					</div>
					<div className="header--top__right">
						<p>
							<MapPin size={14} /> Istanbul, Turkey
						</p>
					</div>
				</div>

				<div className="header--center">
					<Image src={HeaderMainLogo} alt="Tork Gas" width={140} height={56} />

					<div className="header--center__right">
						<div className="header--center__right--call">
							<div className="header--center__right--call__icons">
								<Phone size={18} />
							</div>
							<div className="header--center__right--call__info">
								<h4>Call Us</h4>
								<p>+90 123 456 78 90</p>
							</div>
						</div>

						<div className="header--center__right--email">
							<div className="header--center__right--email__icons">
								<Mail size={18} />
							</div>
							<div className="header--center__right--email__info">
								<h4>Email Us</h4>
								<p>info@torkgas.com</p>
							</div>
						</div>
					</div>
				</div>

				<div className="header--bottom">
					<nav className="header--bottom__menu">
						{HEADER_NAVIGATION.map((item) => {
							const isActive = pathname === item.link
							const hasDropdown = item.items && item.items.length > 0

							return (
								<div key={item.id} className="header--bottom__menu--item">
									<a
										href={item.link}
										className={`nav-link ${isActive ? 'active' : ''}`}
									>
										{NAV_ICONS[item.id]}
										{item.title}
										{hasDropdown && <ChevronDown />}
									</a>

									{hasDropdown && (
										<ul className="dropdown-menu">
											{item.items!.map((subItem, idx) => (
												<li key={idx} className="dropdown-item">
													<a href={subItem.link} className="dropdown-link">
														{DROP_ICON}
														{subItem.title}
													</a>
												</li>
											))}
										</ul>
									)}
								</div>
							)
						})}
					</nav>
				</div>
			</div>
		</header>
	)
}
