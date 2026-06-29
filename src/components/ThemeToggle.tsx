"use client";

import { useEffect, useState } from "react";

type ThemeToggleProps = {
    className?: string;
};

function getSavedTheme() {
    if (typeof window === "undefined") {
        return false;
    }

    return localStorage.getItem("theme") === "dark";
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
    const [isDark, setIsDark] = useState(getSavedTheme);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    return (
        <button
            type="button"
            onClick={() => {
                setIsDark((current) => !current);
            }}
            suppressHydrationWarning
            className={`rounded-full border border-border px-4 py-2 text-sm font-semibold text-primary transition hover:border-foreground hover:text-foreground ${className}`}
        >
            {isDark ? "Light" : "Dark"}
        </button>
    );
}
