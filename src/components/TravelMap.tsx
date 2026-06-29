import type { TravelPlace } from "../data/more";

type TravelMapProps = {
    places: TravelPlace[];
};

export default function TravelMap({ places }: TravelMapProps) {
    return (
        <section className="rounded-3xl border border-border bg-card p-6">
            <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
                    Travel
                </p>

                <h2 className="mt-3 text-3xl font-bold text-primary">
                    Places I&apos;ve Been
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                    A small map of places I have visited, lived, or want to
                    remember.
                </p>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
                <div className="relative min-h-[380px] overflow-hidden rounded-3xl border border-border bg-background">
                    <svg
                        viewBox="0 0 1000 520"
                        className="absolute inset-0 h-full w-full"
                        aria-hidden="true"
                    >
                        <rect
                            width="1000"
                            height="520"
                            fill="var(--background)"
                        />

                        <path
                            d="M120 145 C160 95 245 90 300 130 C350 165 340 230 290 255 C230 285 145 255 105 205 C85 180 90 165 120 145Z"
                            fill="var(--primary)"
                            opacity="0.18"
                        />

                        <path
                            d="M235 285 C285 250 350 270 370 330 C390 390 340 455 280 435 C225 415 195 330 235 285Z"
                            fill="var(--primary)"
                            opacity="0.14"
                        />

                        <path
                            d="M455 150 C500 105 590 105 630 155 C670 205 645 265 590 285 C535 305 455 275 430 220 C415 185 425 165 455 150Z"
                            fill="var(--accent)"
                            opacity="0.18"
                        />

                        <path
                            d="M535 300 C585 280 655 310 670 370 C685 430 630 470 575 445 C525 420 495 330 535 300Z"
                            fill="var(--accent)"
                            opacity="0.14"
                        />

                        <path
                            d="M700 150 C780 95 900 120 935 205 C965 280 900 335 815 315 C735 295 655 215 700 150Z"
                            fill="var(--primary)"
                            opacity="0.18"
                        />

                        <path
                            d="M780 350 C835 330 910 360 930 415 C950 470 880 500 820 475 C765 455 730 375 780 350Z"
                            fill="var(--primary)"
                            opacity="0.14"
                        />

                        <path
                            d="M80 90 H920"
                            stroke="var(--border)"
                            strokeWidth="2"
                            opacity="0.55"
                        />

                        <path
                            d="M80 260 H920"
                            stroke="var(--border)"
                            strokeWidth="2"
                            opacity="0.55"
                        />

                        <path
                            d="M80 430 H920"
                            stroke="var(--border)"
                            strokeWidth="2"
                            opacity="0.55"
                        />
                    </svg>

                    {places.map((place) => (
                        <div
                            key={place.id}
                            className="group absolute"
                            style={{
                                left: place.position.left,
                                top: place.position.top,
                            }}
                        >
                            <div className="relative">
                                <div className="h-4 w-4 rounded-full border-2 border-background bg-accent shadow-md ring-4 ring-accent/25 transition group-hover:scale-125" />

                                <div className="pointer-events-none absolute left-1/2 top-6 z-10 w-48 -translate-x-1/2 rounded-2xl border border-border bg-card p-3 text-center opacity-0 shadow-lg transition group-hover:opacity-100">
                                    <p className="text-sm font-bold text-foreground">
                                        {place.city}
                                    </p>

                                    <p className="text-xs font-semibold text-primary">
                                        {place.country}
                                    </p>

                                    {place.description && (
                                        <p className="mt-2 text-xs leading-5 text-muted">
                                            {place.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="space-y-3">
                    {places.map((place) => (
                        <article
                            key={`${place.id}-list`}
                            className="rounded-2xl border border-border bg-background p-4"
                        >
                            <h3 className="text-lg font-bold text-foreground">
                                {place.city}
                            </h3>

                            <p className="text-sm font-semibold text-primary">
                                {place.country}
                            </p>

                            {place.description && (
                                <p className="mt-2 text-sm leading-6 text-muted">
                                    {place.description}
                                </p>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
