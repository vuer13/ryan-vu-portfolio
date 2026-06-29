export type MoreMeImage = {
    src: string;
    alt: string;
};

export type MoreMeItem = {
    label: string;
    value: string;
    description?: string;
    image?: MoreMeImage;
    tags?: string[];
};

export type MoreMeSection = {
    title: string;
    description: string;
    items: MoreMeItem[];
};

export type TravelPlace = {
    id: string;
    city: string;
    country: string;
    description?: string;
    position: {
        left: string;
        top: string;
    };
};

export const travelPlaces: TravelPlace[] = [
    {
        id: "vancouver",
        city: "Vancouver",
        country: "Canada",
        description: "Home base.",
        position: {
            left: "18%",
            top: "33%",
        },
    },
    {
        id: "travel-placeholder-1",
        city: "Add place",
        country: "Add country",
        description: "Add a short memory or note.",
        position: {
            left: "50%",
            top: "45%",
        },
    },
    {
        id: "travel-placeholder-2",
        city: "Add place",
        country: "Add country",
        description: "Add a short memory or note.",
        position: {
            left: "72%",
            top: "52%",
        },
    },
];

export const moreMeSections: MoreMeSection[] = [
    {
        title: "Sports",
        description: "Teams, players, and sports I follow.",
        items: [
            {
                label: "Favorite Hockey Team",
                value: "Montreal Canadiens",
                description: "Habs fan through the highs and lows.",
                tags: ["NHL", "Hockey"],
            },
            {
                label: "Favorite Basketball Player",
                value: "",
                description: "",
                tags: ["NBA", "Basketball"],
            },
            {
                label: "Favorite Baseball Team",
                value: "",
                description: "",
                tags: ["MLB", "Baseball"],
            },
            {
                label: "Favorite Sport to Play",
                value: "Volleyball",
                description: "",
                tags: ["Volleyball"],
            },
        ],
    },
    {
        title: "Style",
        description: "Sneakers, brands, and fashion I like.",
        items: [
            {
                label: "Sneakers I Want",
                value: "",
                description: "",
                tags: ["Sneakers"],
            },
            {
                label: "Favorite Brand",
                value: "",
                description: "",
                tags: ["Fashion"],
            },
            {
                label: "Current Style Interest",
                value: "",
                description: "",
                tags: ["Style"],
            },
        ],
    },
    {
        title: "Interests",
        description: "Random things I like outside of school and work.",
        items: [
            {
                label: "Tech Interests",
                value: "Machine learning, computer vision, and backend development",
                description: "",
                tags: ["Tech", "AI", "Software"],
            },
            {
                label: "Other Interests",
                value: "Sneakers, sports, music, and building cool things",
                description: "",
                tags: ["Fun"],
            },
        ],
    },
];
