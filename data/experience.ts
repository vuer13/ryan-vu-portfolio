export type ExperienceType = "Work" | "Internship" | "Volunteer"

export type Photo = {
    src: string;
    alt: string;
}

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
}

export const experiences: Experience[] = [
    {
        role: "Software Developer and Data Algorithm Engineer",
        organization: "Medico Supplies Inc.",
        location: "Surrey, BC",
        startDate: "May 2026",
        endDate: "Aug. 2026",
        type: "Internship",
        description: "",
        highlights: [
            "",
            "",
            "",
        ],
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
        role: "",
        organization: "",
        location: "",
        startDate: "",
        endDate: "",
        type: "Internship",
        description: "",
        highlights: [
            "",
            "",
            "",
        ],
        tech: [],
    },
    {
        role: "",
        organization: "",
        location: "",
        startDate: "",
        endDate: "",
        type: "Internship",
        description: "",
        highlights: [
            "",
            "",
            "",
        ],
        tech: [],
    },
    {
        role: "",
        organization: "",
        location: "",
        startDate: "",
        endDate: "",
        type: "Internship",
        description: "",
        highlights: [
            "",
            "",
            "",
        ],
        tech: [],
    },
    {
        role: "",
        organization: "",
        location: "",
        startDate: "",
        endDate: "",
        type: "Internship",
        description: "",
        highlights: [
            "",
            "",
            "",
        ],
        tech: [],
    },
    {
        role: "",
        organization: "",
        location: "",
        startDate: "",
        endDate: "",
        type: "Internship",
        description: "",
        highlights: [
            "",
            "",
            "",
        ],
        tech: [],
    },
    {
        role: "",
        organization: "",
        location: "",
        startDate: "",
        endDate: "",
        type: "Internship",
        description: "",
        highlights: [
            "",
            "",
            "",
        ],
        tech: [],
    },
]
