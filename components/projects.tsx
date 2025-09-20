"use client";
import Image from "next/image";
import { projectsData } from "../data/projects";

export default function Projects() {
  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              onClick={() => handleClick(project.link)}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-sm"
            >
              <div className="h-48 bg-gray-200">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={384}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
