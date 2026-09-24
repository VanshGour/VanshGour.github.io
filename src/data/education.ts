export interface Education {
  degree: string;
  major: string;
  institute: string;
  location: string;
  status: string;
  graduationYearPlaceholder: string;
  cgpaPlaceholder: string;
  coursework: string[];
}

export const education: Education = {
  degree: "Bachelor of Technology (B.Tech)",
  major: "Data Science Engineering",
  institute: "IPS Academy, Indore",
  location: "Indore, Madhya Pradesh, India",
  status: "Final Year Student",
  graduationYearPlaceholder: "2026",
  cgpaPlaceholder: "Available Upon Request",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Operating Systems",
    "Computer Networks",
    "Object-Oriented Programming (OOP)",
    "Software Engineering",
    "Machine Learning Foundations",
    "Discrete Mathematics"
  ]
};

export interface Achievement {
  id: string;
  category: string;
  title: string;
  description: string;
  tag: string;
}

export const achievements: Achievement[] = [
  {
    id: "dsa-practice",
    category: "ALGORITHMIC FOUNDATIONS",
    title: "DSA Problem-Solving Practice",
    description: "Consistent algorithmic problem-solving practice using Java covering core arrays, two-pointers, linked lists, trees, recursion, and search algorithms.",
    tag: "Problem Solving"
  },
  {
    id: "leetcode",
    category: "COMPETITIVE PLATFORMS",
    title: "LeetCode Practice",
    description: "Active participation in coding and problem solving on LeetCode to sharpen analytical thinking, algorithmic efficiency, and edge case handling.",
    tag: "Coding Profile"
  },
  {
    id: "practical-projects",
    category: "ENGINEERING PRACTICUM",
    title: "Practical Software Projects",
    description: "Built multiple functional software projects across backend banking simulations, networking packet analysis, and responsive web platforms.",
    tag: "Development"
  },
  {
    id: "campus-tedx",
    category: "LEADERSHIP & CAMPUS",
    title: "TEDxIPSA Logistics Team",
    description: "Contributed to on-ground logistics, team coordination, and event execution for the official university TEDx event at IPS Academy, Indore.",
    tag: "Campus Leadership"
  }
];
