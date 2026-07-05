"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { Project } from "../data/project";

type ProjectsListProps = {
    projects: Project[];
};

function getStatusClassName(status?: string) {
    if (status === "Ongoing") {
        return "border-accent bg-accent/10 text-accent";
    }

    if (status === "Completed") {
        return "border-primary bg-primary/10 text-primary";
    }

    return "border-border text-muted";
}

export default function ProjectsList({ projects }: ProjectsListProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedTech, setSelectedTech] = useState("All");

    const categories = useMemo(() => {
        const uniqueCategories = new Set<string>();

        projects.forEach((project) => {
            project.category.forEach((category) =>
                uniqueCategories.add(category),
            );
        });

        return ["All", ...Array.from(uniqueCategories).sort()];
    }, [projects]);

    const techOptions = useMemo(() => {
        const uniqueTech = new Set<string>();

        projects.forEach((project) => {
            project.tech.forEach((tech) => uniqueTech.add(tech));
        });

        return ["All", ...Array.from(uniqueTech).sort()];
    }, [projects]);

    const filteredProjects = projects.filter((project) => {
        const query = searchQuery.toLowerCase();

        const matchesSearch =
            project.title.toLowerCase().includes(query) ||
            project.description.toLowerCase().includes(query) ||
            project.tech.some((tech) => tech.toLowerCase().includes(query)) ||
            project.category.some((category) =>
                category.toLowerCase().includes(query),
            );

        const matchesCategory =
            selectedCategory === "All" ||
            project.category.includes(selectedCategory);

        const matchesTech =
            selectedTech === "All" || project.tech.includes(selectedTech);

        return matchesSearch && matchesCategory && matchesTech;
    });

    return (
        <section className="mt-12">
            <div className="grid gap-4 md:grid-cols-3">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Search by name, tech, or category..."
                    className="rounded-2xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-primary"
                />

                <select
                    value={selectedCategory}
                    onChange={(event) =>
                        setSelectedCategory(event.target.value)
                    }
                    className="rounded-2xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
                >
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>

                <select
                    value={selectedTech}
                    onChange={(event) => setSelectedTech(event.target.value)}
                    className="rounded-2xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
                >
                    {techOptions.map((tech) => (
                        <option key={tech} value={tech}>
                            {tech}
                        </option>
                    ))}
                </select>
            </div>

            <p className="mt-6 text-sm text-muted">
                Showing {filteredProjects.length} of {projects.length} projects
            </p>

            <div className="mt-6 space-y-5">
                {filteredProjects.map((project) => (
                    <article
                        key={project.title}
                        className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-5 transition hover:border-primary md:flex-row"
                    >
                        <div className="flex-1">
                            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                                <div>
                                    <h2 className="text-2xl font-bold text-foreground">
                                        {project.title}
                                    </h2>

                                    <p className="mt-1 text-md leading-7 text-primary">
                                        {project.description}
                                    </p>
                                </div>

                                {project.status && (
                                    <span
                                        className={`w-fit rounded-full border px-3 py-1 text-xs font-semibold ${getStatusClassName(
                                            project.status,
                                        )}`}
                                    >
                                        {project.status}
                                    </span>
                                )}
                            </div>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full bg-background px-3 py-1 text-xs font-medium text-primary"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.category.map((category) => (
                                    <span
                                        key={category}
                                        className="text-xs font-semibold uppercase tracking-wide text-accent"
                                    >
                                        {category}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-5 flex gap-4">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-sm font-semibold text-primary transition hover:text-foreground"
                                    >
                                        GitHub →
                                    </a>
                                )}

                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-sm font-semibold text-accent transition hover:text-foreground"
                                    >
                                        Demo →
                                    </a>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
