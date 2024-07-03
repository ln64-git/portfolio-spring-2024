"use client";
import projectData from "../../content/project-data";
import Project from "@/components/project";

export default function ProjectsPage() {
  return (
    <div className="relative mx-auto max-w-[1250px] font-montserrat py-2 px-8">
      <div className="relative z-10">
        {projectData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
