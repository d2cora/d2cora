'use server';

export async function submitContactForm(formData: FormData) {
    try {
        const data = new FormData();
        data.append("access_key", "fae0e850-8311-4ef3-b39b-081e3f5197f7");
        data.append("name", formData.get("name") as string);
        data.append("email", formData.get("email") as string);
        data.append("phone", formData.get("phone") as string);
        data.append("subject", (formData.get("subject") as string) || "New Inquiry");
        data.append("message", formData.get("message") as string);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: data
        });

        if (!response.ok) {
            return { 
                success: false, 
                message: `Server error: ${response.status}` 
            };
        }

        const result = await response.json();
        return result;

    } catch (error) {
        console.error("Server error:", error);
        return { 
            success: false, 
            message: error instanceof Error ? error.message : "Unknown error" 
        };
    }
}
