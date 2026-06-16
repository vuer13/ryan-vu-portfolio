export type Project = {
    title: string;
    description: string;
    tech: string[];
    github?: string;
    demo?: string;
    highlights: string;
    category: string[];
}

export const projects: Project[] = [
    {
        title: "Hockey Card Pricer",
        description: "",
        tech: [
            "React Native (Expo)", "FastAPI", "SQL Alchemy", "Supabase", "AWS",
            "TypeScript", "Python", "GitHub Actions", "Kubernetes", "CI"
        ],
        github: "https://github.com/vuer13/hockey-card-pricer",
        highlights: "",
        category: ["Full Stack Development", "Mobile Development", "Computer Vision (ML)"],
    },
    {
        title: "Hockey Points Predictor",
        description: "",
        tech: ["Python", "Jupyter Notebook", "scikit-learn", "pandas"],
        github: "",
        highlights: "",
        category: ["Date Engineering", "ML"],
    },
    {
        title: "FasterRCNN Hockey Card Model",
        description: "",
        tech: ["Python", "PyTorch"],
        github: "",
        highlights: "",
        category: ["Computer Vision", "Deep Learning"],
    },
    {
        title: "Retina Disease CNN",
        description: "",
        tech: ["Python", "Tensorflow"],
        github: "",
        highlights: "",
        category: ["Computer Vision", "Deep Learning"],
    },
    {
        title: "Journal Thoughts",
        description: "",
        tech: ["React", "Express.js", "Node.js", "Mongo", "JavaScript"],
        github: "",
        highlights: "",
        category: ["Full Stack", "Web Development"],
    },
    {
        title: "Vision Aid",
        description: "",
        tech: ["JavaScript", "HTML", "CSS"],
        github: "",
        highlights: "",
        category: ["Chrome Extension"],
    },
    {
        title: "Farmer Database Management",
        description: "",
        tech: ["Oracle RDBMS", "JavaScript", "SQL", "Node.js", "Express.js"],
        github: "",
        highlights: "",
        category: ["Database", "Web Development", "Full Stack Development"],
    },
    {
        title: "Health Tracker",
        description: "",
        tech: ["Java", "Java Swing"],
        github: "",
        highlights: "",
        category: ["Software Construction"],
    },
    {
        title: "uthreads",
        description: "",
        tech: ["C"],
        github: "",
        highlights: "",
        category: ["Computer Systems"],
    },
    {
        title: "Transformer",
        description: "",
        tech: ["Python", "PyTorch", "JaxTyping"],
        github: "",
        highlights: "",
        category: ["Machine Learning"],
    },
    {
        title: "New York ML Project",
        description: "",
        tech: ["Python", "pandas", "scikit-learn"],
        github: "",
        highlights: "",
        category: ["Data Analysis", "Data Engineering", "Machine Learning"],
    },
    {
        title: "Venter - Stormhacks 2025",
        description: "",
        tech: ["Python", "Flask", "JavaScript", "React", "Gemini", "Eleven Labs"],
        github: "",
        highlights: "",
        category: ["Hackathon", "Full Stack Development", "Web Development"],
    },
    {
        title: "Stock Dashboard",
        description: "",
        tech: ["Python", "Streamlit"],
        github: "",
        highlights: "",
        category: ["Monte Carlo", "Statistics"],
    },
    {
        title: "LinkedLists-Photo",
        description: "",
        tech: ["C++"],
        github: "",
        highlights: "",
        category: ["Data Structures and Algorithms"],
    },
    {
        title: "TrenaryTree-Image",
        description: "",
        tech: ["C++"],
        github: "",
        highlights: "",
        category: ["Data Structures and Algorithms"],
    },
]
