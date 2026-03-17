import Link from "next/link";

export const metadata = {
    title: "Privacy Policy | d2cora",
    description: "Privacy policy for d2cora - Learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-black text-white">
            <div className="container mx-auto px-6 py-24 md:py-32">
                {/* Header */}
                <div className="mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        <span className="font-heading tracking-tighter uppercase">Privacy Policy</span>
                    </h1>
                    <p className="text-gray-400 text-sm">Last updated: February 24, 2026</p>
                </div>

                {/* Content */}
                <div className="max-w-4xl">
                    <div className="prose prose-invert prose-lg max-w-none">
                        <p className="text-gray-300 leading-relaxed mb-8">
                            At d2cora ("we", "our", "us"), we respect your privacy and are committed to
                            protecting the personal information you share with us. This Privacy Policy explains
                            how we collect, use, disclose, and safeguard your information when you visit our
                            website or use our services.
                        </p>

                        <p className="text-gray-300 leading-relaxed mb-12">
                            By accessing or using our website or services, you agree to the practices described
                            in this policy.
                        </p>

                        <div className="border-t border-white/10 my-12" />

                        {/* Section 1 */}
                        <section className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                                1. Information We Collect
                            </h2>
                            <p className="text-gray-300 mb-6">
                                We may collect the following types of information:
                            </p>

                            <h3 className="text-xl font-semibold mb-4 text-white">
                                a) Personal Information
                            </h3>
                            <p className="text-gray-300 mb-4">
                                Information you voluntarily provide, including but not limited to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
                                <li>Name</li>
                                <li>Email address</li>
                                <li>Phone number</li>
                                <li>Business details</li>
                                <li>Project or service inquiries</li>
                            </ul>

                            <h3 className="text-xl font-semibold mb-4 text-white">
                                b) Automatically Collected Information
                            </h3>
                            <p className="text-gray-300 mb-4">
                                When you visit our website, we may automatically collect:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
                                <li>IP address</li>
                                <li>Browser type</li>
                                <li>Device information</li>
                                <li>Pages visited and time spent</li>
                                <li>Referring URLs</li>
                            </ul>
                            <p className="text-gray-300">
                                This data is used only to improve website performance and user experience.
                            </p>
                        </section>

                        <div className="border-t border-white/10 my-12" />

                        {/* Section 2 */}
                        <section className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                                2. How We Use Your Information
                            </h2>
                            <p className="text-gray-300 mb-4">We use the collected information to:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
                                <li>Respond to inquiries and communicate with you</li>
                                <li>Provide and manage our services</li>
                                <li>Improve our website, services, and marketing efforts</li>
                                <li>Send important updates or service-related communications</li>
                                <li>Maintain security and prevent misuse</li>
                            </ul>
                            <p className="text-gray-300 font-semibold">
                                We do not sell or rent your personal data to third parties.
                            </p>
                        </section>

                        <div className="border-t border-white/10 my-12" />

                        {/* Section 3 */}
                        <section className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                                3. Cookies and Tracking Technologies
                            </h2>
                            <p className="text-gray-300 mb-4">We may use cookies or similar technologies to:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
                                <li>Analyze website traffic</li>
                                <li>Understand user behavior</li>
                                <li>Improve functionality and performance</li>
                            </ul>
                            <p className="text-gray-300">
                                You can choose to disable cookies through your browser settings. Disabling cookies
                                may affect certain features of the website.
                            </p>
                        </section>

                        <div className="border-t border-white/10 my-12" />

                        {/* Section 4 */}
                        <section className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                                4. Sharing of Information
                            </h2>
                            <p className="text-gray-300 mb-4">
                                We may share your information only in the following cases:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
                                <li>
                                    With trusted service providers who assist us in operating our business (under
                                    confidentiality obligations)
                                </li>
                                <li>To comply with legal requirements or law enforcement requests</li>
                                <li>To protect our rights, safety, or property</li>
                            </ul>
                            <p className="text-gray-300 font-semibold">
                                We never share personal data for unauthorized marketing purposes.
                            </p>
                        </section>

                        <div className="border-t border-white/10 my-12" />

                        {/* Section 5 */}
                        <section className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">5. Data Security</h2>
                            <p className="text-gray-300">
                                We implement reasonable technical and organizational measures to protect your
                                personal information from unauthorized access, misuse, or disclosure. However, no
                                method of transmission over the internet is 100% secure.
                            </p>
                        </section>

                        <div className="border-t border-white/10 my-12" />

                        {/* Section 6 */}
                        <section className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                                6. Third-Party Links
                            </h2>
                            <p className="text-gray-300">
                                Our website may contain links to third-party websites. We are not responsible for
                                the privacy practices or content of those websites. We encourage you to review
                                their privacy policies before providing any information.
                            </p>
                        </section>

                        <div className="border-t border-white/10 my-12" />

                        {/* Section 7 */}
                        <section className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">7. Your Rights</h2>
                            <p className="text-gray-300 mb-4">
                                Depending on applicable laws, you may have the right to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
                                <li>Access the personal data we hold about you</li>
                                <li>Request correction or deletion of your data</li>
                                <li>Withdraw consent for data processing</li>
                            </ul>
                            <p className="text-gray-300">
                                To exercise these rights, contact us using the details below.
                            </p>
                        </section>

                        <div className="border-t border-white/10 my-12" />

                        {/* Section 8 */}
                        <section className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                                8. Changes to This Privacy Policy
                            </h2>
                            <p className="text-gray-300">
                                We may update this Privacy Policy from time to time. Any changes will be posted on
                                this page with an updated revision date. Continued use of our website or services
                                constitutes acceptance of the updated policy.
                            </p>
                        </section>

                        <div className="border-t border-white/10 my-12" />

                        {/* Section 9 */}
                        <section className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">9. Contact Us</h2>
                            <p className="text-gray-300 mb-6">
                                If you have any questions or concerns about this Privacy Policy or how we handle
                                your data, contact us at:
                            </p>
                            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                                <p className="text-white font-semibold text-lg mb-4">d2cora</p>
                                <p className="text-gray-300 mb-2">
                                    📧 Email:{" "}
                                    <a
                                        href="mailto:hello@d2cora.com"
                                        className="text-white hover:underline"
                                    >
                                        hello@d2cora.com
                                    </a>
                                </p>
                                <p className="text-gray-300">📍 Location: Roorkee, India</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
