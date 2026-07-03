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
        id: "vietnam-1",
        city: "Ho Chi Minh City",
        country: "Vietnam",
        description: "Add a short memory or note.",
        position: {
            left: "50%",
            top: "45%",
        },
    },
    {
        id: "vietnam-2",
        city: "Hai Phong",
        country: "Vietnam",
        description: "Add a short memory or note.",
        position: {
            left: "50%",
            top: "45%",
        }
    },
    {
        id: "vietnam-3",
        city: "Ha Noi",
        country: "Vietnam",
        description: "Add a short memory or note.",
        position: {
            left: "50%",
            top: "45%",
        }
    },
    {
        id: "us-1",
        city: "Seattle",
        country: "United States",
        description: "Add a short memory or note.",
        position: {
            left: "72%",
            top: "52%",
        },
    },
    {
        id: "us-2",
        city: "Honolulu",
        country: "United States",
        description: "Add a short memory or note.",
        position: {
            left: "72%",
            top: "52%",
        },
    },
    {
        id: "us-3",
        city: "Kona Island",
        country: "United States",
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
                description: "Habs fan since 2013, through the highs and lows.",
                tags: ["NHL", "Hockey"],
            },
            {
                label: "Favorite Basketball Player",
                value: "Lebron James",
                description: "The GOAT",
                tags: ["NBA", "Basketball"],
            },
            {
                label: "Favorite Basketball Player",
                value: "Steph Curry",
                description: "He wasn't so bad after Lebron left Cleveland",
                tags: ["NBA", "Basketball"],
            },
            {
                label: "Favorite Baseball Team",
                value: "Los Angeles Dodgers",
                description: "Fan since 2017, so not a bandwagon fan.",
                tags: ["MLB", "Baseball"],
            },
            {
                label: "Favorite Sport to Play",
                value: "Volleyball",
                description: "Since 6th grade, but now on 2 broken knees",
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
                value: "Jordan 11 Jubliee",
                description: "My dream shoe",
                tags: ["Sneakers"],
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
                description: "I really enjoy learning about machine learning and computer vision, and I hope to work in this field in some way in the future. ",
                tags: ["Tech", "AI", "Software"],
            },
            {
                label: "Other Interests",
                value: "Sneakers, sports, music, and building cool things",
                tags: ["Fun"],
            },
        ],
    },
];
