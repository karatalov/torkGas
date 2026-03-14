import React from "react";
import "./AutomationPanels.scss";
import Image from "next/image";
import automationPanels from "@/public/images/ourServices/Automation.jpg";
import { ChevronRight, Link } from "lucide-react";
import { OUR_PAGES } from "../data/OurServicesData";

const AutomationPanels = () => {
  return (
    <section id="AutomationPanels">
      <div className="container">
        <div className="AutomationPanels">
          <div className="AutomationPanels--route">
            <h1>Automation and Electrical Panels</h1>
            <div className="AutomationPanels--route__location">
              <h6>You are here:</h6>
              <a>HomePage</a>
              <span>
                <ChevronRight />
              </span>
              <h6>Automation and Electrical Panels</h6>
            </div>
          </div>
          <div className="AutomationPanels--data">
            <div className="AutomationPanels--data__mainData">
              <Image src={automationPanels} alt="" />

              <div className="AutomationPanels--data__mainData--description">
                <p>
                  Founded in 2003 , Decos Elektronik is one of the leading
                  companies in the Turkish electrical and automation panel
                  manufacturing market, and continues its production with a
                  constantly developing and expanding product range.
                </p>
                <p>
                  The company, which has made it a principle to meet quality and
                  customer demands in accordance with standards , has adopted
                  the use of technology and the improvement of production
                  standards as a fundamental principle. As a result of this
                  process, it has gained a well-deserved reputation in the
                  market with its sectoral experience and has become a role
                  model for many local manufacturers.
                </p>
                <p>
                  From its inception, Decos Elektronik focused on meeting the
                  domestic market's need for electrical panels, combining its
                  expertise with its sensitivity to technological advancements.
                  By diversifying and expanding its customer profile
                  internationally, it has proven its presence in the
                  international market, reaching a level of experience,
                  knowledge, and quality that allows it to respond to market
                  demands.
                </p>{" "}
                <p>
                  Decos Elektronik, aiming to become an indispensable company
                  for all applications where investment, operational safety and
                  production continuity are important, has secured a leading
                  position in its field in the international market, primarily
                  in France, Italy and Belgium, through its collaboration with
                  Uestco and Prima LNG .
                </p>
              </div>
            </div>
            <div className="AutomationPanels--data__otherPages">
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

export default AutomationPanels;
