"use client";

import { useState, useEffect } from "react";
import GlowCursor from "./GlowCursor";

export default function PortfolioWrapper({ children, className = "" }) {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrameId = null;

    const handleMouseMove = (event) => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({
          x: event.clientX,
          y: event.clientY,
        });
        setIsVisible(true);
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className={`portfolio-wrapper ${className}`.trim()}>
      {/* React Bits WebGL Glow Cursor trail & click burst */}
      <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden" aria-hidden="true">
        <GlowCursor
          color="#5f8bff"
          intensity={1.15}
          trailWidth={1}
          linger={2.7}
          glow={1.2}
          clickBurst
          theme="dark"
          className="w-full h-full"
        />
      </div>

      {/* Subtle radial spotlight overlay following cursor on desktop */}
      <div
        className="spotlight-overlay"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(100, 255, 218, 0.07), transparent 80%)`,
          opacity: isVisible ? 1 : 0,
        }}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
