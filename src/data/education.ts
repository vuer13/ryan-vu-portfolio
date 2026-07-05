export type Education = {
    school: string;
    degree: string;
    location?: string;
    startDate: string;
    endDate?: string;
    relevantCoursework?: string[];
    activities?: string[];
};

export const education: Education[] = [
    {
        school: "University of British Columbia",
        degree: "B.Sc. Computer Science and Statistics",
        location: "Vancouver, BC",
        startDate: "Sept. 2023",
        endDate: "May 2028",
        relevantCoursework: [
            "CPSC 340: Machine Learning and Data Mining",
            "CPSC 330: Applied Machine Learning",
            "CPSC 304: Introduction to Relational Databases",
            "CPSC 320: Intermediate Algorithm Design and Analysis",
            "CPSC 210: Software Construction",
            "CPSC 221: Basic Algorithms and Data Structures",
            "CPSC 213: Introduction to Computer Systems",
            "STAT 302: Introduction to Probability",
            "MATH 303: Stochastic Processes",
        ],
        activities: [
            "Volleyball",
            "Hockey (as a fan)",
            "Data Science Club",
            "Agrobot Design Team",
        ],
    },
];
