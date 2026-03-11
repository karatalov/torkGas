import React from "react";
import "./BrakeTestSystems.scss";
import Image from "next/image";
import brakeTestSystems from "@/public/images/ourServices/Brake Test.jpg";
import brakeTestSystems2 from "@/public/images/ourServices/Brake3.png";
// import brakeTestSystems3 from "@/public/images/ourServices/Brake Test.jpg";
import brakeTestSystems4 from "@/public/images/ourServices/Brake4.png";
import { ChevronRight, Link } from "lucide-react";
import { OUR_PAGES } from "../../ourServices/data/OurServicesData";

const BrakeTestSystems = () => {
  return (
    <section id="BrakeTestSystems">
      <div className="container">
        <div className="BrakeTestSystems">
          <div className="BrakeTestSystems--route">
            <h1>Brake Test Systems</h1>
            <div className="BrakeTestSystems--route__location">
              <h6>You are here:</h6>
              <a>HomePage</a>
              <span>
                <ChevronRight />
              </span>
              <h6>Brake Test Systems</h6>
            </div>
          </div>
          <div className="BrakeTestSystems--data">
            <div className="BrakeTestSystems--data__mainData">
              <Image src={brakeTestSystems} alt="" />

              <div className="BrakeTestSystems--data__mainData--description">
                <h3>BRAKE TEST SOFTWARE</h3>
                <p>
                  <p>Brake Test,</p>
                  <p>Lateral Slip,</p>
                  <p>Shock Absorber Test,</p>
                  <p>Dynamometer Test.</p>
                </p>
                <p>
                  The measurement results obtained by the software are 100%
                  compatible with TÜV vehicle inspection stations and provide
                  printouts in the same format. The test measurements and
                  results are identical to the TÜVTÜRK reports.
                </p>
                <h3>Brake Test Panel and Software Features</h3>
                <p>
                  <p>Right and Left Braking Forces</p>
                  <p>Electromagnetic lock that facilitates vehicle exit.</p>
                  <p>Total Braking Capability</p>
                  <p>Handbrake Test Capability</p>
                  <p>Oval brake disc/drum</p>
                  <p>
                    Rotational Resistance (Stuck Brake Pads, Defective Bearings,
                    etc.)
                  </p>
                  <p>Test Result Reporting Output</p>
                  <p>Automatic (Passed) and (Failed) Comments</p>
                  <p>Radio Frequency Communication Remote Control</p>
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
                <Image src={brakeTestSystems2} alt="" />
                {/* <Image src={brakeTestSystems} alt="" /> */}
                <Image src={brakeTestSystems4} alt="" />
              </div>
            </div>
            <div className="BrakeTestSystems--data__otherPages">
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

export default BrakeTestSystems;
