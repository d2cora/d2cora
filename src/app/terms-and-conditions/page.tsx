import Link from "next/link";

export const metadata = {
    title: "Terms & Conditions | ChizelLabs",
    description: "Terms and conditions for using ChizelLabs services.",
};

export default function TermsAndConditions() {
    return (
        <main className="min-h-screen bg-black text-white">
            <div className="container mx-auto px-6 py-24 md:py-32">
                {/* Header */}
                <div className="mb-12">
                    <Link
                        href="/"
                        className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                    >
                        <svg
                            className="h-4 w-4"
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
                    <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                        <span className="font-heading uppercase tracking-tighter">
                            Terms & Conditions
                        </span>
                    </h1>
                    <p className="text-sm text-gray-400">Last updated: February 24, 2026</p>
                </div>

                {/* Content */}
                <div className="max-w-4xl">
                    <div className="prose prose-invert prose-lg max-w-none">
                        <p className="mb-12 leading-relaxed text-gray-300">
                            Welcome to ChizelLabs ("we", "our", "us"). By accessing our website or using our
                            services, you agree to comply with and be bound by these Terms & Conditions. If you
                            do not agree, please do not use our website or services.
                        </p>

                        <div className="my-12 border-t border-white/10" />

                        {/* Section 1 */}
                        <section className="mb-12">
                            <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">1. Services</h2>
                            <p className="mb-4 text-gray-300">
                                ChizelLabs provides services including but not limited to:
                            </p>
                            <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-300">
                                <li>Website development</li>
                                <li>Application development</li>
                                <li>SEO and digital marketing</li>
                                <li>Website and application maintenance</li>
                            </ul>
                            <p className="text-gray-300">
                                The scope, timeline, pricing, and deliverables for each project will be defined
                                separately through proposals, agreements, or written communication.
                            </p>
                        </section>

                        <div className="my-12 border-t border-white/10" />

                        {/* Section 2 */}
                        <section className="mb-12">
                            <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">2. Use of Website</h2>
                            <p className="mb-4 text-gray-300">
                                You agree to use our website only for lawful purposes. You must not:
                            </p>
                            <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-300">
                                <li>Attempt to gain unauthorized access to our systems</li>
                                <li>Use the website to transmit malicious code or spam</li>
                                <li>Copy, reproduce, or misuse website content without permission</li>
                            </ul>
                            <p className="text-gray-300">
                                We reserve the right to restrict or terminate access for misuse.
                            </p>
                        </section>

                        <div className="my-12 border-t border-white/10" />

                        {/* Section 3 */}
                        <section className="mb-12">
                            <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
                                3. Client Responsibilities
                            </h2>
                            <p className="mb-4 text-gray-300">Clients agree to:</p>
                            <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-300">
                                <li>Provide accurate and complete information required for project execution</li>
                                <li>Respond in a timely manner to approvals, feedback, and requests</li>
                                <li>
                                    Ensure they own or have rights to all content, assets, and materials provided
                                </li>
                            </ul>
                            <p className="text-gray-300">
                                Delays caused by missing information or approvals may impact timelines.
                            </p>
                        </section>

                        <div className="my-12 border-t border-white/10" />

                        {/* Section 4 */}
                        <section className="mb-12">
                            <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
                                4. Payments & Fees
                            </h2>
                            <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-300">
                                <li>Fees are agreed upon before project commencement</li>
                                <li>Payments must be made as per the agreed schedule</li>
                                <li>Late payments may result in project pause or suspension of services</li>
                                <li>
                                    All payments are non-refundable unless explicitly stated otherwise in writing
                                </li>
                            </ul>
                            <p className="text-gray-300">
                                Prices may change for future services with prior notice.
                            </p>
                        </section>

                        <div className="my-12 border-t border-white/10" />

                        {/* Section 5 */}
                        <section className="mb-12">
                            <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
                                5. Intellectual Property
                            </h2>
                            <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-300">
                                <li>
                                    Upon full payment, ownership of final deliverables is transferred to the
                                    client, unless otherwise agreed
                                </li>
                                <li>
                                    ChizelLabs retains the right to showcase completed work in portfolios, case
                                    studies, and marketing materials
                                </li>
                                <li>
                                    Any pre-existing tools, frameworks, or code owned by ChizelLabs remain our
                                    intellectual property
                                </li>
                            </ul>
                        </section>

                        <div className="my-12 border-t border-white/10" />

                        {/* Section 6 */}
                        <section className="mb-12">
                            <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
                                6. Revisions & Changes
                            </h2>
                            <p className="mb-4 text-gray-300">
                                Reasonable revisions are included as defined in the project scope. Requests
                                outside the agreed scope may incur additional charges and timeline changes.
                            </p>
                        </section>

                        <div className="my-12 border-t border-white/10" />

                        {/* Section 7 */}
                        <section className="mb-12">
                            <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
                                7. Maintenance & Support
                            </h2>
                            <p className="mb-4 text-gray-300">
                                Maintenance services, if included, are limited to the agreed scope. We are not
                                responsible for issues caused by:
                            </p>
                            <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-300">
                                <li>Third-party plugins or services</li>
                                <li>Client-made changes</li>
                                <li>Hosting, server, or platform outages beyond our control</li>
                            </ul>
                        </section>

                        <div className="my-12 border-t border-white/10" />

                        {/* Section 8 */}
                        <section className="mb-12">
                            <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
                                8. Third-Party Services
                            </h2>
                            <p className="mb-4 text-gray-300">
                                Our services may integrate third-party platforms (hosting, analytics, payment
                                tools, APIs). We are not responsible for downtime, data loss, or changes caused by
                                these third parties.
                            </p>
                        </section>

                        <div className="my-12 border-t border-white/10" />

                        {/* Section 9 */}
                        <section className="mb-12">
                            <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
                                9. Limitation of Liability
                            </h2>
                            <p className="mb-4 text-gray-300">To the maximum extent permitted by law:</p>
                            <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-300">
                                <li>
                                    ChizelLabs is not liable for indirect, incidental, or consequential damages
                                </li>
                                <li>
                                    We do not guarantee specific business results such as rankings, revenue, or
                                    traffic
                                </li>
                                <li>
                                    Total liability shall not exceed the amount paid for the service in question
                                </li>
                            </ul>
                        </section>

                        <div className="my-12 border-t border-white/10" />

                        {/* Section 10 */}
                        <section className="mb-12">
                            <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">10. Termination</h2>
                            <p className="mb-4 text-gray-300">
                                Either party may terminate services with written notice if terms are breached. Upon
                                termination:
                            </p>
                            <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-300">
                                <li>All outstanding dues must be cleared</li>
                                <li>Access to ongoing services may be suspended</li>
                                <li>
                                    Completed work up to the termination date will be delivered where applicable
                                </li>
                            </ul>
                        </section>

                        <div className="my-12 border-t border-white/10" />

                        {/* Section 11 */}
                        <section className="mb-12">
                            <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
                                11. Confidentiality
                            </h2>
                            <p className="text-gray-300">
                                Both parties agree to keep confidential any non-public business, technical, or
                                financial information shared during the engagement.
                            </p>
                        </section>

                        <div className="my-12 border-t border-white/10" />

                        {/* Section 12 */}
                        <section className="mb-12">
                            <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">12. Governing Law</h2>
                            <p className="mb-4 text-gray-300">
                                These Terms & Conditions are governed by the laws of India. Any disputes shall be
                                subject to the jurisdiction of courts located in Roorkee.
                            </p>
                        </section>

                        <div className="my-12 border-t border-white/10" />

                        {/* Section 13 */}
                        <section className="mb-12">
                            <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
                                13. Changes to Terms
                            </h2>
                            <p className="text-gray-300">
                                We may update these Terms & Conditions at any time. Changes will be posted on this
                                page, and continued use of our services constitutes acceptance.
                            </p>
                        </section>

                        <div className="my-12 border-t border-white/10" />

                        {/* Section 14 */}
                        <section className="mb-12">
                            <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
                                14. Contact Information
                            </h2>
                            <p className="mb-6 text-gray-300">
                                For questions regarding these Terms & Conditions, contact:
                            </p>
                            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                                <p className="mb-4 text-lg font-semibold text-white">ChizelLabs</p>
                                <p className="mb-2 text-gray-300">
                                    📧 Email:{" "}
                                    <a
                                        href="mailto:chizel.dev@gmail.com"
                                        className="text-white hover:underline"
                                    >
                                        chizel.dev@gmail.com
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
