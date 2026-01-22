import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
      {/* Animated background elements with lavender/violet */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/25 via-gic-violet/20 to-gic-lavender/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.4, 0.6, 0.4],
            x: [0, 30, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-gic-violet/25 via-primary/20 to-gic-lavender/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.15, 1], 
            opacity: [0.4, 0.6, 0.4],
            x: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gic-lavender font-semibold text-sm sm:text-base tracking-wider uppercase mb-3 flex items-center justify-center gap-2"
          >
            <Clock className="w-4 h-4" />
            Mark Your Calendar
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gic-lavender via-gic-violet to-primary bg-clip-text text-transparent"
          >
            Event Starts In
          </motion.h2>
        </motion.div>

        {/* Countdown Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {timeUnits.map((unit, index) => {
            const IconComponent = unit.icon;
            return (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="relative group"
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gic-lavender/40 via-gic-violet/30 to-primary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-300"
                  animate={{ 
                    opacity: [0.4, 0.6, 0.4],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Card */}
                <div className="relative bg-gradient-to-br from-primary/15 via-gic-violet/15 to-gic-lavender/15 backdrop-blur-md border border-gic-violet/40 rounded-2xl p-6 sm:p-8 text-center shadow-2xl shadow-primary/30 group-hover:border-gic-violet/60 group-hover:shadow-primary/50 group-hover:bg-gradient-to-br group-hover:from-primary/25 group-hover:via-gic-violet/25 group-hover:to-gic-lavender/25 transition-all duration-300 cursor-pointer">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/40 via-gic-violet/35 to-gic-lavender/30 flex items-center justify-center border border-gic-violet/50">
                      <IconComponent className="w-5 h-5 text-gic-lavender" />
                    </div>
                  </div>

                  {/* Number */}
                  <motion.span
                    key={unit.value}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                    className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display bg-gradient-to-br from-gic-lavender via-gic-violet to-primary bg-clip-text text-transparent mb-2"
                  >
                    {String(unit.value).padStart(2, "0")}
                  </motion.span>

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
              </motion.div>
            );
          })}
        </div>

        {/* Event Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/15 via-gic-violet/15 to-gic-lavender/15 backdrop-blur-md rounded-full px-6 py-3 border border-gic-violet/40 shadow-lg shadow-primary/30">
            <Calendar className="w-4 h-4 text-gic-violet" />
            <span className="text-gic-lavender font-semibold text-sm sm:text-base">
              27-28 February 2026
            </span>
            <div className="w-px h-4 bg-gic-violet/50" />
            <span className="text-gic-lavender/90 text-sm sm:text-base">
              Hyderabad, India
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownTimer;

