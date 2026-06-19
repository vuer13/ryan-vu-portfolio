export type SocialLink = {
    label: string;
    url: string;
}

export type Photo = {
    src: string;
    alt: string;
}

export type AboutMe = {
    name: string;
    headline: string;
    location: string;
    bio: string;
    whoAmI: string[];
    photo?: Photo;
    interests: string[];
    currentlyWorkingOn: string[];
    socials: SocialLink[];
}

export const aboutMe: AboutMe = {
    name: "Ryan Vu",
    headline: "Computer Science and Statistics student at UBC",
    location: "Vancouver, BC",
    bio: "",
    whoAmI: ["developer", "researcher", "creator", "who loves to have fun!"],
    photo: {
        src: "",
        alt: "",
    },
    interests: [
        "machine learning", 
        "backend development",
        "mobile development",
        "research",
        "artifical intelligence",
        "computer vision",
        "volleyball",
        "montreal canadiens",
        "sneakers",
    ],
    currentlyWorkingOn: [
        "",
        "",
        "",
    ],
    socials: [
        {
            label: "GitHub",
            url: "https://github.com/vuer13",
        },
        {
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/ryan-vu-3305442ba/",
        },
    ],
}
