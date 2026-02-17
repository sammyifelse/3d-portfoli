const config = {
  title: "Samarjit Thakuria | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Samarjit, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Samarjit, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Samarjit Thakuria",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Samarjit Thakuria",
  email: "somarjeetthakuria@gmail.com",
  site: "https://saamarjitt.netlify.app/.",

  // for github stars button
  githubUsername: "sammyifelse",
  githubRepo: "https://github.com/sammyifelse",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/nothotchaddi",
    linkedin: "https://www.linkedin.com/in/samarjit-thakuria-96450727b/",
    instagram: "https://www.instagram.com/somarjeet.thakuria/",
    facebook: "https://www.facebook.com",
    github: "https://github.com/sammyifelse",
  },
};
export { config };
