import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "fraudguard",
    category: "AI/ML",
    title: "FraudGuard Enterprise",
    src: "/assets/projects-screenshots/codingducks/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://github.com/samarjit-thakuria/fraudguard",
    github: "https://github.com/samarjit-thakuria/fraudguard",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AI-Powered Fraud Detection System
          </TypographyP>
          <TypographyP className="font-mono ">
            Built a real-time fraud detection system using ensemble ML models (Random Forest + Isolation Forest) 
            achieving &lt;100ms response time, with Google Gemini providing natural-language explanations for 
            flagged transactions.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Real-Time Detection</TypographyH3>
          <p className="font-mono mb-2">
            Implemented machine learning ensemble models combining Random Forest and Isolation Forest 
            for accurate fraud detection with response times under 100 milliseconds.
          </p>
          <TypographyH3 className="my-4 mt-8">Batch Processing Pipeline</TypographyH3>
          <p className="font-mono mb-2">
            Developed batch processing capabilities for CSV/Excel uploads with auto-format detection 
            for credit card, UPI, and bank transfers.
          </p>
          <TypographyH3 className="my-4 mt-8">Enterprise Integration</TypographyH3>
          <p className="font-mono mb-2">
            Built RESTful API for seamless enterprise integration and deployed with Docker for 
            production scalability.
          </p>
        </div>
      );
    },
  },
  {
    id: "resumepard",
    category: "AI/ML",
    title: "ResumePard",
    src: "/assets/projects-screenshots/couponluxury/landing.png",
    screenshots: ["1.png"],
    live: "https://github.com/samarjit-thakuria/resumepard",
    github: "https://github.com/samarjit-thakuria/resumepard",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
      ],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Resume-JD Matching & Ranking System
          </TypographyP>
          <TypographyP className="font-mono ">
            Developed an NLP-powered system to parse resumes (PDF/DOCX/TXT), extract skills, education, 
            experience, and projects using spaCy, and rank candidates against job descriptions with 
            weighted scoring algorithms.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Smart Resume Parsing</TypographyH3>
          <p className="font-mono mb-2">
            Utilized NLP with spaCy to intelligently extract structured information from multiple 
            resume formats including PDF, DOCX, and TXT files.
          </p>
          <TypographyH3 className="my-4 mt-8">Modular Architecture</TypographyH3>
          <p className="font-mono mb-2">
            Designed the ranking logic as modular Python components with comprehensive unit tests 
            and evaluation metrics to compare different scoring strategies.
          </p>
        </div>
      );
    },
  },
  {
    id: "oceandataai",
    category: "AI/ML",
    title: "Ocean Data AI Chatbot",
    src: "/assets/projects-screenshots/the-booking-desk/landing.png",
    screenshots: ["1.png"],
    live: "https://github.com/samarjit-thakuria/ocean-data-ai",
    github: "https://github.com/samarjit-thakuria/ocean-data-ai",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.docker,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            LLM-Powered Ocean Data Q&A System
          </TypographyP>
          <TypographyP className="font-mono ">
            Built an LLM-powered Q&A system over structured ocean datasets, focusing on retrieval 
            pipelines, prompt design, and response latency under concurrent load.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Modular REST APIs</TypographyH3>
          <p className="font-mono mb-2">
            Developed modular REST APIs on Flask/Node.js, deployed on Linux with comprehensive 
            monitoring hooks and logs for debugging model and API performance in production.
          </p>
        </div>
      );
    },
  },
  {
    id: "healthcare-saas",
    category: "SaaS",
    title: "Healthcare SaaS Platform",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["1.png"],
    live: "https://github.com/samarjit-thakuria/healthcare-saas",
    github: "https://github.com/samarjit-thakuria/healthcare-saas",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Multi-Clinic Patient Management System
          </TypographyP>
          <TypographyP className="font-mono ">
            Designed & implemented a Healthcare SaaS Platform, securing over 700 patient registrations 
            for small clinics. This platform is now used by 3 fully established clinics and healthcare centers.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Patient Management</TypographyH3>
          <p className="font-mono mb-2">
            Comprehensive patient registration and management system serving 700+ patients across 
            multiple healthcare facilities.
          </p>
          <TypographyH3 className="my-4 mt-8">Clinic Administration</TypographyH3>
          <p className="font-mono mb-2">
            Streamlined administrative workflows for 3 fully operational clinics with appointment 
            scheduling, records management, and billing integration.
          </p>
        </div>
      );
    },
  },
  {
    id: "network-ids",
    category: "Security",
    title: "Network Security IDS",
    src: "/assets/projects-screenshots/ghostchat/1.png",
    screenshots: ["1.png"],
    live: "https://github.com/samarjit-thakuria/network-ids",
    github: "https://github.com/samarjit-thakuria/network-ids",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Intrusion Detection System Simulator
          </TypographyP>
          <TypographyP className="font-mono ">
            A graphical simulation of a cybersecurity IDS showing attack visualizations and 
            response alerts with real-time monitoring capabilities.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Attack Visualization</TypographyH3>
          <p className="font-mono mb-2">
            Interactive graphical simulation displaying network attacks and security threats 
            in real-time with detailed analytics.
          </p>
          <TypographyH3 className="my-4 mt-8">Alert System</TypographyH3>
          <p className="font-mono mb-2">
            Automated response system with comprehensive alert mechanisms for various types 
            of network intrusions.
          </p>
        </div>
      );
    },
  },
  {
    id: "buzzfeed",
    category: "Web Platform",
    title: "BuzzFeed News Platform",
    src: "/assets/projects-screenshots/jra/1.png",
    screenshots: ["1.png"],
    live: "https://github.com/samarjit-thakuria/buzzfeed",
    github: "https://github.com/samarjit-thakuria/buzzfeed",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Full-Stack News Platform
          </TypographyP>
          <TypographyP className="font-mono ">
            Created a full-stack news platform using Next.js and Express.js. Implemented 
            real-time content updates and user authentication with JWT.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Real-Time Updates</TypographyH3>
          <p className="font-mono mb-2">
            Integrated real-time content delivery system ensuring users receive the latest 
            news and updates instantly.
          </p>
          <TypographyH3 className="my-4 mt-8">Secure Authentication</TypographyH3>
          <p className="font-mono mb-2">
            Implemented robust user authentication and authorization using JWT tokens for 
            secure access control.
          </p>
        </div>
      );
    },
  },
];
export default projects;
