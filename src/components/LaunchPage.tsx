import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LaunchPage = () => {
  const [isLaunching, setIsLaunching] = useState(false);
  const navigate = useNavigate();

  const handleLaunch = () => {
    setIsLaunching(true);

    // Add launch animation and navigation
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Logo or title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-12"
        >
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent mb-4">
            GIC
          </h1>
          <p className="text-purple-200/80 text-lg md:text-xl font-light tracking-widest">
            GLOBAL INNOVATORS CONCLAVE
          </p>
        </motion.div>

        {/* Launch button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="relative"
        >
          <motion.button
            onClick={handleLaunch}
            disabled={isLaunching}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(255, 255, 255, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-6 bg-white text-black font-bold text-xl md:text-2xl rounded-full shadow-2xl hover:shadow-white/20 transition-all duration-300 disabled:cursor-not-allowed overflow-hidden"
          >
            {/* Button background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-white to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Button content */}
            <span className="relative z-10 flex items-center gap-3">
              {isLaunching ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-6 h-6 border-2 border-black border-t-transparent rounded-full"
                  />
                  LAUNCHING...
                </>
              ) : (
                <>
                  <span>🚀</span>
                  LAUNCH EXPERIENCE
                  <span>✨</span>
                </>
              )}
            </span>

            {/* Ripple effect */}
            <div className="absolute inset-0 rounded-full border-2 border-white/30 scale-0 group-hover:scale-110 transition-transform duration-300"></div>
          </motion.button>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 text-white/60 text-sm md:text-base max-w-md mx-auto"
        >
          Enter the future of innovation and creativity
        </motion.p>

        {/* Launch animation overlay */}
        {isLaunching && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed inset-0 bg-gradient-to-br from-purple-900 via-black to-violet-900 flex items-center justify-center z-50"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-24 h-24 border-4 border-white border-t-transparent rounded-full"
            />
          </motion.div>
        )}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              y: [null, -100, -200],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut"
            }}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LaunchPage;
