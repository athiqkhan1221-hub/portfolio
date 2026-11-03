"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

// Dynamically import the 3D Faceted Origami Scene with SSR disabled
const Hero3DScene = dynamic(() => import("./Hero3DScene"), {
  ssr: false,
  loading: () => <FacetedSceneFallback />,
});

// ============================================================================
// FACETED 3D GEOMETRIC FALLBACK (MATCHING REFERENCE IMAGE BACKGROUND)
// Flat-shaded geometric polygon facets for non-WebGL browsers & SSR
// ============================================================================
function FacetedSceneFallback() {
  return (
    <div
      className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="absolute -right-6 top-1/2 -translate-y-1/2 w-80 h-96 opacity-25"
        viewBox="0 0 320 400"
        fill="none"
      >
        <polygon points="120,40 280,80 200,180" fill="#242924" stroke="#303530" strokeWidth="0.5" />
        <polygon points="280,80 310,220 200,180" fill="#1b1e1b" stroke="#303530" strokeWidth="0.5" />
        <polygon points="200,180 310,220 230,340" fill="#2a302a" stroke="#303530" strokeWidth="0.5" />
        <polygon points="200,180 230,340 90,260" fill="#1e221e" stroke="#303530" strokeWidth="0.5" />
        <polygon points="120,40 200,180 90,260" fill="#161816" stroke="#303530" strokeWidth="0.5" />
      </svg>
    </div>
  );
}

// ============================================================================
// MAIN HERO INTERACTIVE PORTRAIT COMPONENT
// Redesigned to match the reference image's editorial presentation & composition
// ============================================================================
export default function HeroInteractivePortrait() {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const portraitWrapperRef = useRef(null);

  // Performance refs for 3D scene (prevents full React re-renders on cursor frames)
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);

  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768;
  });
  const [webGLSupported] = useState(() => {
    if (typeof window === "undefined") return true;
    try {
      const canvas = document.createElement("canvas");
      return Boolean(
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
      );
    } catch {
      return false;
    }
  });

  // 1. Responsive listener
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 2. Smooth GSAP entrance animation
  useEffect(() => {
    if (!portraitWrapperRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(portraitWrapperRef.current, { opacity: 1, scale: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      portraitWrapperRef.current,
      {
        opacity: 0,
        y: 28,
        scale: 0.94,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.15,
        ease: "power3.out",
        delay: 0.15,
      }
    );
  }, []);

  // 3. Scroll tracking for background 3D depth
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const progress =
        (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      scrollRef.current = Math.min(Math.max(progress, 0), 1);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 4. Subtle, high-end 3D tilt tracking cursor position
  const handleMouseMove = useCallback(
    (e) => {
      if (isMobile) return;
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      // Coordinates normalized from -1 to 1
      const normX = (clientX / rect.width) * 2 - 1;
      const normY = -(clientY / rect.height) * 2 + 1;

      mouseRef.current.x = Math.max(-1, Math.min(1, normX));
      mouseRef.current.y = Math.max(-1, Math.min(1, normY));

      // Elegant, restrained perspective tilt on the portrait card
      if (cardRef.current) {
        const tiltX = -normY * 6.5; // deg
        const tiltY = normX * 7.5;  // deg
        cardRef.current.style.transform = `perspective(1100px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(12px)`;
      }
    },
    [isMobile]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseRef.current.x = 0;
    mouseRef.current.y = 0;

    if (cardRef.current) {
      cardRef.current.style.transform =
        "perspective(1100px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[340px] sm:max-w-[370px] lg:max-w-[390px] xl:max-w-[410px] mx-auto flex items-center justify-center select-none py-1"
    >
      {/* ==================================================================
          A. 3D BACKGROUND: FOLDED GEOMETRIC FACETS (FROM REFERENCE IMAGE)
          ================================================================== */}
      {webGLSupported ? (
        <Hero3DScene
          mouse={mouseRef}
          isHovered={isHovered}
          scrollProgress={scrollRef}
          isMobile={isMobile}
        />
      ) : (
        <FacetedSceneFallback />
      )}

      {/* ==================================================================
          B. VERTICAL EDITORIAL GUIDELINE (MATCHING REFERENCE HERO MARGIN)
          Echoes "Product designer | 2024" vertical marker from reference
          ================================================================== */}
      <div
        className="hidden xl:flex absolute -left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-3 pointer-events-none opacity-45"
        aria-hidden="true"
      >
        <span
          className="text-[10px] font-mono tracking-[0.22em] text-[#A5ACA5] uppercase whitespace-nowrap"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          AIML ENGINEER
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#A5ACA5] to-transparent" />
        <span className="text-[10px] font-mono text-[#6E756E]">2025</span>
      </div>

      {/* ==================================================================
          C. EDITORIAL PORTRAIT CARD (MATCHING REFERENCE ARCHITECTURE)
          Tall upright presentation with diagonal architectural cut
          ================================================================== */}
      <div
        ref={portraitWrapperRef}
        className="relative z-10 w-full opacity-0"
        style={{
          animation: "floatSlow 6.8s ease-in-out infinite",
        }}
      >
        {/* Soft Ambient Studio Lighting Backdrop Glow */}
        <div
          className={`absolute -inset-4 sm:-inset-6 rounded-3xl blur-2xl transition-all duration-700 pointer-events-none ${
            isHovered
              ? "bg-gradient-to-tr from-white/10 via-[#C2F970]/8 to-transparent opacity-100 scale-105"
              : "bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-60"
          }`}
          aria-hidden="true"
        />

        {/* 3D Tiltable Card Wrapper */}
        <div
          ref={cardRef}
          className="relative transition-transform duration-300 ease-out will-change-transform"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Main Architectural Container */}
          <div className="relative w-full rounded-2xl sm:rounded-3xl p-[1.5px] bg-gradient-to-b from-white/20 via-[#303530] to-white/5 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.92)] backdrop-blur-sm">
            
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#141714] border border-[#242924]">
              
              {/* Photo Frame */}
              <div
                className="relative w-full h-[360px] sm:h-[390px] md:h-[420px] lg:h-[440px] xl:h-[470px] overflow-hidden bg-[#0F110F]"
              >
                {/* Athiq's Authentic Personal Profile Photo */}
                <Image
                  src="/images/athiq-profile.png"
                  alt="M. Athiq Khan — AIML & Software Developer"
                  fill
                  priority
                  sizes="(max-width: 640px) 340px, (max-width: 768px) 400px, 460px"
                  className={`object-cover object-[center_17%] transition-all duration-700 will-change-transform contrast-[1.04] ${
                    isHovered ? "scale-[1.03]" : "scale-100"
                  }`}
                />

                {/* Studio Specular Glass Sheen Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/8 to-white/15 pointer-events-none transition-opacity duration-500 ${
                    isHovered ? "opacity-100" : "opacity-40"
                  }`}
                  aria-hidden="true"
                />

                {/* Subtle Studio Bottom Gradient Blend */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#141714] via-transparent to-transparent opacity-40 pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          {/* ================================================================
              D. ICONIC CIRCULAR ACTION BADGE WITH ARROW ↗ (FROM REFERENCE)
              Directly reproduces the circular "↗" button on the reference card
              ================================================================ */}
          <a
            href="#work"
            title="Explore Work"
            className="absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F4F3ED] text-[#111311] shadow-[0_12px_30px_rgba(0,0,0,0.65)] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#C2F970] hover:shadow-[0_0_20px_rgba(194,249,112,0.45)] group z-20 cursor-pointer"
            style={{ transform: "translateZ(32px)" }}
          >
            <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>


        </div>
      </div>
    </div>
  );
}
