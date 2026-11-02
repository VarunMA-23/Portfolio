import type { InternshipContent } from "@/types/content";
import { siteConfig } from "./site";

export const internshipContent: InternshipContent = {
  eyebrow: "Open to Internships",
  title: "Internship Interests & Career Goals",
  intro:
    "I am actively seeking internship opportunities in software development and engineering, with a strong interest in building scalable applications, developing intelligent systems, and solving real-world technical problems. I am not currently employed — I am looking for an internship where I can learn hands-on and contribute to real products.",
  availability: "Currently looking for an internship · Open to full-time or part-time roles",
  primaryCta: {
    label: "Email me",
    href: `mailto:${siteConfig.email}`,
  },
  secondaryCta: {
    label: "See my projects",
    href: "/projects",
  },
  interests: {
    eyebrow: "Areas of Interest",
    title: "Where I Want to Contribute",
    description:
      "I am interested in roles that involve hands-on software development, backend engineering, full-stack application development, and AI-powered product development. I enjoy working across the software development lifecycle, from requirements and system design to implementation, integration, debugging, testing, and optimization.",
    tracks: [
      {
        title: "Software Development Engineering Intern",
        icon: "code",
        tint: "peach",
        bullets: [
          "Develop reliable, maintainable software applications.",
          "Apply data structures, algorithms, and problem-solving to real features.",
          "Design backend services and REST APIs.",
          "Model, optimize, and integrate databases.",
          "Write clean, modular, and testable code.",
          "Follow software architecture and engineering best practices.",
        ],
      },
      {
        title: "Full-Stack Development Intern",
        icon: "layers",
        tint: "sky",
        bullets: [
          "Build end-to-end web applications.",
          "Create responsive interfaces with React, Next.js, and TypeScript.",
          "Design backend services and APIs with Node.js, Express, and FastAPI.",
          "Work with MongoDB and SQL databases.",
          "Implement authentication, authorization, and secure application workflows.",
          "Integrate third-party APIs and external services.",
        ],
      },
      {
        title: "AI / Machine Learning Engineering Intern",
        icon: "brain",
        tint: "mint",
        bullets: [
          "Develop and integrate AI-powered applications.",
          "Work with large language models and open-source models.",
          "Build Retrieval-Augmented Generation (RAG) systems.",
          "Explore agentic AI, multi-agent architectures, and tool-calling workflows.",
          "Use LangChain, LangGraph, Hugging Face, and model integration.",
          "Experiment with fine-tuning, embeddings, and intelligent information retrieval.",
        ],
      },
      {
        title: "Backend Engineering Intern",
        icon: "server",
        tint: "blush",
        bullets: [
          "Design scalable backend architectures.",
          "Develop RESTful APIs and server-side applications.",
          "Model databases and optimize queries.",
          "Handle authentication, authorization, and application security.",
          "Work with asynchronous processing, caching, and system integration.",
          "Build reliable, maintainable backend services.",
        ],
      },
    ],
  },
  lookingFor: {
    eyebrow: "What I Am Looking For",
    title: "Hands-On Engineering Work",
    description:
      "I am particularly interested in opportunities where I can contribute to real products, take ownership of development tasks, and learn how production systems are built and operated.",
    items: [
      "Contribute to real-world software products rather than work exclusively on theoretical assignments.",
      "Take ownership of development tasks and implement features independently.",
      "Collaborate with engineers on architecture, development, code reviews, and debugging.",
      "Work with modern technologies and practical engineering workflows.",
      "Learn about production systems, deployment, scalability, and software quality.",
      "Apply full-stack development and AI knowledge to solve meaningful problems.",
    ],
  },
  goal: {
    eyebrow: "Career Goal",
    title: "Building Complete Products End to End",
    paragraphs: [
      "My broader goal is to grow into a strong Software Engineer with the ability to design and build complete products, understand complex systems, and develop intelligent software solutions.",
      "Every internship I take on should move me closer to owning a product end to end: understanding the problem, designing the architecture, shipping the implementation, and operating it in production.",
    ],
  },
};
