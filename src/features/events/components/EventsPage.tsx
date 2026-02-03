import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { useParams, useNavigate, Link } from '@tanstack/react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Event colors matching Structure component (25% dimmed)
const eventColors = {
    knowledgeBubble: {
        gradient: "linear-gradient(135deg, #b89e4c 0%, #be7864 100%)",
        shadow: "rgba(184, 158, 76, 0.4)",
        accent: "#b89e4c"
    },
    alphaToInfinity: {
        gradient: "linear-gradient(135deg, #63bb84 0%, #6b9eb7 100%)",
        shadow: "rgba(99, 187, 132, 0.4)",
        accent: "#63bb84"
    },
    businessTechExpo: {
        gradient: "linear-gradient(135deg, #79699d 0%, #bc91b0 100%)",
        shadow: "rgba(121, 105, 157, 0.4)",
        accent: "#79699d"
    },
    investorPitching: {
        gradient: "linear-gradient(135deg, #a892bd 0%, #6a94bd 100%)",
        shadow: "rgba(168, 146, 189, 0.4)",
        accent: "#a892bd"
    },
    mastermindCongregation: {
        gradient: "linear-gradient(135deg, #b46ebc 0%, #b84151 100%)",
        shadow: "rgba(180, 110, 188, 0.4)",
        accent: "#b46ebc"
    }
};

interface TimelineItem {
    time: string;
    activity: string;
    details: string;
    type: string;
}

interface EventData {
    id: string;
    number: string;
    title: string;
    shortTitle: string;
    tagline: string;
    description: string;
    colorKey: keyof typeof eventColors;
    highlights: string[];
    keyDetails: { label: string; value: string }[];
    fullDetails: { title: string; content: string[] }[];
    timeline: {
        day1?: TimelineItem[];
        day2?: TimelineItem[];
        phases?: { name: string; date: string; description: string }[];
    };
}

