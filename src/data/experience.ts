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
    highlights?: string[];
    tech?: string[];
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
        description: "",
        highlights: ["", "", ""],
        tech: [],
    },
    {
        role: "Agile Test Developer",
        organization: "SAP",
        location: "Vancouver, BC",
        startDate: "Sept. 2026",
        type: "Internship",
        description: "Incoming @ SAP for Fall 2026, 8 months",
    },
    {
        role: "Software Developer",
        organization: "UBC Data Science Club",
        location: "Remote (Vancouver, BC)",
        startDate: "Oct. 2026",
        endDate: "May 2026",
        type: "Volunteer",
        description: "",
        highlights: ["", "", ""],
        tech: [],
    },
    {
        role: "Undergraduate Research Assistant",
        organization: "SimPL Lab - UBC",
        location: "Vancouver, BC",
        startDate: "Sept. 2023",
        type: "Volunteer",
        description: "",
        highlights: ["", "", ""],
        tech: [],
    },
    {
        role: "Math Undergraduate TA",
        organization: "UBC Math",
        location: "Vancouver, BC",
        startDate: "Sept. 2024",
        endDate: "Dec. 2024",
        type: "Work",
        description: "",
        highlights: ["", "", ""],
        tech: [],
    },
    {
        role: "Optometric Assistant",
        organization: "Mount Pleasant Optometry Centre",
        location: "Vancouver, BC",
        startDate: "Jul. 2024",
        type: "Work",
        description: "",
        highlights: ["", "", ""],
    },
    {
        role: "Lifeguard/Swim Instructor",
        organization: "Jewish Community Centre",
        location: "Vancouver, BC",
        startDate: "Mar. 2023",
        endDate: "Jul. 2024",
        type: "Work",
        description: "",
        highlights: ["", "", ""],
    },
    {
        role: "Stats Undergraduate TA",
        organization: "UBC Stats",
        location: "Vancouver, BC",
        startDate: "Sept. 2026",
        type: "Work",
        description: "Incoming for September 2026",
    },
];
