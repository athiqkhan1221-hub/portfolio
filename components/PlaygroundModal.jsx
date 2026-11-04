"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Copy, Check, Sparkles, Film, Sliders } from "lucide-react";

export default function PlaygroundModal({ item, onClose }) {
  const [copied, setCopied] = useState(false);

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

  if (!item) return null;

  const handleCopyPrompt = () => {
    if (item.promptSnippet) {
      navigator.clipboard.writeText(item.promptSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const isVertical = item.aspectRatio === "9:16";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-playground-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#1B1E1B] border border-[#303530] rounded-2xl overflow-y-auto shadow-2xl flex flex-col animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 bg-[#1B1E1B]/95 backdrop-blur-md px-6 py-4 border-b border-[#303530] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#325ea8] uppercase tracking-wider">
              {item.category}
            </span>
            <span className="text-[#303530]">•</span>
            <span className="font-mono text-xs text-[#A5ACA5]">Ratio: {item.aspectRatio}</span>
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

        {/* Media Frame & Breakdown */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col gap-2">
            <h2
              id="modal-playground-title"
              className="font-heading text-2xl sm:text-3xl font-extrabold text-[#F4F3ED]"
            >
              {item.title}
            </h2>
            <p className="font-body text-sm sm:text-base text-[#A5ACA5]">
              {item.caption}
            </p>
          </div>

          {/* Visual Display Frame */}
          <div
            className={`relative mx-auto rounded-xl overflow-hidden bg-[#111311] border border-[#303530] flex items-center justify-center ${
              isVertical
                ? "max-w-[320px] aspect-[9/16]"
                : item.aspectRatio === "4:3"
                ? "max-w-[540px] aspect-[4/3]"
                : "w-full aspect-[16/9]"
            }`}
          >
            {item.videoUrl ? (
              <video
                src={item.videoUrl}
                controls
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-contain"
                />

                {/* Subtle Play Overlay Mockup */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 p-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#111311]/80 border border-[#325ea8] flex items-center justify-center text-[#325ea8] mb-3">
                    <Film className="w-5 h-5" />
                  </div>
                  <p className="font-mono text-xs text-[#F4F3ED] font-semibold">
                    Creative Experiment Specimen
                  </p>
                  <p className="font-mono text-[11px] text-[#A5ACA5] max-w-xs mt-1">
                    [Place your .mp4 file in /public/videos/ and attach path to data/playground.js]
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Prompt Specification Box */}
          {item.promptSnippet && (
            <div className="bg-[#111311] border border-[#303530] rounded-xl p-5">
              <div className="flex items-center justify-between gap-4 mb-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#325ea8]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Prompt / Pipeline Architecture</span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyPrompt}
                  className="btn-ghost text-[11px] py-1 px-2.5 flex items-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-[#325ea8]" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Prompt</span>
                    </>
                  )}
                </button>
              </div>

              <code className="font-mono text-xs sm:text-sm text-[#F4F3ED] block leading-relaxed break-words bg-[#1B1E1B] p-3 rounded-lg border border-[#303530]">
                {item.promptSnippet}
              </code>
            </div>
          )}

          {/* Tags & Director's Notes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#202420] border border-[#303530]">
              <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[#A5ACA5]">
                <Sliders className="w-3.5 h-3.5 text-[#325ea8]" />
                <span>Tools &amp; Categories</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {item.tools?.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2.5 py-1 rounded bg-[#111311] border border-[#303530] text-[#325ea8]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#202420] border border-[#303530]">
              <div className="flex items-center gap-2 mb-1.5 text-xs font-mono text-[#A5ACA5]">
                <span>Experiment Notes</span>
              </div>
              <p className="font-body text-xs sm:text-sm text-[#A5ACA5] leading-relaxed">
                {item.notes}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
