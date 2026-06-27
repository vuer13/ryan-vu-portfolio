"use client";

import { useEffect, useState } from "react";

type ThemeToggleProps = {
    className?: string;
};

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDark(true);
        }
    }, []);

    function toggleTheme() {
        const nextIsDark = !isDark;

        setIsDark(nextIsDark);

        if (nextIsDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className={`rounded-full border border-border px-4 py-2 text-sm font-semibold text-primary transition hover:border-foreground hover:text-foreground ${className}`}
        >
            {isDark ? "Light" : "Dark"}
        </button>
    );
}
