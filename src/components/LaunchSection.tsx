import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, Calendar, MapPin, Users, Award } from 'lucide-react';

const LaunchSection: React.FC = () => {
    const handleLaunch = () => {
        window.open('https://www.globalinnovatorsconclave.in', '_blank');
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-gic-violet/5 to-gic-lavender/5" />

            {/* Floating orbs */}
            <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-gradient-radial from-primary/10 to-transparent blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-gradient-radial from-gic-violet/10 to-transparent blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-gic-lavender/5 to-transparent blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

            <div className="max-w-6xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="space-y-12"
                >
                    {/* Event Header */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="space-y-6"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="inline-block"
                        >
                            <Sparkles className="w-16 h-16 text-gic-lavender mx-auto mb-4" />
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gic-lavender via-gic-violet to-primary bg-clip-text text-transparent leading-tight">
                            Global Innovators Conclave 2026
                        </h1>

                        <p className="text-xl md:text-2xl text-gic-lavender/80 font-medium">
                            SMEC's Premier Innovation & Entrepreneurship Summit
                        </p>
                    </motion.div>

                    {/* Event Details Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
                    >
                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-gic-violet/20 hover:bg-white/10 transition-all duration-300">
                            <Calendar className="w-8 h-8 text-gic-lavender mx-auto mb-3" />
                            <h3 className="text-lg font-semibold text-white mb-2">Date</h3>
                            <p className="text-gic-lavender/80">February 27-28, 2026</p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-gic-violet/20 hover:bg-white/10 transition-all duration-300">
                            <MapPin className="w-8 h-8 text-gic-lavender mx-auto mb-3" />
                            <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                            <p className="text-gic-lavender/80">SMEC Campus</p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-gic-violet/20 hover:bg-white/10 transition-all duration-300">
                            <Users className="w-8 h-8 text-gic-lavender mx-auto mb-3" />
                            <h3 className="text-lg font-semibold text-white mb-2">Expected</h3>
                            <p className="text-gic-lavender/80">10,000+ Participants</p>
                        </div>
                    </motion.div>

                    {/* Event Highlights */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="max-w-3xl mx-auto"
                    >
                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-gic-violet/20">
                            <Award className="w-10 h-10 text-gic-lavender mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-4">What to Expect</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-gic-lavender rounded-full"></div>
                                        <span className="text-gic-lavender/80">Knowledge Hub Sessions</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-gic-lavender rounded-full"></div>
                                        <span className="text-gic-lavender/80">Alpha to Infinite Program</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-gic-lavender rounded-full"></div>
                                        <span className="text-gic-lavender/80">Investors Boot Camp</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-gic-lavender rounded-full"></div>
                                        <span className="text-gic-lavender/80">Business Tech Expo</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-gic-lavender rounded-full"></div>
                                        <span className="text-gic-lavender/80">Networking Opportunities</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-gic-lavender rounded-full"></div>
                                        <span className="text-gic-lavender/80">Innovation Awards</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Launch Button */}
                    <motion.button
                        onClick={handleLaunch}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 25px 50px rgba(139, 123, 181, 0.5)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="group relative px-16 py-8 bg-gradient-to-r from-primary via-gic-violet to-gic-lavender text-white font-bold text-2xl rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-primary/40"
                    >
                        {/* Animated background glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-gic-violet/30 to-gic-lavender/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Rocket animation */}
                        <motion.div
                            className="absolute left-8 top-1/2 -translate-y-1/2"
                            animate={{ x: [0, 8, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Rocket className="w-10 h-10" />
                        </motion.div>

                        {/* Button text */}
                        <span className="relative z-10 ml-16">🚀 Launch Official Website</span>

                        {/* Shine effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                            initial={{ x: "-150%" }}
                            whileHover={{ x: "150%" }}
                            transition={{ duration: 0.8 }}
                        />

                        {/* Pulsing border */}
                        <div className="absolute inset-0 rounded-3xl border-2 border-gic-lavender/50 animate-pulse" />
                    </motion.button>

                    {/* Footer message */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                        className="space-y-2"
                    >
                        <p className="text-lg text-gic-lavender/70">
                            Be part of the revolution in innovation and entrepreneurship
                        </p>
                        <p className="text-sm text-gic-lavender/50">
                            SMEC • Global Innovators Conclave 2026
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default LaunchSection;
