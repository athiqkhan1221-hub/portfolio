
"use client";

import { useState } from "react";
import { contactDetails } from "@/data/socials";
import {
  ArrowDown,
  Terminal,
  Code2,
  Sparkles,
  MapPin,
  GraduationCap,
  Copy,
  Check
} from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("config");
  const [copied, setCopied] = useState(false);

  const copySnippet = () => {
    navigator.clipboard.writeText("git clone https://github.com/athiqkhan1221-hub/portfolio.git");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-[#303530]">
      {/* Background subtle atmospheric radial glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none opacity-20 blur-[130px] rounded-full"
        style={{
          background: "radial-gradient(circle, #C2F970 0%, #111311 70%)"
        }}
        aria-hidden="true"
      />

      <div className="editorial-container relative z-10">
        {/* Top Eyebrow & Status Pill */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="section-label mb-0">SOFTWARE × AI × CREATIVITY</span>
          </div>

          {contactDetails.statusActive && (
            <div className="status-pill live text-xs py-1 px-3">
              <span className="pulse-dot" />
              <span>{contactDetails.status}</span>
            </div>
          )}
        </div>

        {/* Main Grid: Left Editorial Copy & Right Interactive Technical Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Expressive Typography */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4.15rem] font-extrabold text-[#F4F3ED] leading-[1.08] tracking-tight">
              I turn ideas into{" "}
              <span className="text-[#C2F970] inline-block relative underline decoration-[#C2F970]/30 underline-offset-8">
                digital experiences.
              </span>
            </h1>

            <p className="font-body text-base sm:text-lg md:text-xl text-[#A5ACA5] max-w-2xl leading-relaxed">
              I&apos;m Athiq, an AIML engineering student interested in building web
              applications, exploring AI-powered workflows, and creating visual
              stories. I enjoy bringing technical ideas to life through code and
              creativity.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#work" className="btn-primary">
                <span>Explore my work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a href="#contact" className="btn-secondary">
                <span>Let&apos;s collaborate</span>
              </a>
            </div>

            {/* Restrained Identity & Location Bar */}
            <div className="pt-6 mt-4 border-t border-[#303530] flex flex-wrap items-center gap-6 text-xs font-mono text-[#A5ACA5]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C2F970]" />
                <span className="tracking-wider uppercase">CHENNAI, INDIA</span>
              </div>
              <span className="text-[#303530]">|</span>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#C2F970]" />
                <span className="tracking-wider uppercase">AIML ENGINEERING STUDENT</span>
              </div>
            </div>
          </div>

          {/* Right Column: Code & Architecture Terminal Showcase */}
          <div className="lg:col-span-5">
            <div className="bg-[#1B1E1B] border border-[#303530] rounded-xl overflow-hidden shadow-2xl transition-all hover:border-[#444B44]">
              {/* Window Title Bar & Tabs */}
              <div className="bg-[#202420] px-4 py-3 border-b border-[#303530] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#303530] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#303530] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#303530] inline-block" />
                </div>

                {/* Tab Switchers */}
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setActiveTab("config")}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded flex items-center gap-1.5 transition-colors ${activeTab === "config"
                        ? "bg-[#111311] text-[#C2F970] border border-[#303530]"
                        : "text-[#A5ACA5] hover:text-[#F4F3ED]"
                      }`}
                  >
                    <Code2 className="w-3 h-3" />
                    <span>athiq.js</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("terminal")}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded flex items-center gap-1.5 transition-colors ${activeTab === "terminal"
                        ? "bg-[#111311] text-[#C2F970] border border-[#303530]"
                        : "text-[#A5ACA5] hover:text-[#F4F3ED]"
                      }`}
                  >
                    <Terminal className="w-3 h-3" />
                    <span>env.sh</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("creative")}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded flex items-center gap-1.5 transition-colors ${activeTab === "creative"
                        ? "bg-[#111311] text-[#C2F970] border border-[#303530]"
                        : "text-[#A5ACA5] hover:text-[#F4F3ED]"
                      }`}
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>ai.spec</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={copySnippet}
                  title="Copy snippet"
                  className="p-1 rounded text-[#6E756E] hover:text-[#C2F970] transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#C2F970]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Code Panel Contents */}
              <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto min-h-[310px] bg-[#111311]">
                {activeTab === "config" && (
                  <div className="space-y-1">
                    <p className="text-[#6E756E]">{"// Athiq Khan · Developer Profile"}</p>
                    <p>
                      <span className="text-[#C2F970]">const</span> developer = &#123;
                    </p>
                    <p className="pl-4">
                      name: <span className="text-[#F4F3ED]">&quot;M. Athiq Khan&quot;</span>,
                    </p>
                    <p className="pl-4">
                      education: <span className="text-[#F4F3ED]">&quot;B.E. in AI &amp; ML&quot;</span>,
                    </p>
                    <p className="pl-4">
                      college: <span className="text-[#A5ACA5]">&quot;Dhaanish Ahmed Chennai College&quot;</span>,
                    </p>
                    <p className="pl-4">
                      primaryFocus: <span className="text-[#C2F970]">&quot;Full-Stack Web Development&quot;</span>,
                    </p>
                    <p className="pl-4">
                      languages: [<span className="text-[#F4F3ED]">&quot;Python&quot;</span>, <span className="text-[#F4F3ED]">&quot;JavaScript&quot;</span>],
                    </p>
                    <p className="pl-4">
                      webStack: [<span className="text-[#C2F970]">&quot;React.js&quot;</span>, <span className="text-[#C2F970]">&quot;Node.js&quot;</span>, <span className="text-[#F4F3ED]">&quot;HTML/CSS&quot;</span>],
                    </p>
                    <p className="pl-4">
                      creativeInterests: [
                    </p>
                    <p className="pl-8 text-[#A5ACA5]">
                      &quot;Prompt Engineering&quot;, &quot;AI Video Generation&quot;, &quot;Video Editing&quot;
                    </p>
                    <p className="pl-4">],</p>
                    <p className="pl-4">
                      openForOpportunities: <span className="text-[#C2F970]">true</span>
                    </p>
                    <p>&#125;;</p>
                    <p className="pt-2 text-[#6E756E]">
                      <span className="text-[#C2F970]">export default</span> developer;
                    </p>
                  </div>
                )}

                {activeTab === "terminal" && (
                  <div className="space-y-2 text-[#A5ACA5]">
                    <div className="flex items-center gap-2">
                      <span className="text-[#C2F970]">$</span>
                      <span className="text-[#F4F3ED]">whoami</span>
                    </div>
                    <p className="text-[#F4F3ED]">athiq_khan@chennai ~ aiml-engineer</p>

                    <div className="flex items-center gap-2 pt-2">
                      <span className="text-[#C2F970]">$</span>
                      <span className="text-[#F4F3ED]">git status</span>
                    </div>
                    <p className="text-[#C2F970]">On branch main: building-new-ideas</p>
                    <p className="text-[#A5ACA5]">Changes staged for commit:</p>
                    <p className="pl-4 text-[#C2F970]">new file: course-explorer.jsx</p>
                    <p className="pl-4 text-[#C2F970]">new file: prompt-eval-matrix.py</p>
                    <p className="pl-4 text-[#70E2F9]">modified: portfolio-architecture.css</p>

                    <div className="flex items-center gap-2 pt-2">
                      <span className="text-[#C2F970]">$</span>
                      <span className="text-[#F4F3ED]">cat goals.txt</span>
                    </div>
                    <p className="text-[#F4F3ED]">
                      &gt; Secure high-impact internship · Ship real software products
                    </p>
                  </div>
                )}

                {activeTab === "creative" && (
                  <div className="space-y-1.5 text-[#A5ACA5]">
                    <p className="text-[#C2F970]">{"// Creative Media & AI Directing Specs"}</p>
                    <p className="text-[#F4F3ED]">
                      [Pipeline]: <span className="text-[#C2F970]">Generative Diffusion + Beat Sync</span>
                    </p>
                    <p>
                      [Aspect Ratios]: <span className="text-[#F4F3ED]">16:9 Cinema &amp; 9:16 Social Reels</span>
                    </p>
                    <p>
                      [Prompt Rule]: <span className="text-[#A5ACA5]">Strict spatial tokens, lens focal length</span>
                    </p>
                    <p className="pt-1 text-[#6E756E]">Sample Prompt Cue:</p>
                    <div className="p-2.5 rounded bg-[#1B1E1B] border border-[#303530] text-[#F4F3ED] text-[11px]">
                      &quot;Cinematic 35mm anamorphic tracking shot, obsidian dusk, volumetric lighting --ar 16:9&quot;
                    </div>
                    <p className="pt-1 text-[#C2F970]">
                      Status: Continuous prompt testing &amp; timeline editing
                    </p>
                  </div>
                )}
              </div>

              {/* Terminal Bottom Status Bar */}
              <div className="bg-[#1B1E1B] px-4 py-2 border-t border-[#303530] flex items-center justify-between text-[11px] font-mono text-[#6E756E]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C2F970]" />
                  <span>UTF-8</span>
                </div>
                <span>AIML-CHENNAI // 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
