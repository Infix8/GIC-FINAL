"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const particleContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particleContainerRef.current) return;

    const container = particleContainerRef.current;
    const particleCount = 25;
    const colors = ["#d4a853", "#9b5de5", "#e040fb", "#4e8fff", "#ff6b9d"];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "absolute w-1 h-1 rounded-full opacity-0";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      particle.style.boxShadow = `0 0 6px ${particle.style.background}`;
      particle.style.animation = `particle-float ${Math.random() * 4 + 6}s infinite ease-in-out`;
      particle.style.animationDelay = `${Math.random() * 8}s`;
      container.appendChild(particle);
    }

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <div className="absolute w-[600px] h-[600px] -top-48 -right-48 rounded-full bg-[#d4a853]/20 blur-[80px] animate-float" />
        <div
          className="absolute w-[500px] h-[500px] -bottom-36 -left-36 rounded-full bg-[#9b5de5]/15 blur-[80px] animate-float"
          style={{ animationDelay: "-7s" }}
        />
        <div
          className="absolute w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e040fb]/10 blur-[80px] animate-float"
          style={{ animationDelay: "-14s" }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(rgba(212, 168, 83, 0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(212, 168, 83, 0.03) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          }}
        />

        {/* Particles */}
        <div ref={particleContainerRef} className="absolute inset-0 pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Coming Soon Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#d4a853]/10 border border-[#d4a853]/30 rounded-full mb-8">
              <span className="w-2 h-2 bg-[#d4a853] rounded-full animate-pulse-dot" />
              <span className="text-[#d4a853] text-sm font-semibold uppercase tracking-widest">
                Coming Soon
              </span>
            </div>

            {/* Title */}
            <h1 className="mb-6">
              <span className="block text-white/70 text-xl mb-2">SMEC&apos;s</span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl font-bold font-serif gradient-text-multi leading-tight">
                Global Innovators
              </span>
              <span className="inline-block bg-gradient-to-r from-[#9b5de5] to-[#e040fb] text-white px-4 py-1 rounded-lg text-lg sm:text-xl font-bold tracking-wider mt-2">
                CONCLAVE
              </span>
              <span className="block text-6xl sm:text-7xl lg:text-8xl font-extrabold text-transparent mt-2 [-webkit-text-stroke:2px_#d4a853] opacity-50">
                2026
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              A focused, high-impact event bringing together{" "}
              <span className="text-[#d4a853] font-medium">startups</span>,{" "}
              <span className="text-[#d4a853] font-medium">deep-tech innovators</span>,
              policymakers, industry leaders, investors, academia, and students.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#d4a853] to-[#e67e22] text-[#0a0a12] font-semibold rounded-2xl hover:translate-y-[-3px] hover:shadow-[0_15px_40px_rgba(212,168,83,0.3)] transition-all duration-300"
              >
                Get Notified
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-2xl hover:border-[#d4a853] hover:text-[#d4a853] transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Animated Flower Logo */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 animate-rotate-slow">
              {/* Petals */}
              <div className="absolute top-1/2 left-1/2 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 -translate-x-full -translate-y-full rounded-[50%_0_50%_50%] bg-gradient-to-br from-[#4e8fff] to-[#00d9ff] blur-[1px] opacity-90" />
              <div className="absolute top-1/2 left-1/2 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 -translate-y-full rotate-90 rounded-[50%_0_50%_50%] bg-gradient-to-br from-[#9b5de5] to-[#e040fb] blur-[1px] opacity-90" />
              <div className="absolute top-1/2 left-1/2 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rotate-180 rounded-[50%_0_50%_50%] bg-gradient-to-br from-[#ff6b9d] to-[#e67e22] blur-[1px] opacity-90" />
              <div className="absolute top-1/2 left-1/2 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 -translate-x-full -rotate-90 rounded-[50%_0_50%_50%] bg-gradient-to-br from-[#d4a853] to-[#f4d794] blur-[1px] opacity-90" />

              {/* Center Glow */}
              <div className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-white/90 via-[#d4a853]/50 to-transparent animate-[glow-pulse_3s_ease-in-out_infinite]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
