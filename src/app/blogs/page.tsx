import React from "react";
import Link from "next/link";
import { getBlogPosts } from "@/lib/mdx";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, User } from "lucide-react";
import RevealAnimation from "@/components/reveal-animations";

export const metadata = {
  title: "Blog | Samarjit Thakuria",
  description:
    "Project post-mortems, learning-in-public notes, open source insights, and technical tutorials.",
};

export default function BlogPage() {
  const posts = getBlogPosts().sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <div className="container mx-auto px-4 py-24 min-h-screen font-sans">
      <RevealAnimation>
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          The Blog: Establishing Authority
        </h1>
        <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
          No generic tutorials. This is where I break down real engineering tradeoffs, the hardest bugs I
          have fixed, and the methods that worked in production and competitive programming.
        </p>
      </RevealAnimation>

      <RevealAnimation delay={0.1}>
        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-black/40 border-zinc-800 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">What You Will Find Here</CardTitle>
            </CardHeader>
            <CardContent className="text-zinc-400 text-sm space-y-2">
              <p>Project deep dives and post-mortems from products like MedCare and ResumePard.</p>
              <p>Learning-in-public notes from my journey toward solving 500+ coding problems.</p>
              <p>Open source lessons from contributing as a student developer.</p>
              <p>Practical tutorials on AI systems and data visualization workflows.</p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-zinc-800 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">My Writing Lens</CardTitle>
            </CardHeader>
            <CardContent className="text-zinc-400 text-sm space-y-2">
              <p>I focus on why a decision was made and how it shaped the result.</p>
              <p>Every post includes architecture choices, mistakes, and what I would improve next.</p>
              <p>These are field notes for developers who want practical depth, not theory-only content.</p>
            </CardContent>
          </Card>
        </div>
      </RevealAnimation>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <RevealAnimation key={post.slug} delay={index * 0.1}>
            <Link href={`/blogs/${post.slug}`}>
              <Card className="h-full bg-black/40 border-zinc-800 backdrop-blur-sm hover:border-purple-500/50 transition-colors group overflow-hidden">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="border-purple-500/30 text-purple-400">
                      {post.metadata.tags?.[0] || "Blog"}
                    </Badge>
                    <span className="text-xs text-zinc-500 flex items-center gap-1">
                      <CalendarDays className="w-3 h-3" />
                      {post.metadata.publishedAt}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-purple-400 transition-colors">
                    {post.metadata.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {post.metadata.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Optional: Add image here if available */}
                </CardContent>
                <CardFooter className="mt-auto">
                  <div className="flex items-center gap-2 text-sm text-zinc-500">
                    <User className="w-4 h-4" />
                    {post.metadata.author || "Samarjit Thakuria"}
                  </div>
                </CardFooter>
              </Card>
            </Link>
          </RevealAnimation>
        ))}
      </div>

      {posts.length === 0 && (
        <p className="text-center text-zinc-500 mt-12">No blog posts yet. New deep dives are coming soon.</p>
      )}
    </div>
  );
}
