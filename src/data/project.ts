export type Status = "Completed" | "Ongoing";

export type Photo = {
    src: string;
    alt: string;
};

export type Project = {
    title: string;
    description: string;
    image?: Photo,
    tech: string[];
    github?: string;
    demo?: string;
    highlights: string;
    category: string[];
    status: Status;
};

export const projects: Project[] = [
    {
        title: "Hockey Card Pricer",
        description:
            "A mobile app that detects hockey cards, extracts card details, and helps users estimate prices through a full-stack pricing workflow.",
        tech: [
            "React Native (Expo)",
            "FastAPI",
            "SQL Alchemy",
            "Supabase",
            "AWS",
            "TypeScript",
            "Python",
            "GitHub Actions",
            "Kubernetes",
            "CI",
        ],
        github: "https://github.com/vuer13/hockey-card-pricer",
        highlights: "",
        category: [
            "Full Stack Development",
            "Mobile Development",
        ],
        status: "Ongoing",
    },
    {
        title: "Hockey Points Predictor",
        description:
            "A machine learning project that predicts NHL player point production using historical player statistics and regression models.",
        tech: ["Python", "Jupyter Notebook", "scikit-learn", "pandas"],
        github: "",
        highlights: "",
        category: ["Date Engineering", "ML"],
        status: "Completed",
    },
    {
        title: "FasterRCNN Hockey Card Model",
        description:
            "A deep learning object detection model trained to locate hockey cards in images using Faster R-CNN.",
        tech: ["Python", "PyTorch"],
        github: "",
        highlights: "",
        category: ["Computer Vision", "Deep Learning"],
        status: "Completed",
    },
    {
        title: "Retina Disease CNN",
        description:
            "A convolutional neural network for classifying retinal disease from medical eye images.",
        tech: ["Python", "Tensorflow"],
        github: "",
        highlights: "",
        category: ["Computer Vision", "Deep Learning"],
        status: "Completed",
    },
    {
        title: "Journal Thoughts",
        description:
            "A full-stack journaling app that lets users write entries, store them securely, and generate AI-powered reflections.",
        tech: ["React", "Express.js", "Node.js", "Mongo", "JavaScript"],
        github: "",
        highlights: "",
        category: ["Full Stack", "Web Development"],
        status: "Completed",
    },
    {
        title: "Vision Aid",
        description:
            "A Chrome extension designed to improve webpage accessibility and readability for users with visual difficulties.",
        tech: ["JavaScript", "HTML", "CSS"],
        github: "",
        highlights: "",
        category: ["Chrome Extension"],
        status: "Completed",
    },
    {
        title: "Farmer Database Management",
        description:
            "A database-backed web application for managing farm, crop, customer, and transaction data.",
        tech: ["Oracle RDBMS", "JavaScript", "SQL", "Node.js", "Express.js"],
        github: "",
        highlights: "",
        category: ["Database", "Web Development", "Full Stack Development"],
        status: "Completed",
    },
    {
        title: "Health Tracker",
        description:
            "A Java desktop application for tracking personal health information through a simple Swing-based interface.",
        tech: ["Java", "Java Swing"],
        github: "",
        highlights: "",
        category: ["Software Construction"],
        status: "Completed",
    },
    {
        title: "uthreads",
        description:
            "A low-level C systems project implementing user-level threading and cooperative scheduling.",
        tech: ["C"],
        github: "",
        highlights: "",
        category: ["Computer Systems"],
        status: "Ongoing",
    },
    {
        title: "Transformer",
        description:
            "A GPT-style Transformer model implemented from scratch in PyTorch for next-token prediction.",
        tech: ["Python", "PyTorch", "JaxTyping"],
        github: "",
        highlights: "",
        category: ["Machine Learning"],
        status: "Ongoing",
    },
    {
        title: "New York ML Project",
        description:
            "A machine learning and data analysis project using New York dataset features to clean, explore, and model real-world trends.",
        tech: ["Python", "pandas", "scikit-learn"],
        github: "",
        highlights: "",
        category: ["Data Analysis", "Data Engineering", "Machine Learning"],
        status: "Completed",
    },
    {
        title: "Venter - Stormhacks 2025",
        description:
            "A hackathon web app that uses AI voice and chatbot tools to support interactive mental health check-ins.",
        tech: [
            "Python",
            "Flask",
            "JavaScript",
            "React",
            "Gemini",
            "Eleven Labs",
        ],
        github: "",
        highlights: "",
        category: ["Hackathon", "Full Stack Development", "Web Development"],
        status: "Completed",
    },
    {
        title: "Stock Dashboard",
        description:
            "A Streamlit dashboard for visualizing stock performance and running Monte Carlo simulations for portfolio analysis.",
        tech: ["Python", "Streamlit"],
        github: "",
        highlights: "",
        category: ["Monte Carlo", "Statistics"],
        status: "Completed",
    },
    {
        title: "LinkedLists-Photo",
        description:
            "A C++ data structures project that manipulates image data using linked list-based representations.",
        tech: ["C++"],
        github: "",
        highlights: "",
        category: ["Data Structures and Algorithms"],
        status: "Completed",
    },
    {
        title: "TrenaryTree-Image",
        description:
            "A C++ image processing project that uses a ternary tree structure to recursively represent and manipulate images.",
        tech: ["C++"],
        github: "",
        highlights: "",
        category: ["Data Structures and Algorithms"],
        status: "Completed",
    },
];
