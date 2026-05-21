const portfolio = {
  name: "Rohith K",
  tagline: "AI/ML Engineer & Full-Stack Developer",
  location: "Coimbatore, Tamil Nadu, India",
  email: "r0hithkarthick2007@gmail.com",
  phone: "+91 7305149628",
  github: "https://github.com/CH3MLON",
  linkedin: "https://www.linkedin.com/in/rohith-karthik13012007/",
  resumeUrl: "/rohith-resume.pdf",

  about: `I'm a 2nd-year B.E. CSE (AI & ML) student at Sri Eshwar College of Engineering,
building production-grade AI systems. I've shipped serverless voice AI, computer vision
pipelines, and full-stack MERN applications — including a filed patent for an optical
microplastic analyzer. I care about systems that actually work at scale, not just
demos that look good.`,

  education: [
    { year: "2024 – 2028", degree: "B.E. CSE (AI & ML)", institution: "Sri Eshwar College of Engineering", grade: "CGPA 7.6" },
    { year: "2023 – 2024", degree: "Class XII", institution: "Sri Chaitanya Techno School", grade: "81%" },
    { year: "2021 – 2022", degree: "Class X", institution: "Sri Chaitanya Techno School", grade: "90.5%" },
  ],

  experience: [
    {
      title: "MERN Stack Intern",
      company: "Better Tomorrow",
      duration: "Dec 2025",
      summary: "Built a production-grade pharmacy platform (React, Node.js, MongoDB, AWS EC2/S3) with JWT-authenticated REST APIs. Achieved zero checkout failures and 99%+ API uptime."
    }
  ],

  skills: {
    "Languages":       ["Python", "JavaScript", "Java", "C", "C++"],
    "AI & ML":         ["PyTorch", "TensorFlow", "Scikit-learn", "ResNet-50", "RAG", "LLM APIs", "Prompt Engineering", "ASR", "Vector Embeddings"],
    "Web":             ["React", "Node.js", "Express.js", "REST APIs", "JWT"],
    "Cloud & DevOps":  ["AWS Lambda", "EC2", "S3", "Amplify", "API Gateway", "Docker"],
    "Databases":       ["MongoDB", "MySQL", "Qdrant", "DynamoDB"],
    "Data":            ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },

  projects: [
    {
      name: "MITRA",
      subtitle: "Multilingual Voice AI Agent",
      description: "Zero-cost serverless pipeline for government scheme discovery. AWS Lambda + DynamoDB + Qdrant Vector DB + Sarvam AI ASR/TTS. Solves Lambda cold-start latency through vector-optimised semantic retrieval.",
      stack: ["Python", "AWS Lambda", "Qdrant", "DynamoDB", "React", "Docker", "Sarvam AI"],
      link: "#",
      date: "Feb 2026"
    },
    {
      name: "AquaPlastix",
      subtitle: "Polarized Imaging Microplastic Analyzer",
      description: "End-to-end optical sensing on Raspberry Pi. Custom polarised light source + PyTorch/TensorFlow classification. Validation accuracy lifted from 89% to 92% via data augmentation. Patent filed.",
      stack: ["Python", "TensorFlow", "ResNet-50", "Raspberry Pi", "Roboflow"],
      link: "#",
      date: "Feb 2026"
    },
    {
      name: "Farm2Bag",
      subtitle: "Health-Aware Grocery Recommendation",
      description: "Hybrid recommendation pipeline: K-Means demographic segmentation + Apriori/FP-Growth association mining + collaborative filtering + NLP-driven medical condition extraction.",
      stack: ["Python", "Scikit-learn", "spaCy", "Flask", "MLxtend", "Vector DB"],
      link: "#",
      date: "Mar 2025"
    },
  ],

  achievements: [
    "Won ₹10,000 cash prize for Farm2Bag — AI Conclave 2025, Kongu Engineering College",
    "National Cluster Finalist — PALS Innowah 2026 (300+ teams), recognised for edge AI innovation",
    "Selected among 50 teams nationwide — AI for Bharat Hackathon (implementation phase)",
  ],

  certifications: [
    "Udemy — Data Structures & Algorithms (C/C++) — 2026",
    "Anthropic — AI Fluency for Students — 2026",
    "Tata Group — GenAI Powered Data Analytics — 2025",
    "Pumo Technovation — Certified Full Stack Python Developer — 2025",
  ],

  coding: {
    leetcode: "100+ problems solved",
    skillrack: "300+ problems solved",
  }
};

export default portfolio;
