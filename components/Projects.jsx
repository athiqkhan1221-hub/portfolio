"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { FolderGit2 } from "lucide-react";

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section id="work" className="py-24 md:py-32 border-b border-[#303530] relative">
      <div className="editorial-container">
        {/* Section Header (Center Aligned) */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="section-heading">
            Things I&apos;ve built. <br />
            <span className="text-[#A5ACA5]">Things I&apos;m figuring out.</span>
          </h2>
          <p className="section-description mx-auto">
            A growing collection of projects, experiments, and practical solutions.
            Each represents real exploration without fabricated claims.
          </p>
        </div>

        {/* Project Editorial Grid (Center Aligned) */}
        <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex"
            >
              <ProjectCard
                project={project}
                onOpenDetails={setActiveModalProject}
              />
            </div>
          ))}
        </div>

        {/* Editorial Project Note Banner */}
        <div className="mt-12 p-6 rounded-xl bg-[#1B1E1B] border border-[#303530] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FolderGit2 className="w-5 h-5 text-[#325ea8] shrink-0" />
            <p className="font-body text-xs sm:text-sm text-[#A5ACA5]">
              <strong className="text-[#F4F3ED]">Transparency note:</strong> These projects represent ongoing academic coursework and personal experiments. As live deployments and repositories are updated, links will become active automatically.
            </p>
          </div>
          <a
            href="#contact"
            className="btn-ghost shrink-0 text-xs font-mono"
          >
            Suggest an idea →
          </a>
        </div>
      </div>

      {/* Deep-dive Project Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
