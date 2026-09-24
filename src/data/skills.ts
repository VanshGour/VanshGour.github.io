export interface SkillItem {
  name: string;
  description?: string;
}

export interface SkillCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    number: "01",
    title: "PROGRAMMING LANGUAGES",
    description: "Core languages used for building robust applications and algorithmic problem solving.",
    skills: [
      { name: "Java", description: "Primary OOP & Backend Language" },
      { name: "JavaScript", description: "Modern ES6+ Web Development" },
      { name: "Python", description: "Data Processing & Scripting" },
      { name: "SQL", description: "Relational Queries & Schema Design" }
    ]
  },
  {
    id: "core-cs",
    number: "02",
    title: "CORE COMPUTER SCIENCE",
    description: "Fundamental theoretical and engineering foundations driving scalable software.",
    skills: [
      { name: "Data Structures & Algorithms", description: "Optimization & Problem Solving" },
      { name: "Object-Oriented Programming", description: "Design Patterns & Architecture" },
      { name: "DBMS", description: "Database Management Systems" },
      { name: "Operating Systems", description: "Concurrency, Processes & Memory" },
      { name: "Computer Networks", description: "Protocols, TCP/IP & HTTP" }
    ]
  },
  {
    id: "frontend",
    number: "03",
    title: "FRONTEND DEVELOPMENT",
    description: "Creating responsive, fast, and accessible user experiences with modern web standards.",
    skills: [
      { name: "React", description: "Component-Driven Architecture" },
      { name: "JavaScript (ES6+)", description: "Dynamic Web Logic" },
      { name: "HTML5", description: "Semantic Web Structure" },
      { name: "CSS3 / Modern CSS", description: "Responsive Layouts & Glassmorphism" }
    ]
  },
  {
    id: "backend",
    number: "04",
    title: "BACKEND & ARCHITECTURE",
    description: "Designing reliable server-side services, business logic, and API endpoints.",
    skills: [
      { name: "Java", description: "Robust Enterprise Backend" },
      { name: "Spring Boot", description: "Microservices & Web APIs" },
      { name: "REST APIs", description: "Stateless Resource Routing" }
    ]
  },
  {
    id: "database",
    number: "05",
    title: "DATABASE & PERSISTENCE",
    description: "Structuring, querying, and optimizing relational data layers.",
    skills: [
      { name: "MySQL", description: "Relational Database Management" },
      { name: "SQL", description: "Complex Queries, Joins & Indexing" }
    ]
  },
  {
    id: "tools",
    number: "06",
    title: "TOOLS & ENVIRONMENT",
    description: "Developer tooling, version control systems, and collaborative workflows.",
    skills: [
      { name: "Git", description: "Version Control & Branching" },
      { name: "GitHub", description: "Code Hosting & Collaboration" },
      { name: "VS Code", description: "Frontend Development IDE" },
      { name: "IntelliJ IDEA", description: "Java & Spring Boot Development" },
      { name: "Postman", description: "API Testing & Verification" }
    ]
  }
];
