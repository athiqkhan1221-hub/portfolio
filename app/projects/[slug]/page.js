import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Calendar,
  User,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Workflow
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const resolved = params instanceof Promise ? await params : params;
  const slug = resolved?.slug;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project | Athiq Khan" };

  return {
    title: `${project.title} — Athiq Khan`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-[#111311] text-[#F4F3ED] py-16 md:py-24">
      <div className="editorial-container max-w-4xl">
        {/* Back navigation */}
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 font-mono text-xs text-[#A5ACA5] hover:text-[#325ea8] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all projects</span>
        </Link>

        {/* Header Metadata */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs text-[#325ea8] uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-[#303530]">•</span>
            <span className="status-pill in-progress text-[10px]">
              {project.status}
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-[#A5ACA5] pt-2 border-b border-[#303530] pb-6">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#325ea8]" />
              <span>{project.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#325ea8]" />
              <span>{project.role}</span>
            </div>
          </div>
        </div>

        {/* Visual Preview */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#1B1E1B] border border-[#303530] mb-12 shadow-2xl">
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
            className="object-cover"
            priority
          />
        </div>

        {/* Deep Dive Content */}
        <div className="space-y-10 font-body text-base text-[#A5ACA5] leading-relaxed">
          {/* Tech Stack */}
          <div>
            <h3 className="font-mono text-xs uppercase text-[#A5ACA5] tracking-wider mb-3">
              Technologies Studied &amp; Applied
            </h3>
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

          {/* Overview */}
          <div className="bg-[#1B1E1B] border border-[#303530] rounded-xl p-6 sm:p-8">
            <h3 className="font-heading font-bold text-xl text-[#F4F3ED] mb-3">
              Project Overview
            </h3>
            <p>{project.overview || project.summary}</p>
          </div>

          {/* Problem & Motivation */}
          <div className="bg-[#1B1E1B] border border-[#303530] rounded-xl p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-3 text-[#F4F3ED] font-heading font-bold text-xl">
              <Lightbulb className="w-5 h-5 text-[#325ea8]" />
              <h3>Problem &amp; Motivation</h3>
            </div>
            <p>{project.problem}</p>
          </div>

          {/* Implemented Solution */}
          <div className="bg-[#1B1E1B] border border-[#303530] rounded-xl p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-3 text-[#F4F3ED] font-heading font-bold text-xl">
              <CheckCircle2 className="w-5 h-5 text-[#325ea8]" />
              <h3>Solution &amp; Implementation</h3>
            </div>
            <p>{project.solution}</p>
          </div>

          {/* Development Process */}
          {project.process && (
            <div className="bg-[#1B1E1B] border border-[#303530] rounded-xl p-6 sm:p-8">
              <div className="flex items-center gap-2.5 mb-5 text-[#F4F3ED] font-heading font-bold text-xl">
                <Workflow className="w-5 h-5 text-[#325ea8]" />
                <h3>Development Process</h3>
              </div>
              <ul className="space-y-4">
                {project.process.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-[#325ea8] mt-0.5 bg-[#111311] px-2 py-0.5 rounded border border-[#303530]">
                      0{idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Challenges & Lessons Learned */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-[#1B1E1B] border border-[#303530]">
              <div className="flex items-center gap-2 mb-2 text-[#F4F3ED] font-heading font-bold text-base">
                <AlertTriangle className="w-4 h-4 text-[#F9B870]" />
                <h4>Challenges</h4>
              </div>
              <p className="text-sm leading-relaxed">{project.challenges}</p>
            </div>

            <div className="p-6 rounded-xl bg-[#1B1E1B] border border-[#303530]">
              <div className="flex items-center gap-2 mb-2 text-[#F4F3ED] font-heading font-bold text-base">
                <Lightbulb className="w-4 h-4 text-[#325ea8]" />
                <h4>Lessons Learned</h4>
              </div>
              <p className="text-sm leading-relaxed">{project.lessonsLearned}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 pt-8 border-t border-[#303530] flex flex-wrap items-center justify-between gap-4">
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
              <span className="font-mono text-xs text-[#6E756E] border border-[#303530] px-3 py-2 rounded-md bg-[#1B1E1B]">
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
              <span className="font-mono text-xs text-[#6E756E] border border-[#303530] px-3 py-2 rounded-md bg-[#1B1E1B]">
                GitHub: Private Repository
              </span>
            )}
          </div>

          <Link href="/#work" className="btn-ghost text-xs">
            Back to All Works
          </Link>
        </div>

        {/* Prev / Next Pagination */}
        <div className="mt-12 pt-8 border-t border-[#303530] grid grid-cols-2 gap-4">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="p-4 rounded-xl bg-[#1B1E1B] border border-[#303530] hover:border-[#444B44] transition-colors flex flex-col"
            >
              <span className="font-mono text-[10px] text-[#6E756E] uppercase mb-1">
                ← Previous Project
              </span>
              <span className="font-heading font-semibold text-sm text-[#F4F3ED] hover:text-[#325ea8] truncate">
                {prevProject.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextProject && (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="p-4 rounded-xl bg-[#1B1E1B] border border-[#303530] hover:border-[#444B44] transition-colors flex flex-col text-right ml-auto w-full"
            >
              <span className="font-mono text-[10px] text-[#6E756E] uppercase mb-1">
                Next Project →
              </span>
              <span className="font-heading font-semibold text-sm text-[#F4F3ED] hover:text-[#325ea8] truncate">
                {nextProject.title}
              </span>
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
