import { Image } from "@nextui-org/react";
import Link from "next/link";
import { NextIcon } from "./icons";

interface ProjectProps {
  name: string;
  date: string;
  summary: string;
  image: string;
  techArray: string[];
  demoUrl?: string;
  githubUrl: string;
}
export default function Project(data: ProjectProps) {
  function TechIcons() {
    const techIconsArray = data.techArray.map((tech, index) => (
      <div
        key={index}
        className="flex h-8 w-8 items-center justify-center align-middle "
      >
        {tech === "next" ? (
          <NextIcon width={40} height={40} />
        ) : (
          <img src={`/${tech}.svg`} alt={tech} className="w-40 md:w-80" />
        )}
      </div>
    ));

    return techIconsArray;
  }
  return (
    <div className="pb-8 py-4 md:py-14">
      <div className="mx-auto flex max-w-[700px]  pb-2 items-center justify-evenly align-middle">
        <div className="flex w-1/2  flex-col items-center mx-auto">
          <div className="">
            <div className="flex w-full flex-col justify-center text-center text-xl md:text-3xl">
              {data.name}
            </div>
            <div className="text-center  my-2 text-sm md:text-xl font-light">
              {data.date}
            </div>
          </div>
          <div className="flex w-1/2 items-center justify-center gap-1">
            <TechIcons />
          </div>
        </div>
        <div className="w-1/2  flex  justify-evenly  mx-auto">
          <div className=" mx-auto ">
            <Image
              src={"/" + data.image + ".png"}
              alt={data.image}
              className=" md:w-80"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto my-2 flex max-w-[475px] items-center justify-center align-middle  text-center">
        <div className="flex h-full w-full items-center justify-between ">
          <Link
            href={data.githubUrl}
            target="_blank"
            className=" text-xl w-1/2 text-secondary md:text-xl px-12 md:px-8"
          >
            Github
          </Link>
          {data.demoUrl && (
            <Link
              href={data.demoUrl}
              target="_blank"
              className="inline w-1/2 text-secondary text-xl md:text-xl px-12 md:px-8"
            >
              Demo
            </Link>
          )}
        </div>
      </div>
      <div className="mx-auto max-w-[600px]   py-2 text-sm leading-6 md:leading-7 text-left ">
        {data.summary}
      </div>
    </div>
  );
}
