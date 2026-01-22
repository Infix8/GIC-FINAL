"use client";

import { useEffect, useRef } from "react";

const techTags = [
  "Artificial Intelligence",
  "Quantum Computing",
  "Robotics",
  "Space Tech",
  "Biotech",
  "Advanced Materials",
  "Semiconductors",
  "Data Centers",
];

export default function Themes() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => {
      el.classList.add("opacity-0", "translate-y-8");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="themes" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white mb-4">
            Key Themes
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#d4a853] to-[#e67e22] mx-auto rounded-full" />
        </div>

        {/* Main Theme Cards */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <div className="animate-on-scroll flex-1 min-w-[280px] max-w-[400px] p-10 bg-[rgba(20,20,35,0.6)] border border-[#d4a853]/20 rounded-3xl text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
            <span className="text-6xl block mb-4">🚀</span>
            <h3 className="text-2xl font-semibold gradient-text-gold mb-2">
              Startup Enablement
            </h3>
            <p className="text-white/60">Empowering the next generation of entrepreneurs</p>
          </div>

          <div className="animate-on-scroll flex-1 min-w-[280px] max-w-[400px] p-10 bg-[rgba(20,20,35,0.6)] border border-[#d4a853]/20 rounded-3xl text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
            <span className="text-6xl block mb-4">⚡</span>
            <h3 className="text-2xl font-semibold gradient-text-gold mb-2">
              Deep Technology
            </h3>
            <p className="text-white/60">Pioneering the future of innovation</p>
          </div>
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap justify-center gap-3 animate-on-scroll">
          {techTags.map((tag, index) => (
            <span
              key={tag}
              className="px-5 py-2 bg-[#9b5de5]/10 border border-[#9b5de5]/30 rounded-full text-[#9b5de5] text-sm transition-all duration-200 hover:bg-[#9b5de5]/20 hover:-translate-y-1 cursor-default"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
