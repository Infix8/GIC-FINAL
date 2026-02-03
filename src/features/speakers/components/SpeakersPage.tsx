import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollFloat from '@/components/ScrollFloat';

gsap.registerPlugin(ScrollTrigger);

const SpeakersPage = () => {
    const pageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate decorative elements
            gsap.from('.speaker-decor', {
                scale: 0,
                opacity: 0,
                duration: 1.5,
                stagger: 0.2,
                ease: 'elastic.out(1, 0.5)',
                delay: 0.3,
            });

            // Animate section label
            gsap.from('.section-label', {
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
            });

            // Animate CTA section with scroll
            gsap.from('.speaker-cta', {
                y: 60,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.speaker-cta',
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                }
            });

        }, pageRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={pageRef} className="page-container speakers-reveal-page">
            <section className="section min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden -mt-[38px] md:-mt-[80px]">

                {/* Decorative floating elements - hidden */}
                <div className="speaker-decor absolute top-20 left-10 w-32 h-32 rounded-full opacity-20 hidden"
                    style={{ background: 'var(--color-accent)' }} />
                <div className="speaker-decor absolute bottom-40 right-20 w-48 h-48 rounded-full opacity-10 hidden"
                    style={{ background: 'var(--color-accent)' }} />
                <div className="speaker-decor absolute top-1/3 right-10 w-16 h-16 rounded-full opacity-30 hidden"
                    style={{ background: 'var(--color-accent)' }} />

                {/* Main heading with ScrollFloat character animation - starts completely hidden */}
                <ScrollFloat
                    containerClassName="speakers-main-title -mt-[19px] md:-mt-[40px]"
                    textClassName=""
                    scrollStart="top bottom"
                    scrollEnd="top center"
                    stagger={0.02}
                >
                    Speakers
                </ScrollFloat>

                {/* Subtitle */}
                <p
                    className="mt-6 max-w-lg whitespace-nowrap text-center mx-auto"
                    style={{
                        color: 'var(--color-text-muted)',
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'var(--text-body-l)',
                        lineHeight: 1.6,
                    }}
                >
                    Industry leaders, visionaries, and innovators who are shaping the future.
                </p>

                {/* Speakers Grid */}
                <div className="mt-16 w-full max-w-7xl">
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                        {/* Speaker 1 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/1.png" alt="Dr. J A CHOWDARY" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>Dr. J A CHOWDARY</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>Founder - International Startup Foundation</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>Former Special Chief Secretary & IT Advisor Government of Andhra Pradesh</p>
                        </div>

                        {/* Speaker 2 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/2.png" alt="Dr. R. HAFEEZ BASHA" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>Dr. R. HAFEEZ BASHA</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>Vice Chancellor, Kirirom Institute of Technology</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>Ex-UPSC Advisor</p>
                        </div>

                        {/* Speaker 3 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/3.png" alt="SHRI RAMJEE PALLELA" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>SHRI RAMJEE PALLELA</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>COO, Atal Incubation Centre-CCMB</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>(NITI Aayog)</p>
                        </div>

                        {/* Speaker 4 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/4.png" alt="DR.AYNAMPUDI SUBBARAO" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>DR.AYNAMPUDI SUBBARAO</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>President, Indian Innovators Association</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>Ex-DSIR Adviser</p>
                        </div>

                        {/* Speaker 5 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/5.png" alt="VIJAY KIRAN AGASTYA" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>VIJAY KIRAN AGASTYA</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>Co-Founder & MD, MentorMe</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>Ex-Deloitte VP</p>
                        </div>

                        {/* Speaker 6 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/6.png" alt="DR.KALPANA SASTRY" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>DR.KALPANA SASTRY</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>Former Joint Director, NAARM</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>Agri-Innovation Leader</p>
                        </div>

                        {/* Speaker 7 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/7.png" alt="BALA PRASAD PEDDIGARI" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>BALA PRASAD PEDDIGARI</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>Chief Innovation Officer - TCS</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}></p>
                        </div>

                        {/* Speaker 8 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/8.png" alt="MANISH GUPTA" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>MANISH GUPTA</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>Advisor and Venture Partner- Riceberg Ventures</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>Convenor - FTCCI</p>
                        </div>

                        {/* Speaker 9 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/9.png" alt="LALITH SHARMA" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>LALITH SHARMA</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>Director, Strategic Relations</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>ProArch</p>
                        </div>

                        {/* Speaker 10 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/10.png" alt="PRATIBHA PULIJALA" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>PRATIBHA PULIJALA</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>Founder MEE School</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}></p>
                        </div>

                        {/* Speaker 11 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/11.png" alt="KIRAN KALAKUNTLA" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>KIRAN KALAKUNTLA</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>Founder - ekincare</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}></p>
                        </div>

                        {/* Speaker 12 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/12.png" alt="SUNIL JASTHI" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>SUNIL JASTHI</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>CEO, Vaaluka Solutions</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}></p>
                        </div>

                        {/* Speaker 13 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/13.png" alt="DR.K.ANIL" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>DR.K.ANIL</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>CEO, ASPIRE BioNEST</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>Biotech Incubation</p>
                        </div>

                        {/* Speaker 14 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/14.png" alt="SRAVANTI VEDULA" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>SRAVANTI VEDULA</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>Associate Manager</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>Innovation Management at ICRISAT</p>
                        </div>

                        {/* Speaker 15 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/15.png" alt="SANTHANA SELVAN" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>SANTHANA SELVAN</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>Founder & Chief Belonging Officer</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>Unity Circle</p>
                        </div>

                        {/* Speaker 16 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/16.png" alt="PANKAJ DIWAN" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>PANKAJ DIWAN</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>Founder & CEO</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>TalentFarm.ai</p>
                        </div>

                        {/* Speaker 17 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/17.png" alt="PROF.G.R.SINHA" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>PROF.G.R.SINHA</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>Provost (VC), GSFC University</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>Global AI Scientist</p>
                        </div>

                        {/* Speaker 18 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/18.png" alt="SRIKANTH PALLE" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>SRIKANTH PALLE</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>Former Consultant - G20 Summit</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>Ministry of External Affairs</p>
                        </div>

                        {/* Speaker 19 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/19.png" alt="VENKAT RK" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>VENKAT RK</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>Vice President, Human and Corporate Relations</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>Skyde Solutions India Pvt LTD</p>
                        </div>

                        {/* Speaker 20 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/20.png" alt="BHARAT JAIN" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>BHARAT JAIN</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>Founder & CEO</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>CBS Group of Companies</p>
                        </div>

                        {/* Advisory Board Section */}
                        <div className="col-span-full mt-8 mb-4">
                            <h2 
                                style={{
                                    fontSize: 'clamp(2rem, 6vw, 4rem)',
                                    lineHeight: 0.95,
                                    fontFamily: 'var(--font-display)',
                                    fontWeight: 800,
                                    letterSpacing: '-0.03em',
                                    color: 'var(--color-text-primary)',
                                }}
                            >
                                Advisory Board
                            </h2>
                        </div>

                        {/* Speaker 21 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/21.png" alt="Shri.M. Laxman Reddy" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>Shri.M. Laxman Reddy</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>Chairman</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>St. Martin's Engineering College</p>
                        </div>

                        {/* Speaker 22 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/22.png" alt="Shri.G.Chandra Sekhar Yadav" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>Shri.G.Chandra Sekhar Yadav</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>Executive Director</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>St. Martin's Engineering College</p>
                        </div>

                        {/* Speaker 23 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/23.png" alt="SHRI. CH. MAHENDER REDDY" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>SHRI. CH. MAHENDER REDDY</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>Secretary and Correspondant</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>St. Martin's Engineering College</p>
                        </div>

                        {/* Speaker 24 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/24.png" alt="Shri. G. Jai Kishan Yadav" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>Shri. G. Jai Kishan Yadav</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>Director</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>St. Martin's Engineering College</p>
                        </div>

                        {/* Speaker 25 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/25.png" alt="SHRI. G. NARSHIMHA YADAV" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>SHRI. G. NARSHIMHA YADAV</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>Treasurer</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>St. Martin's Engineering College</p>
                        </div>

                        {/* Speaker 26 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/26.png" alt="SHRI. M. RAJASEKHAR REDDY" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>SHRI. M. RAJASEKHAR REDDY</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>Director</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>St. Martin's Engineering College</p>
                        </div>

                        {/* Speaker 27 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/27.png" alt="M. SATHYENDRA KUMAR" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>M. SATHYENDRA KUMAR</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>Co-Founder</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>International Startup Foundation</p>
                        </div>

                        {/* Speaker 28 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/28.png" alt="PROF. T. KISHEN KUMAR REDDY" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>PROF. T. KISHEN KUMAR REDDY</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>Vice-Chancellor</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>JNTU-Hyderabad</p>
                        </div>

                        {/* Speaker 29 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/29.png" alt="PROF. BJ RAO" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>PROF. BJ RAO</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>Vice-Chancellor</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>University of Hyderabad</p>
                        </div>

                        {/* Speaker 30 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/30.png" alt="PROF. MURTY BS" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>PROF. MURTY BS</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>Director</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>IIT-Hyderabad</p>
                        </div>

                        {/* Speaker 31 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/31.png" alt="SHRI. SUDHIRKUMAR BARAI" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>SHRI. SUDHIRKUMAR BARAI</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>Director</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>BITS- Hyderabad</p>
                        </div>

                        {/* Speaker 32 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/32.png" alt="Brigadier (Dr) Inder Sethi" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>Brigadier (Dr) Inder Sethi</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>Director | Global Strategy Head | Strategy, Innovation & Leadership | 2xTEDx | Keynote Speaker | Author</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}></p>
                        </div>

                        {/* Speaker 33 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/33.png" alt="SHRI. VSK REDDY" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>SHRI. VSK REDDY</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>Vice-Chancellor</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>MRU</p>
                        </div>

                        {/* Speaker 34 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/34.png" alt="SHRI. KAMAKSHI PRASAD" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>SHRI. KAMAKSHI PRASAD</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>Director of UGC Affairs</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>JNTU-Hyderabad</p>
                        </div>

                        {/* Speaker 35 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/35.png" alt="SHRI. RAJ GOPAL" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>SHRI. RAJ GOPAL</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>Ex Vice-Chancellor</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>JNTU-Hyderabad</p>
                        </div>

                        {/* Speaker 36 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/36.png" alt="Dr. MHM KRISHNA PRASAD" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>Dr. MHM KRISHNA PRASAD</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>Director, Academics</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>JNTU-KAKINADA</p>
                        </div>

                        {/* Speaker 37 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/37.png" alt="Dr. A KRISHNA MOHAN" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>Dr. A KRISHNA MOHAN</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>Professor and Director</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>Student Affairs JNTU-KAKINADA</p>
                        </div>

                        {/* Speaker 38 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/38.png" alt="Dr. G. Narsimha" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>Dr. G. Narsimha</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>Professor and Principal</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>JNTU- JAGTIAL</p>
                        </div>

                        {/* Speaker 39 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/39.png" alt="Mrs Gayathri Vaka" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>Mrs Gayathri Vaka</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>Vice-chair,ACM HYD</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>Associate Director Accenture Hyderabad</p>
                        </div>

                        {/* Speaker 40 */}
                        <div className="speaker-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1.5 sm:p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                            <div className="aspect-square mb-1.5 sm:mb-3 md:mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <img src="/images/40.png" alt="Dr. Sriram Birudavolu" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </div>
                            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-1 leading-tight" style={{ color: 'var(--color-text-primary)' }}>Dr. Sriram Birudavolu</h3>
                            <p className="text-xs sm:text-sm mb-1 sm:mb-2 leading-tight" style={{ color: 'var(--color-accent)' }}>CEO Cybersecurity Centre of Excellence</p>
                            <p className="text-[10px] sm:text-xs leading-tight line-clamp-2" style={{ color: 'var(--color-text-muted)' }}>NASSCOM/DSCI - Hyderabad</p>
                        </div>
                    </div>
                </div>

                {/* CTA section */}
                <div className="speaker-cta mt-20">
                    <p
                        className="mb-4"
                        style={{
                            color: 'var(--color-text-muted)',
                            fontFamily: 'var(--font-primary)',
                            fontSize: 'var(--text-small)',
                        }}
                    >
                        Want to speak at the Conclave?
                    </p>
                    <a
                        href="https://forms.gle/XAZvLLnzRBFtJMBf8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 border transition-all duration-300 hover:bg-[var(--color-accent)] hover:text-white"
                        style={{
                            borderColor: 'var(--color-accent)',
                            color: 'var(--color-accent)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: 'var(--text-small)',
                            letterSpacing: '0.15em',
                        }}
                    >
                        APPLY TO SPEAK
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default SpeakersPage;
