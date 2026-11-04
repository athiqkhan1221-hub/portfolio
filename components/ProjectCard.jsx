"use client";

import Image from "next/image";
import { ArrowUpRight, ExternalLink, User, Calendar } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function ProjectCard({ project, onOpenDetails }) {
  return (
    <article className="w-full group bg-[#202420] border border-[#303530] rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#444B44] hover:shadow-xl hover:shadow-black/50">
      {/* Top: Card Media / Visual */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#111311] border-b border-[#303530]">
        <Image
          src={`/images/project-${
            project.id === "personal-portfolio"
              ? "portfolio"
              : project.id === "course-explorer"
              ? "course"
              : project.id === "ai-video-showcase"
              ? "video"
              : project.id === "screentime-dashboard"
              ? "screentime"
              : "prompt"
          }.svg`}
          alt={`${project.title} interface preview`}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Category Pill */}
        <div className="absolute top-3 right-3 z-10 bg-[#111311]/80 backdrop-blur-sm border border-[#303530] px-2.5 py-1 rounded-md text-[10px] font-mono text-[#A5ACA5]">
          {project.category}
        </div>
      </div>

      {/* Middle: Content & Metadata */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#6E756E] mb-2">
            <Calendar className="w-3.5 h-3.5 text-[#325ea8]" />
            <span>{project.date}</span>
            <span>•</span>
            <User className="w-3.5 h-3.5 text-[#325ea8]" />
            <span className="truncate">{project.role}</span>
          </div>

          <h3 className="font-heading text-xl font-bold text-[#F4F3ED] group-hover:text-[#325ea8] transition-colors mb-2.5">
            {project.title}
          </h3>

          <p className="font-body text-sm text-[#A5ACA5] line-clamp-3 mb-5 leading-relaxed">
            {project.summary}
          </p>
        </div>

        <div>
          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#1B1E1B] border border-[#303530] text-[#A5ACA5]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-[#303530] flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => onOpenDetails(project)}
              className="text-xs font-heading font-bold text-[#F4F3ED] hover:text-[#325ea8] flex items-center gap-1.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#325ea8]"
            >
              <span>Project Details</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#325ea8]" />
            </button>

            <div className="flex items-center gap-2">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded text-[#A5ACA5] hover:text-[#325ea8] hover:bg-[#1B1E1B] border border-transparent hover:border-[#303530] transition-colors"
                  aria-label={`View ${project.title} GitHub repository`}
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              ) : (
                <span
                  className="p-1.5 text-[#4A504A] cursor-not-allowed"
                  title="Repository currently private / in development"
                >
                  <GithubIcon className="w-4 h-4" />
                </span>
              )}

              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded text-[#A5ACA5] hover:text-[#325ea8] hover:bg-[#1B1E1B] border border-transparent hover:border-[#303530] transition-colors"
                  aria-label={`View ${project.title} live demo`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span
                  className="p-1.5 text-[#4A504A] cursor-not-allowed"
                  title="Demo link not published yet"
                >
                  <ExternalLink className="w-4 h-4" />
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
