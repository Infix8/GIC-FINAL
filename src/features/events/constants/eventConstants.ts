// Event colors matching Structure component (25% dimmed)
export const eventColors = {
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

export interface TimelineItem {
    time: string;
    activity: string;
    details: string;
    type: string;
}

export interface EventData {
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

export const baseEventsData: EventData[] = [
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
                { time: "11:00 - 18:00", activity: "SPRINT 1 (7 Hours)", details: "Initial development phase - teams begin working on their problem statements", type: "Sprint" },
                { time: "18:00 - 19:00", activity: "Mentor Checking (Milestone 1)", details: "First milestone evaluation by mentors to track progress", type: "Evaluation" },
                { time: "19:00 - 20:00", activity: "Tech-Related Event", details: "Engagement activity or technical showcase for participants", type: "Activity" },
                { time: "20:00 - 00:00", activity: "SPRINT 2 (4 Hours)", details: "Development phase - building on initial concepts", type: "Sprint" }
            ],
            day2: [
                { time: "00:00 - 01:00", activity: "Campfire and Networking", details: "Team bonding, networking session, and informal discussions", type: "Networking" },
                { time: "01:00 - 10:00", activity: "SPRINT 3 (10 Hours) - Final Phase", details: "Final development phase - polish, testing, and documentation", type: "Sprint" },
                { time: "10:00 - 12:00", activity: "Elimination and Final Evaluation", details: "Final evaluation by mentors; only TOP 10 TEAMS advance to presentations", type: "Evaluation" },
                { time: "12:00 - 13:00", activity: "Lunch", details: "Refreshment and preparation for final presentations", type: "Break" },
                { time: "13:00 - 15:00", activity: "Presentations (Top 10 Teams)", details: "Final presentations from qualifying teams to judges and company representatives", type: "Presentation" },
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
                { time: "09:30 - 11:00", activity: "Expert Evaluation (1.5 Hours)", details: "Structured evaluation of all exhibits by industry experts", type: "Evaluation" },
                { time: "11:00 - 16:00", activity: "Investor Pitch (Selected Teams)", details: "Top-ranked startups present to investor panels", type: "Pitching" },
                { time: "16:00", activity: "Elimination and Final Evaluation", details: "Final evaluation results and prize distribution ceremony", type: "Ceremony" }
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
                { time: "10:00 - 13:00", activity: "Visiting Schedule", details: "Networking and interaction opportunities for participants", type: "Networking" },
                { time: "13:00 - 16:00", activity: "Pitching Sessions", details: "Student and Professional track pitching sessions", type: "Pitching" }
            ],
            day2: [
                { time: "10:00 - 12:00", activity: "Pitching Sessions", details: "Morning pitching sessions for both Student and Professional tracks", type: "Pitching" },
                { time: "13:30 - 15:30", activity: "Pitching Sessions", details: "Afternoon pitching sessions for both Student and Professional tracks", type: "Pitching" }
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
                { time: "11:00 - 17:00", activity: "Expert Talk & Panel Discussions", details: "Expert talks and panel discussions on deep-tech innovation, policy, and industry alignment", type: "Panel" }
            ],
            day2: [
                { time: "10:00 - 11:00", activity: "Key Note Session", details: "Keynote addresses by distinguished speakers", type: "Ceremony" },
                { time: "11:00 - 17:00", activity: "Expert Talk & Panel Discussions", details: "Continued expert talks and panel discussions on deep-tech innovation, policy, and industry alignment", type: "Panel" }
            ]
        }
    }
];

/* Same order as Passes page: 1. Knowledge, 2. Alpha2Infiniti, 3. BusiTech Expo, 4. InnoVestors BootCamp, 5. Masterminds Congregation */
export const eventsOrder = [
    "knowledge-bubble",
    "alpha-to-infinity",
    "business-tech-expo",
    "investor-pitching",
    "mastermind-congregation",
] as const;

export const eventsData: EventData[] = eventsOrder.map(
    (id) => baseEventsData.find((event) => event.id === id)!
);

