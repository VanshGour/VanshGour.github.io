export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  technologies: string[];
  features: string[];
  architectureDiagram?: string;
  architectureDetails: string;
  problem: string;
  approach: string;
  challenges: string[];
  learnings: string[];
  github: string;
  liveDemo?: string;
  featured: boolean;
  type: "fintech" | "ev" | "network" | "dsa";
}

export const projects: Project[] = [
  {
    id: "upi-payment-system",
    number: "01",
    title: "UPI PAYMENT SYSTEM",
    category: "BACKEND / FINTECH",
    tagline: "High-integrity payment simulator with transaction validation and database persistence",
    description: "A backend-focused payment application designed to simulate core UPI transaction workflows including users, accounts, payment processing, transaction records, validation, and database persistence.",
    technologies: ["Java", "Spring Boot", "REST API", "MySQL", "Maven", "JPA/Hibernate"],
    features: [
      "User & Account Management: Registration, account linking, and balance verification",
      "Payment Processing Engine: Atomic balance transfers with strict ledger balance checks",
      "Transaction History: Immutable transaction logs with timestamping and unique reference IDs",
      "RESTful API Endpoints: Clean HTTP request handling with standard response envelopes",
      "Robust Validation & Error Handling: Custom exception hierarchy and edge case guards",
      "Relational Database Persistence: ACID-compliant schema with foreign key constraints"
    ],
    architectureDiagram: `┌─────────────┐
│    USER     │
└──────┬──────┘
       │ [HTTP POST /transfer]
       ▼
┌─────────────┐
│  REST API   │
└──────┬──────┘
       │ [Validated Request]
       ▼
┌─────────────┐
│   PAYMENT   │
│   SERVICE   │
└──────┬──────┘
       │ [Atomic Ledger Update]
       ▼
┌─────────────┐
│ TRANSACTION │
└──────┬──────┘
       │ [ACID Commit]
       ▼
┌─────────────┐
│   MYSQL     │
└─────────────┘`,
    architectureDetails: "Layered Spring Boot architecture separating presentation (Controllers), business logic (Services), and data access (Repositories) with transaction isolation to prevent double spending.",
    problem: "Real-world payment ecosystems require zero tolerance for inconsistent states, concurrency glitches, or unhandled exceptions during fund transfers.",
    approach: "Built a transaction isolation model using Spring @Transactional boundaries, validating account ownership, available balance, and recipient validity before executing the transfer.",
    challenges: [
      "Ensuring atomic operations during multi-step balance deductions and additions",
      "Designing clean error envelopes for client clarity on payment failures",
      "Configuring proper JPA cascade rules and connection pooling"
    ],
    learnings: [
      "Deep understanding of database transaction isolation levels and rollback rules",
      "Best practices for designing REST APIs with standardized HTTP status codes",
      "Structured debugging of backend services using logs and Postman collections"
    ],
    github: "https://github.com/vanshgour",
    featured: true,
    type: "fintech"
  },
  {
    id: "boltly-ev-hub",
    number: "02",
    title: "BOLTLY EV HUB",
    category: "FULL-STACK / WEB",
    tagline: "Futuristic digital cockpit for electric vehicle discovery, telemetry, and charging stations",
    description: "A modern EV-focused platform designed to provide users with an engaging interface for exploring electric vehicles, charging information, and EV-related services.",
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "REST APIs", "Framer Motion"],
    features: [
      "EV Discovery & Catalog: Interactive vehicle models with specs and battery capacities",
      "Search & Dynamic Filtering: Filter by range, fast-charging speed, and vehicle category",
      "Interactive Vehicle Cockpit: Telemetry simulation with battery % and range calculator",
      "Charging Station Locator: Visual directory of charging station types and connector standards",
      "Responsive Dark Dashboard: Glassmorphic UI optimized for mobile, tablet, and desktop",
      "Fast Client-Side Routing: Seamless transitions between vehicle views and spec sheets"
    ],
    architectureDetails: "Modular React component hierarchy utilizing custom hooks for state management, dynamic filter pipelines, and hardware-accelerated CSS animations.",
    problem: "Electric vehicle buyers and enthusiasts often encounter fragmented information across different brands regarding range estimates, charging compatibility, and battery specifications.",
    approach: "Designed a centralized, visually stunning web application emphasizing key metrics like charging time, battery degradation curves, and real-world range simulation.",
    challenges: [
      "Building a responsive glassmorphic dashboard without performance lag on lower-end devices",
      "Managing dynamic multi-criteria state filters across extensive vehicle datasets"
    ],
    learnings: [
      "Advanced CSS Glassmorphism with backdrop filters and balanced contrast ratios",
      "Component lifecycle optimization and performant reactive state handling in React",
      "Designing intuitive, recruiter-ready dashboards with clear visual hierarchies"
    ],
    github: "https://github.com/vanshgour",
    featured: true,
    type: "ev"
  },
  {
    id: "network-packet-analyzer",
    number: "03",
    title: "NETWORK PACKET ANALYZER",
    category: "NETWORKING / PYTHON",
    tagline: "Low-level packet sniffing and protocol inspection utility for traffic diagnostics",
    description: "A networking project focused on inspecting packet-level information to better understand communication patterns, protocols, and network traffic.",
    technologies: ["Python", "Packet Analysis", "Sockets", "Networking Protocols", "CLI"],
    features: [
      "Live Packet Capture: Intercepts raw network frames passing through active interfaces",
      "Protocol Header Parsing: Decodes Ethernet, IPv4, TCP, UDP, ICMP, and HTTP headers",
      "Payload Inspection: Safely extracts and formats packet payloads for security analysis",
      "Traffic Summary Statistics: Protocol distribution breakdowns and source/destination maps",
      "Filter Engine: Filter packets by IP addresses, port numbers, or specific protocol types",
      "Structured Terminal Reporting: Clean colored output with timestamped packet digests"
    ],
    architectureDiagram: `SOURCE [192.168.1.10]
  │
  ▼
RAW SOCKET CAPTURE
  │
  ├── TCP Header [Flags, Seq, Ack]
  ├── UDP Header [Ports, Checksum]
  ├── HTTP / Payload Decode
  └── DNS Query / Response
  │
  ▼
DESTINATION [142.250.190.46]`,
    architectureDetails: "Socket-level network listener feeding into a multi-stage byte parser that unpacks binary headers according to standard RFC specifications.",
    problem: "Understanding computer network theory (OSI model, TCP 3-way handshakes, routing) is abstract without seeing raw bytes transmitted across network interfaces.",
    approach: "Created a Python script utilizing raw socket capture and struct unpacking to reconstruct protocol headers and visualize communication flows in real-time.",
    challenges: [
      "Handling endianness and binary byte-unpacking for variable-length IP options",
      "Managing permissions and cross-platform socket behavior"
    ],
    learnings: [
      "In-depth mastery of TCP/IP stack layers, bit masks, and network protocols",
      "Practical experience with socket programming, data streaming, and binary decoding",
      "Diagnosing network anomalies and packet drops"
    ],
    github: "https://github.com/vanshgour",
    featured: true,
    type: "network"
  },
  {
    id: "dsa-practice-lab",
    number: "04",
    title: "DSA PRACTICE LAB",
    category: "ALGORITHMS / JAVA",
    tagline: "Comprehensive algorithmic problem-solving repository structured around core patterns",
    description: "A structured collection of Data Structures and Algorithms implementations created while practicing problem solving with Java.",
    technologies: ["Java", "Algorithms", "Data Structures", "Time & Space Complexity", "JUnit"],
    features: [
      "Curated Topic Tracks: Arrays, Strings, Two Pointers, Linked Lists, Stacks, Trees & Recursion",
      "Optimal Solution Implementations: Clean, well-documented code with time/space complexity analysis",
      "Interactive Step Visualizations: Interactive step-by-step pointers and array mutations",
      "Pattern-Based Classification: Sliding window, two-pointer, binary search, fast-and-slow pointers",
      "Edge Case Test Suites: Unit tests covering boundary values, empty inputs, and large scale tests",
      "Consistent Daily Practice: Tracked progress sharpening problem-solving speed and accuracy"
    ],
    architectureDetails: "Modular package structure in Java organizing algorithms by data structure category with comprehensive docstrings explaining the intuitive problem breakdown.",
    problem: "Mastering competitive coding and software engineering interviews requires deep conceptual clarity rather than rote memorization.",
    approach: "Organized a dedicated Java repository focusing on pattern recognition, rigorous time complexity breakdown, and edge-case testing.",
    challenges: [
      "Optimizing recursion depth and memory overhead for tree and graph traversals",
      "Understanding subtle boundary conditions in binary search variants and two-pointer algorithms"
    ],
    learnings: [
      "Strong command over Big-O asymptotic analysis (Time & Space complexities)",
      "Intuitive grasp of pointer manipulation, recursion call stacks, and dynamic memory in Java",
      "Disciplined approach to testing edge conditions before writing final solutions"
    ],
    github: "https://github.com/vanshgour",
    featured: true,
    type: "dsa"
  }
];
