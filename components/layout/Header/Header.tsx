'use client'

import { Mail, MapPin, Phone } from 'lucide-react'
import { HEADER_NAVIGATION } from '../data/HeaderNavigation'
import { usePathname } from 'next/navigation'
import HeaderMainLogo from '@/public/images/headerMainLogo.png'
import Image from 'next/image'
import './Header.scss'

export default function Header() {
	const pathname = usePathname()
	return (
		<header id="header">
			<div className="header">
				<div className="header--top">
					<div className="header--top__left">
						<p>
							<Phone /> +90 123 456 78 90
						</p>
						<p>
							<Mail /> info@tork_gas.com
						</p>
					</div>
					<div className="header--top__right">
						<p>
							<MapPin /> Istanbul, Turkey
						</p>
					</div>
				</div>
				<div className="header--center">
					<Image src={HeaderMainLogo} alt="" width={150} height={100} />
					<div className="header--center__right">
						<div className="header--center__right--call">
							<div className="header--center__right--call__icons">
								<Phone />
							</div>
							<div className="header--center__right--call__info">
								<h4>Call Us</h4>
								<p>+90 123 456 78 90</p>
							</div>
						</div>

						<div className="header--center__right--email">
							<div className="header--center__right--email__icons">
								<Mail />
							</div>
							<div className="header--center__right--email__info">
								<h4>Email Us</h4>
								<p>info@tork_gas.com</p>
							</div>
						</div>
					</div>
				</div>

				<div className="header--bottom">
					<nav className="header--bottom__menu">
						{HEADER_NAVIGATION.map((item) => {
							const isActive = pathname === item.link
							return (
								<div key={item.id} className="header--bottom__menu--item">
									<a
										href={item.link}
										className={`nav-link ${isActive ? 'active' : ''}`}
									>
										{item.title}
									</a>
									{item.items && item.items.length > 0 && (
										<ul className="dropdown-menu">
											{item.items.map((subItem, index) => (
												<li key={index} className="dropdown-item">
													<a href={subItem.link} className="dropdown-link">
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
