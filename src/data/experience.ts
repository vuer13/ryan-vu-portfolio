export type ExperienceType = "Work" | "Internship" | "Volunteer";

export type Photo = {
    src: string;
    alt: string;
};

export type Experience = {
    role: string;
    organization: string;
    location?: string;
    startDate: string;
    endDate?: string;
    type: ExperienceType;
    description: string;
    tech?: string[];
    link?: string;
    logo?: Photo;
};

export const experiences: Experience[] = [
    {
        role: "Software Developer and Data Algorithm Engineer",
        organization: "Medico Supplies Inc.",
        location: "Surrey, BC",
        startDate: "May 2026",
        endDate: "Aug. 2026",
        type: "Internship",
        description:
            "Improving mobile and backend scoring workflows while leading formula and metric algorithm development for a cardiac wellness application.",
        tech: [
            "React Native",
            "Expo",
            "TypeScript",
            "Python",
            "FastAPI",
            "Firebase",
            "Docker",
            "GitHub Actions",
        ],
        link: "https://medico-supplies.com",
        logo: {
            src: "/logo/medico-supplies.png",
            alt: "Medico Supplies Logo",
        },
    },
    {
        role: "Agile Test Developer",
        organization: "SAP",
        location: "Vancouver, BC",
        startDate: "Sept. 2026",
        type: "Internship",
        description:
            "Incoming Agile Test Developer intern at SAP for an 8-month Fall 2026 term.",
        link: "",
        logo: {
            src: "/logo/sap-logo.svg",
            alt: "SAP logo",
        },
    },
    {
        role: "Software Developer",
        organization: "UBC Data Science Club",
        location: "Remote (Vancouver, BC)",
        startDate: "Oct. 2025",
        endDate: "May 2026",
        type: "Volunteer",
        description:
            "Built backend and computer vision workflows for Basketball Shot Optimizer, helping convert gameplay video into actionable shot analytics.",
        tech: [
            "Python",
            "FastAPI",
            "Scikit-learn",
            "Pandas",
            "NumPy",
            "YOLO",
            "OpenCV",
            "Docker",
            "GitHub Actions",
            "Render",
        ],
        link: "https://www.sap.com/canada/index.html",
        logo: {
            src: "/logo/ubc-dsci.jpeg",
            alt: "UBC DSCI Club logo",
        },
    },
    {
        role: "Undergraduate Research Assistant",
        organization: "SimPL Lab - UBC",
        location: "Vancouver, BC",
        startDate: "Sept. 2025",
        type: "Volunteer",
        description:
            "Supporting PhD research through data processing, analysis tooling, and interactive visualization workflows.",
        tech: ["Python", "Streamlit"],
        link: "https://simpl.mech.ubc.ca",
        logo: {
            src: "/logo/ubc-logo.png",
            alt: "UBC Logo",
        },
    },
    {
        role: "Math Undergraduate TA",
        organization: "UBC Math",
        location: "Vancouver, BC",
        startDate: "Sept. 2024",
        endDate: "Dec. 2024",
        type: "Work",
        description:
            "Supported MATH 110 students by guiding tutorials, explaining course concepts, and helping with problem-solving strategies.",
        link: "https://www.math.ubc.ca",
        logo: {
            src: "/logo/ubc-logo.png",
            alt: "UBC Logo",
        },
    },
    {
        role: "Optometric Assistant",
        organization: "Mount Pleasant Optometry Centre",
        location: "Vancouver, BC",
        startDate: "Jul. 2024",
        type: "Work",
        description:
            "Supported clinic operations through patient pre-testing, appointment coordination, front-desk service, and workflow assistance.",
        link: "https://mountpleasantoptometry.com",
        logo: {
            src: "/logo/mpoc-logo.jpeg",
            alt: "MPOC Logo",
        },
    },
    {
        role: "Lifeguard/Swim Instructor",
        organization: "Jewish Community Centre",
        location: "Vancouver, BC",
        startDate: "Mar. 2023",
        endDate: "Jul. 2024",
        type: "Work",
        description:
            "Taught swimming lessons, supervised pool safety, and maintained a safe environment for swimmers of different skill levels.",
        link: "https://jccgv.com/program-category/aquatics/",
        logo: {
            src: "/logo/jcc-logo.jpg",
            alt: "JCC logo",
        },
    },
    {
        role: "Stats Undergraduate TA",
        organization: "UBC Stats",
        location: "Vancouver, BC",
        startDate: "Sept. 2026",
        type: "Work",
        description:
            "Incoming Statistics Undergraduate Teaching Assistant for the September 2026 academic term.",
        link: "https://www.stat.ubc.ca",
        logo: {
            src: "/logo/ubc-logo.png",
            alt: "UBC Logo",
        },
    },
];
