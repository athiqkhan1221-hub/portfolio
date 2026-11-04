"use client";

import { useState } from "react";
import Image from "next/image";
import { playgroundCategories, playgroundItems } from "@/data/playground";
import PlaygroundModal from "./PlaygroundModal";
import { ArrowUpRight, Film } from "lucide-react";

export default function Playground() {
  const [activeCategory, setActiveCategory] = useState("All Experiments");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = playgroundItems.filter((item) => {
    if (activeCategory === "All Experiments") return true;
    return item.category === activeCategory;
  });

  return (
    <section id="playground" className="py-24 md:py-32 border-b border-[#303530] relative bg-[#131513]">
      <div className="editorial-container">
        {/* Section Header (Centered) */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-label">BEYOND THE CODE</span>
          <h2 className="section-heading">
            A space for <span className="text-[#325ea8]">experiments.</span>
          </h2>
          <p className="section-description mx-auto">
            Not every interesting idea begins with a code editor. This is where I
            share AI video experiments, visual concepts, editing work, and creative
            tests.
          </p>
        </div>

        {/* Category Tabs (Centered) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 pb-4 border-b border-[#303530]/60 overflow-x-auto">
          {playgroundCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-xs px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-all border ${
                activeCategory === cat
                  ? "bg-[#325ea8] text-white border-[#325ea8] font-semibold shadow-md shadow-[#325ea8]/20"
                  : "bg-[#1B1E1B] text-[#A5ACA5] border-[#303530] hover:text-[#F4F3ED] hover:border-[#444B44]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {filteredItems.map((item) => {
            const isVertical = item.aspectRatio === "9:16";

            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`group cursor-pointer bg-[#202420] border border-[#303530] rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#444B44] hover:shadow-2xl hover:shadow-black/60 ${
                  isVertical ? "sm:row-span-2" : ""
                }`}
              >
                {/* Media Container with explicit aspect ratio */}
                <div
                  className={`relative w-full overflow-hidden bg-[#111311] border-b border-[#303530] ${
                    isVertical
                      ? "aspect-[9/16]"
                      : item.aspectRatio === "4:3"
                      ? "aspect-[4/3]"
                      : "aspect-[16/9]"
                  }`}
                >
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Hover Inspect Icon */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-3 rounded-full bg-[#325ea8] text-white shadow-lg shadow-[#325ea8]/30 transform scale-75 group-hover:scale-100 transition-transform">
                      <Film className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Card Content & Caption */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[11px] text-[#A5ACA5] block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-heading font-bold text-base text-[#F4F3ED] group-hover:text-[#325ea8] transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-xs text-[#A5ACA5] line-clamp-3 leading-relaxed mb-4">
                      {item.caption}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#303530] flex items-center justify-between text-xs font-mono">
                    <span className="text-[#6E756E]">Inspect Spec</span>
                    <span className="text-[#325ea8] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform font-semibold">
                      <span>View</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Placeholder Notice for Athiq */}
        <div className="mt-12 p-5 rounded-xl bg-[#1B1E1B] border border-[#303530] text-center">
          <p className="font-body text-xs text-[#A5ACA5]">
            <strong className="text-[#F4F3ED]">Asset Customization:</strong> Video clips and thumbnails can be placed directly inside <code className="font-mono text-[#325ea8]">/public/videos/</code> and <code className="font-mono text-[#325ea8]">/public/images/</code>. Simply link their file names in <code className="font-mono text-[#325ea8]">data/playground.js</code>.
          </p>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedItem && (
        <PlaygroundModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </section>
  );
}
