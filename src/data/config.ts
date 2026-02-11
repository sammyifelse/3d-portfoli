const config = {
  title: "Samarjit Thakuria | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Samarjit Thakuria, a Software Engineer passionate about scalable backend architectures, APIs, modern web stacks and Agile development. Skilled in Git, React, Java, Node.js, Python, and mobile app engineering. Discover my latest work including Ocean Data AI Chatbot, MedCare SaaS Platform, and Network Intrusion Detection systems. Let's build something amazing together!",
    short:
      "Discover the portfolio of Samarjit Thakuria, a Full Stack Developer creating scalable backend architectures and innovative web applications.",
  },
  keywords: [
    "Samarjit Thakuria",
    "portfolio",
    "full-stack developer",
    "software engineer",
    "backend developer",
    "web development",
    "API development",
    "Node.js",
    "React",
    "Python",
    "Java",
    "REST APIs",
    "Docker",
    "Agile development",
    "React Native",
    "GenAI",
    "Machine Learning",
  ],
  author: "Samarjit Thakuria",
  email: "somarjeetthakuria@gmail.com",
  site: "https://saamarjitt.netlify.app",

  // for github stars button
  githubUsername: "samarjit-thakuria",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/samarjit_thakuria",
    linkedin: "https://www.linkedin.com/in/samarjit-thakuria/",
    instagram: "https://www.instagram.com/samarjit_thakuria",
    facebook: "https://www.facebook.com/samarjit.thakuria",
    github: "https://github.com/samarjit-thakuria",
  },
};
export { config };
