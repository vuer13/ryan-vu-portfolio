import FormData from "form-data";
import Mailgun from "mailgun.js";

const mailgun = new Mailgun(FormData);

const mailgunClient = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY ?? "",
});

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const name = String(body.name ?? "").trim();
        const email = String(body.email ?? "").trim();
        const message = String(body.message ?? "").trim();

        if (!name || !email || !message) {
            return Response.json(
                { error: "Name, email, and message are required." },
                { status: 400 },
            );
        }

        if (!isValidEmail(email)) {
            return Response.json(
                { error: "Please enter a valid email address." },
                { status: 400 },
            );
        }

        if (
            !process.env.MAILGUN_API_KEY ||
            !process.env.MAILGUN_DOMAIN ||
            !process.env.CONTACT_EMAIL
        ) {
            return Response.json(
                { error: "Email service is not configured." },
                { status: 500 },
            );
        }

        await mailgunClient.messages.create(process.env.MAILGUN_DOMAIN, {
            from:
                process.env.MAILGUN_FROM_EMAIL ??
                `Portfolio Contact <postmaster@${process.env.MAILGUN_DOMAIN}>`,
            to: [process.env.CONTACT_EMAIL],
            subject: `New portfolio message from ${name}`,
            text: `
Name: ${name}
Email: ${email}

Message:
${message}
            `.trim(),
            html: `
                <h2>New message</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, "<br />")}</p>
            `,
            "h:Reply-To": email,
        });

        return Response.json({ success: true });
    } catch {
        return Response.json(
            { error: "Something went wrong. Please try again later." },
            { status: 500 },
        );
    }
}
