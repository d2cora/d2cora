import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const formattedSlug = resolvedParams.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    return {
        title: `${formattedSlug} Services | d2cora`,
        description: `Explore our comprehensive ${formattedSlug} services designed to accelerate D2C brand growth and scale revenue.`
    };
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
