import "./Modules.scss";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Product from "@/components/ui/Product";
import { OUR_PAGES, OUR_PRODUCTS } from "../data/ProductData";

const Modules = () => {
  return (
    <section id="products">
      <div className="container">
        <div className="products">
          <div className="products--route">
            <h1>Modules</h1>
            <div className="products--route__location">
              <h6>You are here:</h6>
              <Link href={"/"}>HomePage</Link>
              <span>
                <ChevronRight />
              </span>
              <Link href={"/ourProducts"}>Products</Link>
              <span>
                <ChevronRight />
              </span>
              <h6>Modules</h6>
            </div>
          </div>
          <div className="products--data">
            <div className="products--data__mainData">
              {OUR_PRODUCTS.map((el, idx) =>
                el.type === "modules" ? <Product el={el} key={idx} /> : "",
              )}
            </div>
            <div className="products--data__otherPages">
              <h2>Our Policies</h2>
              {OUR_PAGES.map((el, idx) => (
                <Link href={el.link} key={idx}>
                  <span>
                    <ChevronRight />
                  </span>{" "}
                  {el.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modules;
