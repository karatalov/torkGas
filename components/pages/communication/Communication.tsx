'use client'

import { useEffect, useRef, useState } from 'react'
import './Communication.scss'

const INFO_CARDS = [
	{
		title: 'Phone',
		value: '+90 123 456 78 90',
		href: 'tel:+902134567890',
		icon: (
			<svg viewBox="0 0 24 24">
				<path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.09 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L9.09 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
			</svg>
		),
	},
	{
		title: 'Email',
		value: 'info@torkgas.com',
		href: 'mailto:info@torkgas.com',
		icon: (
			<svg viewBox="0 0 24 24">
				<rect x="2" y="4" width="20" height="16" rx="2" />
				<path d="M2 7l10 7 10-7" />
			</svg>
		),
	},
	{
		title: 'Address',
		value: 'Istanbul, Turkey',
		href: 'https://maps.google.com/?q=Istanbul,Turkey',
		icon: (
			<svg viewBox="0 0 24 24">
				<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
				<circle cx="12" cy="9" r="2.5" />
			</svg>
		),
	},
]

export default function Communication() {
	const cardRefs = useRef<(HTMLDivElement | null)[]>([])
	const formRef = useRef<HTMLDivElement | null>(null)
	const [visibleCards, setVisibleCards] = useState<number[]>([])
	const [formVisible, setFormVisible] = useState(false)
	const [sending, setSending] = useState(false)
	const [sent, setSent] = useState(false)
	const [fields, setFields] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	})

	useEffect(() => {
		const obs = cardRefs.current.map((ref, i) => {
			if (!ref) return null
			const o = new IntersectionObserver(
				([e]) => {
					if (e.isIntersecting) {
						setVisibleCards((p) => Array.from(new Set([...p, i])))
						o.disconnect()
					}
				},
				{ threshold: 0.15 },
			)
			o.observe(ref)
			return o
		})
		return () => obs.forEach((o) => o?.disconnect())
	}, [])

	useEffect(() => {
		if (!formRef.current) return
		const o = new IntersectionObserver(
			([e]) => {
				if (e.isIntersecting) {
					setFormVisible(true)
					o.disconnect()
				}
			},
			{ threshold: 0.1 },
		)
		o.observe(formRef.current)
		return () => o.disconnect()
	}, [])

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => setFields((p) => ({ ...p, [e.target.name]: e.target.value }))

	const handleSubmit = async () => {
		setSending(true)
		await new Promise((r) => setTimeout(r, 1400))
		setSending(false)
		setSent(true)
		setFields({ name: '', email: '', subject: '', message: '' })
		setTimeout(() => setSent(false), 5000)
	}

	return (
		<section id="communication">
			<div className="comm-hero">
				<div className="comm-hero__eyebrow">
					<svg viewBox="0 0 24 24">
						<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
					</svg>
					Get in touch
				</div>
				<h1>Communication</h1>
				<p>Get in touch with our team</p>
				<div className="comm-hero__accent" />
			</div>

			<div className="comm-body">
				<div className="comm-cards">
					{INFO_CARDS.map((card, i) => (
						<div
							key={card.title}
							ref={(el: HTMLDivElement | null) => {
								cardRefs.current[i] = el
							}}
							className={`comm-card ${visibleCards.includes(i) ? 'visible' : ''}`}
						>
							<div className="comm-card__icon">{card.icon}</div>
							<p className="comm-card__title">{card.title}</p>
							<p className="comm-card__value">
								<a
									href={card.href}
									target={card.title === 'Address' ? '_blank' : undefined}
									rel="noreferrer"
								>
									{card.value}
								</a>
							</p>
						</div>
					))}
				</div>

				<div
					ref={(el: HTMLDivElement | null) => {
						formRef.current = el
					}}
					className={`comm-form-wrap ${formVisible ? 'visible' : ''}`}
				>
					<h2 className="comm-form-title">Send us a message</h2>

					<div className="comm-form">
						<div className="comm-row">
							<div className="comm-field">
								<input
									type="text"
									name="name"
									id="name"
									placeholder=" "
									value={fields.name}
									onChange={handleChange}
								/>
								<label htmlFor="name">Your Name</label>
							</div>
							<div className="comm-field">
								<input
									type="email"
									name="email"
									id="email"
									placeholder=" "
									value={fields.email}
									onChange={handleChange}
								/>
								<label htmlFor="email">Your Email</label>
							</div>
						</div>

						<div className="comm-field">
							<input
								type="text"
								name="subject"
								id="subject"
								placeholder=" "
								value={fields.subject}
								onChange={handleChange}
							/>
							<label htmlFor="subject">Subject</label>
						</div>

						<div className="comm-field textarea">
							<textarea
								name="message"
								id="message"
								placeholder=" "
								value={fields.message}
								onChange={handleChange}
							/>
							<label htmlFor="message">Your Message</label>
						</div>

						<button
							className={`comm-submit ${sending ? 'sending' : ''}`}
							onClick={handleSubmit}
							disabled={sending}
						>
							{sending ? (
								<>
									<svg
										viewBox="0 0 24 24"
										style={{ animation: 'spin 1s linear infinite' }}
									>
										<circle cx="12" cy="12" r="10" strokeDasharray="40 20" />
									</svg>
									Sending…
								</>
							) : (
								<>
									Send Message
									<svg viewBox="0 0 24 24">
										<line x1="5" y1="12" x2="19" y2="12" />
										<polyline points="12 5 19 12 12 19" />
									</svg>
								</>
							)}
						</button>

						{sent && (
							<div className="comm-toast">
								<svg viewBox="0 0 24 24">
									<polyline points="20 6 9 17 4 12" />
								</svg>
								Message sent successfully! Well get back to you soon.
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}
