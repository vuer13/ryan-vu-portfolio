const navLinks = [
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
    { label: "More Me", href: "/more" },
];

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <a
                    href="#"
                    className="text-lg font-bold text-accent transition hover:text-hover"
                >
                    Ryan Vu
                </a>

                <div className="hidden items-center gap-6 sm:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-semibold text-primary transition hover:text-hover"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
}
