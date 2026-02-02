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
    },
    womenEmpowerment: {
        gradient: "linear-gradient(135deg, #e91e63 0%, #9c27b0 100%)",
        shadow: "rgba(233, 30, 99, 0.4)",
        accent: "#e91e63"
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
        description: "A 30-hour intensive hiring hackathon designed to identify and nurture exceptional technical talent across multiple technology domains. Selected participants are grouped into teams to solve real-world problem statements provided by partner companies.",
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
                { time: "19:00 - 20:00", activity: "Tech-Related Event", details: "Engagement activity or technical showcase for participants", type: "Activity" },
                { time: "20:00 - 00:00", activity: "SPRINT 2 (4 hours)", details: "Development phase - building on initial concepts", type: "Sprint" }
            ],
            day2: [
                { time: "00:00 - 01:00", activity: "Campfire and Networking", details: "Team bonding, networking session, and informal discussions", type: "Networking" },
                { time: "01:00 - 10:00", activity: "SPRINT 3 (9 hours)", details: "Final development phase - polish, testing, and documentation", type: "Sprint" },
                { time: "10:00 - 12:00", activity: "Mentor Final Checking & Elimination", details: "Final evaluation by mentors; only TOP 10 TEAMS advance to Round 2", type: "Evaluation" },
                { time: "12:00 - 13:00", activity: "Lunch Break", details: "Refreshment and preparation for final presentations", type: "Break" },
                { time: "13:00 - 15:00", activity: "Final Presentations (Top 10 Teams)", details: "Final presentations from qualifying teams to judges and company representatives", type: "Presentation" },
                { time: "16:00", activity: "Prize Distribution", details: "Awards ceremony for winning teams, PPO announcements, and closing", type: "Ceremony" }
            ]
        }
    },
    {
        id: "business-tech-expo",
        number: "03",
        title: "BusiTech Expo",
        shortTitle: "BTE",
        tagline: "Business Technology Expo - Professional & Student Innovations",
        description: "A 2-day showcase for startups and student projects to present their MVPs (Minimum Viable Products) and prototypes, with professional evaluation and potential investor connections. Startups meeting evaluation criteria advance to the Investor Pitching Session.",
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
                { time: "08:30 - 11:00", activity: "Stall Setup & Inauguration", details: "Participant setup, stall arrangement, and opening ceremony (2.5 hours)", type: "Setup" },
                { time: "11:00 - 15:00", activity: "Exhibition Open", details: "Live expo with visitor interaction, demonstrations, and networking (4 hours)", type: "Exhibition" }
            ],
            day2: [
                { time: "09:30 - 11:00", activity: "Expert Panel Evaluation", details: "Structured evaluation of all exhibits by industry experts (1.5 hours)", type: "Evaluation" },
                { time: "11:00 - 16:00", activity: "Investor Pitch Sessions", details: "Top-ranked startups present to investor panels (selected teams only)", type: "Pitching" },
                { time: "16:00 onwards", activity: "Prize Distribution & Closing", details: "Awards, recognition ceremony, and expo closing", type: "Ceremony" }
            ]
        }
    },
    {
        id: "investor-pitching",
        number: "04",
        title: "InnoVestors Bootcamp",
        shortTitle: "IVB",
        tagline: "Investor Pitching Event",
        description: "A platform for entrepreneurs to present their startups to potential investors, with separate tracks for student ventures (pre-seed stage) and professional startups (seed stage). Features 1:1 investor meetings, mixed panel pitches, and investment opportunities worth up to INR 10 Crores.",
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
                { time: "10:00 - 13:00", activity: "Networking Arena", details: "Networking and interaction opportunities for participants", type: "Networking" },
                { time: "13:00 - 16:00", activity: "Student Pitching Session", details: "15 student team pitches (Pre-Seed) - 12 minutes each", type: "Pitching" },
                { time: "13:00 - 17:00", activity: "Professional Pitching Session", details: "14 professional startup pitches (Seed) - 17 minutes each", type: "Pitching" }
            ],
            day2: [
                { time: "10:00 - 12:00", activity: "Student Pitching (Morning)", details: "10 student team pitches - 12 minutes each", type: "Pitching" },
                { time: "10:00 - 12:00", activity: "Professional Pitching (Morning)", details: "7 professional startup pitches - 17 minutes each", type: "Pitching" },
                { time: "13:30 - 15:30", activity: "Student Pitching (Afternoon)", details: "10 student team pitches - 12 minutes each", type: "Pitching" },
                { time: "13:30 - 15:30", activity: "Professional Pitching (Afternoon)", details: "7 professional startup pitches - 17 minutes each", type: "Pitching" },
                { time: "16:00 onwards", activity: "Investment Announcements", details: "Selected startups receive investment commitments", type: "Ceremony" }
            ]
        }
    },
    {
        id: "mastermind-congregation",
        number: "05",
        title: "Masterminds Congregation",
        shortTitle: "MC",
        tagline: "Young Entrepreneurs Initiative - Classes 8-10",
        description: "A 2-phase initiative designed for school students (Classes 8-10) to foster entrepreneurial mindset and startup culture. Features training, mentorship, school-based screening, and a competitive finale. Part of a multi-year strategic collaboration between SMEC and participating schools.",
        colorKey: "mastermindCongregation",
        highlights: [
            "1,200 Initial Participants",
            "Top 100 Teams in Finals",
            "Multi-School Partnership",
            "School Students Only"
        ],
        keyDetails: [
            { label: "Target Audience", value: "Classes 8-10 students" },
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
                { name: "Phase 5: Grand Finale", date: "February 27-28", description: "Top 100 teams compete at SMEC campus. Strictly for school students (Classes 8-10)" }
            ]
        }
    },
    {
        id: "knowledge-bubble",
        number: "01",
        title: "Knowledge Bubble",
        shortTitle: "KB",
        tagline: "Deep-Tech Policy Conclave - Policymakers, Industry Leaders & Innovators",
        description: "A premier two-day platform bringing together policymakers, industry leaders, innovators, scientists, and entrepreneurs to discuss national strategy, regulatory frameworks, and technological advancement across cutting-edge domains. Features keynote sessions, panel discussions, and networking across multiple tracks.",
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
                { time: "10:00 - 11:30", activity: "Inauguration & Keynote Sessions", details: "Opening remarks and keynote addresses by GIC Chair & Chief Guests (7 speakers)", type: "Ceremony" },
                { time: "11:30 - 12:00", activity: "Tea Break & Networking", details: "Refreshments and exhibition walk", type: "Break" },
                { time: "12:00 - 13:00", activity: "Panel: Entrepreneurship & India Mission", details: "National innovation ecosystem, government support, startup success stories (7 panelists)", type: "Panel" },
                { time: "13:00 - 14:00", activity: "Panel: Policy Enablement & Vision 2047", details: "Policy frameworks, regulatory enablement, long-term technology roadmap (7 panelists)", type: "Panel" },
                { time: "14:00 - 15:00", activity: "Lunch Break & Exhibition Walk", details: "Networking lunch and expo exploration", type: "Break" },
                { time: "15:00 - 16:00", activity: "Panel: Entrepreneurship & Growth", details: "Scaling startups, investor relations, market expansion strategies (7 panelists)", type: "Panel" },
                { time: "16:00 - 17:00", activity: "Panel: Data Centers & Infrastructure", details: "Deep-tech infrastructure, cloud ecosystems, investment opportunities (7 panelists)", type: "Panel" },
                { time: "17:00 - 17:30", activity: "Coffee Break & Networking", details: "Evening networking session", type: "Break" }
            ],
            day2: [
                { time: "10:30 - 11:30", activity: "Opening & Keynote Sessions", details: "Track welcome and keynote addresses by Chief Guests (7 speakers)", type: "Ceremony" },
                { time: "11:30 - 12:00", activity: "Tea Break & Expo Walk", details: "Refreshments and exhibition", type: "Break" },
                { time: "12:00 - 13:00", activity: "Panel: Space & Defence Technologies", details: "Frontier technology, national security, strategic initiatives (7 panelists)", type: "Panel" },
                { time: "13:00 - 14:00", activity: "Panel: Semiconductors & Electronics", details: "Chip design, supply chain resilience, Make in India initiatives (7 panelists)", type: "Panel" },
                { time: "14:00 - 15:00", activity: "Lunch Break & Exhibition Walk", details: "Continued networking", type: "Break" },
                { time: "15:00 - 16:00", activity: "Panel: Advanced Materials & Nano", details: "Materials research, nanotechnology applications, industrial implementation (7 panelists)", type: "Panel" },
                { time: "16:00 - 17:00", activity: "Panel: Climate & Sustainability", details: "Climate tech, sustainability solutions, renewable energy, green startups (7 panelists)", type: "Panel" },
                { time: "17:00 - 17:30", activity: "Closing & Networking", details: "Closing remarks and final networking session", type: "Break" }
            ]
        }
    },
    {
        id: "women-empowerment",
        number: "06",
        title: "Women Empowerment",
        shortTitle: "WE",
        tagline: "Empowering Women in Tech & Entrepreneurship - \"Building the Future Together\"",
        description: "A transformative hackathon and mentorship program designed to empower women in technology and entrepreneurship. This event brings together passionate women innovators, industry leaders, and mentors to build solutions addressing real-world challenges while fostering an inclusive ecosystem for women in tech.",
        colorKey: "womenEmpowerment",
        highlights: [
            "500+ Women Participants",
            "24-Hour Hackathon",
            "Industry Mentors",
            "Prize Pool & Opportunities"
        ],
        keyDetails: [
            { label: "Total Participants", value: "500+ women from across India" },
            { label: "Team Size", value: "2-5 members per team" },
            { label: "Duration", value: "24 hours" },
            { label: "Total Mentors", value: "20+ industry experts" },
            { label: "Problem Statements", value: "Real-world challenges" },
            { label: "Format", value: "Onsite Hackathon" }
        ],
        fullDetails: [
            {
                title: "Why Participate?",
                content: [
                    "6.5+ Lakhs worth prizes at stake, along with Certificate of Participation and T-Shirts",
                    "Code with 500+ developers and designers to build solutions to real-world problems",
                    "Get insights from eminent speakers and mentors",
                    "Network with industry leaders and potential employers",
                    "Showcase your skills and build your portfolio"
                ]
            },
            {
                title: "Eligibility Criteria",
                content: [
                    "Must be a woman student from any University/College in India",
                    "Open to all academic backgrounds and skill levels",
                    "Individual or team participation (2-5 members per team)",
                    "Teams can be formed before or during registration"
                ]
            },
            {
                title: "Problem Statements",
                content: [
                    "Problem statements will be announced on the spot",
                    "Focus areas include: Technology for Social Good, Women's Safety & Security, Healthcare Solutions, Education & Skill Development, Financial Inclusion",
                    "Teams will work on innovative solutions addressing real-world challenges"
                ]
            },
            {
                title: "Selection & Evaluation",
                content: [
                    "Registration-based selection (first come, first served)",
                    "Evaluation based on: Innovation, Technical Implementation, Presentation, Impact Potential",
                    "Top teams will present to judges and industry representatives",
                    "Winners receive prizes, certificates, and potential internship/job opportunities"
                ]
            },
            {
                title: "Technology & Tools",
                content: [
                    "No restrictions on technology stack, languages, or libraries",
                    "AI tools are allowed (must be explicitly mentioned in presentation)",
                    "Cloud platforms and development tools will be provided",
                    "Mentorship support available throughout the event"
                ]
            },
            {
                title: "Outcomes & Opportunities",
                content: [
                    "Prize money and recognition",
                    "Certificate of Participation",
                    "Networking with industry leaders",
                    "Potential internship and job opportunities",
                    "Portfolio building and skill enhancement"
                ]
            }
        ],
        timeline: {
            day1: [
                { time: "09:00 - 10:00", activity: "Registration & Welcome", details: "Check-in, networking, and welcome address", type: "Ceremony" },
                { time: "10:00 - 10:30", activity: "Inauguration & Keynote", details: "Opening ceremony with inspiring keynote from women leaders", type: "Ceremony" },
                { time: "10:30 - 11:00", activity: "Problem Statement Announcement", details: "Teams receive their assigned problem statements", type: "Briefing" },
                { time: "11:00 - 13:00", activity: "Hacking Begins - Session 1", details: "Initial ideation and planning phase", type: "Sprint" },
                { time: "13:00 - 14:00", activity: "Lunch Break", details: "Networking lunch with mentors", type: "Break" },
                { time: "14:00 - 18:00", activity: "Hacking Session 2", details: "Development and implementation phase", type: "Sprint" },
                { time: "18:00 - 19:00", activity: "Mentor Check-in", details: "Progress review and guidance from mentors", type: "Mentorship" },
                { time: "19:00 - 20:00", activity: "Dinner & Networking", details: "Evening meal and informal networking session", type: "Networking" },
                { time: "20:00 - 00:00", activity: "Hacking Session 3", details: "Continued development and refinement", type: "Sprint" }
            ],
            day2: [
                { time: "00:00 - 01:00", activity: "Midnight Snacks & Energizers", details: "Refreshments and team bonding activities", type: "Break" },
                { time: "01:00 - 08:00", activity: "Hacking Session 4", details: "Final development phase - polish, testing, and documentation", type: "Sprint" },
                { time: "08:00 - 09:00", activity: "Breakfast & Final Touches", details: "Morning meal and last-minute preparations", type: "Break" },
                { time: "09:00 - 10:00", activity: "Code Freeze & Submission", details: "Final submissions and code freeze deadline", type: "Submission" },
                { time: "10:00 - 12:00", activity: "Presentation Preparation", details: "Teams prepare their final presentations", type: "Preparation" },
                { time: "12:00 - 13:00", activity: "Lunch Break", details: "Refreshments before presentations", type: "Break" },
                { time: "13:00 - 16:00", activity: "Final Presentations", details: "Teams present their solutions to judges and audience", type: "Presentation" },
                { time: "16:00 - 17:00", activity: "Judging & Evaluation", details: "Judges evaluate presentations and select winners", type: "Evaluation" },
                { time: "17:00 - 18:00", activity: "Prize Distribution & Closing", details: "Awards ceremony, closing remarks, and networking", type: "Ceremony" }
            ]
        }
    }
];

