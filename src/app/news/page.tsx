import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import RevealAnimation from "@/components/reveal-animations";
import { config } from "@/data/config";

export const metadata = {
  title: "Newsletter | Samarjit Thakuria",
  description:
    "What this newsletter covers: project post-mortems, learning in public, open source insights, and practical technical tutorials.",
};

const EDITORIAL_PILLARS = [
  {
    title: "Project Deep Dives",
    description:
      "Post-mortems from products like MedCare and ResumePard: hardest bugs, architecture tradeoffs, and why key backend decisions were made.",
    posts: [
      {
        title: "MedCare Post-Mortem: The Hardest Bug I Fixed",
        href: "/blogs/medcare-post-mortem",
      },
      {
        title: "ResumePard Architecture Notes: Why FastAPI Over Express",
        href: "/blogs/resumepard-fastapi-vs-express",
      },
    ],
  },
  {
    title: "Learning in Public",
    description:
      "Honest notes from my competitive programming journey, including the road to 500+ problems and algorithm mastery through deliberate practice.",
    posts: [
      {
        title: "Learning in Public: My Road to 500+ Problem Solves",
        href: "/blogs/learning-in-public-500-problems",
      },
    ],
  },
  {
    title: "Open Source Insights",
    description:
      "Student-contributor perspective on working with large communities like Plone, and practical ways newcomers can start without fear.",
    posts: [
      {
        title: "Open Source Insights: Contributing to Plone as a Student",
        href: "/blogs/open-source-insights-plone",
      },
    ],
  },
  {
    title: "Technical Tutorials",
    description:
      "Deep tutorials grounded in real builds, including AI-powered recruitment workflows and network intrusion visualization with Python.",
    posts: [
      {
        title: "How to Build an AI-Powered Recruitment Tool from Scratch",
        href: "/blogs/ai-recruitment-tool-from-scratch",
      },
      {
        title: "Visualizing Network Intrusions with Python",
        href: "/blogs/visualizing-network-intrusions-python",
      },
    ],
  },
];

export default function NewsletterPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-screen font-sans">
      <RevealAnimation>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge variant="outline" className="mb-4 border-purple-500/30 text-purple-400">
            Newsletter Direction
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            The Blog: Establishing Authority
          </h1>
          <p className="text-zinc-400 text-base md:text-lg">
            Instead of generic tutorials, this newsletter focuses on the why and how behind my real project
            experiences, open source work, and technical learning journey.
          </p>
        </div>
      </RevealAnimation>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {EDITORIAL_PILLARS.map((pillar, index) => (
          <RevealAnimation key={pillar.title} delay={index * 0.08}>
            <Card className="h-full bg-black/40 border-zinc-800 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">{pillar.title}</CardTitle>
                <CardDescription>{pillar.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {pillar.posts.map((post) => (
                  <Link
                    key={post.href}
                    href={post.href}
                    className="block text-sm text-zinc-300 hover:text-purple-400 transition-colors"
                  >
                    {post.title}
                  </Link>
                ))}
              </CardContent>
            </Card>
          </RevealAnimation>
        ))}
      </div>

      <RevealAnimation delay={0.35}>
        <div className="max-w-3xl mx-auto mt-12 text-center border border-zinc-800 rounded-lg p-6 bg-black/30">
          <h2 className="text-2xl font-semibold mb-2">Want these updates in your inbox?</h2>
          <p className="text-zinc-400 mb-4">
            Reach out at {config.email} and I will share new deep dives, tutorials, and open source notes as they
            are published.
          </p>
          <Link href="/blogs">
            <Button>Explore All Blog Posts</Button>
          </Link>
        </div>
      </RevealAnimation>
    </div>
  );
}
