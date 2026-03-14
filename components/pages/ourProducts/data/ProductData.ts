import modules1 from "../../../../public/images/ourProductImages/modulesImg1.jpg";
import modules2 from "../../../../public/images/ourProductImages/medulesImg2.jpg";
import modem1 from "../../../../public/images/ourProductImages/modemImg1.png";
import modem2 from "../../../../public/images/ourProductImages/modemImg2.jpg";
import detectors1 from "../../../../public/images/ourProductImages/detectorsImg1.png";
import detectors2 from "../../../../public/images/ourProductImages/detectorsImg2.png";
import promotion1 from "../../../../public/images/ourProductImages/promotionImg1.jpg";
import { link } from "fs";

export const OUR_PAGES = [
  { title: "Promotion / Automation", link: "/ourProducts/promotion" },
  { title: "Detectors", link: "/ourProducts/detectors" },
  { title: "Modem", link: "/ourProducts/modem" },
  { title: "Modules", link: "/ourProducts/modules" },
];

export const OUR_PRODUCTS = [
  {
    id: 1,
    img: modules1,
    title: "D-TECH PLC Modules",
    typeTitle: "Digital Input and Output PLC Modules.",
    type: "modules",
    information: [
      {
        infoTitle: "D-TECH PLC SOLUTIONS",
        desc: [
          "PLCs  (Programmable Logic Controllers) are devices developed with microcontrollers, peripheral equipment, and relay circuits used in device management and/or monitoring.",
          "Users can upload software they have developed specifically for their applications to the PLC, modify the software as needed, and control and/or monitor equipment, events, and/or machines using appropriate sensors in various applications. ",
          "PLCs are used in many industrial applications. It is a technology used in processing, packaging, flow management, security, smart home/office applications, material handling, automated assembly, and many other sectors.",
        ],
        docs: [
          {
            title: "",
            link: "",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    img: modules2,
    title: "RS232-Bluetooth",
    typeTitle: "Bluetooth Module",
    type: "modules",
    information: [
      {
        infoTitle: "",
        desc: [
          "The device enables communication via Bluetooth at the RS232 level, and from RS232 to a serial adapter. The device has a working range of approximately 1km.",
        ],
        docs: [
          {
            title: "",
            link: "",
          },
        ],
      },
      {
        infoTitle: "Operating Voltage:",
        desc: ["12 Volts DC"],
        docs: [
          {
            title: "",
            link: "",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    img: modem1,
    title: "D-TECH IMS-100 3G GPS",
    typeTitle: "3G Modem",
    type: "modem",
    information: [
      {
        infoTitle: "POWER REQUIREMENTS;",
        desc: ["12-24 VDC"],
        docs: [
          {
            title: "",
            link: "",
          },
        ],
      },
      {
        infoTitle: "GENERAL FEATURES; ",
        desc: [
          "UMTS/HSPA 800/850, 900,",
          "AWS1700, 1900, 2100MHz GSM/GPRS/EDGE",
          "850, 900, 1800, 1900 MHz",
          "21.0 Mbps Downlink/5.76 Uplink",
          "GPS Feature",
          "It can be controlled via Digital Voice and SMS AT commands.",
        ],
        docs: [
          {
            title: "",
            link: "",
          },
        ],
      },
      {
        infoTitle: "COMMUNICATION;",
        desc: ["RS232/RS485 Communication Port"],
        docs: [
          {
            title: "",
            link: "",
          },
        ],
      },
      {
        infoTitle: "OPERATING TEMPERATURE;",
        desc: ["-40 to +85 °C"],
        docs: [
          {
            title: "",
            link: "",
          },
        ],
      },
      {
        infoTitle: "DIMENSIONS;",
        desc: ["105 x 25 x 119 mm"],
        docs: [
          {
            title: "",
            link: "",
          },
        ],
      },
      {
        infoTitle: "ASSEMBLY;",
        desc: ["DIN Rail"],
        docs: [
          {
            title: "",
            link: "",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    img: detectors1,
    title: "D-TECH Earthquake Sensor",
    typeTitle: "Earthquake Sensor",
    type: "detectors",
    information: [
      {
        infoTitle: "",
        desc: [
          "D-TECH Earthquake Sensors, manufactured according to standards, automatically close the main valves (solenoid valves) on the building's main natural gas inlet pipe during the first wave of an earthquake, cutting off the gas flow. Thanks to their normally open and normally closed contacts, they can sound an alarm during an earthquake and cut off desired electricity, natural gas, water, elevator, etc. lines, preventing potential dangers at the moment of the first tremor. ",
        ],
        docs: [
          {
            title: "",
            link: "",
          },
        ],
      },
      {
        infoTitle: "Technical Specifications",
        desc: [
          "Operating Voltage: 12 VDC",
          "MCU: 8-bit 24 MHz processor with 128-Kbit EEPROM",
          "Output: 2 On/Off controls",
          "Communication: SPI serial communication port, RS 232/485 communication port",
          "Optional Features: Status LED indicator, Earthquake warning with buzzer, Reset button.",
          "Operating Temperature: -40 °C / +85 °C",
          "Dimensions: 69 x 86 x 59 mm",
          "Mounting: DIN Rail",
          "Dry Contact N/O – N/C: Additional contacts are installed upon request for use in systems such as elevators, generators, electrical systems, fire panels, etc.",
        ],
        docs: [
          {
            title: "",
            link: "",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    img: promotion1,
    title: "Proximity Keychain",
    typeTitle: "Proximity for keyless door access systems.",
    type: "promotion",
    information: [
      {
        infoTitle: "",
        desc: [
          "Please contact us for our proximity keychain options. For bulk orders, please request a price quote.",
        ],
        docs: [
          {
            title: "",
            link: "",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    img: detectors2,
    title: "Gas Detectors",
    typeTitle: "Gas Detector",
    type: "detectors",
    information: [
      {
        infoTitle: "DETECTOR MODELS",
        desc: [""],
        docs: [
          {
            title: "",
            link: "",
          },
        ],
      },
      {
        infoTitle: "BS03 Gas Detector",
        desc: [
          "• High accuracy, long lifespan ",
          "• Reliable real-time performance thanks to low deviation rate ",
          "• Automatic sensor error checking ",
          "• Set relay outputs for low and high alarm levels ",
          "• LED display ",
          "• Temperature compensation ",
          "• Automatic zero calibration function ",
          "• 4-20 mA analog signal output compatible with all 4-20 mA control systems ",
          "• RS485 compatible ",
          "• On-site calibration without opening the cover thanks to infrared remote control ",
          "• Ex-proof design suitable for use in flammable, explosive atmospheres",
        ],
        docs: [
          {
            title: "Features",
            link: "https://www.ipack.com.tr/wp-content/uploads/2013/04/gazdedektoru-ozellik-1.pdf",
          },
          {
            title: "ATEX",
            link: "https://www.ipack.com.tr/wp-content/uploads/2013/04/gazdedektoru-atex-1.pdf",
          },
          {
            title: "Warranty Certificate",
            link: "https://www.ipack.com.tr/wp-content/uploads/2013/04/gazdedektoru-garantibelgesi-1.pdf",
          },
        ],
      },
      {
        infoTitle: "TC100N Fixed Gas Detector",
        desc: [
          "• Excellent repeatability ",
          "• Resistance to temperature and humidity ",
          "• High accuracy, long service life ",
          "• Reliable real-time performance thanks to low deviation rate ",
          "• Set relay outputs for low/high alarm levels ",
          "• Easy mounting thanks to ergonomic and compact dimensions ",
          "• 4-20mA / RS485 output ",
          "• Low failure rate thanks to protected PCB design ",
          "• Ex-proof design suitable for use in flammable, explosive atmospheres",
        ],
        docs: [
          {
            title: "Features",
            link: "https://www.ipack.com.tr/wp-content/uploads/2013/04/gazdedektoru-ozellik-2.pdf",
          },
          {
            title: "ATEX",
            link: "https://www.ipack.com.tr/wp-content/uploads/2013/04/gazdedektoru-atex-2.pdf",
          },
          {
            title: "Warranty Certificate",
            link: "https://www.ipack.com.tr/wp-content/uploads/2013/04/gazdedektoru-garantibelgesi-2.pdf",
          },
        ],
      },
      {
        infoTitle: "KAB (EN50194 Compliant Fixed Gas Detector)",
        desc: [
          "KAB type fixed gas detectors, compliant with the EN50194 standard, detect flammable, explosive, and combustible gases quickly and with high accuracy thanks to their high-tech, long-lasting catalytic gas sensor and microprocessor-controlled intelligent PCB design. ",
          "• High sensitivity and durability thanks to microprocessor-controlled intelligent PCB design ",
          "• Visual and audible alarm function",
        ],
        docs: [
          {
            title: "Specification",
            link: "https://www.ipack.com.tr/wp-content/uploads/2013/04/gazdedektoru-ozellik-3.pdf",
          },
          {
            title: "EN50194",
            link: "https://www.ipack.com.tr/wp-content/uploads/2013/04/gazdedektoru-en50194.pdf",
          },
          {
            title: "CE EMC  ",
            link: "https://www.ipack.com.tr/wp-content/uploads/2013/04/gazdedektoru-emc.pdf",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    img: modem2,
    title: "D-TECH GSM-GPRS Modems",
    typeTitle: "Modem",
    type: "modem",
    information: [
      {
        infoTitle: "D-TECH IMS-100 Technical Specifications",
        desc: [
          "UMTS/HSPA 800/850, 900, AWS1700, 1900, 2100 MHz",
          "GSM/GPRS/EDGE 850, 900, 1800, 1900 MHz",
          "21.0 Mbps downlink/5.76 uplink",
          "GPS feature",
          "Digital Voice and SMS",
          "It can be controlled with AT commands.",
          "RS 232 communication port",
        ],
        docs: [
          {
            title: "",
            link: "",
          },
        ],
      },
      {
        infoTitle: "General Features",
        desc: [
          "POWER REQUIREMENT:  12V DC - 24V DC",
          "OPERATING TEMPERATURE:  -40 to +85 °C",
          "DIMENSIONS  : 105 x 25 x 119 mm",
          "ASSEMBLY:  DIN Rail",
        ],
        docs: [
          {
            title: "",
            link: "",
          },
        ],
      },
    ],
  },
  //   {
  //     id: 0,
  //     img: modules1,
  //     title: "=",
  //     typeTitle: "=",
  //     type: "=",
  //     information: [
  //       {
  //         infoTitle: "=",
  //         desc: ["="],
  //       },
  //     ],
  //   },
];
