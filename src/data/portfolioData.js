// Portfolio content from Jasmen's supplied résumé and certificate photographs.
export const personalInfo = {
  name: "Jasmen O. Gloria",
  title: "Computer Engineering Student",
  location: "Batasan Hills, Quezon City, Philippines",
  address: "24 Bill st. Batasan Hills Quezon City",
  email: "jasmengloria09@gmail.com",
  phone: "+639075217848",
  bioParagraphs: [
    "I'm a Computer Engineering student at the Institute of Creative Computer Technology (ICCT). My skills include basic programming, JavaScript, UI/UX design, embedded systems, and Lego robotics.",
    "My academic projects include ICCT CSLMS, where I served as UI/UX Lead Designer, and Embedded Systems: Medicare, where I designed, programmed, tested, and troubleshot embedded systems as a System Engineer.",
  ],
  avatarLight: `${import.meta.env.BASE_URL}assets/jasmen-profile.jpg`,
  avatarDark: `${import.meta.env.BASE_URL}assets/jasmen-profile.jpg`,
  resume: `${import.meta.env.BASE_URL}assets/jasmen-resume.pdf`,
};

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/taurusgurl36-byte",
    icon: "github",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/19ZL9YprXJ/",
    icon: "facebook",
  },
  { label: "Résumé", href: "/resume", icon: "resume" },
];

export const projects = [
  {
    id: "icct-cslms",
    year: 2025,
    name: "Object Oriented Programming: ICCT CSLMS",
    description:
      "An object oriented programming project at ICCT Colleges. As UI/UX Lead Designer, I led the interface design, created wireframes and prototypes, and refined layouts for usability and accessibility.",
    preview: "/assets/icct-cslms.jpg",
    imageMetadata: { width: 1051, height: 706 },
    images: ["/assets/icct-cslms.jpg"],
    imageFit: "contain",
    tags: ["UI/UX Design", "Wireframes & Prototypes", "Object Oriented Programming"],
    period: "Aug 2025 - Nov 2025",
    duration: "Aug - Nov 2025",
    role: "UI/UX Lead Designer",
    institution: "ICCT Colleges",
    responsibilities: [
      "Led the design of user-friendly and visually appealing interfaces for the project.",
      "Created wireframes, prototypes, and layouts to improve user experience.",
      "Ensured consistent design, usability, and accessibility across the system.",
      "Collaborated with team members and developers to align the interface design with project requirements.",
      "Evaluated and refined designs based on feedback and usability considerations.",
    ],
    glow: "#3b82f6",
    featured: true,
  },
  {
    id: "medicare",
    year: 2026,
    name: "Embedded Systems: Medicare",
    description:
      "An embedded systems project at ICCT Colleges. As System Engineer and Embedded System Engineer, I developed microcontroller systems, integrated sensors and actuators, and programmed, tested, and optimized the hardware.",
    preview: "/assets/medicare-project.png",
    imageMetadata: { width: 1672, height: 940 },
    images: ["/assets/medicare-project.png"],
    imageFit: "contain",
    tags: ["Embedded Systems", "Microcontrollers", "Hardware Troubleshooting"],
    period: "March 2026 - July 2026",
    duration: "Mar - Jul 2026",
    role: "System Engineer · Embedded System Engineer",
    institution: "ICCT Colleges",
    responsibilities: [
      "Designed and developed embedded systems using microcontrollers and hardware components.",
      "Integrated sensors, actuators, and communication modules for automated system operations.",
      "Programmed and tested embedded systems to ensure functionality, accuracy, and reliability.",
      "Performed hardware troubleshooting, circuit testing, and system optimization.",
      "Collaborated with team members in developing and implementing technical projects.",
    ],
    glow: "#e4a82b",
    featured: true,
  },
];

// Show the newest project first without depending on IDs or array positions.
export const experience = [...projects]
  .sort((a, b) => b.year - a.year)
  .map((project) => ({
    id: project.id,
    project: project.name,
    role: project.role,
    institution: project.institution,
    period: project.period,
    responsibilities: project.responsibilities,
    year: project.year,
    active: false,
  }));

export const education = [
  {
    id: "icct",
    role: "Institute of Creative Computer Technology (ICCT)",
    institution: "Computer Engineering",
    period: "2023 - Present",
    description:
      "ICCT Building, V.V. Soliven Avenue II, Brgy. San Isidro, Cainta, Rizal, Philippines.",
    year: "2023",
    active: true,
  },
  {
    id: "south-east-asia",
    role: "South East-Asia Institute Of Trade & Technology, Inc",
    institution: "Science, Technology, Engineering, and Mathematics (STEM)",
    period: "2022 - 2023",
    description: "114 Regalado Hwy 1118 Quezon City Metro Manila",
    year: "2022",
    active: false,
  },
];

export const techStack = [
  {
    category: "Programming & Design",
    tools: ["Basic Programming", "JavaScript", "UI/UX Design", "Web Page Design"],
  },
  { category: "Embedded Systems & Robotics", tools: ["Embedded Systems", "Lego Robotics"] },
  {
    category: "Productivity & Operating Systems",
    tools: [
      "Microsoft Office Word",
      "Microsoft PowerPoint",
      "Microsoft Excel",
      "Windows Operating System Tutorial",
      "Speed Typing",
    ],
  },
  {
    category: "Graphics & Animation",
    tools: ["Adobe Photoshop", "Graphics Design", "Digital Animation"],
  },
  { category: "CAD", tools: ["Basic AutoCAD 2D", "Basic AutoCAD 3D", "Electrical Plan"] },
  { category: "Mechanical", tools: ["Mechanical Machine Troubleshooting"] },
];

export const certifications = [
  {
    title: "Lego Educational Robotics and Computer Technical Training",
    issuer: "Diliman College · Happy Learner's Educational Program Services, Inc. · REF Marketing",
    description: "Certificate of Recognition",
    date: "January 20, 2019",
    image: "/assets/robotics-certificate.jpg",
    imageMetadata: { width: 1584, height: 2036, rotation: -90 },
  },
  {
    title: "Top 5 Student — COEPRO6: Object-Oriented Programming",
    issuer: "ICCT Colleges — Cainta Campus",
    description: "Certificate of Recognition",
    date: "November 17, 2025",
    image: "/assets/oop-certificate.jpg",
    imageMetadata: { width: 2048, height: 1452, rotation: 180 },
  },
];

export const navLinks = [
  { label: "Projects", to: "/projects" },
  { label: "Project Experience", to: "/experience" },
  { label: "Basic Skills", to: "/stack" },
  { label: "Certifications", to: "/certifications" },
];
