"use server";

export async function subscribeToNewsletter(formData: FormData) {
    const email = formData.get("email");

    if (!email || typeof email !== "string") {
        return { error: "Please provide a valid email address." };
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return { error: "Please enter a valid email address." };
    }

    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

    if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID) {
        console.error("Missing Mailchimp environment variables.");
        return { error: "Internal server error. Please try again later." };
    }

    const DATACENTER = MAILCHIMP_API_KEY.split("-")[1]; // e.g., us15
    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;

    const data = {
        email_address: email,
        status: "subscribed",
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Basic ${Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString("base64")}`,
            },
            body: JSON.stringify(data),
        });

        const responseData = await response.json();

        if (response.status >= 400) {
            // Handle specific Mailchimp error for already subscribed members
            if (responseData.title === "Member Exists") {
                return { error: "You are already subscribed to our newsletter!" };
            }
            console.error("Mailchimp API Error:", responseData);
            return { error: responseData.detail || "Failed to subscribe. Please try again." };
        }

        return { success: true };
    } catch (error) {
        console.error("Error subscribing to newsletter:", error);
        return { error: "An unexpected error occurred. Please try again later." };
    }
}
