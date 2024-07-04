"use client";
import { useState, useEffect } from "react";
import { title, subtitle } from "@/components/primitives";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import { homeData, topSkills } from "@/content/home-data";
import { motion } from "framer-motion";

interface Experience {
  name: string;
  skills: string;
  date: string;
  summary: string;
}

interface Category {
  category: string;
  experiences: Experience[];
}

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedSkills = isSmallScreen ? topSkills.slice(0, 6) : topSkills;

  return (
    <div className="mt-1 h-full ">
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-2xl mx-2 text-center justify-center">
          <TextGenerateEffect
            className={title()}
            words="Innovative software developer with a foundation in Cybersecurity, and Full-Stack Development."
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 1 }}
          >
          </motion.div>
        </div>
      </section>
      <div className="max-w-[800px] mx-auto">
        <div className="flex justify-center pb-10 md:pb-14">
          <div className={`mt-10 w-full text-xl grid gap-4 ${isSmallScreen ? 'grid-cols-3' : 'grid-cols-4'} grid-rows-2 mx-8`}>
            {displayedSkills.map((skill, index) => (
              <div key={index} className="flex-grow m-auto">{skill}</div>
            ))}
          </div>
        </div>

        {homeData.map((category: Category, index: number) => (
          <div key={index}>
            <p className="py-2 pl-10">{category.category.toUpperCase().replace('_', ' ')}</p>
            {category.experiences.map((experience: Experience, expIndex: number) => (
              <div key={expIndex} className="leading-6 my-4 md:my-10 mx-10">
                <p className="text-xl py-1">{experience.name}</p>
                <div className="flex text-xs md:text-md py-2 justify-between items-center flex-nowrap">
                  <p className="flex-grow">{experience.skills}</p>
                  <p className="ml-4 flex-shrink-0">{experience.date}</p>
                </div>
                <p className="text-sm  leading-7 md:text-md md:leading-8">{experience.summary}</p>
              </div>
            ))}
          </div>
        ))}

        {/* <div className="flex-grow  w-full mx-auto border-b py-4 mb-12 border-default max-w-[850px]"></div> */}
        <div className="pt-10 pb-20 pl-10 text-sm md:text-md">
          <p className="text-sm md:text-lg">EDUCATION & CERTIFICATES</p>
          <p>2022 - Graduate Certificate in Full Stack Java Development, Tech Elevator</p>
          <p>2023 - Graduate Certificate in Cybersecurity, Google </p>
        </div>
      </div>
    </div>
  );
}
