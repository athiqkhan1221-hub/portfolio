"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Workflow,
  Calendar,
  User,
  ArrowRight
} from "lucide-react";
import { GithubIcon } from "./Icons";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#1B1E1B] border border-[#303530] rounded-2xl overflow-y-auto shadow-2xl flex flex-col animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 bg-[#1B1E1B]/95 backdrop-blur-md px-6 py-4 border-b border-[#303530] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#325ea8] uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-[#303530]">•</span>
            <span className="font-mono text-xs text-[#A5ACA5]">{project.status}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#A5ACA5] hover:text-[#F4F3ED] hover:bg-[#202420] border border-transparent hover:border-[#303530] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#325ea8]"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Title & Top Metadata */}
          <div>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#A5ACA5] mb-2">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#325ea8]" />
                {project.date}
              </span>
              <span className="text-[#303530]">|</span>
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#325ea8]" />
                {project.role}
              </span>
            </div>

            <h2
              id="modal-project-title"
              className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F4F3ED] mb-3"
            >
              {project.title}
            </h2>

            <p className="font-body text-base sm:text-lg text-[#A5ACA5] leading-relaxed">
              {project.overview || project.summary}
            </p>
          </div>

          {/* Screenshot Preview */}
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#111311] border border-[#303530]">
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
              alt={`${project.title} detailed visual presentation`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 850px"
            />
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="font-mono text-xs uppercase text-[#A5ACA5] tracking-wider mb-2.5">
              Technology Stack Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs px-3 py-1.5 rounded-md bg-[#202420] border border-[#303530] text-[#325ea8]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Problem & Motivation */}
          <div className="bg-[#202420] border border-[#303530] rounded-xl p-6">
            <div className="flex items-center gap-2 mb-2 text-[#F4F3ED] font-heading font-bold text-lg">
              <Lightbulb className="w-5 h-5 text-[#325ea8]" />
              <h3>Problem &amp; Motivation</h3>
            </div>
            <p className="font-body text-sm sm:text-base text-[#A5ACA5] leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Proposed / Implemented Solution */}
          <div className="bg-[#202420] border border-[#303530] rounded-xl p-6">
            <div className="flex items-center gap-2 mb-2 text-[#F4F3ED] font-heading font-bold text-lg">
              <CheckCircle2 className="w-5 h-5 text-[#325ea8]" />
              <h3>Proposed Solution &amp; Architecture</h3>
            </div>
            <p className="font-body text-sm sm:text-base text-[#A5ACA5] leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Development Process */}
          {project.process && project.process.length > 0 && (
            <div className="bg-[#202420] border border-[#303530] rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4 text-[#F4F3ED] font-heading font-bold text-lg">
                <Workflow className="w-5 h-5 text-[#325ea8]" />
                <h3>Development Process</h3>
              </div>
              <ul className="space-y-3 font-body text-sm text-[#A5ACA5]">
                {project.process.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-[#325ea8] mt-0.5 bg-[#111311] px-1.5 py-0.5 rounded border border-[#303530]">
                      0{idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Features */}
          {project.keyFeatures && (
            <div>
              <h4 className="font-mono text-xs uppercase text-[#A5ACA5] tracking-wider mb-3">
                Key Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-[#111311] border border-[#303530] text-xs font-body text-[#F4F3ED] flex items-center gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#325ea8] shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges & Lessons Learned Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-[#111311] border border-[#303530]">
              <div className="flex items-center gap-2 mb-2 text-sm font-heading font-bold text-[#F4F3ED]">
                <AlertTriangle className="w-4 h-4 text-[#F9B870]" />
                <h4>Challenges Encountered</h4>
              </div>
              <p className="font-body text-xs sm:text-sm text-[#A5ACA5] leading-relaxed">
                {project.challenges}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#111311] border border-[#303530]">
              <div className="flex items-center gap-2 mb-2 text-sm font-heading font-bold text-[#F4F3ED]">
                <Lightbulb className="w-4 h-4 text-[#325ea8]" />
                <h4>Lessons Learned</h4>
              </div>
              <p className="font-body text-xs sm:text-sm text-[#A5ACA5] leading-relaxed">
                {project.lessonsLearned}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer Links */}
        <div className="sticky bottom-0 bg-[#1B1E1B]/95 backdrop-blur-md px-6 py-4 border-t border-[#303530] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-2 px-4"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="font-mono text-xs text-[#6E756E] border border-[#303530] px-3 py-2 rounded-md bg-[#111311]">
                Live Demo: Pending Deployment
              </span>
            )}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs py-2 px-4"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            ) : (
              <span className="font-mono text-xs text-[#6E756E] border border-[#303530] px-3 py-2 rounded-md bg-[#111311]">
                GitHub: Private Repository
              </span>
            )}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="text-xs font-mono text-[#325ea8] hover:underline flex items-center gap-1.5"
            onClick={onClose}
          >
            <span>Dedicated Page View</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
