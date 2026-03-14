import React from "react";
import "./OrganizedIndustrialZone.scss";
import Image from "next/image";
import organizedIndustrialZone from "@/public/images/ourProjects/ORGANIZED.jpg";
import { ChevronRight, Link } from "lucide-react";
import { OUR_PAGES } from "../data/OurProjectsData";

const OrganizedIndustrialZone = () => {
  return (
    <section id="OrganizedIndustrialZone">
      <div className="container">
        <div className="OrganizedIndustrialZone">
          <div className="OrganizedIndustrialZone--route">
            <h1>ORGANIZED INDUSTRIAL ZONE</h1>
            <div className="OrganizedIndustrialZone--route__location">
              <h6>You are here:</h6>
              <a>HomePage</a>
              <span>
                <ChevronRight />
              </span>
              <h6>ORGANIZED INDUSTRIAL ZONE</h6>
            </div>
          </div>
          <div className="OrganizedIndustrialZone--data">
            <div className="OrganizedIndustrialZone--data__mainData">
              <Image src={organizedIndustrialZone} alt="" />

              <div className="OrganizedIndustrialZone--data__mainData--description">
                <h3>Automation Applications for Organized Industrial Zones</h3>
                <p>
                  The D-TECH Meter Automation System is used in organized
                  industrial zones to read gas, water, and electricity
                  consumption data from meters and send it to the Central Office
                  via GPRS and/or SMS. This allows organized industrial zone
                  managements to monitor and manage business consumption
                  controls from a single point. D-TECH systems can communicate
                  with many correctors, electricity and water meters operating
                  with Modbus protocol and other protocols, and transmit this
                  data to the Central Office.
                </p>
              </div>
            </div>
            <div className="OrganizedIndustrialZone--data__otherPages">
              <h2>Our projects</h2>
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

export default OrganizedIndustrialZone;
