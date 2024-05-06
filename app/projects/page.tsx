"use client";
import projectData from "../../content/project-data";
import Project from "@/components/project";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-[1250px]  px-2 ">
      <div>
        {projectData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
