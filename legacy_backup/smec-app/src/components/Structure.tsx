"use client";

import { useEffect, useRef } from "react";

const events = [
  {
    number: "01",
    title: "Knowledge Bubble",
    description:
      "Policymakers and industry leaders discuss national strategies, funding frameworks, R&D, and more",
  },
  {
    number: "02",
    title: "Idea2Impact",
    description:
      'Student teams develop and present solutions with mentor guidance to promote "Brighter Minds for Viksit Bharat"',
  },
  {
    number: "03",
    title: "Ignite Expo",
    description:
      "Professional Startup Zone and Student Innovation Zone featuring top 20 pre-summit teams",
  },
  {
    number: "04",
    title: "Innovators-Investors Boot Camp",
    description:
      "Teams pitch to investment panel with 1:1 meetings. Potential investment up to 10 Crore INR",
  },
  {
    number: "05",
    title: "Masterminds Congregation",
    description: "Young entrepreneurs pitch their ideas to a panel of expert mentors",
  },
];

export default function Structure() {
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
    <section
      id="structure"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#d4a853]/[0.03] to-transparent"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white mb-4">
            Event Structure
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#d4a853] to-[#e67e22] mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {events.map((event, index) => (
            <div
              key={event.number}
              className="animate-on-scroll flex gap-6 relative"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Timeline Line */}
              {index < events.length - 1 && (
                <div className="absolute left-[35px] top-[70px] bottom-0 w-0.5 bg-gradient-to-b from-[#d4a853] to-transparent" />
              )}

              {/* Number Circle */}
              <div className="flex-shrink-0 w-[70px] h-[70px] rounded-full bg-gradient-to-r from-[#d4a853] to-[#e67e22] flex items-center justify-center text-[#0a0a12] text-xl font-bold">
                {event.number}
              </div>

              {/* Content */}
              <div className="flex-1 bg-[rgba(20,20,35,0.6)] border border-[#d4a853]/15 rounded-2xl p-6 transition-all duration-300 hover:border-[#d4a853]/40 hover:translate-x-2">
                <h3 className="text-[#d4a853] text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-white/60">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
