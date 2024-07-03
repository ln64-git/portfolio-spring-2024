"use client";
import {
  Image,
  Accordion,
  AccordionItem,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

import aboutData from "@/content/about-data";

export default function AboutPage() {
  const { name, info, skills1, skills2, skills3, summary } = aboutData;

  const skillSets = [
    { name: "Front-End", skills: skills1 },
    { name: "Back-End", skills: skills2 },
    { name: "Cybersecurity", skills: skills3 },
  ];

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div id="About" className=" w-full mx-auto max-w-[1250px]  ">
      <div className="px-6  mx-auto w-full flex max-w-[700px] items-center justify-around h-[320px] ">
        <div className="flex items-center justify-center">
          <Image
            width={150}
            alt="NextUI hero Image"
            src="https://i.imgur.com/PbMQHyX.jpeg"
          // className="h-[200px] w-[130px]"
          />
        </div>
        <div className=" flex items-center justify-center">
          <div className="  ml-2 flex flex-col items-center ">
            <div className="inline text-3xl  md:text-3xl text-left pb-1 w-full px-4 md:px-0">
              {name}
            </div>

            <div className="px-auto mx-auto max-w-[400px]  w-full text-sm px-4 md:px-0 sm:text-lg text-left justify-center">
              <ul>
                {info.map((element, index) => (
                  <li
                    key={index}
                    className="text-sm my-2 font-light text-left"
                  >
                    {element}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 ">
        <div className="px-4 pb-4 mx-auto w-full max-w-[800px] items-center justify-around flex flex-col">
          <h1 className="max-w-[700px] inline font-semibold text-4xl md:text-3xl text-left  w-full ">
            About me
          </h1>
          <p className="pb-4 leading-7 md:leading-9 px-auto mx-auto pt-2 text-left  text-md items-center justify-center max-w-[700px] ">
            Innovative software developer with a foundation in cybersecurity, frontend, and backend development.
            Leveraging technology to overcome visual impairment, bringing a unique perspective and strong problem-solving
            skills to create accessible, secure, and efficient solutions.
          </p>
          <h1 className="max-w-[700px] mt-4 inline font-semibold text-2xl md:text-3xl text-left  w-full ">
            Front-End
          </h1>

          <p className="leading-7 md:leading-9 px-auto mx-auto pt-2 text-left  text-md items-center justify-center max-w-[700px] ">
            I have built multiple full-stack applications using modern
            JavaScript frameworks and libraries. My front-end skills span across
            a wide range of technologies, enabling me to create responsive,
            interactive, and visually appealing user interfaces. I am constantly
            expanding my knowledge to deliver cutting-edge, user-centric web
            experiences.
          </p>
        </div>
        <div className="pt-4 max-w-[700px] mx-auto">
          <Accordion variant="splitted">
            <AccordionItem key="1" aria-label="Skills" title="Skills">
              <Table
                removeWrapper={false}
                aria-label="Example static collection table"
              >
                <TableHeader>
                  <TableColumn className="text-left">NAME</TableColumn>
                  <TableColumn className="text-right">YEARS</TableColumn>
                </TableHeader>
                <TableBody>
                  {skills1.map(([name, years], index) => (
                    <TableRow key={index}>
                      <TableCell className="text-left text-lg">
                        {name}
                      </TableCell>
                      <TableCell className="text-right">{years}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="pt-10">
        <div className="px-4 pb-4 mx-auto w-full max-w-[800px] items-center justify-around flex flex-col">
          <h1 className="max-w-[700px] inline font-semibold text-2xl md:text-3xl text-left  w-full ">
            Back-End
          </h1>
          <p className="leading-7 md:leading-9 px-auto mx-auto pt-2 text-left text-md items-center justify-center max-w-[700px] ">
            On the server-side, I have experience working with diverse
            technologies and frameworks to develop robust, scalable, and secure
            back-end systems. I strive to design efficient and maintainable
            architectures that power the core functionality of applications. I
            am always eager to learn and adapt to new back-end technologies to
            build high-performance solutions.
          </p>
        </div>
        <div className="pt-4 max-w-[700px] mx-auto">
          <Accordion variant="splitted">
            <AccordionItem key="1" aria-label="Skills" title="Skills">
              <Table
                removeWrapper={false}
                aria-label="Example static collection table"
              >
                <TableHeader>
                  <TableColumn className="text-left">NAME</TableColumn>
                  <TableColumn className="text-right">YEARS</TableColumn>
                </TableHeader>
                <TableBody>
                  {skills2.map(([name, years], index) => (
                    <TableRow key={index}>
                      <TableCell className="text-left text-lg">
                        {name}
                      </TableCell>
                      <TableCell className="text-right">{years}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="py-10 ">
        <div className="px-4 pb-4 mx-auto w-full max-w-[800px] items-center justify-around flex flex-col">
          <h1 className="max-w-[700px] inline font-semibold text-2xl md:text-3xl text-left  w-full  ">
            Cybersecurity
          </h1>
          <p className="leading-7 md:leading-9 px-auto mx-auto pt-2 text-left text-md items-center justify-center max-w-[700px] ">
            With a keen interest in cybersecurity, I have gained experience in
            various aspects of securing systems and data. My skills include
            implementing security measures, conducting vulnerability
            assessments, and staying vigilant against potential threats. I am
            committed to following best practices and staying informed about the
            latest security trends to ensure the integrity and confidentiality
            of information assets.
          </p>
        </div>
        <div className="pt-4 max-w-[700px] mx-auto">
          <Accordion variant="splitted">
            <AccordionItem key="1" aria-label="Skills" title="Skills">
              <Table aria-label="Example static collection table">
                <TableHeader>
                  <TableColumn className="text-left">NAME</TableColumn>
                  <TableColumn className="text-right">YEARS</TableColumn>
                </TableHeader>
                <TableBody>
                  {skills3.map(([name, years], index) => (
                    <TableRow key={index}>
                      <TableCell className="text-left text-lg">
                        {name}
                      </TableCell>
                      <TableCell className="text-right">{years}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
