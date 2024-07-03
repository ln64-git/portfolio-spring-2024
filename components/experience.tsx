"use client";

import { Image } from "@nextui-org/react";

// import useWindowSize from "@/utils/window-size";

interface JobProps {
  company: string;
  duration: string;
  image: string;
  role?: string;
  summary?: string;
  bulletArray: string[];
}

export default function Experience(data: JobProps) {
  const durationParts = data.duration.split(" - ");
  const startDate = durationParts[0];
  const startDateParts = startDate.split(" ");
  const startMonth = startDateParts[0];
  const startYear = startDateParts[1];

  const endDate = durationParts[1] === "Current" ? "Present" : durationParts[1];
  const endDateParts = endDate.split(" ");
  const endMonth = endDateParts[0];
  const endYear = endDateParts[1];

  // const windowSize = useWindowSize();

  const DurationFormat = () => {
    // if (windowSize > 400) {
    return (
      <div className="flex justify-center">
        <div className="mx-6 w-1/2 text-right font-light  ">
          <div>{startDate}</div>
        </div>
        <div className="">-</div>
        <div className="mx-6 w-1/2 text-left font-light  ">
          <div>{endDate}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="mx-auto  max-w-[700px] py-2 md:py-2">
      <div className="flex h-[40px]  my-2 items-center justify-center text-2xl md:text-3xl  md:my-4  ">
        {data.role}
      </div>

      <div className=" flex items-center justify-around overflow-x-hidden ">
        <div className=" flex w-1/2 justify-center ">
          <Image
            width={300}
            height={300}
            src={`/${data.image}.png`}
            alt={data.image}
          />
        </div>
      </div>
      <div className="py-3">
        <div className="mx-auto max-w-[700px] pb-1 text-center text-xl font-medium  ">
          {data.company}
        </div>
        <div className=" py-1 text-center text-sm">{DurationFormat()}</div>
        <div className=" pt-1 text-sm text-left leading-6 md:leading-7 max-w-[650px] mx-auto my-2">
          {data.summary}
        </div>
        <ul className=" flex flex-col justify-center items-center">
          {data.bulletArray.map((bullet, index) => (
            <li
              className=" px-auto list-disc pt-4 text-sm  text-left leading-6 md:leading-7 max-w-[580px] mx-4  "
              key={index}
            >
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
