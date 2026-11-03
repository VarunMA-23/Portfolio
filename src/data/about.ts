import type { AboutContent } from "@/types/content";

export const aboutContent: AboutContent = {
  eyebrow: "About Me",
  headline: {
    before: "I build AI systems that ",
    accent: "survive production",
    after: ".",
  },
  intro: [
    "I'm Varun Manjunatha Ankanahalli, an AI/ML engineer and B.E. Computer Science (Data Science) student at CMRIT, Bengaluru. I design autonomous agents, real-time ML pipelines, and distributed backends for healthcare, fintech, and trust and safety.",
    "My work starts where models meet messy production constraints: sub-50ms moderation paths, causal memory that survives topology drift, and underwriting agents that negotiate safely. I care about systems that are measurable, observable, and genuinely useful.",
  ],
  meta: [
    { label: "Based in", value: "Bengaluru, India" },
    { label: "Studying", value: "B.E. CSE (Data Science), CMRIT" },
    { label: "Focus", value: "Autonomous agents, real-time ML, distributed backends" },
  ],
  availability: "Open to AI/ML roles, collaborations, and ambitious hackathons",
  portrait: {
    src: "/images/Varun_insta_560x640.jpg",
    alt: "Portrait of Varun Manjunatha Ankanahalli",
    width: 560,
    height: 640,
  },
  stats: [
    { value: "3x", label: "National hackathon wins", icon: "trophy" },
    { value: "6", label: "Flagship AI systems built", icon: "impact" },
  ],
  skills: {
    eyebrow: "What I Work With",
    title: "Skills & Tools",
    description:
      "A practical stack built around shipping ML systems end to end, from data and training to APIs, queues, and deployment.",
    groups: [
      {
        title: "Languages & Core",
        skills: ["Python", "TypeScript", "JavaScript", "C", "SQL"],
      },
      {
        title: "AI & ML",
        skills: ["PyTorch", "HuggingFace", "LangGraph", "LangChain", "FastAPI"],
      },
      {
        title: "Systems & Infra",
        skills: ["Docker", "Kubernetes", "Apache Kafka", "Redis"],
      },
      {
        title: "Data & Tooling",
        skills: ["PostgreSQL", "MongoDB", "Vector DBs", "Git", "Linux"],
      },
    ],
  },
  focus: {
    eyebrow: "Selected Work",
    title: "Systems I'm Building",
    description:
      "Autonomous, high-throughput systems where model quality and production behavior matter equally.",
    areas: [
      {
        title: "AI-Credit Decisioning",
        description:
          "A seven-layer underwriting and negotiation agent that counter-offers loans, mitigates default risk, and cross-sells banking products.",
        tags: ["Multi-agent", "FinTech", "Decision intelligence"],
      },
      {
        title: "ShieldAI Moderation",
        description:
          "A hybrid cascade with a sub-50ms DistilBERT fast path and asynchronous LLM review, backed by active-learning feedback loops.",
        tags: ["Real-time ML", "Kafka", "Trust & safety"],
      },
      {
        title: "Persistent Context Engine",
        description:
          "Operational memory built on a topology-invariant DAG for causal root-cause analysis that survives infrastructure churn.",
        tags: ["Causal inference", "DAGs", "Incident intelligence"],
      },
      {
        title: "MediScan & MediVault",
        description:
          "Healthcare microservices for brain MRI, lung CT, and chest X-ray diagnostics, paired with a secure medical-record timeline.",
        tags: ["Computer vision", "Healthcare", "Microservices"],
      },
    ],
  },
  learning: {
    eyebrow: "Always Learning",
    title: "Currently Exploring",
    description: "The areas I'm actively studying and building with next.",
    items: [
      "Multi-agent graph orchestration with LangGraph",
      "Distributed low-latency ML inference and MLOps",
      "Probabilistic reasoning and large-scale system design",
    ],
  },
};
