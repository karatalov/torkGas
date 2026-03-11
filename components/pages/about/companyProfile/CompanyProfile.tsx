import { ChevronRight } from 'lucide-react'
import './CompanyProfile.scss'
import Image from 'next/image'
import mainImg from "../../../../public/images/aboutImages/companyProfile.jpg";
import { OUR_PAGES } from '../data/AboutData'
import Link from 'next/link'

const CompanyProfile = () => {
	return (
		<section id="profile"> 
			<div className="container">
				<div className="profile">
					<div className="profile--route">
						<h1>Company Profile</h1>
						<div className="profile--route__location">
							<h6>You are here:</h6>
							 <Link href={"/"}>HomePage</Link>
							<span>
								<ChevronRight />
							</span>
							<h6>Company Profile</h6>
						</div>
					</div>
					<div className="profile--data">
						<div className="profile--data__mainData">
							<Image src={mainImg} alt="" />
							<h2>WHO ARE WE?</h2>
							<div className="profile--data__mainData--description">
								<h6>
									<span>TORK GAS</span> was founded in 2003 .
								</h6>
								<p>
									IPack has established itself in the sector with its automation
									and promotion systems for fuel and gas stations, tank level
									measurement systems, SCADA systems, personnel time and
									attendance tracking systems, and automation projects and
									software developed for various sectors, all supported by its
									expert team. IPack is a company that has applications in many
									areas such as PLC design, industrial GSM/GPRS solutions, and
									electronic panel manufacturing; it produces customized
									projects and software; it has initiated export activities; and
									it understands the importance of R&D studies in technology for
									the future of our country, and has KOSGEB-supported projects
									in this field.
								</p>
							</div>
						</div>
						<div className="profile--data__otherPages">
							<h2>About Us</h2>
							{OUR_PAGES.map((el, idx) => (
								<Link href={el.link} key={idx}>
									<span>
										<ChevronRight />
									</span>{' '}
									{el.title}
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CompanyProfile
