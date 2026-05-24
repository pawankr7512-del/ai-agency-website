export const site = {
  name: "Navora AI",
  tagline: "Intelligent systems for modern business",
  description:
    "We design and deploy AI websites, agents, and chatbots that help businesses automate, scale, and compete.",
  email: "hello@navora.ai",
  author: "Pawan Kumar",
} as const;

export const brand = {
  primary: "#000000",
  secondary: "#8961b7",
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#work" },
  { label: "FAQ", href: "#faq" },
] as const;

export const heroPills = [
  "AI Chatbots",
  "24/7 Agents",
  "AI Websites",
  "Production Ready",
  "ROI Focused",
  "Custom Integrations",
] as const;

export const whyChoose = [
  {
    stat: "24/7",
    title: "Always Available",
    description:
      "Agents that never sleep—qualify leads, support customers, and route requests around the clock.",
  },
  {
    stat: "2–6",
    title: "Weeks to Launch",
    description:
      "Rapid deployment with proven architecture. Ship in weeks, not quarters.",
  },
  {
    stat: "SOC2",
    title: "Enterprise Security",
    description:
      "Encryption, access controls, and compliance-first pipelines built into every project.",
  },
  {
    stat: "98%",
    title: "Client Retention",
    description:
      "Teams stay because we deliver production systems—not experiments that stall.",
  },
] as const;

export const servicePillars = [
  {
    id: "agents",
    label: "AI Agents",
    title: "Autonomous AI Agents",
    subtitle: "Your always-on workforce—research, decide, and act across your stack.",
    features: [
      "Inbound & outbound workflows with smart routing",
      "CRM-native sync—notes, tasks, zero data dead-ends",
      "Context memory and graceful human handoff",
      "Multistep cadences across chat, email, and APIs",
      "Real-time analytics and conversation intelligence",
      "Go-live in 2–6 weeks on average",
    ],
    metrics: { value: "3×", label: "Throughput uplift" },
  },
  {
    id: "websites",
    label: "AI Websites",
    title: "Intelligent Web Experiences",
    subtitle: "High-converting surfaces with personalization, search, and automation built in.",
    features: [
      "AI-powered search and on-site assistants",
      "Personalized journeys based on visitor intent",
      "Lead capture flows optimized for conversion",
      "Vercel-ready, performance-first architecture",
      "Modern UI with your brand at the center",
      "Analytics, A/B hooks, and iteration support",
    ],
    metrics: { value: "42%", label: "Faster resolution" },
  },
] as const;

export const services = [
  {
    title: "AI Websites",
    description:
      "High-converting, intelligent web experiences with personalization, search, and automation built in.",
    icon: "globe",
  },
  {
    title: "AI Agents",
    description:
      "Autonomous workflows that research, decide, and act across your tools—24/7, at scale.",
    icon: "agent",
  },
  {
    title: "AI Chatbots",
    description:
      "Support and sales assistants trained on your brand, products, and knowledge base.",
    icon: "chat",
  },
  {
    title: "Custom Integrations",
    description:
      "Connect models to CRMs, ERPs, and internal APIs with secure, production-ready pipelines.",
    icon: "plug",
  },
  {
    title: "AI Strategy",
    description:
      "Roadmaps, audits, and ROI modeling so you invest in what moves the needle.",
    icon: "chart",
  },
  {
    title: "MLOps & Hosting",
    description:
      "Deploy, monitor, and iterate models with observability and compliance in mind.",
    icon: "cloud",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "Goals, users, and economics—we define success metrics, not just feature lists.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Flows, conversation maps, and architecture that remove friction and align with your brand.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Tight sprints, early demos, your stack. Agents, chatbots, and intelligent surfaces.",
  },
  {
    step: "04",
    title: "Deploy & Learn",
    description:
      "Ship, instrument, iterate weekly. Keep what converts, cut what doesn't.",
  },
] as const;

export const workItems = [
  {
    client: "Retail Group",
    result: "42% faster support resolution",
    category: "AI Chatbot",
  },
  {
    client: "FinTech Startup",
    result: "3× lead qualification throughput",
    category: "AI Agent",
  },
  {
    client: "Healthcare Platform",
    result: "60% reduction in manual triage",
    category: "AI Website",
  },
] as const;

export const stats = [
  { value: "120+", label: "Projects delivered" },
  { value: "98%", label: "Client retention" },
  { value: "4.9", label: "Average rating" },
  { value: "24/7", label: "Agent uptime" },
] as const;

export const testimonials = [
  {
    quote:
      "They shipped our AI agent in weeks—not months. Clean execution and zero drama.",
    author: "Sarah Chen",
    role: "COO, ScalePath",
  },
  {
    quote:
      "Our chatbot handles 80% of inbound support flawlessly. The team finally focuses on growth.",
    author: "Jennifer Park",
    role: "CTO, CallCare",
  },
  {
    quote:
      "The AI website they built validated our market fast. Conversion jumped immediately.",
    author: "Marcus Webb",
    role: "Founder, Arcline",
  },
  {
    quote:
      "ROI was immediate. Best investment we made this year—24/7 without hiring more staff.",
    author: "Alex Johnson",
    role: "Ops Lead, LeadGen Pro",
  },
] as const;

export const faqs = [
  {
    q: "Is this custom or templated?",
    a: "Every engagement is tailored to your stack, data, and goals. We use proven frameworks—not one-size-fits-all templates.",
  },
  {
    q: "How fast can we go live?",
    a: "Most chatbots and agents ship in 2–6 weeks. Larger platforms vary—we'll give you a realistic timeline on the discovery call.",
  },
  {
    q: "What about security and data?",
    a: "Encryption in transit and at rest, role-based access, and optional VPC/private deployments for enterprise clients.",
  },
  {
    q: "What tech stacks do you support?",
    a: "Next.js, React, Vercel, major CRMs, REST/GraphQL APIs, and popular LLM providers. We meet you where you are.",
  },
  {
    q: "Do you disclose pricing upfront?",
    a: "We provide clear quotes after understanding scope. No surprise invoices—fixed milestones where possible.",
  },
] as const;

export const ctaExpectations = [
  "Understand your current challenges and goals",
  "Identify high-impact AI automation opportunities",
  "Outline solutions and realistic timelines",
  "Define success metrics and expected ROI",
] as const;
