import React from "react";
import "./TankAutomationSystems.scss";
import Image from "next/image";
import automationPanels from "@/public/images/ourServices/Tank Automation.png";
import { ChevronRight, Link } from "lucide-react";
import { OUR_PAGES } from "../data/OurServicesData";


const TankAutomationSystems = () => {
  return (
    <section id="TankAutomationSystems">
      <div className="container">
        <div className="TankAutomationSystems">
          <div className="TankAutomationSystems--route">
            <h1>Tank Automation Systems</h1>
            <div className="TankAutomationSystems--route__location">
              <h6>You are here:</h6>
              <a>HomePage</a>
              <span>
                <ChevronRight />
              </span>
              <h6>Tank Automation Systems</h6>
            </div>
          </div>
          <div className="TankAutomationSystems--data">
            <div className="TankAutomationSystems--data__mainData">
              <Image src={automationPanels} alt="" />

              <div className="TankAutomationSystems--data__mainData--description">
                <p>
                  Our D-TECH Tank Farm Automation system, developed for
                  industrial gas distribution companies and fuel stations,
                  enables monitoring of tank levels at the customer's site and
                  control operations from the central office. It transfers the
                  quantity of products in the tanks and other desired tank farm
                  data to a digital environment, allowing for local and/or
                  remote monitoring and management. This design has been
                  successfully implemented in numerous applications both
                  domestically and internationally and has been selected as a
                  "best field study".
                </p>
                <h3>MAIN SYSTEM FEATURES</h3>
                <h3>Tank Filling Process;</h3>
                <p>
                  Tank filling is initiated by activating the PLC panel at the
                  station using a magnetic, contactless, smart card, or I-Button
                  (a data storage system similar to a travel card). During tank
                  filling, information about the process is sent to the central
                  office. Alternatively, the PLC panel can be switched on/off
                  for filling by sending a message from the central office.
                </p>
                <h3>Maximum Automatic Cutting Level;</h3>
                <p>
                  The system automatically shuts down when the filling level
                  reaches 80%. The maximum level can be set from the central
                  office.
                </p>
                <h3>Minimum Level of Automatic Motor Control;</h3>
                <p>
                  If the fuel level in the tank drops to a critical level, the
                  engines will automatically stop. The critical level is
                  determined by the central office.
                </p>
                <h3>Emergency Siren;</h3>
                <p>
                  The PLC control panel issues a warning when one of the pre-set
                  critical values ​​for the analog or digital inputs on the
                  panel occurs. Simultaneously, a warning message is sent to the
                  central office system and to designated individuals.
                </p>
                <h3>Warning about Illegal Filling;</h3>
                <p>
                  If there is an abnormal change in the level information, alert
                  messages are sent to the central office and the relevant
                  individuals.
                </p>
                <h3>Remote Data Transfer SMS / GPRS;</h3>
                <p>
                  Data such as tank level information, filling information ,
                  sales and stock information are transmitted to the central
                  office via SMS or GPRS (internet).
                </p>
                <h3>Central Office Software;</h3>
                <p>
                  SQL Server-based SCADA software is installed on the computer
                  in the central office. Thanks to this software, information
                  received via SMS or GPRS can be viewed on the program screen
                  and via an internet-based interface in a way that the user can
                  understand. Reports such as filling, sales, level, and
                  shipment can also be generated according to desired criteria
                  thanks to the flexible reporting system.
                </p>
              </div>
            </div>
            <div className="TankAutomationSystems--data__otherPages">
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

export default TankAutomationSystems;
