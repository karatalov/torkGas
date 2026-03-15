'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './WhatWeDo.module.scss'
import { CARDS } from '../data/whatWeDo'

export default function WhatWeDo() {
	const cardRefs = useRef<(HTMLDivElement | null)[]>([])
	const [visible, setVisible] = useState<number[]>([])

	useEffect(() => {
		const observers = cardRefs.current.map((ref, i) => {
			if (!ref) return null

			const obs = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						setVisible((prev) => Array.from(new Set([...prev, i])))
						obs.disconnect()
					}
				}, 
				{ threshold: 0.15 },
			)

			obs.observe(ref)
			return obs
		})

		return () => observers.forEach((obs) => obs?.disconnect())
	}, [])

	return (
		<section className={styles.section}>
			<div className={styles.header}>
				<h2>What We Do</h2>
				<div className={styles.accent} />
			</div>

			<div className={styles.grid}>
				{CARDS.map((card, i) => (
					<div
						key={card.title}
						ref={(el: HTMLDivElement | null) => {
							cardRefs.current[i] = el
						}}
						className={`${styles.card} ${visible.includes(i) ? styles.visible : ''}`}
					>
						<div className={styles.iconWrap}>{card.icon}</div>
						<p className={styles.title}>{card.title}</p>
						<p className={styles.desc}>{card.desc}</p>
					</div>
				))}
			</div>
		</section>
	)
}
