import ContactForm from "../../components/ContactForm";
import { aboutMe } from "../../data/about";

export default function ContactPage() {
    return (
        <main className="mx-auto min-h-screen max-w-7xl px-6 py-16">
            <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
                    Contact
                </p>

                <h1 className="mt-4 text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
                    Let&apos;s Connect
                </h1>

                <p className="mt-5 text-base font-bold leading-8 text-primary sm:text-xl">
                    Reach out for opportunities, collaborations, project ideas,
                    or anything fun!
                </p>
            </div>

            <section className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                <div className="rounded-3xl border border-border bg-card p-6">
                    <h2 className="text-2xl font-bold text-foreground">
                        Find me online
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-muted">
                        You can also reach me through my socials.
                    </p>

                    <div className="mt-6 space-y-4">
                        {aboutMe.socials.map((social) => (
                            <a
                                key={social.label}
                                href={social.url}
                                target="_blank"
                                rel="noreferrer"
                                className="block rounded-2xl border border-border bg-background px-4 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:text-foreground"
                            >
                                {social.label} →
                            </a>
                        ))}
                    </div>
                </div>

                <div className="rounded-3xl border border-border bg-card p-6">
                    <h2 className="text-2xl font-bold text-foreground">
                        Send me a message!
                    </h2>

                    <div className="mt-6">
                        <ContactForm />
                    </div>
                </div>
            </section>
        </main>
    );
}
