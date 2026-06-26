import ExperienceTimeline from "../../components/ExperienceTimeline";
import { experiences } from "../../data/experience";

export default function ExperiencePage() {
    return (
        <main className="mx-auto min-h-screen max-w-7xl px-6 py-16">
            <div className="max-w-7xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
                    Experience
                </p>

                <h1 className="mt-4 text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
                    Work, Leadership, and Fun Stuff
                </h1>

                <p className="mt-5 text-base leading-8 text-primary sm:text-2xl">
                    A timeline of roles where I have built software, worked with teams, supported users, and developed technical skills.
                </p>

                <p className="text-sm leading-7 text-muted">
                    Select or hover over an experience card to view more details, including highlights, technologies, and links.
                </p>
            </div>

            <ExperienceTimeline experiences={experiences} />
        </main>
    );
}