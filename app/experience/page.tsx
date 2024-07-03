"use client";
import experienceData from "../../content/experience-data";
import Experience from "@/components/experience";

interface ExperienceItem {
  company: string;
  duration: string;
  image: string;
  role: string;
  summary: string;
  bulletArray: string[];
}

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-[1250px] font-montserrat px-6  ">
      {experienceData.map((experience: ExperienceItem, index: number) => (
        <Experience
          key={index}
          company={experience.company}
          duration={experience.duration}
          image={experience.image}
          role={experience.role}
          summary={experience.summary}
          bulletArray={experience.bulletArray}
        />
      ))}
    </div>
  );
}
