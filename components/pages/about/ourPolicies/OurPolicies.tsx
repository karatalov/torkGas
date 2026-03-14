import "./OurPolicies.scss";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import mainImg from "../../../../public/images/aboutImages/ourPoliciesImage.jpg";
import { OUR_PAGES } from "../data/AboutData";
import Link from "next/link";

const OurPolicies = () => {
  return (
    <section id="ourpolicies">
      <div className="container">
        <div className="ourpolicies">
          <div className="ourpolicies--route">
            <h1>Our Policies</h1>
            <div className="ourpolicies--route__location">
              <h6>You are here:</h6>
             <Link href={"/"}>HomePage</Link>
              <span>
                <ChevronRight />
              </span>
              <h6>Our Policies</h6>
            </div>
          </div>
          <div className="ourpolicies--data">
            <div className="ourpolicies--data__mainData">
              <Image src={mainImg} alt="" />
              <h6>Our Quality Policy</h6>
              <div className="ourpolicies--data__mainData--description">
                <h5>MASTER DECOS</h5>

                <h6>Our Mission</h6>
                <p>
                  - To communicate effectively by understanding the needs and
                  expectations of customers, employees, and stakeholders.
                </p>
                <p>
                  -By utilizing our organizational expertise and our innovative,
                  experienced, and expert personnel trained in their respective
                  fields, we aim to accurately identify our clients' needs and
                  requirements, meet their expectations fully and on time, and
                  thus ensure and increase customer satisfaction.
                </p>
                <p>
                  -By carefully protecting client property, ensuring that the
                  entire process, from identifying client needs to obtaining and
                  delivering the project, meets client expectations, legal
                  requirements, and the requirements of international standards.
                </p>
                <p>
                  -To maintain and ensure the highest level of customer
                  satisfaction by effectively evaluating suggestions and
                  complaints from customers based on the principle of customer
                  focus.
                </p>
                <p>
                  - To provide customer-focused and high-quality service by
                  fully complying with legal requirements, regulations, and
                  contractual terms.
                </p>
                <p>
                  {" "}
                  -To improve our skills and quality awareness through the
                  principle of continuous training,
                </p>
                <p>
                  {" "}
                  -To provide our employees with healthy and safe working
                  environments within the scope of occupational health and
                  safety, and to conduct effective risk and opportunity
                  management within the scope of the 9001:2015 Quality
                  Management System.
                </p>
                <p>
                  {" "}
                  -Within the scope of occupational health and safety, to
                  provide our personnel with complete and timely training and to
                  monitor necessary health surveillance.
                </p>
                <p>
                  {" "}
                  -In everything we do, we aim to create projects that comply
                  with international standards and regulations.
                </p>
                <p>
                  {" "}
                  - To continuously review the ISO 9001:2015 quality policy to
                  ensure it aligns with the company's objectives.
                </p>
                <p>
                  {" "}
                  - Continuously reviewing and improving the goals it
                  establishes in line with its quality policy,
                </p>
                <p>
                  {" "}
                  -To expand the company's reputation and recognition both
                  domestically and internationally, enabling it to compete in
                  diverse conditions and environments without compromising on
                  quality.
                </p>
                <p>
                  {" "}
                  - To establish good relationships with our suppliers and
                  subcontractors based on solid foundations,
                </p>
                <p>
                  {" "}
                  -To maintain the effectiveness of the system, we should adopt
                  a proactive approach, considering all risks and opportunities,
                  and giving importance to regulatory and corrective activities.
                </p>
                <p>
                  {" "}
                  -By utilizing all necessary resources for our Quality
                  Management System and referencing the ISO 9001:2015
                  international standard, we aim to spread quality awareness
                  among all our personnel through their participation and
                  leadership in their respective areas of responsibility, to
                  enhance their knowledge and skills through necessary training,
                  to encourage them to embrace the principle of teamwork, and
                  thus to contribute to the process of "Awareness" and
                  "Continuous Improvement".
                </p>
              </div>
            </div>
            <div className="ourpolicies--data__otherPages">
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

export default OurPolicies;
