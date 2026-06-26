// src/app/projects/page.tsx

import ProjectsList from "../../components/ProjectsList";
import { projects } from "../../data/project";

export default function ProjectsPage() {
    return (
        <main className="mx-auto min-h-screen max-w-7xl px-6 py-16">
            <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
                    Projects
                </p>

                <h1 className="mt-4 text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
                    Things I&apos;ve Built
                </h1>

                <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                    A searchable collection of my full-stack, machine learning,
                    computer vision, data, and systems projects.
                </p>
            </div>

            <ProjectsList projects={projects} />
        </main>
    );
}
