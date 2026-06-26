import Image from "next/image";
import type { Experience } from "../data/experience";

type ExperienceTimelineProps = {
    experiences: Experience[];
};

function getTypeClassName(type: Experience["type"]) {
    if (type === "Internship") {
        return "border-accent bg-accent/10 text-accent";
    }

    if (type === "Work") {
        return "border-primary bg-primary/10 text-primary";
    }

    if (type === "Volunteer") {
        return "border-primary bg-primary/10 text-primary";
    }

    return "border-border bg-background text-muted";
}

function getStartDateTime(startDate: string) {
    const parsedDate = Date.parse(startDate);

    if (!Number.isNaN(parsedDate)) {
        return parsedDate;
    }

    const yearMatch = startDate.match(/\d{4}/);

    if (yearMatch) {
        return new Date(Number(yearMatch[0]), 0, 1).getTime();
    }

    return 0;
}

export default function ExperienceTimeline({
    experiences,
}: ExperienceTimelineProps) {
    const sortedExperiences = [...experiences].sort(
        (a, b) => getStartDateTime(b.startDate) - getStartDateTime(a.startDate),
    );

    return (
        <section className="mt-14">
            <div className="relative">
                <div className="absolute left-4 top-0 h-full w-1 rounded-full bg-primary md:left-1/2 md:-translate-x-1/2" />

                <div className="space-y-10">
                    {sortedExperiences.map((experience, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <article
                                key={`${experience.role}-${experience.organization}`}
                                tabIndex={0}
                                className="group relative grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-start"
                            >
                                <div
                                    className={
                                        isLeft
                                            ? "hidden md:block"
                                            : "hidden md:block md:col-start-3"
                                    }
                                >
                                    <ExperienceCard
                                        experience={experience}
                                        align={isLeft ? "right" : "left"}
                                    />
                                </div>

                                <div className="absolute left-[9px] top-8 z-10 h-4 w-4 rounded-full border-4 border-background bg-primary md:static md:col-start-2 md:mt-8 md:h-5 md:w-5" />

                                <div
                                    className={
                                        isLeft
                                            ? "pl-10 md:hidden"
                                            : "pl-10 md:hidden"
                                    }
                                >
                                    <ExperienceCard
                                        experience={experience}
                                        align="left"
                                    />
                                </div>

                                {isLeft && (
                                    <div className="hidden md:col-start-3 md:block" />
                                )}

                                {!isLeft && (
                                    <div className="hidden md:col-start-1 md:row-start-1 md:block" />
                                )}
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function ExperienceCard({
    experience,
    align,
}: {
    experience: Experience;
    align: "left" | "right";
}) {
    return (
        <div
            className={`rounded-3xl border border-border bg-card p-6 shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:border-primary group-focus:-translate-y-1 group-focus:border-primary group-focus:outline-none ${
                align === "right" ? "md:text-right" : "md:text-left"
            }`}
        >
            <div
                className={`flex flex-col gap-4 ${
                    align === "right" ? "md:items-end" : "md:items-start"
                }`}
            >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-background text-xs font-semibold text-muted">
                    {experience.logo?.src ? (
                        <Image
                            src={experience.logo.src}
                            alt={experience.logo.alt}
                            width={64}
                            height={64}
                            className="h-full w-full rounded-2xl object-cover"
                        />
                    ) : (
                        <span>Logo</span>
                    )}
                </div>

                <div>
                    <div
                        className={`flex flex-wrap items-center gap-3 ${
                            align === "right"
                                ? "md:justify-end"
                                : "md:justify-start"
                        }`}
                    >
                        <h2 className="text-2xl font-bold text-foreground">
                            {experience.organization}
                        </h2>

                        <span
                            className={`rounded-full border px-3 py-1 text-xs font-semibold ${getTypeClassName(
                                experience.type,
                            )}`}
                        >
                            {experience.type}
                        </span>
                    </div>

                    <p className="mt-2 text-lg font-semibold text-primary">
                        {experience.role}
                    </p>

                    <p className="mt-1 text-sm font-semibold text-muted">
                        {experience.startDate}
                        {experience.endDate ? ` — ${experience.endDate}` : ""}
                    </p>

                    {experience.location && (
                        <p className="mt-1 text-sm text-muted">
                            {experience.location}
                        </p>
                    )}
                </div>
            </div>

            <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-[800px] group-hover:opacity-100 group-focus:max-h-[800px] group-focus:opacity-100">
                {experience.description && (
                    <p className="mt-5 text-sm leading-7 text-muted">
                        {experience.description}
                    </p>
                )}

                {experience.highlights &&
                    experience.highlights.filter(Boolean).length > 0 && (
                        <ul className="mt-5 space-y-3 text-sm leading-7 text-muted">
                            {experience.highlights
                                .filter(Boolean)
                                .map((highlight) => (
                                    <li
                                        key={highlight}
                                        className={`flex gap-3 ${
                                            align === "right"
                                                ? "md:justify-end"
                                                : ""
                                        }`}
                                    >
                                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                        </ul>
                    )}

                {experience.tech && experience.tech.length > 0 && (
                    <div
                        className={`mt-5 flex flex-wrap gap-2 ${
                            align === "right" ? "md:justify-end" : ""
                        }`}
                    >
                        {experience.tech.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full bg-background px-3 py-1 text-xs font-medium text-primary"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                {experience.link && (
                    <a
                        href={experience.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 inline-block text-sm font-semibold text-primary transition hover:text-foreground"
                    >
                        View more →
                    </a>
                )}
            </div>
        </div>
    );
}
