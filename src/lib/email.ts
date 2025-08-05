import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail({
    name,
    email,
    message,
    phone,
}: {
    name: string;
    email: string;
    message: string;
    phone: string;
}) {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Life Dynamics <onboarding@resend.dev>',
            to: ['evedaktyl@gmail.com'],
            subject: 'New Enquiry',
            html:`
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Message:</strong><br/>${message}</p>
            `,
        });
        if (error) {
            console.error('Email send error:', error);
            return { error };
        }
        return { data };
    } catch (err) {
        console.error('Unexpected error: ', err);
        return { error: 'Unexpected error' };
    }
}

export async function sendBookingEmail({
    name,
    email,
    phone,
    message,
    date,
    time,
}: {
    name: string;
    email: string;
    phone: string;
    message: string;
    date: string;
    time: string;
}) {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Life Dynamics <onboarding@resend.dev>',
            to: ['evedaktyl@gmail.com'],
            subject: '🗓️ New Booking Request',
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Date:</strong> ${new Date(date).toLocaleDateString()}</p>
                <p><strong>Time:</strong> ${time}</p>
                <p><strong>Notes:</strong><br/>${message}</p>
            `,
        });
        if (error) {
            console.error("Booking email error:", error);
            return { error };
        }
        return { data };
    } catch (err) {
        console.error('Unexpected booking email error:', err);
        return { error: 'Unexpected error' };
    }
}