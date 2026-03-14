import "./MissionAndVision.scss";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import mainImg from "../../../../public/images/aboutImages/missinAndVisionImage.png";
import { OUR_PAGES } from "../data/AboutData";
import Link from "next/link";

const MissionAndVision = () => {
  return (
    <section id="missionVision">
      <div className="container">
        <div className="missionVision">
          <div className="missionVision--route">
            <h1>Mission And Vision</h1>
            <div className="missionVision--route__location">
              <h6>You are here:</h6>
             <Link href={"/"}>HomePage</Link>
              <span>
                <ChevronRight />
              </span>
              <h6>Mission And Vision</h6>
            </div>
          </div>
          <div className="missionVision--data">
            <div className="missionVision--data__mainData">
              <Image src={mainImg} alt="" />
              <div className="missionVision--data__mainData--description">
                <h6>Our Mission</h6>
                <p>
                  Our goal is to be the first choice for all clients seeking
                  customized solutions in automation and software, largely
                  through our innovative products, services, and respect for
                  society.
                </p>
                <p>
                  We build mutual trust with our customers by providing them
                  with high-quality products and services that add real value to
                  their businesses.
                </p>
                <p>
                  With a never-ending quest for improvement, we respect the
                  expectations and aspirations of our employees, stakeholders,
                  and suppliers.
                </p>
                <p>
                  To be a reputable global company known for its success,
                  reliability, entrepreneurship, and prestige in the sectors in
                  which it operates.
                </p>
                <h6>Our Vision</h6>
                <p>
                  Our goal is to be a pioneering group that prioritizes customer
                  satisfaction without compromising on quality in its products
                  and services, makes a positive contribution to society and the
                  environment, and aims to serve wider audiences both
                  domestically and internationally by raising our goals every
                  day with the successes we achieve in our activities.
                </p>
              </div>
            </div>
            <div className="missionVision--data__otherPages">
              <h2>About Us</h2>
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

export default MissionAndVision;
