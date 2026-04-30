# 🚀 Samarjit Thakuria | Full-Stack Developer Portfolio

Welcome to my personal portfolio website! This is where I showcase my full-stack development projects, technical insights, and competitive programming journey. The site features immersive 3D animations, interactive experiences, and a growing blog focused on establishing authority through project deep dives, learning in public, open source insights, and practical technical tutorials.

![Portfolio Preview](https://github.com/Naresh-Khatri/3d-portfolio/blob/main/public/assets/projects-screenshots/portfolio/landing.png?raw=true)

## 🔥 Features

- **3D Immersive Design**: Interactive 3D elements and animations using Spline Runtime bringing the portfolio to life.
- **Smooth Interactions**: Powered by GSAP and Framer Motion for elegant animations on scroll, hover, and reveal effects.
- **Authority-Driven Blog**: Deep technical articles including:
  - Project post-mortems from real products (MedCare, ResumePard)
  - Learning in public: 500+ competitive programming problems journey
  - Open source contributions: Student perspective on Plone
  - Practical tutorials: AI-powered systems and data visualization
- **Interactive Projects**: Showcase of real-world applications with architecture insights and lessons learned.
- **Live Like Counter**: Community engagement with persistent like tracking per device.
- **Newsletter Hub**: Curated technical content and updates organized by category.
- **Responsive Design**: Optimized for all devices with smooth performance.
- **Dark Mode**: Built-in theme toggle for comfortable viewing.

## 📚 Featured Projects

- **MedCare**: AI-powered healthcare platform with real-time appointment systems
- **ResumePard**: Intelligent resume parsing and candidate ranking with FastAPI backend
- **The Booking Desk**: Full-featured booking and scheduling system
- **Ghost Chat**: Real-time collaborative chat application
- **Network Intrusion Detection**: Python-based security analysis tool
- **Ocean Data AI Chatbot**: Intelligence system for oceanic research
- And more...

## 🔗 Blog Categories

- **Project Deep Dives**: Architecture decisions, hardest bugs, and "why we chose X over Y"
- **Learning in Public**: Algorithm mastery, competitive programming insights
- **Open Source Insights**: Journey from student contributor to productive community member
- **Technical Tutorials**: From-scratch builds and practical implementation guides

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **UI Libraries**: Shadcn UI, Aceternity UI, Lucide Icons
- **Animations**: GSAP, Framer Motion, Motion
- **3D**: Spline Runtime
- **Backend/APIs**: Node.js, Resend (email), Socket.io (real-time)
- **Content**: MDX with gray-matter for blog posts
- **Development**: Lenis (smooth scroll), Zod (validation), SCSS
- **Deployment**: Built for Netlify/Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- pnpm, npm, or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Naresh-Khatri/3d-portfolio.git
    ```

2. Navigate to the project directory:

    ```bash
    cd 3d-portfolio
    ```

3. Install dependencies:

    ```bash
    pnpm install
    # or
    npm install
    ```

4. Set up environment variables:
   Create a `.env.local` file in the root directory:

    ```env
    RESEND_API_KEY=your_resend_api_key_here
    ```

5. Run the development server:

    ```bash
    pnpm dev
    # or
    npm run dev
    ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser!

## 📝 Blog System

Blog posts are stored as MDX files in `src/content/blogs/`. Each post includes:
- Title, publication date, summary
- Author and tags
- Full content with code examples and visuals

Create new posts by adding `.mdx` files with YAML frontmatter:

```mdx
---
title: "Your Post Title"
publishedAt: "2026-04-26"
summary: "Brief summary of your post"
author: "Your Name"
tags: ["tag1", "tag2"]
---

# Your content here...
```

## 🌐 Environment Variables

- `RESEND_API_KEY`: Email service API key for contact form

## 🚀 Deployment

### Netlify

1. Connect your GitHub repository to Netlify
2. Add environment variable `RESEND_API_KEY` in site settings
3. Deploy!

### Vercel

1. Connect your GitHub repository to Vercel
2. Add environment variable `RESEND_API_KEY` in project settings
3. Deploy with automatic GitHub integration!

## 🤝 Contributing

Found a bug or have suggestions? Feel free to open an issue or submit a pull request. Contributions are always welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Portfolio**: [saamarjitt.netlify.app](https://saamarjitt.netlify.app)

**Social**: [GitHub](https://github.com/sammyifelse) | [LinkedIn](https://www.linkedin.com/in/samarjit-thakuria-96450727b/) | [Instagram](https://www.instagram.com/somarjeet.thakuria/)

Made with ❤️ by Samarjit Thakuria
