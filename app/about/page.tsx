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
      <div className="px-6 mx-auto w-full flex max-w-[800px] items-center justify-around p-2">
        <div className="flex items-center justify-center">
          <Image
            width={150}
            alt="NextUI hero Image"
            src="https://i.imgur.com/PbMQHyX.jpeg"
            className=""
          />
        </div>
        <div className=" flex items-center justify-center">
          <div className="ml-4 flex flex-col items-center">
            <h1 className="inline font-semibold text-2xl md:text-4xl">About</h1>
            <div className="leading-5 px-auto mx-auto max-w-[400px] text-sm sm:text-lg items-center justify-center">
              {summary}
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 mx-auto w-full flex max-w-[850px] items-center justify-around ">
        <p className="px-auto mx-auto py-4 text-left text-sm sm:text-xl items-center justify-center leading-6">
          I am 27 years old and eager to prove myself in the field of
          Technology. As someone who has been passionate about computers since I
          was a young I decided 3 years ago that I was ready to apply myself to
          the deep study of computer systems and application development. In
          this time have attended a full-stack web development bootcamp
          specializing in Java and acquired certification in cybersecurity.
          Outside of my studies I built multiple full-stack application using
          JavaScript meta-frameworks such as Next.js, and Nuxt.js, I am
          currently expanding my knowledge of systems level programming with
          Rust applications while utilizing Microsoft Azure Web Services . I
          have a passion for building mobile, desktop and web applications which
          focus on delivering high levels of efficiency, utility and
          accessibility.
        </p>
      </div>
      <div className="pt-4 max-w-[700px] mx-auto">
        <Accordion variant="splitted">
          <AccordionItem key="1" aria-label="Front-End" title="Front-End">
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
          <AccordionItem key="2" aria-label="Back-End" title="Back-End">
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
          <AccordionItem
            key="3"
            aria-label="Cybersecurity"
            title="Cybersecurity"
          >
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
  );
}
