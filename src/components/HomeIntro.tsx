import { aboutMe } from "../data/about";
import WhoAmI from "./WhoAmI";

export default function HomeIntro() {
    const visibleCurrentWork = aboutMe.currentlyWorkingOn.filter(Boolean);
    // Social media links are temporary until I import all photos

    return (
        <section className="mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl flex-col justify-center px-6 py-20">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                {aboutMe.location}
            </p>

            <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
                {aboutMe.name}
            </h1>

            <h2 className="mt-5 max-w-none text-2xl font-semibold text-primary sm:whitespace-nowrap sm:text-4xl">
                {aboutMe.headline}
            </h2>

            <WhoAmI items={aboutMe.whoAmI} />

            {aboutMe.bio && (
                <p className="mt-6 max-w-5xl text-base leading-8 text-muted sm:text-lg">
                    {aboutMe.bio}
                </p>
            )}

            <div className="mt-10 flex flex-wrap gap-3">
                {aboutMe.interests.map((interest) => (
                    <span
                        key={interest}
                        className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted"
                    >
                        {interest}
                    </span>
                ))}
            </div>

            {visibleCurrentWork.length > 0 && (
                <div className="mt-10">
                    <h3 className="text-lg font-bold text-foreground">
                        Currently working on
                    </h3>

                    <ul className="mt-3 space-y-2 text-muted">
                        {visibleCurrentWork.map((item) => (
                            <li key={item}>• {item}</li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="mt-10 flex flex-wrap gap-4">
                {aboutMe.socials.map((social) => (
                    <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-foreground"
                    >
                        {social.label}
                    </a>
                ))}
            </div>
        </section>
    );
}
