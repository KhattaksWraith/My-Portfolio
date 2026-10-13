/* All content below comes from the client's brief. Nothing is invented.
   Unverified items (school/college names, NCNDT details) are intentionally absent. */

export const hero = {
  headline: "Every journey starts with curiosity.",
  sub: "From a classroom in 2005 to materials engineering, building digital products, and exploring what comes next.",
  primaryCta: { label: "Explore my journey", href: "#journey" },
  secondaryCta: { label: "View my professional profile", href: "#about" },
};

export interface JourneyEra {
  year: string;
  title: string;
  text: string;
  scene: string; // description for the illustration
}

export const journey: JourneyEra[] = [
  {
    year: "2005",
    title: "Kindergarten begins",
    text: "A young boy walks into kindergarten for the first time, curious about everything.",
    scene: "A small child with a backpack approaching a school building.",
  },
  {
    year: "2017",
    title: "School graduation",
    text: "Twelve years of classrooms, exams, and football tournaments come to an end.",
    scene: "A school student in uniform holding books, school building behind.",
  },
  {
    year: "2019",
    title: "College graduation",
    text: "College done. The big question appears: what comes next?",
    scene: "A college graduate looking toward a city skyline with a university in the distance.",
  },
  {
    year: "2020",
    title: "Begins university at NUST",
    text: "Admitted to the National University of Sciences and Technology to study Metallurgy and Materials Engineering.",
    scene: "A university student walking onto the NUST campus with engineering buildings around.",
  },
  {
    year: "2025",
    title: "Graduates in Metallurgy & Materials Engineering",
    text: "BS Metallurgy and Materials Engineering, NUST. CGPA 3.15/4.00. October 2020 to June 2025.",
    scene: "A graduate in cap and gown holding a degree, laboratory glassware nearby.",
  },
  {
    year: "2025",
    title: "Researcher",
    text: "Undergraduate thesis on machine learning and nanoparticle conjugation for breast cancer research, plus projects across batteries, composites, and solar materials.",
    scene: "A researcher at a workbench with a laptop showing models, molecules and test equipment around.",
  },
  {
    year: "Now",
    title: "Builder",
    text: "Building digital products: an e-commerce store, niche websites, and web development with the MERN stack.",
    scene: "A person at a desk with code on screen, packages and a storefront nearby.",
  },
  {
    year: "Next",
    title: "The open road",
    text: "Exploring MS opportunities and scholarships in computational materials science, nanomaterials, and energy storage.",
    scene: "An open road leading toward mountains and a sunrise, a figure walking forward.",
  },
];

export const about = {
  eyebrow: "About me",
  heading: "Materials engineer, researcher, and builder.",
  paragraphs: [
    "I graduated from the National University of Sciences and Technology (NUST) in 2025 with a BS in Metallurgy and Materials Engineering.",
    "My final year research used machine learning and nanoparticle conjugation to explore new approaches in breast cancer treatment. Along the way I worked on supercapacitors, battery materials, solar panel coatings, and testing equipment I helped design.",
    "Outside the lab, I build things for the web: I ran a Shopify store, I am learning the MERN stack, and I work with SEO and AI tools. Now I am looking toward an MS abroad in computational materials science and related fields.",
  ],
  stats: [
    { value: "2025", label: "NUST graduate" },
    { value: "8", label: "Research & course projects" },
    { value: "300+", label: "Monthly store orders" },
  ],
};

export const thesis = {
  eyebrow: "Featured research",
  title:
    "Repurposing Agonists Through Machine Learning & Nanoparticle Conjugation: A Novel Approach to Luminal Breast Cancer Treatment",
  meta: [
    { label: "Role", value: "Team Leader" },
    { label: "Team", value: "Nabiha Babar, Hamza Hassan" },
    { label: "Supervisor", value: "Dr. Shoaib Butt" },
    { label: "Institution", value: "School of Chemical and Materials Engineering, NUST" },
    { label: "Year", value: "2025" },
  ],
  motivation:
    "Drug discovery is slow and expensive. Repurposing existing FDA-approved drugs for new uses can shorten that path, and machine learning can screen candidates far faster than trial and error.",
  question:
    "Can QSAR machine-learning models identify FDA-approved compounds with potential activity against glucocorticoid receptors for luminal breast cancer, and can nanoparticle conjugation improve targeted delivery?",
  methods: [
    "Compound bioactivity data collection and preprocessing",
    "Molecular descriptor calculation",
    "Feature selection and PCA",
    "Regression modeling and evaluation (Random Forest, Lasso Regression)",
    "Computational screening of candidate compounds",
    "Molecular docking",
    "Nanoparticle-conjugation component (materials-oriented, per the thesis)",
  ],
  tools: ["Python", "NumPy", "Pandas", "Scikit-learn", "Google Colab", "MOE", "LaTeX"],
  findings: [
    "QSAR models reported an RMSE of 0.309 for Random Forest and Lasso Regression (per the thesis).",
    "132 unknown FDA-approved compounds were screened computationally.",
    "Reported candidate hits included Granisetron and Cabozantinib (per the thesis).",
  ],
  limitations:
    "These are computational findings reported in an undergraduate thesis. They do not imply clinical efficacy or a proven treatment. Experimental validation and further research are needed.",
  contribution:
    "As team leader, I led the project direction, worked on data preprocessing and modeling, and coordinated the computational workflow across the team.",
  disclaimer:
    "All figures and findings above are reported from the thesis. They are not independently validated here.",
};

export interface Project {
  title: string;
  text: string;
  points: string[];
  skills: string[];
}

