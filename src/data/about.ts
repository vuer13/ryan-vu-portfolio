export type SocialLink = {
    label: string;
    url: string;
};

export type Photo = {
    src: string;
    alt: string;
};

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
};

export const aboutMe: AboutMe = {
    name: "Ryan Vu",
    headline: "Computer Science and Statistics student at UBC",
    location: "Vancouver, BC",
    bio: "",
    whoAmI: ["creator", "innovator", "developer"],
    photo: {
        src: "",
        alt: "",
    },
    interests: [
        "machine learning",
        "backend development",
        "mobile development",
        "medical research",
        "artifical intelligence",
        "computer vision",
    ],
    currentlyWorkingOn: [
        "transformer: gpt",
        "hockey card pricer",
        "uthreads implementation",
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
};
