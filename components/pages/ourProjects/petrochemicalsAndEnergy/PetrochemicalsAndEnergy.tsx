import React from "react";
import "./PetrochemicalsAndEnergy.scss";
import Image from "next/image";
import petrochemicalsAndEnergy from "@/public/images/ourProjects/PETROCHEMICALS.jpg";
import { ChevronRight, Link } from "lucide-react";
import { OUR_PAGES } from "../data/OurProjectsData";

const PetrochemicalsAndEnergy = () => {
  return (
    <section id="petrochemicalsAndEnergy">
      <div className="container">
        <div className="petrochemicalsAndEnergy">
          <div className="petrochemicalsAndEnergy--route">
            <h1>PETROCHEMICALS AND ENERGY</h1>
            <div className="petrochemicalsAndEnergy--route__location">
              <h6>You are here:</h6>
              <a>HomePage</a>
              <span>
                <ChevronRight />
              </span>
              <h6>PETROCHEMICALS AND ENERGY</h6>
            </div>
          </div>
          <div className="petrochemicalsAndEnergy--data">
            <div className="petrochemicalsAndEnergy--data__mainData">
              <Image src={petrochemicalsAndEnergy} alt="" />

              <div className="petrochemicalsAndEnergy--data__mainData--description">
                <h3>PETROCHEMICALS AND ENERGY</h3>
                <p>
                  In the petrochemical and energy sectors, automation is crucial
                  for efficient system operation, early intervention, and
                  monitoring in emergencies. D-TECH products offer solutions to
                  automation needs in almost all areas of the sector.
                </p>{" "}
                <h3>Tank Automation Applications</h3>
                <p>
                  D-TECH Automation Systems addresses the monitoring, control,
                  and management needs of storage and distribution systems in
                  the petrochemical and energy sectors;
                </p>{" "}
                <p>Some of our Tank Level Automation Systems,</p>
                <p>
                  <p>
                    - Temperature and Pressure Data Monitoring and Management,
                  </p>
                  <p>- Fluid Velocity Detection and Control, </p>
                  <p></p>
                  <p>- Weight and Level Detection and Control, </p>
                  <p>- Motor Monitoring, Management and Control, </p>
                  <p>- Motor Current Monitoring and Control, </p>
                  <p>
                    - Machine Downtime and Operating Time Detection and
                    Control,{" "}
                  </p>
                  <p>
                    - Electrical Panel Fault Monitoring and Control; are the
                    solutions we provide.
                  </p>
                </p>
              </div>
            </div>
            <div className="petrochemicalsAndEnergy--data__otherPages">
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

export default PetrochemicalsAndEnergy;