export const projects: Project[] = [
  {
    title: "Structural Composite Supercapacitors for Multifunctional Engineering Applications",
    text: "Exploring materials that carry load and store energy at the same time.",
    points: [
      "Structural load-bearing and energy-storage concepts",
      "CNT-reinforced composites",
      "Potential applications in electric vehicles and aerospace",
    ],
    skills: ["Composites", "Energy storage", "Materials design"],
  },
  {
    title: "Recent Developments in Lithium-Ion Battery Materials",
    text: "A review of where battery materials are heading.",
    points: [
      "Solid-state electrolytes",
      "Silicon-based anodes",
      "Battery safety, cycle life, and degradation",
      "Nanomaterials for energy storage",
    ],
    skills: ["Batteries", "Nanomaterials", "Literature review"],
  },
  {
    title: "ETFE-Based Protective Layer for Solar Panel Applications",
    text: "Protective materials that help solar panels survive the environment.",
    points: ["ETFE protective materials", "Mechanical durability", "Environmental resistance", "Photovoltaic protection"],
    skills: ["Polymers", "Solar", "Durability testing"],
  },
  {
    title: "Development of a Micro Universal Testing Machine for Thin Material Characterization",
    text: "A compact testing-machine concept for very small, thin specimens.",
    points: [
      "Compact testing-machine concept",
      "10 N load cell",
      "Precision gripping",
      "Data acquisition for stress–strain analysis",
    ],
    skills: ["Mechanical testing", "Machine design", "Data acquisition"],
  },
  {
    title: "Sustainable Biomass-Derived Materials for Advanced Engineering Uses",
    text: "Engineering materials grown from biomass, not petroleum.",
    points: [
      "Biomass-derived engineering materials",
      "Biodegradable materials",
      "Sustainable packaging and construction",
      "Energy-related applications",
    ],
    skills: ["Sustainability", "Biomaterials", "Materials selection"],
  },
];

export interface Experience {
  role: string;
  org: string;
  period: string;
  points: string[];
}

export const experience: Experience[] = [
  {
    role: "Materials Engineering Intern",
    org: "Scientific & Engineering Services Directorate (SES), Islamabad",
    period: "July 1 – August 9, 2024",
    points: ["TIG and gas welding", "Nondestructive testing inspections", "Reporting after specimen testing"],
  },
  {
    role: "Remote Customer Support Representative",
    org: "Seawolf Technologies",
    period: "June – September 2022",
    points: ["Customer communication and support", "Handling queries for a remote team"],
  },
];

export const dawgDeals = {
  eyebrow: "Entrepreneurship",
  title: "DawgDeals.com",
  text: "A Shopify store I built and ran, growing it from a tiny catalog to hundreds of monthly orders.",
  points: [
    "Started with two health and beauty SKUs",
    "Expanded to more than twenty SKUs",
    "Reached over 300 orders per month",
    "Managed inventory and operational tracking",
    "Coordinated delivery workflows with TCS, Leopards, and M&P",
  ],
};

export const digitalInterests = {
  established: ["Shopify", "WordPress", "Blogging", "SEO"],
  developing: ["MERN stack development", "Web development", "AI tools and automation"],
};

export const leadership = [
  "NUST Sustainability Office member, 2023–2024",
  "Volunteer educator at local orphanages in Islamabad, 2022–2025",
  "Plantation-drive organizer, 2023",
  "Graphic designer for the School of Chemical and Materials Engineering, 2022–2025",
  "Deputy Director Graphics, NUST Materials Society",
  "Volunteer, ICONN-2025",
  "Attendee, 4th ASEAN-Pakistan Conference on Materials Science, May 2025",
];

export const awards = [
  { title: "Grade A, Final Year Design Project", year: "2025" },
  { title: "Winner, Inter-department Football Tournament", year: "2024" },
  { title: "Winner, Inter-college Football Tournament", year: "2018" },
  { title: "Participant, HRCA English & Science Quiz", year: "2017–2018" },
];

export const skillGroups: { title: string; skills: string[] }[] = [
  {
    title: "Materials & characterization",
    skills: [
      "Hardness testing", "UTM", "Charpy impact testing", "Fatigue and creep testing",
      "FTIR", "XRD", "SEM", "Optical microscopy", "Spectroscopy", "DSC", "XPS", "TGA", "EDX",
      "Lathe machine operation",
    ],
  },
  {
    title: "Fabrication",
    skills: ["Sol-gel synthesis", "Heat treatment", "TIG welding", "Gas welding"],
  },
  {
    title: "Computational research",
    skills: ["Python", "NumPy", "Pandas", "Scikit-learn", "Google Colab", "QSAR modeling", "MOE", "LaTeX"],
  },
  {
    title: "Development",
    skills: ["MERN stack", "Git", "Web development", "Shopify", "WordPress"],
  },
];

export const future = {
  eyebrow: "What is next",
  title: "Exploring MS opportunities and scholarships.",
  text: "I am looking for funded MS positions in materials science where I can combine experiments with computation.",
  interests: [
    "Computational materials science",
    "Machine learning for scientific research",
    "Nanomaterials",
    "Nanomedicine",
    "Energy-storage materials",
    "Interdisciplinary materials research",
  ],
};

export const contact = {
  eyebrow: "Contact",
  heading: "Have a question? Get in touch.",
  text: "For research collaboration, MS opportunities, or just to say hello.",
  email: "waleed.me13@gmail.com",
  linkedin: "https://www.linkedin.com/in/waleedme13/",
  location: "Attock, Punjab, Pakistan",
};

export const navLinks = [
  { label: "Journey", href: "#journey" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
