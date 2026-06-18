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
    whoAmI: [],
    photo: {
        src: "",
        alt: "",
    },
    interests: [],
    currentlyWorkingOn: [
        "",
        "",
        "",
    ],
    socials: [
        {
            label: "GitHub",
            url: "",
        },
        {
            label: "LinkedIn",
            url: "",
        },
    ],
}
