"use client"
import React from "react";
import "./GasStation.scss";
import Image from "next/image";
import gass from "@/public/images/ourProjects/gass.jpg";
import { ChevronRight, Link } from "lucide-react";
import { OUR_PAGES } from "../data/OurProjectsData";

const GasStation = () => {
  return (
    <section id="gasStation">
      <div className="container">
        <div className="gasStation">
          <div className="gasStation--route">
            <h1>Gas Station</h1>
            <div className="gasStation--route__location">
              <h6>You are here:</h6>
              <a>HomePage</a>
              <span>
                <ChevronRight />
              </span>
              <h6>Company Profile</h6>
            </div>
          </div>
          <div className="gasStation--data">
            <div className="gasStation--data__mainData">
              <Image src={gass} alt="" />

              <div className="gasStation--data__mainData--description">
                <h3>GAS STATIONS</h3>
                <p>
                  The Energy Market Regulatory Authority (EPDK) has mandated
                  that all gas stations switch to automation systems by December
                  31, 2015. Therefore, IPACK Automation Systems provides
                  low-cost and high-performance automation solutions for these
                  stations.
                </p>
                <h3>Tank Automation Systems</h3>
                <p>
                  IPack PLCs allow for various probe connections. Information
                  such as level, temperature, and pressure in the tank area can
                  be transmitted to the IPack automation system in the
                  electrical room via wired or wireless connection. The “IPack
                  Tank Automation System” prevents overfilling of the tank with
                  maximum level control, while protecting the motors with
                  minimum level control. With the “IPack Personnel Recognition
                  System,” the central office and authorized personnel are
                  notified when unauthorized personnel fill the tank, thus
                  detecting and preventing unauthorized fillings. Tank level
                  information can be sent to the Central Office and authorized
                  personnel via SMS or email at desired time intervals and/or
                  times. When appropriate probes and sensors are used, tank
                  temperature and pressure information can be obtained, and
                  based on this data, gas and liquid phase information inside
                  the tank is automatically calculated. All parameters can be
                  changed and read via SMS.
                </p>
                <p>
                  Fixed level data is sent to the Central Office to detect probe
                  malfunctions and/or system tampering. IPack rejects parameter
                  changes via SMS messages not originating from "Authorized GSM
                  Numbers". Communications can be made via GPRS, SMS and/or
                  ADSL.
                </p>
                <h3>Promotional Automation Systems</h3>
                <p>
                  The iPack Promotion System begins when the customer scans
                  their Points Card at the reader located next to the dispenser.
                  The customer code on the "Points Card" is combined with the
                  sales information on the server, and points are automatically
                  credited to the customer's "Points Card" according to
                  parameters predefined in the iPack promotion tracking
                  software. Card information can be transferred to the system
                  via wired or wireless connection. Example Points parameters:
                </p>
                <div>
                  <p>- Based on the type of fuel purchased </p>
                  <p>- Based on the amount offuel purchased</p>
                  <p>- Based on the purchase amount</p>
                  <p>- Based on the purchase time</p>
                  <p>- Based on customer characteristics</p>
                  <p>- Limited card usage</p>
                  <p>- Points accumulation can be determined.</p>
                </div>
              </div>
            </div>
            <div className="gasStation--data__otherPages">
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

export default GasStation;
