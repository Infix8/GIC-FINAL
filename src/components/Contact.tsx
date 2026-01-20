import { useState } from 'react';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, subscribing, success

    const [contactForm, setContactForm] = useState({
        'entry.1331908454': '', // Name
        'entry.299383262': '',  // Email
        'entry.1599555423': '', // Phone
        'entry.1708222522': '', // Subject
        'entry.1480851550': ''  // Message
    });
    const [contactStatus, setContactStatus] = useState('idle'); // idle, sending, success

    const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setContactForm({
            ...contactForm,
            [e.target.name]: e.target.value
        });
    };

    const handleContactSubmit = () => {
        setContactStatus('sending');
        setTimeout(() => {
            setContactStatus('success');
            setContactForm({
                'entry.1331908454': '',
                'entry.299383262': '',
                'entry.1599555423': '',
                'entry.1708222522': '',
                'entry.1480851550': ''
            });
            setTimeout(() => setContactStatus('idle'), 3000);
        }, 1500);
    };

    const handleNewsletterSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('subscribing');

        try {
            const response = await fetch('http://localhost:3000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setStatus('success');
                setEmail('');
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('idle');
                alert('Failed to send email. Please try again.');
            }
        } catch (error) {
            setStatus('idle');
            alert('Server unavailable. Please ensure the backend is running.');
        }
    };

    const inputStyle = {
        background: 'white',
        border: '1px solid rgba(7, 7, 7, 0.1)',
        color: 'var(--color-text-primary)'
    };

    const cardStyle = {
        background: 'var(--color-bg-secondary)',
        border: '1px solid rgba(7, 7, 7, 0.08)'
    };

    return (
        <section className="py-20 px-6 md:px-12" id="contact">
            <div className="mb-12">
                <span className="font-mono text-xs tracking-widest" style={{ color: 'var(--color-text-muted)' }}>[05]</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2" style={{ color: 'var(--color-text-primary)' }}>Get In Touch</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column: Info & Organizers */}
                <div className="flex flex-col gap-6">
                    <div className="p-6 rounded-xl card-hover-effect" style={cardStyle}>
                        <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>Contact Details</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <span className="text-lg">📞</span>
                                <span style={{ color: 'var(--color-text-secondary)' }}>+91 8885155552</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-lg">✉️</span>
                                <span style={{ color: 'var(--color-text-secondary)' }}>info@globalinnovatorsconclave.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-lg">🌐</span>
                                <a 
                                    href="https://globalinnovatorsconclave.in/" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    style={{ color: 'var(--color-accent)' }}
                                >
                                    www.globalinnovatorsconclave.in
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl card-hover-effect" style={cardStyle}>
                        <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>Organizing Committee</h3>
                        <div className="space-y-4">
                            {[
                                { name: 'Prof. Dr. K. Ravindra', role: 'Chair - Global Innovators Conclave' },
                                { name: 'Dr. Gowtham Mamidisetti', role: 'Convener - Global Innovators Conclave' },
                                { name: 'M. Malavika', role: 'Faculty Coordinator' },
                                { name: 'G. Gnana Abi Sathwik', role: 'Student Coordinator' }
                            ].map((person, index) => (
                                <div key={index}>
                                    <p className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>{person.name}</p>
                                    <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{person.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="p-6 rounded-xl" style={cardStyle}>
                    <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-accent)' }}>Register To Get Notify</h3>
                    <p className="mb-6" style={{ color: 'var(--color-text-muted)' }}>Send us a Message</p>
                    <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }}></iframe>
                    <form
                        className="flex flex-col gap-4"
                        action="https://docs.google.com/forms/d/e/1FAIpQLSeKv9ovZxQ6gTVaV6UxcFyrVuOeLlYzBVZaEw7trLSwrj7Xnw/formResponse"
                        method="POST"
                        target="hidden_iframe"
                        onSubmit={handleContactSubmit}
                    >
                        <input
                            type="text"
                            name="entry.1331908454"
                            placeholder="Your Name"
                            required
                            value={contactForm['entry.1331908454']}
                            onChange={handleContactChange}
                            className="w-full rounded-lg px-4 py-3 focus:outline-none transition-colors"
                            style={inputStyle}
                        />
                        <input
                            type="email"
                            name="entry.299383262"
                            placeholder="Your Email"
                            required
                            value={contactForm['entry.299383262']}
                            onChange={handleContactChange}
                            className="w-full rounded-lg px-4 py-3 focus:outline-none transition-colors"
                            style={inputStyle}
                        />
                        <input
                            type="tel"
                            name="entry.1599555423"
                            placeholder="Phone Number"
                            required
                            value={contactForm['entry.1599555423']}
                            onChange={handleContactChange}
                            className="w-full rounded-lg px-4 py-3 focus:outline-none transition-colors"
                            style={inputStyle}
                        />
                        <input
                            type="text"
                            name="entry.1708222522"
                            placeholder="Subject"
                            required
                            value={contactForm['entry.1708222522']}
                            onChange={handleContactChange}
                            className="w-full rounded-lg px-4 py-3 focus:outline-none transition-colors"
                            style={inputStyle}
                        />
                        <textarea
                            name="entry.1480851550"
                            placeholder="Your Message"
                            rows={4}
                            required
                            value={contactForm['entry.1480851550']}
                            onChange={handleContactChange}
                            className="w-full rounded-lg px-4 py-3 focus:outline-none transition-colors resize-none"
                            style={inputStyle}
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full py-3 rounded-lg text-white font-medium transition-all"
                            disabled={contactStatus === 'sending'}
                            style={{ 
                                background: contactStatus === 'success' ? '#27ae60' : 'var(--color-accent)'
                            }}
                        >
                            {contactStatus === 'idle' && 'Send Message'}
                            {contactStatus === 'sending' && 'Sending...'}
                            {contactStatus === 'success' && '✓ Message Sent!'}
                        </button>
                    </form>
                </div>
            </div>

            {/* Newsletter Banner - Premium Design */}
            <div className="mt-12 rounded-2xl overflow-hidden relative" style={{ 
                background: 'linear-gradient(135deg, rgba(107, 91, 149, 0.25) 0%, rgba(139, 123, 181, 0.15) 50%, rgba(107, 91, 149, 0.25) 100%)',
                border: '1px solid rgba(139, 123, 181, 0.25)'
            }}>
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-[#8B7BB5]/10 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-[#8B7BB5]/10 blur-3xl"></div>
                
                <div className="relative p-8 md:p-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        {/* Left: Content */}
                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#8B7BB5]/20 border border-[#8B7BB5]/30 mb-4">
                                <span className="w-2 h-2 rounded-full bg-[#8B7BB5] animate-pulse"></span>
                                <span className="text-xs font-semibold tracking-wider text-[#A99BD4] uppercase">Stay Updated</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                                Get Event Details
                            </h3>
                            <p className="text-sm md:text-base" style={{ color: 'var(--color-text-muted)' }}>
                                Subscribe to be the first to know when registration opens
                            </p>
                        </div>
                        
                        {/* Right: Form */}
                        <form className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto" onSubmit={handleNewsletterSubmit}>
                            <div className="relative flex-1 lg:w-80">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                    <svg className="w-5 h-5 text-[#8B7BB5]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#8B7BB5]/50 transition-all"
                                    style={{
                                        background: 'rgba(10, 10, 15, 0.8)',
                                        border: '1px solid rgba(139, 123, 181, 0.3)',
                                        color: 'var(--color-text-primary)'
                                    }}
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-8 py-4 rounded-xl text-[#0a0a0f] font-semibold transition-all hover:shadow-lg hover:shadow-[#8B7BB5]/30 hover:scale-[1.02] active:scale-[0.98]"
                                disabled={status === 'subscribing'}
                                style={{ 
                                    background: status === 'success' ? 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)' : 'linear-gradient(135deg, #8B7BB5 0%, #A99BD4 100%)'
                                }}
                            >
                                {status === 'idle' && (
                                    <span className="flex items-center gap-2">
                                        Notify Me
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </span>
                                )}
                                {status === 'subscribing' && 'Subscribing...'}
                                {status === 'success' && '✓ Subscribed!'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

