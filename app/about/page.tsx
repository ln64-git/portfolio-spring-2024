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
    <div id="About" className=" w-full mx-auto max-w-[1250px]  py-2  ">
      <div className="px-6 mx-auto w-full flex max-w-[700px] items-center justify-around p-2">
        <div className="flex items-center justify-center">
          <Image
            width={150}
            alt="NextUI hero Image"
            src="https://i.imgur.com/PbMQHyX.jpeg"
            className=""
          />
        </div>
        <div className=" flex items-center justify-center">
          <div className="ml-2 flex flex-col items-center ">
            <div className="inline text-3xl md:text-5xl text-left pb-1 w-full px-4 md:px-0">
              {name}
            </div>

            <div className="leading-6 md:leading-7 px-auto mx-auto max-w-[400px] text-sm px-4 md:px-0 sm:text-lg text-left justify-center">
              <ul>
                {info.map((element, index) => (
                  <li
                    key={index}
                    className="text-xl my-2  font-light text-left"
                  >
                    {element}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10">
        <div className="px-4 pb-4 mx-auto w-full max-w-[800px] items-center justify-around flex flex-col">
          <h1 className="max-w-[700px] inline font-semibold text-2xl md:text-3xl text-left  w-full ">
            Front-End
          </h1>

          <p className="leading-7 md:leading-9 px-auto mx-auto pt-2 text-left text-md sm:text-xl items-center justify-center max-w-[700px] ">
            I built multiple full-stack application using JavaScript
            meta-frameworks such as Next.js, and Nuxt.js, I am currently
            expanding
          </p>
        </div>
        <div className="pt-4 max-w-[700px] mx-auto">
          <Accordion variant="splitted">
            <AccordionItem key="1" aria-label="Skills" title="Skills">
              <Table aria-label="Example static collection table">
                <TableHeader>
                  <TableColumn>NAME</TableColumn>
                  <TableColumn>ROLE</TableColumn>
                  <TableColumn>STATUS</TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow key="1">
                    <TableCell>Tony Reichert</TableCell>
                    <TableCell>CEO</TableCell>
                    <TableCell>Active</TableCell>
                  </TableRow>
                  <TableRow key="2">
                    <TableCell>Zoey Lang</TableCell>
                    <TableCell>Technical Lead</TableCell>
                    <TableCell>Paused</TableCell>
                  </TableRow>
                  <TableRow key="3">
                    <TableCell>Jane Fisher</TableCell>
                    <TableCell>Senior Developer</TableCell>
                    <TableCell>Active</TableCell>
                  </TableRow>
                  <TableRow key="4">
                    <TableCell>William Howard</TableCell>
                    <TableCell>Community Manager</TableCell>
                    <TableCell>Vacation</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="pt-10">
        <div className="px-4 pb-4 mx-auto w-full max-w-[800px] items-center justify-around flex flex-col">
          <h1 className="max-w-[700px] inline font-semibold text-2xl md:text-3xl text-left  w-full ">
            Front-End
          </h1>
          <p className="leading-7 md:leading-9 px-auto mx-auto pt-2 text-left text-md sm:text-xl items-center justify-center max-w-[700px] ">
            I built multiple full-stack application using JavaScript
            meta-frameworks such as Next.js, and Nuxt.js, I am currently
            expanding
          </p>
        </div>
        <div className="pt-4 max-w-[700px] mx-auto">
          <Accordion variant="splitted">
            <AccordionItem key="1" aria-label="Skills" title="Skills">
              <Table aria-label="Example static collection table">
                <TableHeader>
                  <TableColumn>NAME</TableColumn>
                  <TableColumn>ROLE</TableColumn>
                  <TableColumn>STATUS</TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow key="1">
                    <TableCell>Tony Reichert</TableCell>
                    <TableCell>CEO</TableCell>
                    <TableCell>Active</TableCell>
                  </TableRow>
                  <TableRow key="2">
                    <TableCell>Zoey Lang</TableCell>
                    <TableCell>Technical Lead</TableCell>
                    <TableCell>Paused</TableCell>
                  </TableRow>
                  <TableRow key="3">
                    <TableCell>Jane Fisher</TableCell>
                    <TableCell>Senior Developer</TableCell>
                    <TableCell>Active</TableCell>
                  </TableRow>
                  <TableRow key="4">
                    <TableCell>William Howard</TableCell>
                    <TableCell>Community Manager</TableCell>
                    <TableCell>Vacation</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="pt-10 pb-20">
        <div className="px-4 pb-4 mx-auto w-full max-w-[800px] items-center justify-around flex flex-col">
          <h1 className="max-w-[700px] inline font-semibold text-2xl md:text-3xl text-left  w-full  ">
            Front-End
          </h1>
          <p className="leading-7 md:leading-9 px-auto mx-auto pt-2 text-left text-md sm:text-xl items-center justify-center max-w-[700px] ">
            I built multiple full-stack application using JavaScript
            meta-frameworks such as Next.js, and Nuxt.js, I am currently
            expanding
          </p>
        </div>
        <div className="pt-4 max-w-[700px] mx-auto">
          <Accordion variant="splitted">
            <AccordionItem key="1" aria-label="Skills" title="Skills">
              <Table aria-label="Example static collection table">
                <TableHeader>
                  <TableColumn>NAME</TableColumn>
                  <TableColumn>ROLE</TableColumn>
                  <TableColumn>STATUS</TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow key="1">
                    <TableCell>Tony Reichert</TableCell>
                    <TableCell>CEO</TableCell>
                    <TableCell>Active</TableCell>
                  </TableRow>
                  <TableRow key="2">
                    <TableCell>Zoey Lang</TableCell>
                    <TableCell>Technical Lead</TableCell>
                    <TableCell>Paused</TableCell>
                  </TableRow>
                  <TableRow key="3">
                    <TableCell>Jane Fisher</TableCell>
                    <TableCell>Senior Developer</TableCell>
                    <TableCell>Active</TableCell>
                  </TableRow>
                  <TableRow key="4">
                    <TableCell>William Howard</TableCell>
                    <TableCell>Community Manager</TableCell>
                    <TableCell>Vacation</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
