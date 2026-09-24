export interface Profile {
  name: string;
  role: string;
  tagline: string;
  bio1: string;
  bio2: string;
  education: string;
  college: string;
  location: string;
  currentStatus: string;
  currentFocus: string;
  email: string;
  github: string;
  linkedin: string;
  leetcode: string;
  resume: string;
  stats: {
    number: string;
    label: string;
  }[];
}

export const profile: Profile = {
  name: "Vansh Gour",
  role: "Software Developer",
  tagline: "I build software that solves real problems.",
  bio1: "I'm Vansh Gour, a final-year B.Tech Data Science Engineering student at IPS Academy, Indore. I enjoy building practical applications while continuously strengthening my foundations in software engineering and computer science.",
  bio2: "My current focus is Java, Data Structures & Algorithms, Object-Oriented Programming, databases, and full-stack development. I learn best by building, debugging, and understanding how systems work underneath the interface.",
  education: "B.Tech Data Science Engineering",
  college: "IPS Academy, Indore",
  location: "Indore, Madhya Pradesh, India",
  currentStatus: "Final Year Student | Open to Software Development Opportunities",
  currentFocus: "Software Development + DSA",
  email: "vanshgour52@gmail.com",
  github: "https://github.com/VanshGour",
  linkedin: "https://www.linkedin.com/in/vansh-gour-3632b0292/",
  leetcode: "https://leetcode.com/u/Vansh_Gour/",
  resume: "/Vansh_Gour_Resume.pdf",
  stats: [
    { number: "01", label: "Developer" },
    { number: "02", label: "Problem Solver" },
    { number: "03", label: "Project Builder" }
  ]
};
