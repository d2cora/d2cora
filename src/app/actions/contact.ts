'use server';

export async function submitContactForm(formData: FormData) {
    try {
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const message = formData.get("message") as string;
        const subject = (formData.get("subject") as string) || "New Inquiry from Website";
        const phone = formData.get("phone") as string;

        // Use JSON format for server-side requests
        const payload = {
            access_key: "fae0e850-8311-4ef3-b39b-081e3f5197f7",
            name,
            email,
            message,
            subject,
            ...(phone && { phone }),
            from_name: name,
            replyto: email
        };

        console.log("Server: Sending to Web3Forms:", { name, email, hasPhone: !!phone });

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(payload)
        });

        // Check if response is JSON
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            const text = await response.text();
            console.error("Server: Non-JSON response:", text.substring(0, 200));
            return { 
                success: false, 
                message: "Invalid response from email service. Please try again or contact us directly." 
            };
        }

        const result = await response.json();
        console.log("Server: Web3Forms response:", result);

        if (!response.ok) {
            return { 
                success: false, 
                message: result.message || `Server error: ${response.status}` 
            };
        }

        return result;

    } catch (error) {
        console.error("Server error:", error);
        return { 
            success: false, 
            message: error instanceof Error ? error.message : "Unknown error occurred" 
        };
    }
}
