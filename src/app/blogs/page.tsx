import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export const metadata = {
    title: "Blogs | ChizelLabs",
    description: "Read our latest articles and insights on digital growth.",
};

export default function BlogsPage() {
    const posts = getAllPosts();

    return (
        <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen bg-black">
            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-light mb-4 text-white tracking-tight">Our Blog</h1>
                <p className="text-lg text-white/60 max-w-2xl">
                    Insights on how to build, scale, and maintain a high-performing digital presence.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blogs/${post.slug}`}
                        className="group flex flex-col bg-white/5 border border-white/10 p-6 rounded-xl transition-all duration-300 hover:border-white/20 hover:-translate-y-1 overflow-hidden"
                    >
                        <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden border border-white/10">
                            {post.content.match(/!\[.*?\]\((.*?)\)/) ? (
                                /* eslint-disable-next-line @next/next/no-img-element */
                                <img src={post.content.match(/!\[.*?\]\((.*?)\)/)?.[1]} alt={post.meta?.title || "Blog cover"} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            ) : (
                                <div className="w-full h-full bg-white/5 flex items-center justify-center text-white/30">No Image</div>
                            )}
                        </div>

                        <div className="text-sm font-medium text-white/50 mb-3">
                            {post.meta?.date ? new Date(post.meta.date).toLocaleDateString() : "New Article"}
                        </div>
                        <h2 className="text-2xl font-light text-white mb-4 leading-tight transition-colors">
                            {post.meta?.title || post.slug.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                        </h2>
                        <p className="text-white/60 line-clamp-3 mb-8 flex-grow">
                            {post.meta?.description || "Click to read the full article and uncover actionable strategies for your business visibility and growth."}
                        </p>

                        <div className="flex items-center text-white/70 font-medium text-sm transition-all mt-auto pt-4 border-t border-white/5">
                            <span className="group-hover:text-white transition-colors">Read More</span>
                            <MoveRight size={16} className="ml-2 text-white/40 group-hover:text-white transition-all group-hover:translate-x-1" />
                        </div>
                    </Link>
                ))}

                {posts.length === 0 && (
                    <div className="col-span-full py-24 text-center text-white/50 border border-dashed border-white/20 rounded-xl">
                        No articles found. Check back soon!
                    </div>
                )}
            </div>
        </main>
    );
}
