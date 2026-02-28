'use server';

import { Resend } from 'resend';

export async function submitContactForm(formData: FormData) {
    try {
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const message = formData.get("message") as string;
        const subject = (formData.get("subject") as string) || "New Inquiry from Website";
        const phone = formData.get("phone") as string;

        // Use Resend API key from environment variable
        const resendApiKey = process.env.RESEND_API_KEY;
        
        if (!resendApiKey) {
            console.error("Server: RESEND_API_KEY not found");
            return {
                success: false,
                message: "Email service not configured. Please contact us directly at info@chizellabs.com"
            };
        }

        const resend = new Resend(resendApiKey);

        console.log("Server: Sending email via Resend:", { name, email, hasPhone: !!phone });

        const { data, error } = await resend.emails.send({
            from: 'Chizel Contact Form <info@chizellabs.com>',
            to: ['info@chizellabs.com'],
            subject: `${subject} - from ${name}`,
            replyTo: email,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
                <p><strong>Subject:</strong> ${subject}</p>
                <hr />
                <h3>Message:</h3>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `
        });

        if (error) {
            console.error("Server: Resend error:", error);
            return {
                success: false,
                message: error.message || "Failed to send email"
            };
        }

        console.log("Server: Email sent successfully:", data);
        return {
            success: true,
            message: "Email sent successfully"
        };

    } catch (error) {
        console.error("Server: Exception occurred:", error);
        return {
            success: false,
            message: "Connection error: " + (error instanceof Error ? error.message : "Unknown error")
        };
    }
}
