import TravelMap from "../../components/TravelMap";
import { moreMeSections, travelPlaces } from "../../data/more";

export default function MorePage() {
    const nonTravelSections = moreMeSections.filter(
        (section) => section.title !== "Travel",
    );

    return (
        <main className="mx-auto min-h-screen max-w-7xl px-6 py-16">
            <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
                    More Me
                </p>

                <h1 className="mt-4 text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
                    A Little More About Me
                </h1>

                <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                    A fun page for the random things I like: sports, sneakers,
                    brands, travel, hobbies, and interests outside of code.
                </p>
            </div>

            <div className="mt-14">
                <TravelMap places={travelPlaces} />
            </div>

            <div className="mt-14 space-y-14">
                {nonTravelSections.map((section) => (
                    <section key={section.title}>
                        <div className="mb-6">
                            <h2 className="text-3xl font-bold text-primary">
                                {section.title}
                            </h2>

                            <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">
                                {section.description}
                            </p>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {section.items.map((item) => (
                                <article
                                    key={`${section.title}-${item.label}`}
                                    className="rounded-3xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-primary"
                                >
                                    <h3 className="text-xl font-bold text-foreground">
                                        {item.value || "To be added"}
                                    </h3>

                                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                                        {item.label}
                                    </p>

                                    {item.description && (
                                        <p className="mt-4 text-sm leading-7 text-muted">
                                            {item.description}
                                        </p>
                                    )}
                                </article>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </main>
    );
}
