import React from "react";
import "./promotionalSystems.scss";
import Image from "next/image";
import automationPanels from "@/public/images/ourServices/Promotional.jpg";
import { ChevronRight, Link } from "lucide-react";
import { OUR_PAGES } from "../data/OurServicesData";


const PromotionalSystems = () => {
  return (
    <section id="promotionalSystems">
      <div className="container">
        <div className="promotionalSystems">
          <div className="promotionalSystems--route">
            <h1>Promotional Systems</h1>
            <div className="promotionalSystems--route__location">
              <h6>You are here:</h6>
              <a>HomePage</a>
              <span>
                <ChevronRight />
              </span>
              <h6>Promotional Systems</h6>
            </div>
          </div>
          <div className="promotionalSystems--data">
            <div className="promotionalSystems--data__mainData">
              <Image src={automationPanels} alt="" />

              <div className="promotionalSystems--data__mainData--description">
                <p>
                  This system, implemented by gas stations to attract more
                  customers or maintain existing customer loyalty, integrates
                  customer-specific promotions with an automated system. It
                  utilizes various electronic materials, promotional cards or
                  keychains (small, keychain-sized proximity devices with
                  embedded chips, often featuring customer name, logo, and
                  contact information), and software, all designed to minimize
                  staff errors and initiative. Customers earn points with each
                  fuel purchase using these cards. If you have multiple
                  stations, they can be connected online to manage customer
                  points collectively or individually. You can create different
                  point-giving systems for your customers. Each station can
                  customize the point system for the promotional cards.
                </p>
                <p>
                  Other services offered at the station, such as car washes,
                  vacuum cleaners, and food and beverage vending machines, can
                  also be included in the promotional system .
                </p>
                <p>
                  {" "}
                  Customers can use their points earned from fuel purchases to
                  benefit from services like car washes and vacuum cleaners,
                  receive instant discounts on the price per liter at the pump,
                  or redeem their points for free fuel or services.
                </p>
                <h3>Depending on the type of fuel used;</h3>
                <p>
                  A point system can be created based on the type of fuel
                  customers purchase. For example, a customer who buys gas could
                  have a different point coefficient than a customer who buys
                  petrol.
                </p>
                <h3>Based on fuel volume in liters;</h3>
                <p>
                  For example, 1 point for every 100 liters. This is one of the
                  general point parameters required for all customers and must
                  be entered into the software.
                </p>{" "}
                <h3>Based on fuel cost;</h3>
                <p>
                  1 point for every 100 TL received from the customer. This is
                  one of the general point parameters required for all customers
                  and must be entered into the software.
                </p>
                <h3>Depending on the fuel refill time;</h3>
                <p>
                  Different points can be awarded depending on when the customer
                  purchases fuel. For example, customers with certain card codes
                  may receive more points when they purchase fuel after
                  midnight. If they receive 1 point for every 100 liters
                  purchased during the day, they can receive 2 or 3 points at
                  night, as can be adjusted through the program.
                </p>
                <h3>Depending on customer characteristics;</h3>
                <p>
                  For example, a different point system could be created for
                  taxi drivers and companies. Regular customers could receive 1
                  point for every 100 liters, while taxi drivers with card codes
                  within specific ranges could receive 2 points for every 100
                  liters.
                </p>
                <h3>Scoring based on leading customer ranking;</h3>
                <p>
                  A leader customer points system can be created where they earn
                  points for each customer they bring in. For example, a leader
                  customer could earn 10% of the points earned by their referral
                  customers each time they purchase fuel.
                </p>
                <h3>Limited card access;</h3>
                <p>
                  For example, if you want a card to be processed a maximum of 3
                  times a day—meaning a customer can purchase fuel 10 times a
                  day but only earn points 3 times—the daily processing limit is
                  defined as 3. This number can be changed as needed.
                </p>
                <h3>Time Criterion;</h3>
                <p>
                  If you enter 30 minutes in the time difference field in the
                  program, even if the same card is swiped every 10 minutes, you
                  can only earn points on transactions within 30-minute
                  intervals and, if the daily record count is 3, only on the
                  first 3 transactions. In other words, after earning points
                  once, at least 30 minutes must pass before you can make
                  another transaction.
                </p>
                <h3>Card Merging;</h3>
                <p>
                  For example, if a company distributes 100 promotional cards to
                  its employees, the points from all 100 cards can be combined
                  and transferred to the company's account. When the program
                  enters the starting and ending card codes to be combined, and
                  the card code or company account number to be added, the
                  points earned by each of the 100 cards when purchasing fuel
                  can be transferred to the company account.
                </p>
                <h3>Instant Discount ;</h3>
                <p>
                  For example, when customers within specific card code ranges
                  purchase fuel, an instant discount can be applied to the price
                  displayed on the dispenser. For instance, if a liter of LPG
                  costs 3 TL and a 5% discount is defined in the program, the
                  price per liter could be reduced from 3 TL to 2.85 TL when the
                  customer swipes their card before purchasing fuel. In other
                  words, a special customer might pay 285 TL instead of 300 TL
                  for 100 liters of fuel.
                </p>
                <h3>Point Transfer;</h3>
                <p>Points from any card can be transferred to another card.</p>
                <h3>Extra Points;</h3>
                <p>
                  Extra points can be awarded manually through the program and
                  with an authorized password, without any fuel sales
                  transaction on the card.
                </p>
                <h3>Washing and Vacuuming System Rating Parameters;</h3>
                <p>
                  Customers within a specific range of card codes can use their
                  points to benefit from the washing and vacuuming system. If
                  desired, the software can be configured to deduct more points
                  from some customers for these services, while others receive
                  no points at all.
                </p>
              </div>
            </div>
            <div className="promotionalSystems--data__otherPages">
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

export default PromotionalSystems;
