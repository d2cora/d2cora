import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import { NewsletterSignup } from "@/components/ui/NewsletterSignup";

// Pre-render the blog routes
export async function generateStaticParams() {
    const slugs = getPostSlugs();
    return slugs.map((slug) => ({
        slug: slug.replace(/\.mdx$/, ''),
    }));
}

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
    try {
        const { slug } = await params;
        const { meta } = getPostBySlug(slug);
        return {
            title: meta?.title || `${slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")} | ChizelLabs`,
            description: meta?.description || `Read about ${slug.split("-").join(" ")} on ChizelLabs.`,
        };
    } catch (error) {
        return { title: "Blog Not Found" };
    }
}

// Custom components to style the generated MDX HTML with Tailwind typography (Dark UI)
const MDXComponents = {
    h1: (props: any) => <h1 className="text-4xl md:text-5xl font-light text-white tracking-tight mt-12 mb-6 leading-tight" {...props} />,
    h2: (props: any) => <h2 className="text-3xl font-light text-white tracking-tight mt-12 mb-6 border-b border-white/20 pb-2" {...props} />,
    h3: (props: any) => <h3 className="text-2xl font-medium text-white/90 mt-8 mb-4" {...props} />,
    p: (props: any) => <p className="text-white/70 text-lg leading-relaxed mb-6" {...props} />,
    ul: (props: any) => <ul className="list-disc list-outside ml-6 space-y-3 mb-8 text-white/70 text-lg" {...props} />,
    ol: (props: any) => <ol className="list-decimal list-outside ml-6 space-y-3 mb-8 text-white/70 text-lg" {...props} />,
    li: (props: any) => <li className="pl-2" {...props} />,
    a: (props: any) => {
        const isExternal = (props.href?.startsWith('http') || props.href?.startsWith('www')) && !props.href?.includes('chizellabs.com');
        return (
            <a
                className={`${isExternal ? 'text-blue-500 hover:text-blue-400' : 'text-green-500 hover:text-green-400'} underline underline-offset-4 transition-colors`}
                {...props}
                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            />
        );
    },
    blockquote: (props: any) => (
        <blockquote className="border-l-4 border-[#FFA751] pl-6 italic text-white/60 my-8 bg-white/5 py-4 pr-4 rounded-r-lg shadow-sm" {...props} />
    ),
    strong: (props: any) => <strong className="font-semibold text-white" {...props} />,
    hr: (props: any) => <hr className="my-12 border-white/20" {...props} />,
    img: (props: any) => (
        <span className="my-8 block overflow-hidden rounded-xl border border-white/10 shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="w-full object-cover" {...props} alt={props.alt || "Blog graphic"} />
        </span>
    ),
};

export default async function BlogPost({ params }: Props) {
    try {
        const { slug } = await params;
        const { content, meta } = getPostBySlug(slug);

        return (
            <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-black text-white">
                <article className="max-w-3xl mx-auto">
                    <Link
                        href="/blogs"
                        className="inline-flex items-center text-sm font-medium text-white/50 hover:text-[#FFA751] mb-12 transition-colors group"
                    >
                        <MoveLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-1" />
                        Back to Articles
                    </Link>

                    <header className="mb-12">
                        {meta?.date && (
                            <div className="text-white/50 font-medium tracking-wide uppercase text-sm mb-4">
                                {new Date(meta.date).toLocaleDateString()} &bull; {meta.author || "ChizelLabs Team"}
                            </div>
                        )}
                        {meta?.title && <h1 className="text-4xl md:text-5xl font-light text-white tracking-tight leading-tight mb-6">{meta.title}</h1>}
                    </header>

                    <div className="prose prose-lg prose-invert max-w-none">
                        {/* We pass our custom mapped Tailwind components to the compiled Remote tree */}
                        <MDXRemote source={content} components={MDXComponents} />
                    </div>

                    <div className="mt-20 pt-16 border-t border-white/10">
                        <NewsletterSignup />
                    </div>
                </article>
            </main>
        );
    } catch (error) {
        console.error("Error loading blog post:", error);
        notFound();
    }
}
