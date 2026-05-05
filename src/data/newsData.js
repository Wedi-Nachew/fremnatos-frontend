export const categories = [
    "All",
    "Program Update",
    "Partnership",
    "Impact Story",
    "Events",
];

export const featuredUpdate = {
    id: "news-featured-building-phase",
    title: "New Building Mobilization Enters Public Support Phase",
    date: "Mar 18, 2026",
    category: "Program Update",
    image: "/hero-bg-2.jpg",
    readTime: "6 min read",
    author: "Fremnatos Communications Team",
    excerpt:
        "After months of preparation, the New Building project has entered a public fundraising phase to expand safe capacity for children, elders, and mental health recovery participants currently on waitlists.",
    summary:
        "After months of preparation, the New Building project has entered a public fundraising phase to expand safe capacity for children, elders, and mental health recovery participants currently on waitlists.",
    detail: "The next phase includes site preparation, structural planning, and branch-level expansion priorities focused on admissions pressure and treatment continuity.",
    content: [
        "Demand across branches has increased beyond planned occupancy, with admissions teams receiving urgent referrals that cannot be accommodated under current infrastructure limits.",
        "The building expansion is designed to add safe accommodation, treatment space, and support rooms for integrated care pathways. This includes capacity for child protection, elder care, and mental health rehabilitation services.",
        "Community support and partner contributions are now critical to accelerate construction milestones and reduce waitlist pressure. The campaign prioritizes practical expansion outcomes tied to measurable service delivery goals.",
    ],
    baseLikes: 138,
};

export const updates = [
    {
        id: "news-001",
        title: "Community-Based Child Referrals Increased During Q1",
        date: "Mar 15, 2026",
        category: "Impact Story",
        image: "/children-care.jpg",
        readTime: "4 min read",
        author: "Child Protection Unit",
        excerpt:
            "Branch teams recorded increased emergency referrals for children requiring immediate protection, nutrition, and school reintegration support.",
        content: [
            "Quarterly field reports show increased referrals from community leaders and partner responders, especially for children requiring urgent shelter and health stabilization.",
            "Case teams are prioritizing immediate safety, nutritional recovery, and psychosocial support before structured school reintegration planning.",
            "Program staff emphasized that expanded physical capacity remains the most urgent operational need to avoid longer wait times for high-risk child cases.",
        ],
        baseLikes: 74,
    },
    {
        id: "news-002",
        title: "Elder Home Adds Daily Health Follow-Up Schedule",
        date: "Mar 10, 2026",
        category: "Program Update",
        image: "/elderly-care.jpg",
        readTime: "3 min read",
        author: "Elder Care Operations Team",
        excerpt:
            "A revised daily monitoring schedule now improves medication adherence and routine check-ins for high-risk elder residents.",
        content: [
            "The updated follow-up model introduces twice-daily priority checks for residents with chronic conditions and medication-sensitive profiles.",
            "Clinical coordination now includes tighter handoff routines between caregivers and nursing teams, improving treatment continuity and reducing missed doses.",
            "Early results indicate better adherence patterns and stronger wellbeing outcomes for residents requiring close daily support.",
        ],
        baseLikes: 58,
    },
    {
        id: "news-003",
        title: "Women Recovery Branch Expands Skills Training Intake",
        date: "Mar 05, 2026",
        category: "Program Update",
        image: "/mentally-distressed-care.jpg",
        readTime: "5 min read",
        author: "Women Recovery Program",
        excerpt:
            "The women branch increased intake for employment-focused training tracks linked to internal placement opportunities.",
        content: [
            "Following stabilization milestones, additional participants are now entering practical tracks in food services, textile production, and branch operations support.",
            "Program leads aligned training schedules with recovery plans to balance clinical follow-up, counseling sessions, and job-readiness progression.",
            "The expanded intake is expected to improve post-recovery employment transition rates over the next reporting cycle.",
        ],
        baseLikes: 82,
    },
    {
        id: "news-004",
        title: "Local Partner Supports Nutrition Pipeline for Main Branch",
        date: "Feb 27, 2026",
        category: "Partnership",
        image: "/hero-bg-333.jpg",
        readTime: "4 min read",
        author: "Partnerships Desk",
        excerpt:
            "A new partner commitment helps stabilize monthly food supply planning for child and elder care residents.",
        content: [
            "The partnership improves procurement predictability for high-demand staples and emergency nutrition supplies across core residential programs.",
            "Branch coordinators reported improved meal planning confidence and reduced disruption risk during weekly inventory cycles.",
            "The support package also includes monitoring for quality assurance and continuity safeguards for peak demand periods.",
        ],
        baseLikes: 65,
    },
    {
        id: "news-005",
        title: "Youth Volunteers Join Weekend Learning Activities",
        date: "Feb 20, 2026",
        category: "Events",
        image: "/hero-bg-1.jpg",
        readTime: "3 min read",
        author: "Volunteer Coordination Team",
        excerpt:
            "Volunteer mentors now support weekend reading circles, tutoring sessions, and supervised creative activities.",
        content: [
            "The weekend program now includes structured literacy circles, numeracy reinforcement, and supervised collaborative projects for children in care.",
            "Volunteer mentors receive orientation on safeguarding and psychosocially informed engagement before participating in branch activities.",
            "Initial observations show stronger learner participation and improved confidence during group-based sessions.",
        ],
        baseLikes: 54,
    },
    {
        id: "news-006",
        title: "Recovery Graduates Share Work Transition Stories",
        date: "Feb 14, 2026",
        category: "Impact Story",
        image: "/hero-bg-3.jpg",
        readTime: "6 min read",
        author: "Recovery Reintegration Team",
        excerpt:
            "Recent graduates documented their transition from treatment and counseling into paid roles across branch operations.",
        content: [
            "Graduates shared practical lessons on maintaining routines, managing relapse triggers, and balancing work responsibilities with ongoing recovery goals.",
            "Several participants highlighted how structured mentorship and phased placement opportunities helped reduce transition anxiety.",
            "These stories now inform branch-level coaching practices for participants entering employment pathways.",
        ],
        baseLikes: 89,
    },
];

export const getAllNewsItems = () => [featuredUpdate, ...updates];