/* Same order as Passes page: 1. Knowledge, 2. Alpha2Infiniti, 3. BusiTech Expo, 4. InnoVestors BootCamp, 5. Masterminds Congregation, 6. Women Empowerment */
const eventsOrder = [
    "knowledge-bubble",
    "alpha-to-infinity",
    "business-tech-expo",
    "investor-pitching",
    "mastermind-congregation",
    "women-empowerment",
] as const;

const eventsData: EventData[] = eventsOrder.map(
    (id) => baseEventsData.find((event) => event.id === id)!
);

const EventsPage = () => {
    const pageRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
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
        'womenempowerment': 'women-empowerment',
    };

    // Map event IDs to URL slugs
    const eventIdToSlug: Record<string, string> = {
        'knowledge-bubble': 'knowledgebubble',
        'alpha-to-infinity': 'alpha2infiniti',
        'business-tech-expo': 'busitechexpo',
        'investor-pitching': 'innovestorsbootcamp',
        'mastermind-congregation': 'mastermindscongregation',
        'women-empowerment': 'womenempowerment',
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

    // Timeline animations
    useLayoutEffect(() => {
        if (!selectedEvent) return;

        const ctx = gsap.context(() => {
            if (progressRef.current && timelineRef.current) {
                gsap.fromTo(progressRef.current,
                    { scaleY: 0 },
                    {
                        scaleY: 1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: timelineRef.current,
                            start: "top 60%",
                            end: "bottom 40%",
                            scrub: 0.3,
                        }
                    }
                );
            }

            const items = gsap.utils.toArray('.timeline-item');
            items.forEach((item) => {
                const el = item as HTMLElement;
                gsap.from(el, {
                    opacity: 0,
                    y: 60,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    }
                });
            });
        }, pageRef);

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

    const handleBackClick = () => {
        gsap.to('.event-detail', {
            opacity: 0,
            y: -30,
            duration: 0.4,
            ease: 'power2.in',
            onComplete: () => {
                navigate({ to: '/events' });
            }
        });
    };

    const handleDaySwitch = (day: 1 | 2) => {
        if (day === activeDay) return;

        gsap.to('.timeline-item', {
            opacity: 0,
            y: -20,
            stagger: 0.03,
            duration: 0.25,
            ease: 'power2.in',
            onComplete: () => {
                setActiveDay(day);
                if (progressRef.current) {
                    gsap.set(progressRef.current, { scaleY: 0 });
                }
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
                    a: "For any issues related to ticketing or registration, please email gic@smec.edu.in."
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
                        ? "Yes, you must be a student from Classes 8-10 from participating schools."
                        : selectedEvent.id === "women-empowerment"
                        ? "Yes, you must be a woman student from any University/College in India."
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

            if (selectedEvent.id === "women-empowerment" || selectedEvent.id === "alpha-to-infinity") {
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
                "knowledge-bubble": "A premier two-day platform bringing together policymakers, industry leaders, innovators, scientists, and entrepreneurs to discuss national strategy, regulatory frameworks, and technological advancement across cutting-edge domains.",
                "alpha-to-infinity": "A 30-hour intensive hiring hackathon designed to identify and nurture exceptional technical talent across multiple technology domains. Selected participants are grouped into teams to solve real-world problem statements provided by partner companies.",
                "business-tech-expo": "A 2-day showcase for startups and student projects to present their MVPs (Minimum Viable Products) and prototypes, with professional evaluation and potential investor connections.",
                "investor-pitching": "A platform for entrepreneurs to present their startups to potential investors, with separate tracks for student ventures (pre-seed stage) and professional startups (seed stage).",
                "mastermind-congregation": "A multi-phase journey empowering school students (Classes 8-10) in entrepreneurship, from training to the grand finale competition at SMEC campus.",
                "women-empowerment": "A transformative hackathon and mentorship program designed to empower women in technology and entrepreneurship. This event brings together passionate women innovators, industry leaders, and mentors to build solutions addressing real-world challenges."
            };
            return descriptions[selectedEvent.id] || selectedEvent.description;
        };

        return (
                <div ref={pageRef} className="page-container events-page" style={{ background: 'var(--color-bg-primary)' }}>
                    {/* Background Gradient - Extends upward from top */}
                    <div
                        className="fixed opacity-10"
                        style={{ 
                            background: currentColor?.gradient,
                            top: 0,
                            left: 0,
                            right: 0,
                            width: '100%',
                            height: '100vh',
                            zIndex: 0,
                            pointerEvents: 'none'
                        }}
                    />
                    
                    {/* Back Button */}
                    <button
                        onClick={handleBackClick}
                        className="fixed top-24 left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full transition-all hover:scale-105"
                        style={{
                            background: 'rgba(15, 12, 25, 0.9)',
                            border: '1px solid rgba(139, 123, 181, 0.3)',
                            color: '#EAEAEA',
                            backdropFilter: 'blur(10px)'
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        <span className="text-sm font-medium">All Events</span>
                    </button>

                    {/* Hero Section with Countdown */}
                    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 pt-0 pb-10 overflow-hidden">
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4" style={{ color: '#EAEAEA' }}>
                                {selectedEvent.title.toUpperCase()}
                            </h1>
                            <p className="text-xl md:text-2xl mb-12" style={{ color: currentColor?.accent }}>
                                {getEventDate()}
                            </p>
                            
                            {/* Countdown Timer */}
                            <div className="grid grid-cols-4 gap-4 md:gap-8 mb-12">
                                <div className="text-center">
                                    <div className="text-4xl md:text-6xl font-bold mb-2" style={{ color: currentColor?.accent }}>
                                        {String(countdown.days).padStart(2, '0')}
                                    </div>
                                    <div className="text-sm md:text-base" style={{ color: 'rgba(234, 234, 234, 0.7)' }}>
                                        Days
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl md:text-6xl font-bold mb-2" style={{ color: currentColor?.accent }}>
                                        {String(countdown.hours).padStart(2, '0')}
                                    </div>
                                    <div className="text-sm md:text-base" style={{ color: 'rgba(234, 234, 234, 0.7)' }}>
                                        Hours
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl md:text-6xl font-bold mb-2" style={{ color: currentColor?.accent }}>
                                        {String(countdown.minutes).padStart(2, '0')}
                                    </div>
                                    <div className="text-sm md:text-base" style={{ color: 'rgba(234, 234, 234, 0.7)' }}>
                                        Minutes
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl md:text-6xl font-bold mb-2" style={{ color: currentColor?.accent }}>
                                        {String(countdown.seconds).padStart(2, '0')}
                                    </div>
                                    <div className="text-sm md:text-base" style={{ color: 'rgba(234, 234, 234, 0.7)' }}>
                                        Seconds
                                    </div>
                                </div>
                            </div>

                            <div className="inline-block px-10 py-5 rounded-full font-bold text-2xl md:text-3xl cursor-pointer transition-all hover:scale-105" style={{ 
                                background: currentColor?.gradient,
                                color: 'white'
                            }}>
                                Register Now!
                            </div>
                        </div>
                    </section>

                    {/* About Section */}
                    <section className="py-20 px-6 md:px-12" style={{ background: 'var(--color-bg-primary)' }}>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center" style={{ color: '#EAEAEA' }}>
                                About Us
                            </h2>
                            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: 'rgba(234, 234, 234, 0.8)' }}>
                                {getEventAbout()}
                            </p>
                            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: 'rgba(234, 234, 234, 0.8)' }}>
                                {selectedEvent.description}
                            </p>
                            <p className="text-lg md:text-xl leading-relaxed" style={{ color: 'rgba(234, 234, 234, 0.8)' }}>
                                Join us at {selectedEvent.title} and be part of the Global Innovators Conclave, shaping the future of innovation and entrepreneurship.
                            </p>
                        </div>
                    </section>

                    {/* Why Participate Section */}
                    <section className="py-20 px-6 md:px-12" style={{ background: 'rgba(15, 12, 25, 0.5)' }}>
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center" style={{ color: '#EAEAEA' }}>
                                Why Participate?
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Card 1 */}
                                <div className="text-center p-8 rounded-2xl" style={{
                                    background: 'rgba(15, 12, 25, 0.6)',
                                    border: '1px solid rgba(139, 123, 181, 0.2)'
                                }}>
                                    <div className="text-5xl md:text-6xl font-bold mb-4" style={{ color: currentColor?.accent }}>
                                        6.5+ Lakhs
                                    </div>
                                    <p className="text-lg" style={{ color: 'rgba(234, 234, 234, 0.8)' }}>
                                        Worth prizes at stake, along with Certificate of Participation and T-Shirts
                                    </p>
                                </div>

                                {/* Card 2 */}
                                <div className="text-center p-8 rounded-2xl" style={{
                                    background: 'rgba(15, 12, 25, 0.6)',
                                    border: '1px solid rgba(139, 123, 181, 0.2)'
                                }}>
                                    <div className="text-5xl md:text-6xl font-bold mb-4" style={{ color: currentColor?.accent }}>
                                        Get Inspired
                                    </div>
                                    <p className="text-lg" style={{ color: 'rgba(234, 234, 234, 0.8)' }}>
                                        Code with 500+ developers and designers to build solutions to real-world problems
                                    </p>
                                </div>

                                {/* Card 3 */}
                                <div className="text-center p-8 rounded-2xl" style={{
                                    background: 'rgba(15, 12, 25, 0.6)',
                                    border: '1px solid rgba(139, 123, 181, 0.2)'
                                }}>
                                    <div className="text-5xl md:text-6xl font-bold mb-4" style={{ color: currentColor?.accent }}>
                                        Fresh Insights
                                    </div>
                                    <p className="text-lg" style={{ color: 'rgba(234, 234, 234, 0.8)' }}>
                                        Get insights from eminent speakers and mentors
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sponsors Section */}
                    <section className="py-20 px-6 md:px-12" style={{ background: 'var(--color-bg-primary)' }}>
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{ color: '#EAEAEA' }}>
                                TITLE SPONSOR
                            </h2>
                            <div className="flex justify-center items-center mb-16 p-8 rounded-2xl" style={{
                                background: 'rgba(15, 12, 25, 0.6)',
                                border: '1px solid rgba(139, 123, 181, 0.2)',
                                minHeight: '150px'
                            }}>
                                <p className="text-xl" style={{ color: 'rgba(234, 234, 234, 0.6)' }}>Sponsor Logo</p>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: '#EAEAEA' }}>
                                CHALLENGE SPONSORS
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {[1, 2].map((i) => (
                                    <div key={i} className="flex justify-center items-center p-8 rounded-2xl" style={{
                                        background: 'rgba(15, 12, 25, 0.6)',
                                        border: '1px solid rgba(139, 123, 181, 0.2)',
                                        minHeight: '150px'
                                    }}>
                                        <p className="text-xl" style={{ color: 'rgba(234, 234, 234, 0.6)' }}>Sponsor Logo {i}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Timeline Section */}
                    <section className="py-20 px-6 md:px-12" style={{ background: 'var(--color-bg-primary)' }}>
                        <div className="max-w-4xl mx-auto">
                            {(() => {
                                const timelineItems = getTimelineItems();
                                const hasPhases = !!selectedEvent.timeline.phases;
                                const hasMultipleDays = selectedEvent.timeline.day1 && selectedEvent.timeline.day2;

                                return (
                                    <>
                                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center" style={{ color: '#EAEAEA' }}>
                                            {hasPhases ? 'Program Timeline' : 'Event Schedule'}
                                        </h2>
                                        <p className="mb-8 text-center text-lg" style={{ color: 'rgba(234, 234, 234, 0.6)' }}>
                                            {hasPhases ? 'Multi-phase journey from training to finals' : 'Detailed agenda for each day'}
                                        </p>

                                        {hasMultipleDays && (
                                            <div className="flex gap-4 mb-10 justify-center">
                                                <button
                                                    className={`px-6 py-3 rounded-xl font-medium transition-all ${activeDay === 1 ? 'scale-105' : 'opacity-60 hover:opacity-80'}`}
                                                    onClick={() => handleDaySwitch(1)}
                                                    style={{
                                                        background: activeDay === 1 ? currentColor?.gradient : 'rgba(15, 12, 25, 0.6)',
                                                        border: `1px solid ${activeDay === 1 ? 'transparent' : 'rgba(139, 123, 181, 0.2)'}`,
                                                        color: activeDay === 1 ? 'white' : '#EAEAEA',
                                                        boxShadow: activeDay === 1 ? `0 10px 30px ${currentColor?.shadow}` : 'none'
                                                    }}
                                                >
                                                    <span className="block text-sm opacity-70">Day-1</span>
                                                    <span className="block text-xl font-bold">Feb-27</span>
                                                </button>
                                                <button
                                                    className={`px-6 py-3 rounded-xl font-medium transition-all ${activeDay === 2 ? 'scale-105' : 'opacity-60 hover:opacity-80'}`}
                                                    onClick={() => handleDaySwitch(2)}
                                                    style={{
                                                        background: activeDay === 2 ? currentColor?.gradient : 'rgba(15, 12, 25, 0.6)',
                                                        border: `1px solid ${activeDay === 2 ? 'transparent' : 'rgba(139, 123, 181, 0.2)'}`,
                                                        color: activeDay === 2 ? 'white' : '#EAEAEA',
                                                        boxShadow: activeDay === 2 ? `0 10px 30px ${currentColor?.shadow}` : 'none'
                                                    }}
                                                >
                                                    <span className="block text-sm opacity-70">Day-2</span>
                                                    <span className="block text-xl font-bold">Feb-28</span>
                                                </button>
                                            </div>
                                        )}

                                        <div ref={timelineRef} className="relative">
                                            <div
                                                className="absolute left-[39px] top-0 bottom-0 w-[2px]"
                                                style={{ background: 'rgba(139, 123, 181, 0.2)' }}
                                            >
                                                <div
                                                    ref={progressRef}
                                                    className="w-full origin-top"
                                                    style={{
                                                        background: currentColor?.gradient,
                                                        height: '100%',
                                                        transform: 'scaleY(0)'
                                                    }}
                                                />
                                            </div>

                                            <div className="space-y-6">
                                                {hasPhases ? (
                                                    (timelineItems as { name: string; date: string; description: string }[]).map((phase, index) => (
                                                        <div
                                                            key={index}
                                                            className="timeline-item flex gap-6 pl-2"
                                                        >
                                                            <div
                                                                className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold z-10"
                                                                style={{
                                                                    background: currentColor?.gradient,
                                                                    color: 'white',
                                                                    boxShadow: `0 4px 20px ${currentColor?.shadow}`
                                                                }}
                                                            >
                                                                {String(index + 1).padStart(2, '0')}
                                                            </div>

                                                            <div
                                                                className="flex-1 p-5 rounded-xl"
                                                                style={{
                                                                    background: 'rgba(15, 12, 25, 0.6)',
                                                                    border: '1px solid rgba(139, 123, 181, 0.15)'
                                                                }}
                                                            >
                                                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                                                    <span
                                                                        className="px-3 py-1 rounded-full text-xs font-medium"
                                                                        style={{
                                                                            background: `${currentColor?.accent}20`,
                                                                            color: currentColor?.accent
                                                                        }}
                                                                    >
                                                                        {phase.date}
                                                                    </span>
                                                                </div>
                                                                <h3 className="text-lg font-semibold mb-1" style={{ color: '#EAEAEA' }}>
                                                                    {phase.name}
                                                                </h3>
                                                                <p className="text-sm" style={{ color: 'rgba(234, 234, 234, 0.6)' }}>
                                                                    {phase.description}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))
                                                ) : (
                                                    (timelineItems as TimelineItem[]).map((item, index) => (
                                                        <div
                                                            key={index}
                                                            className="timeline-item flex gap-6 pl-2"
                                                        >
                                                            <div
                                                                className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold z-10"
                                                                style={{
                                                                    background: currentColor?.gradient,
                                                                    color: 'white',
                                                                    boxShadow: `0 4px 20px ${currentColor?.shadow}`
                                                                }}
                                                            >
                                                                {String(index + 1).padStart(2, '0')}
                                                            </div>

                                                            <div
                                                                className="flex-1 p-5 rounded-xl"
                                                                style={{
                                                                    background: 'rgba(15, 12, 25, 0.6)',
                                                                    border: '1px solid rgba(139, 123, 181, 0.15)'
                                                                }}
                                                            >
                                                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                                                    <span
                                                                        className="font-mono text-sm"
                                                                        style={{ color: currentColor?.accent }}
                                                                    >
                                                                        {item.time}
                                                                    </span>
                                                                    <span
                                                                        className="px-3 py-1 rounded-full text-xs font-medium"
                                                                        style={{
                                                                            background: `${currentColor?.accent}20`,
                                                                            color: currentColor?.accent
                                                                        }}
                                                                    >
                                                                        {item.type}
                                                                    </span>
                                                                </div>
                                                                <h3 className="text-lg font-semibold mb-1" style={{ color: '#EAEAEA' }}>
                                                                    {item.activity}
                                                                </h3>
                                                                <p className="text-sm" style={{ color: 'rgba(234, 234, 234, 0.6)' }}>
                                                                    {item.details}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))
                                                )}
                                            </div>
                                        </div>
                                    </>
                                );
                            })()}
                        </div>
                    </section>

                    {/* Accommodation Section - Only for Alpha 2 Infiniti */}
                    {selectedEvent.id === "alpha-to-infinity" && (
                        <section className="py-20 px-6 md:px-12" style={{ background: 'var(--color-bg-primary)' }}>
                            <div className="w-full max-w-7xl mx-auto">
                                <Link
                                    to="/accommodation"
                                    className="block w-full p-8 md:p-12 rounded-2xl text-center transition-all hover:scale-[1.02] cursor-pointer"
                                    style={{
                                        background: currentColor?.gradient,
                                        boxShadow: `0 15px 40px ${currentColor?.shadow}`,
                                        border: '1px solid rgba(255, 255, 255, 0.2)'
                                    }}
                                >
                                    <div className="flex flex-col items-center justify-center gap-4">
                                        <svg 
                                            width="48" 
                                            height="48" 
                                            viewBox="0 0 24 24" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            strokeWidth="2"
                                            style={{ color: 'white' }}
                                        >
                                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                            <polyline points="9 22 9 12 15 12 15 22" />
                                        </svg>
                                        <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'white' }}>
                                            Accommodation Available
                                        </h2>
                                        <p className="text-lg md:text-xl max-w-2xl" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                                            Book your stay and explore accommodation options for the event
                                        </p>
                                        <div className="mt-4 flex items-center gap-2 text-lg font-semibold" style={{ color: 'white' }}>
                                            Explore Accommodation
                                            <svg 
                                                width="20" 
                                                height="20" 
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
                                </Link>
                            </div>
                        </section>
                    )}

                    {/* FAQ Section */}
                    <section className="py-20 px-6 md:px-12" style={{ background: 'rgba(15, 12, 25, 0.5)' }}>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center" style={{ color: '#EAEAEA' }}>
                                Frequently Asked Questions
                            </h2>
                            <div className="space-y-4">
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
                                            className="w-full p-6 text-left flex items-center justify-between hover:bg-opacity-80 transition-all"
                                            style={{
                                                background: openFaqIndex === i ? 'rgba(139, 123, 181, 0.1)' : 'transparent'
                                            }}
                                        >
                                            <h3 className="text-xl font-bold pr-4" style={{ color: currentColor?.accent }}>
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
                                            <div className="px-6 pb-6">
                                                <p className="text-lg leading-relaxed" style={{ color: 'rgba(234, 234, 234, 0.8)' }}>
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
                    <section className="py-20 px-6 md:px-12" style={{ background: 'var(--color-bg-primary)' }}>
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#EAEAEA' }}>
                                Contact Us
                            </h2>
                            <p className="text-xl md:text-2xl" style={{ color: 'rgba(234, 234, 234, 0.8)' }}>
                                For all queries, please contact <a href="mailto:gic@smec.edu.in" style={{ color: currentColor?.accent }}>gic@smec.edu.in</a>
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
                    <div className="space-y-3 sm:space-y-4 mb-0">
                        <h1
                            className="header-animate text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
                            style={{ color: '#EAEAEA' }}
                        >
                            GIC Events
                        </h1>
                        <p
                            className="header-animate text-base sm:text-lg max-w-2xl mb-0 whitespace-nowrap pb-4 md:pb-[35px]"
                            style={{ color: 'rgba(234, 234, 234, 0.6)' }}
                        >
                            Five transformative tracks spanning technical talent, startup validation, youth entrepreneurship, and policy dialogue.
                        </p>
                    </div>

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
