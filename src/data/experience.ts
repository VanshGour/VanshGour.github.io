export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: "Campus Leadership & Logistics" | "Hands-On Technical Project Experience";
  badge: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "tedx-ipsa",
    role: "Logistics Team Member",
    organization: "TEDxIPSA",
    location: "IPS Academy, Indore",
    period: "Campus Event Coordination",
    type: "Campus Leadership & Logistics",
    badge: "Event Leadership",
    description: "Contributed to event logistics and coordination activities, working with a team to support planning, stage management, attendee handling, and on-ground execution for the university TEDx event.",
    highlights: [
      "Collaborated with cross-functional student teams to execute schedule timelines smoothly",
      "Coordinated on-ground logistics, speaker hospitality, and stage technical setup",
      "Honed communication, problem-solving, and adaptability under time-sensitive scenarios"
    ],
    skills: ["Teamwork", "Event Logistics", "Coordination", "Problem Solving", "Communication"]
  },
  {
    id: "technical-projects",
    role: "Full-Stack & Backend Development",
    organization: "Self-Directed Technical Engineering",
    location: "Indore, India",
    period: "Continuous Practicum",
    type: "Hands-On Technical Project Experience",
    badge: "Engineering Practicum",
    description: "Extensive hands-on software development experience acquired through building full-stack applications, designing REST APIs, modeling relational databases, and debugging complex distributed flows.",
    highlights: [
      "Engineered backend microservices and RESTful endpoints using Java and Spring Boot",
      "Built modern, accessible frontend interfaces with React, JavaScript, and Tailwind CSS",
      "Integrated SQL databases with transaction integrity, foreign key constraints, and queries",
      "Maintained version control workflows, branching models, and clean commit history on Git/GitHub",
      "Practiced rigorous problem solving across fundamental data structures and algorithmic patterns"
    ],
    skills: ["Java", "Spring Boot", "REST APIs", "React", "MySQL", "Git & GitHub", "DSA"]
  }
];
