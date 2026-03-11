import Image from "next/image";
import React from "react";
import "./Product.scss";
import Link from "next/link";

interface ProductProps {
  el: any;
}

const Product: React.FC<ProductProps> = ({ el }) => {
  return (
    <div className="card">
      <Link href={`/ourProducts/detailsProduct/${el.id}`}>
        <Image src={el.img} alt="" />
      </Link>
      <Link href={`/ourProducts/detailsProduct/${el.id}`}>
        <h2>{el.title}</h2>
      </Link>
      <Link href={`/ourProducts/detailsProduct/${el.id}`}>
        <button>Product Details</button>
      </Link>
    </div>
  );
};

export default Product;
