"use client";

import { useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
    const [status, setStatus] = useState<FormStatus>("idle");
    const [error, setError] = useState("");

    return (
        <form
            className="space-y-5"
            onSubmit={async (event) => {
                event.preventDefault();

                setStatus("loading");
                setError("");

                const form = event.currentTarget;
                const formData = new FormData(form);

                const payload = {
                    name: formData.get("name"),
                    email: formData.get("email"),
                    message: formData.get("message"),
                };

                const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                });

                const data = await response.json();

                if (!response.ok) {
                    setStatus("error");
                    setError(data.error ?? "Something went wrong.");
                    return;
                }

                form.reset();
                setStatus("success");
            }}
        >
            <div>
                <label
                    htmlFor="name"
                    className="text-sm font-semibold text-foreground"
                >
                    Name
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-primary"
                    placeholder="Your name"
                />
            </div>

            <div>
                <label
                    htmlFor="email"
                    className="text-sm font-semibold text-foreground"
                >
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-primary"
                    placeholder="your.email@example.com"
                />
            </div>

            <div>
                <label
                    htmlFor="message"
                    className="text-sm font-semibold text-foreground"
                >
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="mt-2 w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-primary"
                    placeholder="Write your message..."
                />
            </div>

            <button
                type="submit"
                disabled={status === "loading"}
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-foreground disabled:cursor-not-allowed disabled:opacity-60"
            >
                {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
                <p className="text-sm font-medium text-primary">
                    Message sent. Thanks for reaching out!
                </p>
            )}

            {status === "error" && (
                <p className="text-sm font-medium text-accent">{error}</p>
            )}
        </form>
    );
}
