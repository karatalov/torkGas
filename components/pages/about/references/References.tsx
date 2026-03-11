import "./References.scss";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import mainImg from "@/public/images/aboutImages/referenceImage.jpg";
import { OUR_PAGES } from "../data/AboutData";
import Link from "next/link";

const References = () => { 
  return (
    <section id="references">
      <div className="container">
        <div className="references">
          <div className="references--route">
            <h1>References</h1>
            <div className="references--route__location">
              <h6>You are here:</h6>
              <Link href={"/"}>HomePage</Link>
              <span>
                <ChevronRight />
              </span>
              <h6>References</h6>
            </div>
          </div>
          <div className="references--data">
            <div className="references--data__mainData">
              <Image src={mainImg} alt="" />

              <div className="references--data__mainData--description">
                <p>BP PETROLEUM INC.</p>
                <p>HABAŞ A.Ş.</p>
                <p>TOTAL INC.</p>
                <p>PETGAZ A.Ş.</p>
                <p>IPRAGAZ A.Ş.</p>
                <p>PRIMA LNG</p>
                <p>TOTAL FRANCE</p>
                <p>SHV FRANCE</p>
                <p>MESSER INC.</p>
                <p>ONPET GROUP OF COMPANIES</p>
                <p>SURTAS GROUP OF COMPANIES</p>
              </div>
            </div>
            <div className="references--data__otherPages">
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

export default References;
