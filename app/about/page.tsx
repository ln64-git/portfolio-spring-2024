import { BackgroundGradient } from "@/components/background-gradient";
import { title } from "@/components/primitives";
import {
  Card,
  CardBody,
  Divider,
  Image,
  ScrollShadow,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";

import aboutData from "@/content/about-data";

export default function AboutPage() {
  const { name, info, skills1, skills2, skills3, summary } = aboutData;

  const skillSets = [
    { name: "Front-End", skills: skills1 },
    { name: "Back-End", skills: skills2 },
    { name: "Cybersecurity", skills: skills3 },
  ];

  return (
    <div
      id="About"
      className=" w-full mx-auto max-w-[1250px] pl-4 pr-2 py-4  "
    >
      <div className="mx-auto w-full flex max-w-[800px]  items-center justify-around ">
        <div className="flex items-center justify-center">
          <Image
            width={150}
            alt="NextUI hero Image"
            src="https://i.imgur.com/PbMQHyX.jpeg"
            className=""
          />
        </div>
        <div className=" flex items-center justify-center ">
          <div className="ml-4 flex flex-col items-center">
            <h1 className="tracking-tight inline font-semibold text-2xl md:text-4xl">
              About
            </h1>
            <div className="px-auto mx-auto max-w-[400px] text-sm sm:text-lg items-center justify-center">
              {summary}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
