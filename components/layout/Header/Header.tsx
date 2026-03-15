'use client'
import { ChevronDown, DROP_ICON, NAV_ICONS } from '../data/HeaderData'
import { Mail, MapPin, Phone } from 'lucide-react'
import { HEADER_NAVIGATION } from '../data/HeaderNavigation'
import { usePathname } from 'next/navigation'

import HeaderMainLogo from '@/public/images/headerImages/headerMainLogo.svg'
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
							<Phone size={14} /> +90 544 407 77 87
						</p>
						<p>
							<Mail size={14} /> info@torkgas.com
						</p>
					</div>
					<div className="header--top__right">
						<p>Elektronik ve Otomasyon</p>
						<p>
							<MapPin size={14} /> Istanbul, Turkey
						</p>
					</div>
				</div>

				<div className="header--center">
					<Image src={HeaderMainLogo} alt="Tork Gas" />

					<div className="header--center__right">
						<div className="header--center__right--call">
							<div className="header--center__right--call__icons">
								<Phone size={18} />
							</div>
							<div className="header--center__right--call__info">
								<h4>Call Us</h4>
								<p>+90 544 407 77 87</p>
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
