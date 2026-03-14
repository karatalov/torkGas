import React from "react";
import "./ScadaAndTelemetry.scss";
import Image from "next/image";
import scadaAndTelemetry from "@/public/images/ourServices/SCADA.png";
import { ChevronRight, Link } from "lucide-react";
import { OUR_PAGES } from "../../ourServices/data/OurServicesData";


const ScadaAndTelemetry = () => {
  return (
    <section id="ScadaAndTelemetry">
      <div className="container">
        <div className="ScadaAndTelemetry">
          <div className="ScadaAndTelemetry--route">
            <h1>SCADA and Telemetry Systems</h1>
            <div className="ScadaAndTelemetry--route__location">
              <h6>You are here:</h6>
              <a>HomePage</a>
              <span>
                <ChevronRight />
              </span>
              <h6>SCADA and Telemetry Systems</h6>
            </div>
          </div>
          <div className="ScadaAndTelemetry--data">
            <div className="ScadaAndTelemetry--data__mainData">
              <Image src={scadaAndTelemetry} alt="" />

              <div className="ScadaAndTelemetry--data__mainData--description">
                <h3>D-TECH SCADA SOFTWARE </h3>
                <p>
                  D-TECH Software allows for monitoring, managing, and modifying
                  data received from remote locations.
                </p>
                <p>
                  D-TECH Software is SQL Server-based and operates over the
                  internet.
                </p>
                <p>
                  With its flexible reporting structure, reports can be
                  generated as needed, and workflows and services can be
                  adjusted. Critical situations can be reported.
                </p>{" "}
                <p>Performance can be monitored graphically.</p>
                <p>
                  Specific individuals and organizations can also be notified
                  via SMS or email.
                </p>
                <p>
                  The software can be modified according to customer
                  requirements.{" "}
                </p>
                <p>It is user-friendly due to its ease of use features.</p>
              </div>
            </div>
            <div className="ScadaAndTelemetry--data__otherPages">
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

export default ScadaAndTelemetry;
