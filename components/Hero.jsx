"use client";

import HeroInteractivePortrait from "./HeroInteractivePortrait";

export default function Hero() {
  return (
    <section className="relative min-h-screen lg:h-screen flex flex-col justify-center overflow-hidden border-b border-[#303530] pt-24 pb-12 sm:pt-28 sm:pb-14 lg:pt-20 lg:pb-10">
      {/* Background subtle cinematic studio radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[480px] pointer-events-none opacity-20 blur-[130px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, rgba(17, 19, 17, 0) 70%)"
        }}
        aria-hidden="true"
      />

      <div className="editorial-container relative z-10 w-full my-auto pt-3 sm:pt-5 lg:pt-7">
        {/* Main Grid: Left Content & Right Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center">
          {/* Left Column: All Hero Content */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
            {/* Expressive Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.15rem] xl:text-[3.55rem] font-extrabold text-[#F4F3ED] leading-[1.1] tracking-tight">
              I turn ideas into{" "}
              <span className="text-white inline-block relative underline decoration-[#325ea8] underline-offset-6">
                digital experiences.
              </span>
            </h1>

            {/* Bio Paragraph */}
            <p className="font-body text-sm sm:text-base md:text-lg text-[#A5ACA5] max-w-xl leading-relaxed">
              I&apos;m Athiq, an AIML engineering student interested in building web
              applications, exploring AI-powered workflows, and creating visual
              stories. I enjoy bringing technical ideas to life through code and
              creativity.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#work"
                className="btn-primary text-xs sm:text-sm py-2.5 px-5 !bg-[#325ea8] hover:!bg-[#264b8a] !text-white !border-[#4876c4] shadow-md shadow-[#325ea8]/25 transition-all"
              >
                <span>Explore my work</span>
              </a>

              <a href="#contact" className="btn-secondary text-xs sm:text-sm py-2.5 px-5">
                <span>Let&apos;s collaborate</span>
              </a>
            </div>

            {/* Location & Education Bar */}
            <div className="pt-4 mt-1 border-t border-[#303530] flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-[#A5ACA5]">
              <div className="flex items-center gap-2">
                <span className="tracking-wider uppercase">CHENNAI, INDIA</span>
              </div>
              <span className="text-[#303530] hidden sm:inline">|</span>
              <div className="flex items-center gap-2">
                <span className="tracking-wider uppercase">AIML ENGINEERING STUDENT</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Editorial Photo */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <HeroInteractivePortrait />
          </div>
        </div>
      </div>
    </section>
  );
}
