const config = {
  title: "Samarjit Thakuria | Full-Stack Developer & Software Engineer",
  description: {
    long: "Explore the portfolio of a skilled full-stack developer specializing in React, Node.js, MongoDB, and modern web technologies. Discover projects including E-commerce platforms, Booking systems, API development, and more. Let's build innovative solutions together!",
    short:
      "Discover the portfolio of a full-stack developer creating scalable web applications and innovative digital solutions.",
  },
  keywords: [
    "portfolio",
    "full-stack developer",
    "software engineer",
    "web development",
    "React",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "JavaScript",
    "Next.js",
    "API development",
    "e-commerce",
    "web applications",
    "REST API",
    "database design",
    "modern web stack",
  ],
  author: "Samarjit Thakuria",
  email: "somarjeetthakuria@gmail.com",
  site: "https://saamarjitt.netlify.app/",

  // for github stars button
  githubUsername: "sammyifelse",
  githubRepo: "https://github.com/sammyifelse",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/yourtwitter",
    linkedin: "https://www.linkedin.com/in/samarjit-thakuria-96450727b/",
    instagram: "https://www.instagram.com/yourinstagram",
    facebook: "https://www.facebook.com/yourfacebook/",
    github: "https://github.com/sammyifelse",
  },
};
export { config };
