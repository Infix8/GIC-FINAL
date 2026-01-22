"use client";

import { useEffect, useRef } from "react";

const pillars = [
  {
    icon: "🎯",
    title: "Showcase",
    description: "Feature professional startups and student innovators with prototypes and live demos",
    gradient: "from-[#4e8fff]/20 to-[#00d9ff]/20",
  },
  {
    icon: "💰",
    title: "Invest",
    description: "Create curated investment opportunities with potential funding up to INR 10 Crores",
    gradient: "from-[#d4a853]/20 to-[#e67e22]/20",
  },
  {
    icon: "📚",
    title: "Educate",
    description: "Inform founders on policy, IP, regulations, and scaling deep-tech businesses",
    gradient: "from-[#9b5de5]/20 to-[#e040fb]/20",
  },
  {
    icon: "🤝",
    title: "Connect",
    description: "Strengthen collaborations between government, industry, and startups",
    gradient: "from-[#ff6b9d]/20 to-[#e67e22]/20",
  },
];

export default function About() {
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => {
      el.classList.add("opacity-0", "translate-y-8");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white mb-4">
            About The Conclave
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#d4a853] to-[#e67e22] mx-auto rounded-full" />
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-[350px_1fr] gap-12 items-center mb-20">
          {/* Organization Card */}
          <div className="glass-card p-8 text-center animate-on-scroll">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#d4a853] to-[#e67e22] flex items-center justify-center">
              <svg
                className="w-10 h-10 text-[#0a0a12]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                />
              </svg>
            </div>
            <h3 className="text-[#d4a853] text-lg mb-2">Organized By</h3>
            <p className="text-white font-semibold text-lg">
              St. Martin&apos;s Engineering College (SMEC)
            </p>
            <p className="text-white/50 text-sm mt-2">UGC Autonomous Institution | NAAC A+ Accredited</p>
            <p className="text-white/50 text-sm">Recognized in ARIIA and NIRF Rankings</p>
          </div>

          {/* Mission Text */}
          <div className="lg:pl-8 lg:border-l-2 border-[#d4a853]/30 animate-on-scroll">
            <p className="text-white/70 text-xl leading-relaxed mb-6">
              The primary mission of SMEC&apos;s Global Innovation Summit – 2026 is to{" "}
              <span className="gradient-text-gold font-semibold">
                accelerate deep-tech innovations and entrepreneurship
              </span>
              , connecting promising teams with funding, mentorship, and strategic partners.
            </p>
            <p className="text-[#d4a853] text-2xl font-serif italic">
              &ldquo;Shaping Viksit Bharat&apos;s Brightest Minds&rdquo;
            </p>
          </div>
        </div>

        {/* Mission Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="animate-on-scroll group relative bg-[rgba(20,20,35,0.6)] border border-white/5 rounded-3xl p-6 text-center transition-all duration-300 hover:-translate-y-3 hover:border-[#d4a853]/30 overflow-hidden"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Top Border Animation */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d4a853] to-[#e67e22] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${pillar.gradient} flex items-center justify-center text-3xl`}
              >
                {pillar.icon}
              </div>
              <h3 className="text-[#d4a853] text-xl font-semibold mb-2">{pillar.title}</h3>
              <p className="text-white/60 text-sm">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
