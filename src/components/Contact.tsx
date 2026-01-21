import { useState } from 'react';

const Contact = () => {
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
                    <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-accent)' }}>Register Interest</h3>
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
        </section>
    );
};

export default Contact;