const baseEventsData: EventData[] = [
    {
        id: "alpha-to-infinity",
        number: "02",
        title: "Alpha 2 Infiniti",
        shortTitle: "A2I",
        tagline: "30-Hour Hiring Hackathon - \"Brighter minds for Viksith Bharath\"",
        description: "A high-intensity 30-hour hackathon where shortlisted participants form teams to solve real-world industry problem statements with mentor support. Teams develop MVP/working solutions through industry mentor guidance, culminating in final presentations and awards. Participants have opportunities for internships & PPOs (Terms & Conditions apply).",
        colorKey: "alphaToInfinity",
        highlights: [
            "360 Selected Participants",
            "10+ Industry Mentors",
            "30 Hours",
            "Problem Statements"
        ],
        keyDetails: [
            { label: "Total Participants", value: "360 (via LinkedIn, CV & GitHub review)" },
            { label: "Team Size", value: "6" },
            { label: "Duration", value: "30 hours" },
            { label: "Total Mentors", value: "30" },
            { label: "Problem Statements", value: "assigned by companies" },
            { label: "Total Teams", value: "60 teams" }
        ],
        fullDetails: [
            {
                title: "Problem Statements",
                content: [
                    "Problem Statement 1",
                    "Problem Statement 2",
                    "Problem Statement 3",
                    "Problem Statement 4"
                ]
            },
            {
                title: "Team Composition Requirements",
                content: [
                    "Each team consists of 6 members",
                    "Teams must select TWO primary roles with priority rankings",
                    "MANDATORY: The top ten teams from each problem statement will be selected."
                ]
            },
            {
                title: "Selection Criteria",
                content: [
                    "LinkedIn Profile Review",
                    "CV/Resume Evaluation",
                    "GitHub Profile Analysis",
                    "Technical skill assessment based on problem statements"
                ]
            },
            {
                title: "Outcomes",
                content: [
                    "Proof of Concepts (PoCs)",
                    "Pre-Placement Offers (PPOs)",
                    "Internship Opportunities"
                ]
            },
            {
                title: "Technology Partners",
                content: [
                    "Google Cloud",
                    "Amazon Web Services (AWS)",
                    "Microsoft Azure",
                    "Google Cloud Platform (GCP)"
                ]
            },
            {
                title: "Collaboration Partners",
                content: [
                    "Hyderabad Python Group",
                    "Other technical community organizations"
                ]
            }
        ],
        timeline: {
            day1: [
                { time: "09:30 - 10:00", activity: "Inauguration", details: "Opening ceremony and welcome address", type: "Ceremony" },
                { time: "10:00 - 10:30", activity: "Problem Statement Announcement", details: "Teams receive their assigned problem statements from partner companies", type: "Briefing" },
                { time: "11:00 - 18:00", activity: "Sprint 1 (7 Hours)", details: "First development phase - initial concept development and planning", type: "Sprint" },
                { time: "18:00 - 19:00", activity: "Mentor Checking (Milestone 1)", details: "Mentor evaluation and feedback on initial progress", type: "Evaluation" },
                { time: "19:00 - 20:00", activity: "Tech-related Engagement", details: "Engagement activity or technical showcase for participants", type: "Activity" },
                { time: "20:00 - 00:00", activity: "Sprint 2 (4 Hours)", details: "Development phase - building on initial concepts", type: "Sprint" }
            ],
            day2: [
                { time: "00:00 - 01:00", activity: "Campfire & Networking", details: "Team bonding, networking session, and informal discussions", type: "Networking" },
                { time: "01:00 - 10:00", activity: "Sprint 3 (Final Phase – 10 Hours)", details: "Final development phase - polish, testing, and documentation", type: "Sprint" },
                { time: "10:00 - 12:00", activity: "Elimination & Final Evaluation", details: "Final evaluation by mentors; only TOP 10 TEAMS advance to Round 2", type: "Evaluation" },
                { time: "12:00 - 13:00", activity: "Lunch", details: "Refreshment and preparation for final presentations", type: "Break" },
                { time: "13:00 - 15:00", activity: "Final Presentations (Top 10 Teams)", details: "Final presentations from qualifying teams to judges and company representatives", type: "Presentation" },
                { time: "16:00", activity: "Award Ceremony", details: "Awards ceremony for winning teams, PPO announcements, and closing", type: "Ceremony" }
            ]
        }
    },
    {
        id: "business-tech-expo",
        number: "03",
        title: "BusiTech Expo",
        shortTitle: "BTE",
        tagline: "Business Technology Expo - Professional & Student Innovations",
        description: "A business-focused expo showcasing products, MVPs, pilots, and scalable solutions with emphasis on commercialization and partnerships. Features exhibition stalls for companies/startups, product & solution showcases, industry networking, investor interactions, and expert evaluation with pitch opportunities.",
        colorKey: "businessTechExpo",
        highlights: [
            "Students",
            "Technical",
            "Non-technical"
        ],
        keyDetails: [
            { label: "Students", value: "30 teams" },
            { label: "Technical", value: "20 teams" },
            { label: "Non-technical", value: "36 teams" },
            { label: "Total Exhibits", value: "86 teams" },
            { label: "Exhibit Type", value: "Product / Prototype" }
        ],
        fullDetails: [
            {
                title: "Participating Categories",
                content: [
                    "Students: 30 teams showcasing Product/Prototype",
                    "Technical: 20 teams showcasing Product/Prototype",
                    "Non-technical: 36 teams showcasing Product/Prototype",
                    "Total: 86 exhibits"
                ]
            },
            {
                title: "Advancement Criteria",
                content: [
                    "Startups meeting evaluation criteria are selected for Investor Pitching Session",
                    "Non-selected startups continue as exhibition stalls for networking",
                    "All participants receive feedback from evaluation panel"
                ]
            },
            {
                title: "Exhibition Features",
                content: [
                    "Dedicated stall space for each exhibit",
                    "Live demonstrations to visitors",
                    "Networking opportunities with industry experts",
                    "Media coverage and visibility"
                ]
            }
        ],
        timeline: {
            day1: [
                { time: "08:30 - 11:00", activity: "Stall Setup & Inauguration", details: "Participant setup, stall arrangement, and opening ceremony", type: "Setup" },
                { time: "11:00 - 15:00", activity: "Exhibition (4 Hours)", details: "Live expo with visitor interaction, demonstrations, and networking", type: "Exhibition" },
                { time: "15:00 - 17:00", activity: "Mini Workshops (2 Hours)", details: "Interactive workshops and learning sessions for participants", type: "Workshop" }
            ],
            day2: [
                { time: "09:30 - 11:00", activity: "Expert Evaluation", details: "Structured evaluation of all exhibits by industry experts", type: "Evaluation" },
                { time: "11:00 - 16:00", activity: "Investor Pitch (Selected Teams)", details: "Top-ranked startups present to investor panels", type: "Pitching" },
                { time: "16:00", activity: "Elimination & Final Evaluation", details: "Final evaluation results and awards ceremony", type: "Ceremony" }
            ]
        }
    },
    {
        id: "investor-pitching",
        number: "04",
        title: "InnoVestors Bootcamp",
        shortTitle: "IVB",
        tagline: "Investor Pitching Event",
        description: "An investment-focused bootcamp designed to make startups investment-ready through mentoring, pitching, and investor engagement. Features online pitch submissions & shortlisting, mentoring by investors and industry experts, investor panel interactions, and round-table discussions. Outcomes include MOUs, pilot projects, partnerships, funding leads, and potential investments (Terms & Conditions apply).",
        colorKey: "investorPitching",
        highlights: [
            "35 Student Slots (Pre-Seed)",
            "28 Professional Slots (Seed)",
            "Up to ₹10 Crore Investment",
            "1:1 Investor Meetings"
        ],
        keyDetails: [
            { label: "Registration Deadline", value: "February 20" },
            { label: "Results Announcement", value: "3 working days after deadline" },
            { label: "Student Track Slots", value: "35 teams" },
            { label: "Professional Track Slots", value: "28 teams" },
            { label: "Student Pitch Duration", value: "12 min (5+5+2)" },
            { label: "Professional Pitch Duration", value: "17 min (5+10+2)" }
        ],
        fullDetails: [
            {
                title: "Student Track (Pre-Seed Stage) - 35 Slots",
                content: [
                    "Pitch Duration: 5 minutes",
                    "Q&A Duration: 5 minutes",
                    "Buffer Time: 2 minutes",
                    "Total Time per Pitch: 12 minutes",
                    "Day 1: 15 pitches (13:00 - 16:00)",
                    "Day 2 Morning: 10 pitches (10:00 - 12:00)",
                    "Day 2 Afternoon: 10 pitches (13:30 - 15:30)"
                ]
            },
            {
                title: "Professional Track (Seed Stage) - 28 Slots",
                content: [
                    "Pitch Duration: 5 minutes",
                    "Q&A Duration: 10 minutes",
                    "Buffer Time: 2 minutes",
                    "Total Time per Pitch: 17 minutes",
                    "Day 1: 14 pitches (13:00 - 17:00)",
                    "Day 2 Morning: 7 pitches (10:00 - 12:00)",
                    "Day 2 Afternoon: 7 pitches (13:30 - 15:30)"
                ]
            },
            {
                title: "Investment Opportunities",
                content: [
                    "1:1 Investor-Startup Meetings for due diligence",
                    "Pitch to mixed panel of investors and domain mentors",
                    "Investment opportunities worth up to INR 10 Crores",
                    "Capital access for qualifying startups"
                ]
            },
            {
                title: "Benefits for Selected Startups",
                content: [
                    "Capital Access - Direct funding opportunities",
                    "Incubation Support - Access to incubator programs",
                    "Global Visibility - Exposure to international investors",
                    "Mentorship - Ongoing guidance from industry experts"
                ]
            },
            {
                title: "Evaluation Process",
                content: [
                    "Pre-screening based on application",
                    "Business model assessment",
                    "Market potential evaluation",
                    "Team capability review"
                ]
            }
        ],
        timeline: {
            day1: [
                { time: "09:00 - 10:00", activity: "Inauguration", details: "Opening ceremony for all participants - Students and Professionals", type: "Ceremony" },
                { time: "10:00 - 13:00", activity: "Visiting & Mentor Interactions", details: "Networking and interaction opportunities with mentors for participants", type: "Networking" },
                { time: "13:00 - 16:00", activity: "Pitching Sessions", details: "Student Track: 15 pitches (Pre-Seed) - 12 min each | Professional Track: 14 pitches (Seed) - 17 min each", type: "Pitching" }
            ],
            day2: [
                { time: "10:00 - 12:00", activity: "Pitching Sessions", details: "Student Track: 10 pitches (Pre-Seed) - 12 min each | Professional Track: 7 pitches (Seed) - 17 min each", type: "Pitching" },
                { time: "13:30 - 15:30", activity: "Pitching Sessions", details: "Student Track: 10 pitches (Pre-Seed) - 12 min each | Professional Track: 7 pitches (Seed) - 17 min each", type: "Pitching" }
            ]
        }
    },
    {
        id: "mastermind-congregation",
        number: "05",
        title: "Masterminds Congregation",
        shortTitle: "MC",
        tagline: "Young Entrepreneurs Initiative - Classes 8-12",
        description: "A dedicated program to ignite curiosity, creativity, and problem-solving skills among school students (Classes 8-12) by giving them early exposure to innovation and entrepreneurship. This platform provides students with opportunities to present ideas and projects, receive feedback from mentors and educators, and develop confidence and critical-thinking skills.",
        colorKey: "mastermindCongregation",
        highlights: [
            "1,200 Initial Participants",
            "Top 100 Teams in Finals",
            "Multi-School Partnership",
            "School Students Only"
        ],
        keyDetails: [
            { label: "Target Audience", value: "Classes 8-12 students" },
            { label: "Initial Participants", value: "1,200 students" },
            { label: "Team Size", value: "3 members per team" },
            { label: "Finals Participants", value: "Top 100 teams" },
            { label: "Finals Venue", value: "SMEC Campus" }
        ],
        fullDetails: [
            {
                title: "Phase 1: Entrepreneurship Fundamentals (January 20)",
                content: [
                    "Topic: Entrepreneurship 101 for Young Entrepreneurs",
                    "Participants: 1,200 students from participating schools",
                    "Delivery: Introductory workshop on entrepreneurial concepts",
                    "Focus: Building foundational understanding of startups"
                ]
            },
            {
                title: "Phase 2: Expert Training Sessions (February 2-4)",
                content: [
                    "Conducted by: SMEC Expert Faculty",
                    "How to pitch effectively",
                    "Business model development and validation",
                    "Market validation techniques",
                    "Customer discovery methods",
                    "Delivery: On-site training at each participating school"
                ]
            },
            {
                title: "Phase 3: School-Based Screening (February 10-20)",
                content: [
                    "Conducted at individual school level",
                    "Based on school availability and schedule",
                    "Each school selects top-performing teams (team of 3)",
                    "Selection criteria: Pitching skills, business model viability, market understanding"
                ]
            },
            {
                title: "Phase 4: Results Announcement (February 22)",
                content: [
                    "Declaration of selected teams advancing to finals",
                    "Top 100 teams selected across all schools",
                    "Teams notified about Grand Finale details"
                ]
            },
            {
                title: "Phase 5: Grand Finale (February 27-28)",
                content: [
                    "Venue: St. Martin's Engineering College",
                    "Participating Teams: Top 100 teams from all schools",
                    "Final pitching competition and awards"
                ]
            },
            {
                title: "Multi-Year School Collaboration Framework",
                content: [
                    "Establish entrepreneurship as core competency in school curricula",
                    "Create innovation clubs and startup incubators within schools",
                    "Regular training sessions by SMEC faculty throughout academic year",
                    "Dedicated mentor assignment for school-based startup teams",
                    "Quarterly review and feedback sessions"
                ]
            },
            {
                title: "Resource Accessibility for Partner Schools",
                content: [
                    "Access to college infrastructure, labs, and maker spaces",
                    "Technical consultation for student projects",
                    "Connection to industry experts from SMEC's network",
                    "Pathways from school competitions to college-level accelerators"
                ]
            },
            {
                title: "Strategic Objectives",
                content: [
                    "Position Hyderabad as hub for school-level entrepreneurship",
                    "Build network of 30+ schools with embedded startup culture",
                    "Identify and nurture young entrepreneurial talent",
                    "Create branded cohorts of school-origin startup teams"
                ]
            }
        ],
        timeline: {
            phases: [
                { name: "Phase 1: Entrepreneurship Fundamentals", date: "January 20", description: "Entrepreneurship 101 workshop for 1,200 students across participating schools" },
                { name: "Phase 2: Expert Training Sessions", date: "February 2-4", description: "SMEC faculty training on pitching, business models, market validation, customer discovery" },
                { name: "Phase 3: School-Based Screening", date: "February 10-20", description: "Individual school selections - top teams (3 members each) advance based on pitch & business viability" },
                { name: "Phase 4: Results Announcement", date: "February 22", description: "Declaration of top 100 teams advancing to Grand Finale at SMEC campus" },
                { name: "Phase 5: Grand Finale", date: "February 27-28", description: "Top 100 teams compete at SMEC campus. Strictly for school students (Classes 8-12)" }
            ]
        }
    },
    {
        id: "knowledge-bubble",
        number: "01",
        title: "Knowledge Bubble",
        shortTitle: "KB",
        tagline: "Deep-Tech Policy Conclave - Policymakers, Industry Leaders & Innovators",
        description: "A high-level discussion forum focusing on policy, industry, research, and deep-tech ecosystems. This premier platform brings together policymakers, industry leaders, researchers, and founders for expert talks and panels, policy & industry alignment discussions, and focus on deep-tech commercialization with national & global innovation perspectives.",
        colorKey: "knowledgeBubble",
        highlights: [
            "1,300 Seat Main Auditorium",
            "Multiple Technology Tracks",
            "Policy & Industry Leaders",
            "9 Focus Domains"
        ],
        keyDetails: [
            { label: "Main Auditorium (MG Block)", value: "1,300 capacity" },
            { label: "Tech Track A (SCB Block)", value: "700 capacity" },
            { label: "Tech Track B (SCB Block)", value: "700 capacity" },
            { label: "Focus Areas", value: "9 technology domains" },
            { label: "Format", value: "Keynotes + Panel Discussions" },
            { label: "Duration", value: "2 days" }
        ],
        fullDetails: [
            {
                title: "Key Focus Areas (9 Domains)",
                content: [
                    "Artificial Intelligence (AI) - Current trends and future applications",
                    "Quantum Technologies - Quantum computing and communication",
                    "Robotics & Autonomous Systems - Applications across industries",
                    "Space & Defence Technologies - National security and exploration",
                    "Biotechnology & Life Sciences - Healthcare and biotech innovations",
                    "Semiconductors & Advanced Electronics - Critical tech infrastructure",
                    "Data Centers & Infrastructure - Backbone for deep-tech ecosystems",
                    "Advanced Materials & Nanotechnology - Next-generation materials",
                    "Climate & Sustainability - Green technology solutions"
                ]
            },
            {
                title: "Government & Policy Themes",
                content: [
                    "National Deep-Tech Strategy",
                    "IndiaAI Mission initiatives",
                    "R&D grants and funding schemes",
                    "Tax incentives for innovation",
                    "Public procurement frameworks for startups",
                    "Semiconductor technology roadmap"
                ]
            },
            {
                title: "Day 1 - Main Track Panels (MG Block - 1,300 capacity)",
                content: [
                    "Panel 1: Entrepreneurship & India Mission on Innovation",
                    "Panel 2: Policy Enablement & Vision 2047",
                    "Panel 3: Entrepreneurship & Growth",
                    "Panel 4: Data Centers & Infrastructure for Deep Technologies"
                ]
            },
            {
                title: "Day 1 - Technology Track A Panels (SCB Block - 700 capacity)",
                content: [
                    "Panel 1: Artificial Intelligence & Machine Learning",
                    "Panel 2: Quantum Technologies",
                    "Panel 3: Robotics & Autonomous Systems",
                    "Panel 4: Biotechnology & Life Sciences"
                ]
            },
            {
                title: "Day 2 - Technology Track B Panels (SCB Block - 700 capacity)",
                content: [
                    "Panel 1: Space & Defence Technologies",
                    "Panel 2: Semiconductors & Advanced Electronics",
                    "Panel 3: Advanced Materials & Nanotechnology",
                    "Panel 4: Climate & Sustainability"
                ]
            },
            {
                title: "Networking & Engagement",
                content: [
                    "Technology showcase by innovators, startups, and companies",
                    "Interactive demos and live demonstrations",
                    "Investor and vendor pavilions",
                    "Scheduled breaks with dedicated networking zones",
                    "One-on-one meeting facilitation",
                    "Attendee directory shared post-event"
                ]
            },
            {
                title: "Expected Deliverables",
                content: [
                    "Policy recommendations for deep-tech ecosystem development",
                    "Partnerships between policymakers and innovators",
                    "Funding opportunities identified and connected",
                    "Technology roadmaps for priority sectors",
                    "Media coverage and thought leadership articles"
                ]
            }
        ],
        timeline: {
            day1: [
                { time: "10:00 - 11:00", activity: "Inauguration", details: "Opening ceremony and welcome address", type: "Ceremony" },
                { time: "11:00 - 17:00", activity: "Expert Talks & Panel Discussions", details: "High-level policy, industry, and deep-tech discussions", type: "Panel" }
            ],
            day2: [
                { time: "10:00 - 11:00", activity: "Keynote Session", details: "Keynote addresses by industry leaders and policymakers", type: "Ceremony" },
                { time: "11:00 - 17:00", activity: "Expert Talks & Panel Discussions", details: "High-level policy, industry, and deep-tech discussions", type: "Panel" }
            ]
        }
    }
];

