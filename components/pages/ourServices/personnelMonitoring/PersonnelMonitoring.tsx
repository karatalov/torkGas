import React from "react";
import "./PersonnelMonitoring.scss";
import Image from "next/image";
import personnelMonitoring from "@/public/images/ourServices/Personnel.jpg";
import { ChevronRight, Link } from "lucide-react";
import { OUR_PAGES } from "../../ourServices/data/OurServicesData";

const PersonnelMonitoring = () => {
  return (
    <section id="PersonnelMonitoring">
      <div className="container">
        <div className="PersonnelMonitoring">
          <div className="PersonnelMonitoring--route">
            <h1>Personnel Monitoring and Access Systems</h1>
            <div className="PersonnelMonitoring--route__location">
              <h6>You are here:</h6>
              <a>HomePage</a>
              <span>
                <ChevronRight />
              </span>
              <h6>Personnel Monitoring and Access Systems</h6>
            </div>
          </div>
          <div className="PersonnelMonitoring--data">
            <div className="AutomationPanels--data__mainData">
              <Image src={personnelMonitoring} alt="" />

              <div className="PersonnelMonitoring--data__mainData--description">
                
              </div>
            </div>
            <div className="PersonnelMonitoring--data__otherPages">
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

export default PersonnelMonitoring;
