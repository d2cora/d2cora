'use server';

export async function submitContactForm(formData: FormData) {
    try {
        const data = new FormData();
        data.append("access_key", "fae0e850-8311-4ef3-b39b-081e3f5197f7");
        data.append("name", formData.get("name") as string);
        data.append("email", formData.get("email") as string);
        data.append("message", formData.get("message") as string);
        data.append("subject", (formData.get("subject") as string) || "New Inquiry from Website");
        
        // Add phone if provided
        const phone = formData.get("phone");
        if (phone) {
            data.append("phone", phone as string);
        }
        
        // Required Web3Forms fields
        data.append("redirect", "false");
        data.append("botcheck", "");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: data
        });

        const result = await response.json();

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
            message: error instanceof Error ? error.message : "Unknown error" 
        };
    }
}
