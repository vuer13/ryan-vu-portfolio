import Link from "next/link";

export default function NotFound() {
    return (
        <main className="mx-auto flex min-h-[calc(100vh-73px)] max-w-8xl flex-col items-center justify-center px-8 py-20 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent sm:text-3xl">
                404
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
                Page not found
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-2xl">
                Looks like this page does not exist yet. Maybe it got traded,
                benched, or did not made the cut.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                    href="/"
                    className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-foreground"
                >
                    Back Home
                </Link>
            </div>
        </main>
    );
}
