import { motion } from "framer-motion";

const RevolvingCircles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Animated floating circles - moving in different directions */}
      {[...Array(25)].map((_, i) => {
        // Random sizes between 3px and 8px
        const size = 3 + Math.random() * 5;
        // Random starting positions
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        // Random movement distances and directions
        const moveX = (Math.random() - 0.5) * 200; // -100 to 100
        const moveY = (Math.random() - 0.5) * 200; // -100 to 100
        // Random duration between 8-15 seconds
        const duration = 8 + Math.random() * 7;
        // Random delay
        const delay = Math.random() * 3;
        // Random opacity variation
        const baseOpacity = 0.2 + Math.random() * 0.3;
        
        // Different color variations
        const colorVariants = [
          'bg-gradient-to-br from-primary/40 to-gic-violet/50',
          'bg-gradient-to-br from-gic-violet/35 to-primary/45',
          'bg-gradient-to-br from-gic-lavender/30 to-gic-violet/40',
          'bg-gradient-to-br from-primary/30 to-gic-lavender/35',
        ];
        const colorClass = colorVariants[i % colorVariants.length];
        
        return (
          <motion.div
            key={`global-floating-circle-${i}`}
            className={`absolute ${colorClass} rounded-full blur-[0.5px]`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${startX}%`,
              top: `${startY}%`,
              boxShadow: `0 0 ${size * 2}px rgba(139, 123, 181, 0.4), 0 0 ${size * 3}px rgba(169, 155, 212, 0.2)`,
            }}
            animate={{
              x: [0, moveX, moveX * 0.5, 0],
              y: [0, moveY, moveY * 0.5, 0],
              opacity: [baseOpacity, baseOpacity * 1.5, baseOpacity * 0.8, baseOpacity],
              scale: [1, 1.15, 0.95, 1],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: [0.4, 0, 0.2, 1], // Smooth cubic-bezier easing
              times: [0, 0.33, 0.66, 1],
            }}
          />
        );
      })}
      
      {/* Additional smaller circles with faster movement */}
      {[...Array(15)].map((_, i) => {
        const size = 2 + Math.random() * 3;
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        // Faster, more erratic movement
        const moveX = (Math.random() - 0.5) * 150;
        const moveY = (Math.random() - 0.5) * 150;
        const duration = 5 + Math.random() * 4;
        const delay = Math.random() * 2;
        
        return (
          <motion.div
            key={`global-small-circle-${i}`}
            className="absolute rounded-full bg-gic-violet/25"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${startX}%`,
              top: `${startY}%`,
              boxShadow: `0 0 ${size * 1.5}px rgba(169, 155, 212, 0.3)`,
            }}
            animate={{
              x: [0, moveX, -moveX * 0.7, 0],
              y: [0, moveY, -moveY * 0.7, 0],
              opacity: [0.2, 0.45, 0.3, 0.2],
              scale: [1, 1.2, 0.9, 1],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: [0.4, 0, 0.2, 1], // Smooth cubic-bezier easing
              times: [0, 0.33, 0.66, 1],
            }}
          />
        );
      })}

      {/* Revolving circles in circular orbits */}
      {[...Array(8)].map((_, i) => {
        const centerX = 20 + (i % 4) * 25; // Distribute across viewport: 20%, 45%, 70%, 95%
        const centerY = 15 + Math.floor(i / 4) * 40; // Distribute vertically: 15%, 55%
        const radius = 100 + (i % 3) * 80; // Different orbit radii: 100, 180, 260
        const duration = 20 + (i % 3) * 10; // Varying speeds: 20s, 30s, 40s
        const size = 4 + (i % 2) * 2; // Different sizes: 4px or 6px
        const angleOffset = (i * 45) % 360; // Stagger starting angles
        
        return (
          <motion.div
            key={`global-revolving-circle-${i}`}
            className="absolute rounded-full bg-gradient-to-br from-gic-violet/40 to-primary/35"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${centerX}%`,
              top: `${centerY}%`,
              boxShadow: `0 0 ${size * 2}px rgba(196, 181, 224, 0.5), 0 0 ${size * 3}px rgba(139, 123, 181, 0.3)`,
              transformOrigin: `${centerX}% ${centerY}%`,
            }}
            animate={{
              x: [
                Math.cos((angleOffset * Math.PI) / 180) * radius,
                Math.cos(((angleOffset + 120) * Math.PI) / 180) * radius,
                Math.cos(((angleOffset + 240) * Math.PI) / 180) * radius,
                Math.cos((angleOffset * Math.PI) / 180) * radius,
              ],
              y: [
                Math.sin((angleOffset * Math.PI) / 180) * radius,
                Math.sin(((angleOffset + 120) * Math.PI) / 180) * radius,
                Math.sin(((angleOffset + 240) * Math.PI) / 180) * radius,
                Math.sin((angleOffset * Math.PI) / 180) * radius,
              ],
              opacity: [0.3, 0.5, 0.4, 0.3],
              scale: [1, 1.1, 0.95, 1],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: [0.4, 0, 0.2, 1], // Smooth cubic-bezier easing
              times: [0, 0.33, 0.66, 1],
            }}
          />
        );
      })}
    </div>
  );
};

export default RevolvingCircles;

