import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AccommodationPage = () => {
    const pageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.acc-animate', {
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power3.out',
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={pageRef} className="page-container" style={{ paddingTop: 0 }}>
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="section-header-new acc-animate">
                    <h1 className="section-title-new">ACCOMMODATION</h1>
                </div>

                {/* SMEC Accommodation Details - Highlighted Card */}
                <div
                    className="acc-animate mb-10 rounded-2xl p-5 sm:p-6 md:p-7"
                    style={{
                        background: 'linear-gradient(135deg, rgba(139, 123, 181, 0.18), rgba(10, 10, 20, 0.95))',
                        border: '1px solid rgba(139, 123, 181, 0.55)',
                        boxShadow: '0 18px 45px rgba(0, 0, 0, 0.55)',
                    }}
                >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="text-left">
                            <p
                                className="text-xs font-semibold tracking-[0.15em] uppercase mb-1"
                                style={{ color: 'rgba(226, 218, 255, 0.85)' }}
                            >
                                SMEC CAMPUS ACCOMMODATION
                            </p>
                            <h2
                                className="text-xl sm:text-2xl font-bold"
                                style={{ color: 'var(--color-text-primary)' }}
                            >
                                ₹2,500 per person
                            </h2>
                            <p
                                className="mt-2 text-sm sm:text-base"
                                style={{ color: 'var(--color-text-secondary)' }}
                            >
                                Entry permitted from <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>26<sup>th</sup> evening</span>{' '}
                                and maximum exit time is{' '}
                                <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>1<sup>st</sup> March, 10:00 AM</span>.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 text-sm sm:text-base text-right sm:text-left">
                            <p style={{ color: 'rgba(226, 218, 255, 0.9)' }}>
                                Ideal for outstation participants staying on campus.
                            </p>
                            <p style={{ color: 'rgba(226, 218, 255, 0.75)' }}>
                                Please complete your registration to confirm accommodation.
                            </p>
                        </div>
                    </div>
                    <div className="mt-5 flex justify-start sm:justify-end">
                        <a
                            href="https://rzp.io/rzp/AccommodationBooking"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all"
                            style={{
                                background: 'linear-gradient(90deg, rgba(139,123,181,0.9), rgba(107,91,149,0.9))',
                                color: '#ffffff',
                                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.45)',
                                textDecoration: 'none',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 12px 36px rgba(0, 0, 0, 0.6)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.45)';
                            }}
                        >
                            Buy Now
                        </a>
                    </div>
                </div>

                
            </section>
        </div>
    );
};

export default AccommodationPage;