/* Same order as Passes page: 1. Knowledge, 2. Alpha2Infiniti, 3. BusiTech Expo, 4. InnoVestors BootCamp, 5. Masterminds Congregation */
const eventsOrder = [
    "knowledge-bubble",
    "alpha-to-infinity",
    "business-tech-expo",
    "investor-pitching",
    "mastermind-congregation",
] as const;

const eventsData: EventData[] = eventsOrder.map(
    (id) => baseEventsData.find((event) => event.id === id)!
);

const EventsPage = () => {
    const pageRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    const params = useParams({ strict: false }) as { eventId?: string };
    const navigate = useNavigate();
    const [activeDay, setActiveDay] = useState<1 | 2>(1);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    // Map URL slugs to event IDs
    const eventSlugToId: Record<string, string> = {
        'knowledgebubble': 'knowledge-bubble',
        'alpha2infiniti': 'alpha-to-infinity',
        'busitechexpo': 'business-tech-expo',
        'innovestorsbootcamp': 'investor-pitching',
        'mastermindscongregation': 'mastermind-congregation',
    };

    // Map event IDs to URL slugs
    const eventIdToSlug: Record<string, string> = {
        'knowledge-bubble': 'knowledgebubble',
        'alpha-to-infinity': 'alpha2infiniti',
        'business-tech-expo': 'busitechexpo',
        'investor-pitching': 'innovestorsbootcamp',
        'mastermind-congregation': 'mastermindscongregation',
    };

    // Get selected event from route params
    const selectedEvent = params?.eventId 
        ? baseEventsData.find(e => e.id === eventSlugToId[params.eventId!] || e.id === params.eventId) || null
        : null;

    // Entry animation - removed all animations
    useEffect(() => {
        if (selectedEvent) return;

        const ctx = gsap.context(() => {
            // All animations removed - header and cards appear immediately
            gsap.set('.header-animate', { opacity: 1, y: 0 });
            gsap.set('.event-card', { opacity: 1 });
        }, pageRef);

        return () => ctx.revert();
    }, [selectedEvent]);

    // Timeline animations - Cards appear as you scroll (disabled on mobile)
    useLayoutEffect(() => {
        if (!selectedEvent) return;

        // Check if mobile - disable animations on mobile
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
        
        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray('.timeline-item');
            items.forEach((item, index) => {
                const el = item as HTMLElement;
                
                if (isMobile) {
                    // On mobile, show items immediately without animation
                    gsap.set(el, { opacity: 1, y: 0 });
                } else {
                    // Reset initial state for desktop
                    gsap.set(el, { opacity: 0, y: 40 });
                    
                    // Animate in with scroll trigger
                    gsap.to(el, {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                            once: true
                        }
                    });
                }
            });
        }, timelineRef);

        return () => ctx.revert();
    }, [selectedEvent, activeDay]);

    // Countdown timer - works for all individual event pages
    // Counts down to February 27, 2026 at 00:00:00 (midnight)
    useEffect(() => {
        if (!selectedEvent) {
            setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            return;
        }

        // Event date: February 27, 2026 at 00:00:00 (midnight) - start of event day
        // Month is 0-indexed: 0=Jan, 1=Feb, etc.
        const eventYear = 2026;
        const eventMonth = 1; // February (0-indexed)
        const eventDay = 27;
        const eventHour = 0; // Midnight
        const eventMinute = 0;
        const eventSecond = 0;
        
        const eventDate = new Date(eventYear, eventMonth, eventDay, eventHour, eventMinute, eventSecond);
        
        const updateCountdown = () => {
            const now = new Date();
            let diff = eventDate.getTime() - now.getTime();

            if (diff <= 0) {
                setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            // Calculate time components
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            diff = diff % (1000 * 60 * 60 * 24);
            
            const hours = Math.floor(diff / (1000 * 60 * 60));
            diff = diff % (1000 * 60 * 60);
            
            const minutes = Math.floor(diff / (1000 * 60));
            diff = diff % (1000 * 60);
            
            const seconds = Math.floor(diff / 1000);

            setCountdown({ days, hours, minutes, seconds });
        };

        // Update immediately on mount
        updateCountdown();
        
        // Update every second for real-time countdown
        const timer = setInterval(updateCountdown, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [selectedEvent]);

    const handleEventClick = (event: EventData) => {
        const slug = eventIdToSlug[event.id] || event.id;
        gsap.to('.events-grid', {
            opacity: 0,
            y: -30,
            duration: 0.4,
            ease: 'power2.in',
            onComplete: () => {
                navigate({ to: '/events/$eventId', params: { eventId: slug } });
                setActiveDay(1);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    };


    const handleDaySwitch = (day: 1 | 2) => {
        if (day === activeDay) return;

        // Check if mobile - disable animations on mobile
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

        if (isMobile) {
            // On mobile, just switch without animation
            setActiveDay(day);
            return;
        }

        // Animate out current items (desktop only)
        gsap.to('.timeline-item', {
            opacity: 0,
            y: -20,
            stagger: 0.03,
            duration: 0.25,
            ease: 'power2.in',
            onComplete: () => {
                setActiveDay(day);
                // Force re-render and animate in new items
                setTimeout(() => {
                    const newItems = gsap.utils.toArray('.timeline-item');
                    if (newItems.length > 0) {
                        gsap.fromTo(newItems, 
                            { opacity: 0, y: 40 },
                            { 
                                opacity: 1, 
                                y: 0,
                                duration: 0.6,
                                ease: "power2.out",
                                stagger: 0.1
                            }
                        );
                    }
                }, 50);
            }
        });
    };

    const getTimelineItems = () => {
        if (!selectedEvent) return [];

        if (selectedEvent.timeline.phases) {
            return selectedEvent.timeline.phases;
        }

        return activeDay === 1
            ? selectedEvent.timeline.day1 || []
            : selectedEvent.timeline.day2 || [];
    };

    // Event Detail View
    if (selectedEvent) {
        // Megathon-style layout for all events
        const currentColor = eventColors[selectedEvent.colorKey];
        
        // Generate FAQ data based on event
        const getEventFAQs = () => {
            const baseFAQs = [
                {
                    q: "How can I edit, transfer, or cancel my registration?",
                    a: "For any issues related to ticketing or registration, please email globalinnovatorsconclave@smec.ac.in."
                },
                {
                    q: "Do I need to pay money to register?",
                    a: "The price of tickets will be made available on the registration link. Special coupon codes are available for selected students."
                },
                {
                    q: "Do I need to be in Hyderabad to take part?",
                    a: selectedEvent.id === "knowledge-bubble" ? "Yes, this is an onsite event at St. Martin's Engineering College." : "Yes. It is an onsite event."
                },
                {
                    q: "What is the AI usage policy?",
                    a: "AI tools are allowed. However, they must be explicitly mentioned wherever used in the codebase and cited in the final presentation."
                },
                {
                    q: "Do I need to have any specific qualification to be a participant?",
                    a: selectedEvent.id === "mastermind-congregation" 
                        ? "Yes, you must be a student from Classes 8-12 from participating schools."
                        : "Yes, you must be a student from any University/College in India."
                },
                {
                    q: "Is it an individual or team event?",
                    a: selectedEvent.id === "alpha-to-infinity"
                        ? "Teams of 6 members. Teams must select TWO primary roles with priority rankings."
                        : selectedEvent.id === "mastermind-congregation"
                        ? "Teams of 3 members each from participating schools."
                        : "Students can participate either way - individually or as a team. The maximum strength of a team can be 5 members. Teams must be formed before registration."
                },
                {
                    q: "Can we form our own teams, or will we be allotted to a particular team?",
                    a: "Participants are free to form their own teams. However, you must form your team before registration."
                }
            ];

            // Event-specific FAQs
            if (selectedEvent.id === "alpha-to-infinity") {
                baseFAQs.push({
                    q: "How are teams selected?",
                    a: "Selection is based on LinkedIn Profile Review, CV/Resume Evaluation, GitHub Profile Analysis, and technical skill assessment based on problem statements."
                });
            }

            if (selectedEvent.id === "alpha-to-infinity") {
                baseFAQs.push({
                    q: "Will the problem statement be given on the spot?",
                    a: "Yes. The problem statement will be given on the spot."
                });
            }

            if (selectedEvent.id === "business-tech-expo") {
                baseFAQs.push({
                    q: "What is required for the MVP presentation?",
                    a: "Startups must present a working Minimum Viable Product (MVP) or prototype. The presentation should demonstrate core functionality and market viability."
                });
            }

            return baseFAQs;
        };

        const eventFAQs = getEventFAQs();
        
        // Get event date based on event type
        const getEventDate = () => {
            if (selectedEvent.id === "mastermind-congregation") return "27-28 FEBRUARY";
            if (selectedEvent.id === "knowledge-bubble") return "27-28 FEBRUARY";
            return "27-28 FEBRUARY";
        };

        // Get event description for About section
        const getEventAbout = () => {
            const descriptions: Record<string, string> = {
                "mastermind-congregation": "A dedicated program to ignite curiosity, creativity, and problem-solving skills among school students by giving them early exposure to innovation and entrepreneurship. This platform provides students with opportunities to present ideas and projects, receive feedback from mentors and educators, and develop confidence and critical-thinking skills.",
                "alpha-to-infinity": "A high-intensity 30-hour hackathon where shortlisted participants form teams to solve real-world industry problem statements with mentor support. Teams develop MVP/working solutions through industry mentor guidance, culminating in final presentations and awards. Participants have opportunities for internships & PPOs (Terms & Conditions apply).",
                "business-tech-expo": "A business-focused expo showcasing products, MVPs, pilots, and scalable solutions with emphasis on commercialization and partnerships. Features exhibition stalls for companies/startups, product & solution showcases, industry networking, investor interactions, and expert evaluation with pitch opportunities.",
                "investor-pitching": "An investment-focused bootcamp designed to make startups investment-ready through mentoring, pitching, and investor engagement. Features online pitch submissions & shortlisting, mentoring by investors and industry experts, investor panel interactions, and round-table discussions. Outcomes include MOUs, pilot projects, partnerships, funding leads, and potential investments (Terms & Conditions apply).",
                "knowledge-bubble": "A high-level discussion forum focusing on policy, industry, research, and deep-tech ecosystems. This premier platform brings together policymakers, industry leaders, researchers, and founders for expert talks and panels, policy & industry alignment discussions, and focus on deep-tech commercialization with national & global innovation perspectives."
            };
            return descriptions[selectedEvent.id] || selectedEvent.description;
        };

        return (
                <div ref={pageRef} className="page-container events-page sm:pt-[56px]" style={{ background: 'var(--color-bg-primary)', scrollBehavior: 'smooth', paddingTop: 0 }}>
                    {/* Hero Section with Countdown */}
                    <section className="relative min-h-[85vh] sm:min-h-screen flex flex-col items-center justify-start sm:justify-center text-center px-4 sm:px-6 md:px-12 overflow-hidden">
                        {/* Back Arrow Button - Website View Only */}
                        <Link
                            to="/events"
                            className="hidden sm:block absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 z-20 p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
                            style={{
                                background: 'rgba(15, 12, 25, 0.8)',
                                border: '1px solid rgba(139, 123, 181, 0.3)',
                                color: '#EAEAEA',
                                textDecoration: 'none',
                                backdropFilter: 'blur(10px)'
                            }}
                            aria-label="Back to Events"
                        >
                            <svg 
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                                className="sm:w-6 sm:h-6 md:w-7 md:h-7"
                            >
                                <path d="M19 12H5M12 19l-7-7 7-7"/>
                            </svg>
                        </Link>
                        
                        {/* Background Gradient - Extended to top */}
                        <div
                            className="absolute inset-0 opacity-15 sm:opacity-12 md:opacity-10 transition-opacity duration-300"
                            style={{ 
                                background: currentColor?.gradient,
                                zIndex: 0,
                                pointerEvents: 'none'
                            }}
                        />
                        <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center justify-center pt-0 sm:pt-8 md:pt-10 lg:pt-11">
                            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-1 sm:mb-3 md:mb-4 leading-tight transition-all duration-300 text-center" style={{ color: '#EAEAEA' }}>
                                {selectedEvent.title.toUpperCase()}
                            </h1>
                            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mb-3 sm:mb-6 md:mb-8 transition-all duration-300 text-center" style={{ color: currentColor?.accent }}>
                                {getEventDate()}
                            </p>
                            
                            {/* Countdown Timer */}
                            <div className="grid grid-cols-4 gap-1.5 sm:gap-3 md:gap-4 lg:gap-8 mb-5 sm:mb-7 md:mb-8 w-full max-w-md sm:max-w-lg md:max-w-none mx-auto justify-items-center">
                                <div className="text-center transition-all duration-300">
                                    <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-0.5 sm:mb-2 transition-all duration-300" style={{ color: currentColor?.accent }}>
                                        {String(countdown.days).padStart(2, '0')}
                                    </div>
                                    <div className="text-[10px] sm:text-sm md:text-base transition-all duration-300" style={{ color: 'rgba(234, 234, 234, 0.7)' }}>
                                        Days
                                    </div>
                                </div>
                                <div className="text-center transition-all duration-300">
                                    <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-0.5 sm:mb-2 transition-all duration-300" style={{ color: currentColor?.accent }}>
                                        {String(countdown.hours).padStart(2, '0')}
                                    </div>
                                    <div className="text-[10px] sm:text-sm md:text-base transition-all duration-300" style={{ color: 'rgba(234, 234, 234, 0.7)' }}>
                                        Hours
                                    </div>
                                </div>
                                <div className="text-center transition-all duration-300">
                                    <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-0.5 sm:mb-2 transition-all duration-300" style={{ color: currentColor?.accent }}>
                                        {String(countdown.minutes).padStart(2, '0')}
                                    </div>
                                    <div className="text-[10px] sm:text-sm md:text-base transition-all duration-300" style={{ color: 'rgba(234, 234, 234, 0.7)' }}>
                                        Minutes
                                    </div>
                                </div>
                                <div className="text-center transition-all duration-300">
                                    <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-0.5 sm:mb-2 transition-all duration-300" style={{ color: currentColor?.accent }}>
                                        {String(countdown.seconds).padStart(2, '0')}
                                    </div>
                                    <div className="text-[10px] sm:text-sm md:text-base transition-all duration-300" style={{ color: 'rgba(234, 234, 234, 0.7)' }}>
                                        Seconds
                                    </div>
                                </div>
                            </div>

                            <Link
                                to="/passes"
                                search={(selectedEvent.id === "alpha-to-infinity" || 
                                         selectedEvent.id === "knowledge-bubble" || 
                                         selectedEvent.id === "investor-pitching" || 
                                         selectedEvent.id === "mastermind-congregation" ||
                                         selectedEvent.id === "business-tech-expo") ? { event: selectedEvent.id } : undefined}
                                className="inline-block px-5 sm:px-8 md:px-12 py-3 sm:py-5 md:py-6 rounded-full font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
                                style={{ 
                                    background: currentColor?.gradient,
                                    color: 'white',
                                    textDecoration: 'none',
                                    minWidth: '180px'
                                }}
                            >
                                Register Now!
                            </Link>
                        </div>
                    </section>

                    {/* About Section */}
                    <section className="py-8 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 transition-all duration-300" style={{ background: 'var(--color-bg-primary)' }}>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8 text-center transition-all duration-300" style={{ color: '#EAEAEA' }}>
                                About
                            </h2>
                            <div className="space-y-3 sm:space-y-5 md:space-y-6">
                                <p className="text-sm sm:text-lg md:text-xl leading-relaxed transition-all duration-300" style={{ color: 'rgba(234, 234, 234, 0.8)' }}>
                                    {getEventAbout()}
                                </p>
                                <p className="text-sm sm:text-lg md:text-xl leading-relaxed transition-all duration-300" style={{ color: 'rgba(234, 234, 234, 0.8)' }}>
                                    Join us at {selectedEvent.title} and be part of the Global Innovators Conclave, shaping the future of innovation and entrepreneurship.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Why Participate Section */}
                    <section className="py-8 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 transition-all duration-300" style={{ background: 'rgba(15, 12, 25, 0.5)' }}>
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-12 md:mb-16 text-center transition-all duration-300" style={{ color: '#EAEAEA' }}>
                                Why Participate?
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
                                {/* Card 1 */}
                                <div className="text-center p-6 sm:p-7 md:p-8 rounded-2xl transition-all duration-300 hover:scale-105" style={{
                                    background: 'rgba(15, 12, 25, 0.6)',
                                    border: '1px solid rgba(139, 123, 181, 0.2)'
                                }}>
                                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 transition-all duration-300" style={{ color: currentColor?.accent }}>
                                        6.5+ Lakhs
                                    </div>
                                    <p className="text-base sm:text-lg leading-relaxed transition-all duration-300" style={{ color: 'rgba(234, 234, 234, 0.8)' }}>
                                        Worth prizes at stake, along with Certificate of Participation and T-Shirts
                                    </p>
                                </div>

                                {/* Card 2 */}
                                <div className="text-center p-6 sm:p-7 md:p-8 rounded-2xl transition-all duration-300 hover:scale-105" style={{
                                    background: 'rgba(15, 12, 25, 0.6)',
                                    border: '1px solid rgba(139, 123, 181, 0.2)'
                                }}>
                                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 transition-all duration-300" style={{ color: currentColor?.accent }}>
                                        Get Inspired
                                    </div>
                                    <p className="text-base sm:text-lg leading-relaxed transition-all duration-300" style={{ color: 'rgba(234, 234, 234, 0.8)' }}>
                                        Code with 500+ developers and designers to build solutions to real-world problems
                                    </p>
                                </div>

                                {/* Card 3 */}
                                <div className="text-center p-6 sm:p-7 md:p-8 rounded-2xl transition-all duration-300 hover:scale-105 sm:col-span-2 md:col-span-1" style={{
                                    background: 'rgba(15, 12, 25, 0.6)',
                                    border: '1px solid rgba(139, 123, 181, 0.2)'
                                }}>
                                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 transition-all duration-300" style={{ color: currentColor?.accent }}>
                                        Fresh Insights
                                    </div>
                                    <p className="text-base sm:text-lg leading-relaxed transition-all duration-300" style={{ color: 'rgba(234, 234, 234, 0.8)' }}>
                                        Get insights from eminent speakers and mentors
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sponsors Section - Only for Alpha 2 Infiniti */}
                    {selectedEvent.id === "alpha-to-infinity" && (
                        <section className="py-8 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 transition-all duration-300" style={{ background: 'var(--color-bg-primary)' }}>
                            <div className="max-w-6xl mx-auto">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center transition-all duration-300" style={{ color: '#EAEAEA' }}>
                                    TITLE SPONSOR
                                </h2>
                                <div className="flex justify-center items-center mb-8 sm:mb-12 md:mb-16 p-6 sm:p-7 md:p-8 rounded-2xl transition-all duration-300" style={{
                                    background: 'rgba(15, 12, 25, 0.6)',
                                    border: '1px solid rgba(139, 123, 181, 0.2)',
                                    minHeight: '120px'
                                }}>
                                    <p className="text-lg sm:text-xl transition-all duration-300" style={{ color: 'rgba(234, 234, 234, 0.6)' }}>Sponsor Logo</p>
                                </div>

                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-7 md:mb-8 text-center transition-all duration-300" style={{ color: '#EAEAEA' }}>
                                    CHALLENGE SPONSORS
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 md:gap-8">
                                    {[1, 2].map((i) => (
                                        <div key={i} className="flex justify-center items-center p-6 sm:p-7 md:p-8 rounded-2xl transition-all duration-300" style={{
                                            background: 'rgba(15, 12, 25, 0.6)',
                                            border: '1px solid rgba(139, 123, 181, 0.2)',
                                            minHeight: '120px'
                                        }}>
                                            <p className="text-lg sm:text-xl transition-all duration-300" style={{ color: 'rgba(234, 234, 234, 0.6)' }}>Sponsor Logo {i}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Timeline Section */}
                    <section className="py-8 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 transition-all duration-300" style={{ background: 'var(--color-bg-primary)' }}>
                        <div className="max-w-4xl mx-auto">
                            {(() => {
                                const timelineItems = getTimelineItems();
                                const hasPhases = !!selectedEvent.timeline.phases;
                                const hasMultipleDays = selectedEvent.timeline.day1 && selectedEvent.timeline.day2;

                                return (
                                    <>
                                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-6 md:mb-8 text-center transition-all duration-300" style={{ color: '#EAEAEA' }}>
                                            {hasPhases ? 'Program Timeline' : 'Event Schedule'}
                                        </h2>
                                        <p className="mb-4 sm:mb-7 md:mb-8 text-center text-sm sm:text-lg transition-all duration-300" style={{ color: 'rgba(234, 234, 234, 0.6)' }}>
                                            {hasPhases ? 'Multi-phase journey from training to finals' : 'Detailed agenda for each day'}
                                        </p>

                                        {hasMultipleDays && (
                                            <div className="flex gap-3 sm:gap-4 mb-5 sm:mb-8 md:mb-10 justify-center w-full px-2">
                                                <button
                                                    className={`flex-1 sm:flex-none px-4 sm:px-5 md:px-6 py-3 sm:py-3 rounded-xl font-medium transition-all duration-300 ${activeDay === 1 ? 'scale-105' : 'opacity-70 hover:opacity-90 active:scale-95'}`}
                                                    onClick={() => handleDaySwitch(1)}
                                                    style={{
                                                        background: activeDay === 1 ? currentColor?.gradient : 'rgba(15, 12, 25, 0.7)',
                                                        border: `1px solid ${activeDay === 1 ? 'transparent' : 'rgba(139, 123, 181, 0.3)'}`,
                                                        color: activeDay === 1 ? 'white' : '#EAEAEA',
                                                        boxShadow: activeDay === 1 ? `0 10px 30px ${currentColor?.shadow}` : '0 2px 10px rgba(0,0,0,0.2)',
                                                        minWidth: '120px'
                                                    }}
                                                >
                                                    <span className="block text-xs sm:text-sm opacity-90 font-semibold">Day-1</span>
                                                    <span className="block text-base sm:text-xl font-bold">Feb-27</span>
                                                </button>
                                                <button
                                                    className={`flex-1 sm:flex-none px-4 sm:px-5 md:px-6 py-3 sm:py-3 rounded-xl font-medium transition-all duration-300 ${activeDay === 2 ? 'scale-105' : 'opacity-70 hover:opacity-90 active:scale-95'}`}
                                                    onClick={() => handleDaySwitch(2)}
                                                    style={{
                                                        background: activeDay === 2 ? currentColor?.gradient : 'rgba(15, 12, 25, 0.7)',
                                                        border: `1px solid ${activeDay === 2 ? 'transparent' : 'rgba(139, 123, 181, 0.3)'}`,
                                                        color: activeDay === 2 ? 'white' : '#EAEAEA',
                                                        boxShadow: activeDay === 2 ? `0 10px 30px ${currentColor?.shadow}` : '0 2px 10px rgba(0,0,0,0.2)',
                                                        minWidth: '120px'
                                                    }}
                                                >
                                                    <span className="block text-xs sm:text-sm opacity-90 font-semibold">Day-2</span>
                                                    <span className="block text-base sm:text-xl font-bold">Feb-28</span>
                                                </button>
                                            </div>
                                        )}

                                        <div ref={timelineRef} className="relative w-full">
                                            {timelineItems.length > 0 ? (
                                                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                                                    {hasPhases ? (
                                                        (timelineItems as { name: string; date: string; description: string }[]).map((phase, index) => (
                                                            <div
                                                                key={`phase-${activeDay}-${index}`}
                                                                className="timeline-item flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 transition-all duration-300"
                                                            >
                                                                <div
                                                                    className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-base sm:text-lg md:text-xl font-bold z-10 transition-all duration-300 mx-auto sm:mx-0"
                                                                    style={{
                                                                        background: currentColor?.gradient,
                                                                        color: 'white',
                                                                        boxShadow: `0 4px 20px ${currentColor?.shadow}`
                                                                    }}
                                                                >
                                                                    {String(index + 1).padStart(2, '0')}
                                                                </div>

                                                                <div
                                                                    className="flex-1 p-4 sm:p-5 md:p-6 rounded-xl transition-all duration-300 w-full"
                                                                    style={{
                                                                        background: 'rgba(15, 12, 25, 0.6)',
                                                                        border: '1px solid rgba(139, 123, 181, 0.15)'
                                                                    }}
                                                                >
                                                                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                                                                        <span
                                                                            className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-all duration-300"
                                                                            style={{
                                                                                background: `${currentColor?.accent}20`,
                                                                                color: currentColor?.accent
                                                                            }}
                                                                        >
                                                                            {phase.date}
                                                                        </span>
                                                                    </div>
                                                                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 transition-all duration-300" style={{ color: '#EAEAEA' }}>
                                                                        {phase.name}
                                                                    </h3>
                                                                    <p className="text-xs sm:text-sm md:text-base leading-relaxed transition-all duration-300" style={{ color: 'rgba(234, 234, 234, 0.7)' }}>
                                                                        {phase.description}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        ))
                                                    ) : (
                                                        (timelineItems as TimelineItem[]).map((item, index) => (
                                                            <div
                                                                key={`day-${activeDay}-item-${index}`}
                                                                className="timeline-item flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 transition-all duration-300"
                                                            >
                                                                <div
                                                                    className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-base sm:text-lg md:text-xl font-bold z-10 transition-all duration-300 mx-auto sm:mx-0"
                                                                    style={{
                                                                        background: currentColor?.gradient,
                                                                        color: 'white',
                                                                        boxShadow: `0 4px 20px ${currentColor?.shadow}`
                                                                    }}
                                                                >
                                                                    {String(index + 1).padStart(2, '0')}
                                                                </div>

                                                                <div
                                                                    className="flex-1 p-4 sm:p-5 md:p-6 rounded-xl transition-all duration-300 w-full"
                                                                    style={{
                                                                        background: 'rgba(15, 12, 25, 0.6)',
                                                                        border: '1px solid rgba(139, 123, 181, 0.15)'
                                                                    }}
                                                                >
                                                                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                                                                        <span
                                                                            className="font-mono text-xs sm:text-sm md:text-base font-semibold transition-all duration-300"
                                                                            style={{ color: currentColor?.accent }}
                                                                        >
                                                                            {item.time}
                                                                        </span>
                                                                        <span
                                                                            className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-all duration-300"
                                                                            style={{
                                                                                background: `${currentColor?.accent}20`,
                                                                                color: currentColor?.accent
                                                                            }}
                                                                        >
                                                                            {item.type}
                                                                        </span>
                                                                    </div>
                                                                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 transition-all duration-300" style={{ color: '#EAEAEA' }}>
                                                                        {item.activity}
                                                                    </h3>
                                                                    <p className="text-xs sm:text-sm md:text-base leading-relaxed transition-all duration-300" style={{ color: 'rgba(234, 234, 234, 0.7)' }}>
                                                                        {item.details}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        ))
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="text-center py-8 sm:py-12">
                                                    <p className="text-sm sm:text-base md:text-lg transition-all duration-300" style={{ color: 'rgba(234, 234, 234, 0.6)' }}>
                                                        No schedule available for this day.
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </>
                                );
                            })()}
                        </div>
                    </section>

                    {/* Accommodation Section - Only for Alpha 2 Infiniti */}
                    {selectedEvent.id === "alpha-to-infinity" && (
                        <section className="py-8 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 transition-all duration-300" style={{ background: 'var(--color-bg-primary)' }}>
                            <div className="w-full max-w-7xl mx-auto">
                                <Link
                                    to="/accommodation"
                                    className="block w-full p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl text-center transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                                    style={{
                                        background: currentColor?.gradient,
                                        boxShadow: `0 15px 40px ${currentColor?.shadow}`,
                                        border: '1px solid rgba(255, 255, 255, 0.2)'
                                    }}
                                >
                                    <div className="flex flex-col items-center justify-center gap-3 sm:gap-4">
                                        <svg 
                                            width="40" 
                                            height="40" 
                                            className="sm:w-12 sm:h-12 transition-all duration-300"
                                            viewBox="0 0 24 24" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            strokeWidth="2"
                                            style={{ color: 'white' }}
                                        >
                                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                            <polyline points="9 22 9 12 15 12 15 22" />
                                        </svg>
                                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold transition-all duration-300" style={{ color: 'white' }}>
                                            Accommodation Available
                                        </h2>
                                        <p className="text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed transition-all duration-300" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                                            Book your stay and explore accommodation options for the event
                                        </p>
                                        <div className="mt-2 sm:mt-4 flex items-center gap-2 text-base sm:text-lg font-semibold transition-all duration-300" style={{ color: 'white' }}>
                                            Explore Accommodation
                                            <svg 
                                                width="18" 
                                                height="18"
                                                className="sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
                                                viewBox="0 0 24 24" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                strokeWidth="2"
                                            >
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </section>
                    )}

                    {/* FAQ Section */}
                    <section className="py-8 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 transition-all duration-300" style={{ background: 'rgba(15, 12, 25, 0.5)' }}>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-12 md:mb-16 text-center transition-all duration-300" style={{ color: '#EAEAEA' }}>
                                Frequently Asked Questions
                            </h2>
                            <div className="space-y-3 sm:space-y-4">
                                {eventFAQs.map((faq, i) => (
                                    <div 
                                        key={i} 
                                        className="rounded-xl overflow-hidden transition-all duration-300" 
                                        style={{
                                            background: 'rgba(15, 12, 25, 0.6)',
                                            border: '1px solid rgba(139, 123, 181, 0.2)'
                                        }}
                                    >
                                        <button
                                            onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                                            className="w-full p-4 sm:p-5 md:p-6 text-left flex items-center justify-between hover:bg-opacity-80 transition-all duration-300 active:scale-[0.98]"
                                            style={{
                                                background: openFaqIndex === i ? 'rgba(139, 123, 181, 0.1)' : 'transparent'
                                            }}
                                        >
                                            <h3 className="text-base sm:text-lg md:text-xl font-bold pr-3 sm:pr-4 leading-tight transition-all duration-300" style={{ color: currentColor?.accent }}>
                                                {faq.q}
                                            </h3>
                                            <svg 
                                                width="24" 
                                                height="24" 
                                                viewBox="0 0 24 24" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                strokeWidth="2"
                                                className={`transition-transform duration-300 flex-shrink-0`}
                                                style={{ 
                                                    color: currentColor?.accent,
                                                    transform: openFaqIndex === i ? 'rotate(180deg)' : 'rotate(0deg)'
                                                }}
                                            >
                                                <path d="M6 9l6 6 6-6" />
                                            </svg>
                                        </button>
                                        {openFaqIndex === i && (
                                            <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6">
                                                <p className="text-sm sm:text-base leading-relaxed transition-all duration-300" style={{ color: 'rgba(234, 234, 234, 0.8)' }}>
                                                    {faq.a}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section className="py-8 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 transition-all duration-300" style={{ background: 'var(--color-bg-primary)' }}>
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-7 md:mb-8 transition-all duration-300" style={{ color: '#EAEAEA' }}>
                                Contact Us
                            </h2>
                            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl leading-relaxed transition-all duration-300 break-words" style={{ color: 'rgba(234, 234, 234, 0.8)' }}>
                                For all queries, please contact <a href="mailto:globalinnovatorsconclave@smec.ac.in" className="underline hover:opacity-80 transition-opacity duration-300" style={{ color: currentColor?.accent }}>globalinnovatorsconclave@smec.ac.in</a>
                            </p>
                        </div>
                    </section>
                </div>
            );
    }

    // Events Grid View
    return (
        <div ref={pageRef} className="page-container events-page" style={{ background: 'var(--color-bg-primary)' }}>
            {/* Header and Events Grid in Single Frame */}
            <section className="pt-0 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-8 lg:px-12 -mt-6 md:-mt-[50px]">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="section-header-new header-animate mb-0">
                        <h1 className="section-title-new">Events</h1>
                    </div>
                    <p
                        className="header-animate text-base sm:text-lg max-w-2xl mb-0 whitespace-nowrap pb-4 md:pb-[35px] -mt-7 sm:-mt-8"
                        style={{ color: 'rgba(234, 234, 234, 0.6)' }}
                    >
                        Five transformative tracks spanning technical talent, startup validation, youth entrepreneurship, and policy dialogue.
                    </p>

                    {/* Events Grid */}
                    <div className="events-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-0">
                    {eventsData.map((event) => {
                        const color = eventColors[event.colorKey];
                        return (
                                <div
                                    key={event.id}
                                    className="event-card group cursor-pointer rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden w-full h-full flex flex-col"
                                    onClick={() => handleEventClick(event)}
                                    style={{
                                        background: color.gradient,
                                        boxShadow: `0 15px 40px ${color.shadow}`,
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        maxWidth: '100%',
                                        boxSizing: 'border-box',
                                        minHeight: '280px'
                                    }}
                                >
                                <div
                                    className="absolute inset-0 pointer-events-none opacity-60 group-hover:opacity-80 transition-opacity"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)'
                                    }}
                                />

                                <div
                                    className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-5 text-lg sm:text-xl md:text-2xl font-mono font-bold flex-shrink-0"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.25)',
                                        backdropFilter: 'blur(10px)',
                                        color: 'white',
                                        border: '1px solid rgba(255, 255, 255, 0.3)'
                                    }}
                                >
                                    {event.number}
                                </div>

                                <div className="relative flex-1 flex flex-col">
                                    <h3
                                        className="relative text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 line-clamp-2"
                                        style={{ color: 'white', textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}
                                    >
                                        {event.title}
                                    </h3>
                                    <p
                                        className="relative text-xs sm:text-sm mb-4 sm:mb-5 line-clamp-2 flex-shrink-0"
                                        style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                                    >
                                        {event.tagline}
                                    </p>

                                    <div className="relative flex flex-wrap gap-2 mb-4 sm:mb-5 flex-shrink-0">
                                        {event.highlights.slice(0, event.id === "business-tech-expo" ? 3 : 2).map((h, i) => (
                                            <span
                                                key={i}
                                                className="px-2.5 py-1 rounded-md text-xs font-medium"
                                                style={{
                                                    background: 'rgba(255, 255, 255, 0.2)',
                                                    color: 'white',
                                                    backdropFilter: 'blur(5px)'
                                                }}
                                            >
                                                {h}
                                            </span>
                                        ))}
                                    </div>

                                    <div
                                        className="relative flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all mt-auto"
                                        style={{ color: 'white' }}
                                    >
                                        View Details
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            className="transition-transform group-hover:translate-x-1"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    </div>

                    {/* Bottom CTA */}
                    <div className="pt-12 sm:pt-16 md:pt-20 lg:pt-24">
                        <div
                            className="max-w-4xl mx-auto p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6"
                            style={{
                                background: 'var(--color-bg-secondary)',
                                border: '1px solid rgba(139, 123, 181, 0.2)'
                            }}
                        >
                            <div className="text-center md:text-left flex-1">
                                <h3 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: '#EAEAEA' }}>
                                    Ready to be part of GIC 2026?
                                </h3>
                                <p className="text-sm sm:text-base" style={{ color: 'rgba(234, 234, 234, 0.6)' }}>
                                    Join innovators, entrepreneurs, and industry leaders
                                </p>
                            </div>
                            <a
                                href="/speakers"
                                className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all hover:scale-105 min-h-[44px] w-full md:w-auto text-sm sm:text-base whitespace-nowrap"
                                style={{
                                    background: 'linear-gradient(135deg, #8B7BB5 0%, #A99BD4 100%)',
                                    color: '#0a0a0f'
                                }}
                            >
                                Meet Speakers
                                <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventsPage;
