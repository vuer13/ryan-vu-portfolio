import { aboutMe } from "../data/about";

export default function Hero() {
    return (
        <section className="flex min-h-screen max-w-5xl flex-col justify-center px-6 py-24 sm:px-10 lg:px-20">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-slate-400">
                {aboutMe.location}
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
                {aboutMe.name}
            </h1>

            <h2 className="mt-5 max-w-3xl text-2xl font-medium text-slate-300 sm:text-4xl">
                {aboutMe.headline}
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                {aboutMe.bio}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
                <a
                    href="#projects"
                    className="rounded-full border border-slate-700 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-400 hover:text-white"
                >
                    View Projects
                </a>

                <a
                    href="#experience"
                    className="rounded-full bg-slate-100 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-white"
                >
                    View Experience
                </a>
            </div>
        </section>
    );
}
