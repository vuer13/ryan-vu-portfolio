export type Education = {
    school: string;
    degree: string;
    location?: string;
    startDate: string;
    endDate?: string;
    relevantCoursework?: string[];
    activities?: string[];
}

export const education: Education[] = [
    {
        school: "University of British Columbia",
        degree: "B.Sc. Computer Science and Statistics",
        location: "Vancouver, BC",
        startDate: "Sept. 2023",
        endDate: "May 2028",
        relevantCoursework: [
            "",
            "",
            "",
        ],
        activities: [
            "",
            "",
        ],
    },
]
