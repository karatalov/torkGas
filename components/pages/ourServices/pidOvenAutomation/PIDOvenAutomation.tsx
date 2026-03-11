import React from "react";
import "./PIDOvenAutomation.scss";
import Image from "next/image";
import PIDControlled from "@/public/images/ourServices/PIDControlled.png";
import PIDControlled2 from "@/public/images/ourServices/PIDControlled2.png";
import PIDControlled3 from "@/public/images/ourServices/PIDControlled3.png";
import PIDControlled4 from "@/public/images/ourServices/PIDControlled4.png";
import PIDControlled5 from "@/public/images/ourServices/PIDControlled5.png";
import { ChevronRight, Link } from "lucide-react";
import { OUR_PAGES } from "../../ourServices/data/OurServicesData";

const PIDOvenAutomation = () => {
  return (
    <section id="PIDOvenAutomation">
      <div className="container">
        <div className="PIDOvenAutomation">
          <div className="PIDOvenAutomation--route">
            <h1>PID Controlled Oven Automation Systems</h1>
            <div className="PIDOvenAutomation--route__location">
              <h6>You are here:</h6>
              <a>HomePage</a>
              <span>
                <ChevronRight />
              </span>
              <h6>PID Controlled Oven Automation Systems</h6>
            </div>
          </div>
          <div className="PIDOvenAutomation--data">
            <div className="PIDOvenAutomation--data__mainData">
              <Image src={PIDControlled} alt="" />

              <div className="PIDOvenAutomation--data__mainData--description">
                <h3>PID Controlled Temperature Control Panel</h3>
                <p>
                  4.3" and 7" Touchscreen models for industrial oven
                  manufacturers.
                </p>
                <p>PID Controlled Automation Panels</p>
                <h3>Brake Test Panel and Software Features</h3>
                <p>Features</p>
                <p>- 32 Program</p>
                <p> - 40 Steps to Identification</p>
                <p> - Manual function test</p>
                <p>- Sensor fault detection</p>
                <p> - Manual/Automatic ventilation system</p>
                <p>Unit Price</p>
                <p>------------ -------------</p>
                <p> 1- 10 420 €</p>
                <p> 11-25 €399</p>
                <p> 26-50 €380</p>
                <p> 51-100 €360</p>
                <Image src={PIDControlled2} alt="" />
                <Image src={PIDControlled3} alt="" />
                <Image src={PIDControlled4} alt="" />
                <Image src={PIDControlled5} alt="" />
              </div>
            </div>
            <div className="PIDOvenAutomation--data__otherPages">
              <h2>Our Services</h2>
               {OUR_PAGES.map((el, idx) => (
                <a href={el.link} key={idx}>
                  <span>
                    <ChevronRight />
                  </span>
                  {el.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PIDOvenAutomation;
