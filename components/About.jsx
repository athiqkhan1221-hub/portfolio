"use client";

import Image from "next/image";
import { contactDetails } from "@/data/socials";
import {
  GraduationCap,
  Code,
  Sparkles,
  Compass,
  ArrowUpRight,
  BookOpen,
  MapPin
} from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: GraduationCap,
      title: "Academic Background",
      detail:
        "B.E. in Artificial Intelligence & Machine Learning at Dhaanish Ahmed Chennai College of Engineering, Chennai.",
    },
    {
      icon: Code,
      title: "Web Development",
      detail:
        "Practical focus on HTML, CSS, JavaScript, React.js, and Node.js for crafting functional digital experiences.",
    },
    {
      icon: Sparkles,
      title: "AI & Creative Media",
      detail:
        "Hands-on exploration in prompt engineering, AI video generation diffusion workflows, and precision video editing.",
    },
    {
      icon: Compass,
      title: "Engineering Mindset",
      detail:
        "Learning through direct implementation, building software solutions, and continuous refinement of fundamentals.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 border-b border-[#303530] relative bg-[#151815]">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="mb-14">
          <span className="section-label">A LITTLE ABOUT ME</span>
          <h2 className="section-heading">
            Still learning. <span className="text-[#C2F970]">Always building.</span>
          </h2>
        </div>

        {/* Editorial Layout: Portrait Card + Narrative Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Editorial Portrait / Monogram Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#202420] border border-[#303530] rounded-2xl p-4 sm:p-5 shadow-xl relative overflow-hidden group">
              {/* Optional Portrait Frame */}
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-[#111311] border border-[#303530]">
                <Image
                  src="/images/athiq-portrait-editorial.svg"
                  alt="M. Athiq Khan — Editorial Profile Graphic"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 420px"
                  priority
                />
              </div>

              {/* Caption & Personal Details Box */}
              <div className="mt-4 pt-4 border-t border-[#303530] flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-base text-[#F4F3ED]">
                      {contactDetails.name}
                    </h3>
                    <p className="font-mono text-xs text-[#A5ACA5]">
                      {contactDetails.degree}
                    </p>
                  </div>
                  <div className="status-pill live text-[10px] py-0.5 px-2">
                    <span className="pulse-dot" />
                    <span>Active</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-[#6E756E] pt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C2F970]" />
                  <span>{contactDetails.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Biography & Engineering Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* The Verified Biography text */}
            <div className="space-y-5 font-body text-base sm:text-lg text-[#A5ACA5] leading-relaxed">
              <p className="text-[#F4F3ED] font-medium text-lg sm:text-xl leading-relaxed">
                I&apos;m <span className="text-[#C2F970] font-semibold">M. Athiq Khan</span>, an Artificial Intelligence and Machine Learning engineering student at Dhaanish Ahmed Chennai College of Engineering.
              </p>

              <p>
                I&apos;m interested in how technology moves from an idea to something useful. I&apos;ve studied web technologies including HTML, CSS, JavaScript, React.js, and Node.js, alongside Python and prompt engineering.
              </p>

              <p>
                Outside traditional development, I explore AI video generation and video editing. I enjoy the creative side of technology just as much as the technical side: shaping an idea, experimenting with tools, and presenting the result.
              </p>

              <p className="text-[#F4F3ED]">
                My goal is to keep strengthening my engineering fundamentals, build useful products, and learn by making real projects.
              </p>
            </div>

            {/* Structured Pillars Grid */}
            <div className="pt-4 border-t border-[#303530]">
              <h4 className="font-mono text-xs uppercase text-[#A5ACA5] tracking-wider mb-4">
                Core Foundations
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pillars.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#1B1E1B] border border-[#303530] hover:border-[#444B44] transition-colors"
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div className="p-1.5 rounded-md bg-[#202420] text-[#C2F970]">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h5 className="font-heading font-bold text-sm text-[#F4F3ED]">
                          {item.title}
                        </h5>
                      </div>
                      <p className="font-body text-xs text-[#A5ACA5] leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Action */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a href="#skills" className="btn-secondary text-xs">
                <span>View Full Toolkit</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C2F970]" />
              </a>
              <a href="#contact" className="btn-ghost text-xs">
                <span>Get In Touch →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
