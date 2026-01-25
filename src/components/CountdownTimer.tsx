import { useState, useEffect } from "react";
import { Calendar, Clock } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ 
    days: 0, 
    hours: 0, 
    minutes: 0, 
    seconds: 0 
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const targetDate = new Date("2026-02-27T09:00:00+05:30").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days, icon: Calendar },
    { label: "Hours", value: timeLeft.hours, icon: Clock },
    { label: "Minutes", value: timeLeft.minutes, icon: Clock },
    { label: "Seconds", value: timeLeft.seconds, icon: Clock },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-gic-violet/5 via-primary/8 to-gic-dark">
      {/* Background elements - static on mobile */}
      {!isMobile && (
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/25 via-gic-violet/20 to-gic-lavender/15 rounded-full blur-3xl opacity-50"
          />
          <div
            className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-gic-violet/25 via-primary/20 to-gic-lavender/20 rounded-full blur-3xl opacity-50"
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p
            className="text-gic-lavender font-semibold text-sm sm:text-base tracking-wider uppercase mb-3 flex items-center justify-center gap-2"
          >
            <Clock className="w-4 h-4" />
            Mark Your Calendar
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gic-lavender via-gic-violet to-primary bg-clip-text text-transparent"
          >
            Event Starts In
          </h2>
        </div>

        {/* Countdown Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {timeUnits.map((unit) => {
            const IconComponent = unit.icon;
            return (
              <div
                key={unit.label}
                className="relative group hover:scale-105 hover:-translate-y-2 transition-transform duration-300"
              >
                {/* Glow effect - only on desktop */}
                {!isMobile && (
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-gic-lavender/40 via-gic-violet/30 to-primary/20 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                  />
                )}
                
                {/* Card */}
                <div className={`relative bg-gradient-to-br from-primary/15 via-gic-violet/15 to-gic-lavender/15 border border-gic-violet/40 rounded-2xl p-6 sm:p-8 text-center shadow-xl shadow-primary/20 group-hover:border-gic-violet/60 transition-all duration-300 ${isMobile ? '' : 'backdrop-blur-md'}`}>
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/40 via-gic-violet/35 to-gic-lavender/30 flex items-center justify-center border border-gic-violet/50">
                      <IconComponent className="w-5 h-5 text-gic-lavender" />
                    </div>
                  </div>

                  {/* Number */}
                  <span
                    className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display bg-gradient-to-br from-gic-lavender via-gic-violet to-primary bg-clip-text text-transparent mb-2"
                  >
                    {String(unit.value).padStart(2, "0")}
                  </span>

                  {/* Label */}
                  <span className="text-gic-violet/80 text-xs sm:text-sm font-semibold uppercase tracking-wider block">
                    {unit.label}
                  </span>

                  {/* Decorative corner accents */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-gic-violet/50 rounded-tl-lg" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-gic-violet/50 rounded-tr-lg" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-gic-violet/50 rounded-bl-lg" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-gic-violet/50 rounded-br-lg" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Event Details */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className={`inline-flex items-center gap-3 bg-gradient-to-r from-primary/15 via-gic-violet/15 to-gic-lavender/15 rounded-full px-6 py-3 border border-gic-violet/40 shadow-lg shadow-primary/20 ${isMobile ? '' : 'backdrop-blur-md'}`}>
            <Calendar className="w-4 h-4 text-gic-violet" />
            <span className="text-gic-lavender font-semibold text-sm sm:text-base">
              27-28 February 2026
            </span>
            <div className="w-px h-4 bg-gic-violet/50" />
            <span className="text-gic-lavender/90 text-sm sm:text-base">
              Hyderabad, India
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;

