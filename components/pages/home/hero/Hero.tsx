import { MoveRight } from 'lucide-react'
import './Hero.scss'

const Hero = () => {
	return (
		<section id="hero">
			<div className="container">
				<div className="hero">
					<div className="hero--title">Leading Gas Infrastructure Company</div>
					<h1>
						Powering the Future <br /> with <span>Natural Gas</span>
					</h1>
					<p>
						Tork Gas delivers reliable natural gas infrastructure, automation
						systems, and industrial solutions across Turkey.
					</p>
					<div className="hero--btns">
						<button className="hero--btns__more">
							Learn More <MoveRight />
						</button>
						<button className="hero--btns__contact">Contact Us</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
