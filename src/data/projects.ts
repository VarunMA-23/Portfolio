import type { ProjectContent } from "@/types/content";

export const projectContent: ProjectContent = {
  eyebrow: "Selected Work",
  title: "Projects",
  description:
    "Flagship systems where model quality meets production constraints: autonomous agents, real-time moderation, causal memory, and healthcare diagnostics.",
  detail: {
    backLabel: "All projects",
    overviewTitle: "Overview",
    highlightsTitle: "What it does",
    stackTitle: "Stack",
    nextLabel: "Next project",
    previousLabel: "Previous project",
    ctaNote: "Feature yet to be built",
  },
  projects: [
    {
      slug: "ai-credit-decisioning",
      title: "AI-Credit Decisioning",
      category: "FinTech",
      summary:
        "A seven-layer underwriting and negotiation agent that counter-offers loans, mitigates default risk, and cross-sells banking products.",
      icon: "brain",
      tint: "peach",
      tags: ["Multi-agent", "FinTech", "Decision intelligence"],
      metrics: [
        { value: "7", label: "Decisioning layers" },
        { value: "3", label: "Banking products" },
      ],
      overview: [
        "An underwriting pipeline where a graph of specialised agents evaluates an applicant, prices risk, and negotiates a counter-offer instead of returning a flat yes or no.",
        "Each layer owns one decision: eligibility, risk scoring, offer construction, negotiation policy, default mitigation, cross-sell, and final approval. The result is a loan offer that stays inside risk limits while remaining useful to the customer.",
      ],
      highlights: [
        "Counter-offers loans with an agent-driven negotiation policy rather than a fixed approval rule.",
        "Scores and mitigates default risk before an offer leaves the decisioning graph.",
        "Cross-sells relevant banking products only when the risk profile supports them.",
      ],
      stack: ["Python", "LangGraph", "LLM agents", "FastAPI", "PostgreSQL"],
    },
    {
      slug: "shieldai-moderation",
      title: "ShieldAI Moderation",
      category: "AI/ML",
      summary:
        "A hybrid cascade with a sub-50ms DistilBERT fast path and asynchronous LLM review, backed by active-learning feedback loops.",
      icon: "shield",
      tint: "sky",
      tags: ["Real-time ML", "Kafka", "Trust & safety"],
      metrics: [
        { value: "<50ms", label: "Fast-path latency" },
        { value: "2", label: "Review tiers" },
      ],
      overview: [
        "A trust-and-safety system that classifies content in two tiers: a distilled transformer handles the hot path in under 50 milliseconds, while ambiguous cases are queued for asynchronous LLM review.",
        "Low-confidence decisions feed an active-learning loop, so the fast model keeps improving on exactly the traffic it struggles with instead of a static sample.",
      ],
      highlights: [
        "Sub-50ms first-pass classification with DistilBERT for latency-sensitive moderation.",
        "Asynchronous LLM review for ambiguous content without blocking the request path.",
        "Active-learning feedback that routes weak predictions back into training data.",
      ],
      stack: ["Python", "DistilBERT", "Apache Kafka", "Redis", "FastAPI"],
    },
    {
      slug: "persistent-context-engine",
      title: "Persistent Context Engine",
      category: "Systems",
      summary:
        "Operational memory built on a topology-invariant DAG for causal root-cause analysis that survives infrastructure churn.",
      icon: "network",
      tint: "mint",
      tags: ["Causal inference", "DAGs", "Incident intelligence"],
      metrics: [
        { value: "DAG", label: "Causal memory model" },
        { value: "24/7", label: "Incident context" },
      ],
      overview: [
        "An operational memory layer for incident response. Instead of storing flat logs, it keeps a directed acyclic graph of causal relationships between services, events, and changes.",
        "The graph is topology-invariant: when pods reschedule or nodes churn, causal links survive because they are modelled by service identity and dependency, not by volatile infrastructure IDs.",
      ],
      highlights: [
        "Causal root-cause analysis across services rather than keyword matching on logs.",
        "Context that survives deployment, rescheduling, and topology drift.",
        "A persistent memory an on-call agent can query during an incident.",
      ],
      stack: ["Python", "Graph databases", "Vector DBs", "Redis", "Observability tooling"],
    },
    {
      slug: "mediscan",
      title: "MediScan",
      category: "Healthcare",
      summary:
        "Healthcare microservices for brain MRI, lung CT, and chest X-ray diagnostics, exposed through a low-latency inference API.",
      icon: "scan",
      tint: "blush",
      tags: ["Computer vision", "Healthcare", "Microservices"],
      metrics: [
        { value: "3", label: "Imaging modalities" },
        { value: "API", label: "Service boundary" },
      ],
      overview: [
        "A diagnostic microservice suite covering brain MRI, lung CT, and chest X-ray analysis. Each modality has its own inference path, but shares a common request, validation, and result contract.",
        "The service is built for integration: uploads are validated and queued, inference is isolated per modality, and results return structured findings that a clinical system can consume.",
      ],
      highlights: [
        "Separate model pipelines for brain MRI, lung CT, and chest X-ray inputs.",
        "A shared microservice contract for validation, queueing, and structured findings.",
        "Designed for low-latency inference and clean clinical integration.",
      ],
      stack: ["Python", "PyTorch", "FastAPI", "Docker", "Kubernetes"],
    },
    {
      slug: "medivault",
      title: "MediVault",
      category: "Healthcare",
      summary:
        "A secure medical-record timeline that unifies scans, reports, and visit history into one patient-owned view.",
      icon: "heart",
      tint: "peach",
      tags: ["Healthcare", "Data modelling", "Privacy"],
      metrics: [
        { value: "1", label: "Patient timeline" },
        { value: "Encrypted", label: "Record storage" },
      ],
      overview: [
        "A companion to MediScan that turns scattered medical records into a single chronological timeline: scans, diagnostic reports, prescriptions, and visits.",
        "Records are modelled around the patient, with access control and encryption treated as first-class requirements rather than an afterthought.",
      ],
      highlights: [
        "One chronological view of scans, reports, and visit history.",
        "Patient-centred data model with explicit access boundaries.",
        "Structured records that pair with MediScan diagnostic output.",
      ],
      stack: ["Python", "FastAPI", "MongoDB", "Redis", "Docker"],
    },
  ],
};
