import Image from 'next/image'
import { OUR_PAGES, OUR_PRODUCTS } from '../pages/ourProducts/data/ProductData'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import './ProductDetail.scss'
import Product from './Product'

type ProductDetailProps = {
	params: { id: string }
}

const ProductDetail = ({ params }: ProductDetailProps) => {
	const { id } = params

	const product = OUR_PRODUCTS.find((el) => el.id === Number(id))

	if (!product) {
		return <div>Product not found</div>
	}

	const similarProducts = OUR_PRODUCTS.filter(
		(item) => item.type === product.type && item.id !== product.id,
	)

	return (
		<section id="details">
			<div className="container">
				<div className="details">
					<div className="details--route">
						<h1>{product.title}</h1>
						<div className="details--route__location">
							<h6>You are here:</h6>
							<Link href="/">HomePage</Link>
							<span>
								<ChevronRight />
							</span>
							<Link href="/ourProducts">Products</Link>
							<span>
								<ChevronRight />
							</span>
							<Link href="/ourProducts/modules">
								{product.type[0].toUpperCase() + product.type.slice(1)}
							</Link>
							<span>
								<ChevronRight />
							</span>
							<h6>{product.title}</h6>
						</div>
					</div>

					<div className="details--data">
						<div className="details--data__mainData">
							<div className="mainData">
								<Image src={product.img} alt={product.title} />
								<div className="mainText">
									<h1>{product.title}</h1>
									<h5>{product.typeTitle}</h5>
								</div>
							</div>

							<div className="mainInformation">
								<div className="infoText">
									<h6>Product Information</h6>
									<span></span>
								</div>

								{product.information.map((el, idx) => (
									<div className="infoDesc" key={idx}>
										<h5>{el.infoTitle}</h5>

										{el.desc.map((title, idx2) => (
											<p key={idx2}>{title}</p>
										))}

										<div className="links">
											{el.docs.map((srfct, idx3) => (
												<Link
													href={srfct.link}
													key={idx3}
													target="_blank"
													rel="noopener noreferrer"
												>
													{srfct.title}
												</Link>
											))}
										</div>
									</div>
								))}
							</div>

							{similarProducts.length > 0 && (
								<div className="otherProducts">
									<div className="infoText">
										<h6>Products in Similar Categories</h6>
										<span></span>
									</div>

									{similarProducts.map((el, idx) => (
										<Product el={el} key={idx} />
									))}
								</div>
							)}
						</div>

						<div className="details--data__otherPages">
							<h2>Product Categories</h2>
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

export default ProductDetail
