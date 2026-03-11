import React from "react";
import "./IndustrialFacilities.scss";
import Image from "next/image";
import industrialFacilities from "@/public/images/ourProjects/inbu.jpg";
import { ChevronRight, Link } from "lucide-react";
import { OUR_PAGES } from "../data/OurProjectsData";

const IndustrialFacilities = () => {
  return (
    <section id="industrialFacilities">
      <div className="container">
        <div className="industrialFacilities">
          <div className="industrialFacilities--route">
            <h1>INDUSTRIAL FACILITIES</h1>
            <div className="industrialFacilities--route__location">
              <h6>You are here:</h6>
              <a>HomePage</a>
              <span>
                <ChevronRight />
              </span>
              <h6>INDUSTRIAL FACILITIES</h6>
            </div>
          </div>
          <div className="industrialFacilities--data">
            <div className="industrialFacilities--data__mainData">
              <Image src={industrialFacilities} alt="" />

              <div className="industrialFacilities--data__mainData--description">
                <h3>INDUSTRIAL FACILITIES</h3>
                <p>
                  In industry, reliable production and management systems are
                  only possible through control at every step. Smooth machine
                  operation, minimizing waste, and energy savings are crucial
                  for efficient plant operation. With IPACK, you can have
                  automation systems for your plants at low cost and with
                  reliable service quality.
                </p>
                <h3>Industrial Plants and Process Automation Applications</h3>
                <p>
                  “D-TECH Automation Systems” has developed an unlimited number
                  of automation and SCADA solutions for industrial plants and
                  many production processes, including: - Belt Speed ​​Detection
                  and Control , - Inventory Count Tracking and Control, -
                  Machine Stroke Count Measurement and Control, - Packaging
                  Controls, - Machine Monitoring, Management and Working/Stop
                  Time Detection and Control, - Electrical Panel Monitoring and
                  Management, - Personnel Performance Tracking, - Fuel Tank
                  Level, Pressure and Temperature Monitoring and Management, -
                  Raw Material Status Control, - Early Fault Detection in
                  Machines and Motors, - Critical Situation Management.
                </p>
              </div>
            </div>
            <div className="industrialFacilities--data__otherPages">
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

export default IndustrialFacilities;
