import { CONTACT, QUICK_LINKS, SOCIALS } from '../data/FooterData'
import styles from './Footer.module.scss'
import Link from 'next/link'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.top}>
				<div className={styles.brand}>
					<div className={styles.logo}>
						TORK <span>GAS</span>
					</div>
					<p className={styles.tagline}>
						Leading provider of natural gas infrastructure, automation systems,
						and industrial solutions.
					</p>
				</div>

				<div className={styles.col}>
					<h3>Quick Links</h3>
					<ul className={styles.links}>
						{QUICK_LINKS.map((link) => (
							<li key={link.label}>
								<Link href={link.href}>{link.label}</Link>
							</li>
						))}
					</ul>
				</div>

				<div className={styles.col}>
					<h3>Contact</h3>
					<ul className={styles.contactList}>
						{CONTACT.map((item) => (
							<li key={item.label} className={styles.contactItem}>
								{item.icon}
								{item.label}
							</li>
						))}
					</ul>

					<div className={styles.socials}>
						{SOCIALS.map((s) => (
							<a
								key={s.label}
								href={s.href}
								aria-label={s.label}
								className={styles.socialBtn}
							>
								{s.icon}
							</a>
						))}
					</div>
				</div>
			</div>

			<hr className={styles.divider} />
			<div className={styles.bottom}>© 2026 Tork Gas. All rights reserved.</div>
		</footer>
	)
}
