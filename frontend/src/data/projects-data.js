export const projects = [
  {
    id: "ontario-health-maps",
    title: "Ontario Health Maps",
    description:
      "An interactive health data platform using React, Node.js, and Pentaho to visualize health trends across Ontario.",
    longDescription:
      "Ontario Health Maps is a comprehensive data visualization platform that transforms complex health statistics into interactive, user-friendly maps and charts. The platform serves healthcare professionals, researchers, and policymakers by providing real-time insights into health trends across different regions of Ontario. Built with modern web technologies, it handles large datasets efficiently while maintaining excellent user experience.",
    category: ["Data Visualization", "Web Development"],
    image: "/ohm.png",
    images: [
      "/ohm.png",
      "/ohm-1.png",
      "/ohm-2.png",
      "/ohm-3.png",
    ],
    tags: ["React", "Node.js", "Pentaho"],
    featured: true,
    githubUrl: "https://github.com/ShivangChordia/OntarioHealthMap",
    liveUrl: "https://ontariohealthmaps.com",
    timeline: "4 months",
    client: "Health Researchers and General Public ",
    role: "Full Stack Developer & Data Analyst",
    challenges: [
      "Processing and visualizing large healthcare datasets in real-time",
      "Creating intuitive interfaces for complex statistical data",
      "Ensuring data privacy and security compliance",
      "Optimizing performance for large-scale data rendering",
    ],
    features: [
      "Interactive map visualization with drill-down capabilities",
      "Comprehensive dashboard with multiple chart types",
      "Export functionality for reports and presentations",
      "Mobile-responsive design for field use",
      "Advanced search and filtering options",
    ],
    technologies: {
      frontend: ["React", "D3.js", "Leaflet", "Chart.js", "Tailwind CSS"],
      backend: ["Node.js", "Express", "Pentaho"],
      database: ["PostgreSQL", "Neon"],
      tools: ["Git", "Jira"],
    },
    results: [
      "Reduced data analysis time by 70% for healthcare professionals",
      "Improved decision-making speed for policy makers",
    ],
  },
   {
  id: "portfolio",
  title: "Portfolio Website",
  description:
    "A sleek, modern personal portfolio built with React, Tailwind CSS, and Framer Motion to showcase my skills, projects, and achievements.",
  longDescription:
    "This portfolio website is designed to provide an engaging and interactive experience for visitors. It highlights my professional work, personal projects, and expertise in web development through an elegant, fully responsive design. The site features smooth animations, intuitive navigation, and a dedicated project details page for each showcased work. Built with performance and scalability in mind, it’s optimized for SEO, fast loading, and accessibility.",
  category: ["Web Development", "UI/UX Design", "AI"],
  image: "/portfolio.png", // main thumbnail
  images: [
    "/portfolio.png"
  ],
  tags: ["React", "Tailwind CSS", "Framer Motion"],
  featured: true,
  githubUrl: "https://github.com/ShivangChordia/shivang.dev",
  liveUrl: "https://chordiashivang.com/",
  timeline: "Jan 2025 – Feb 2025",
  client: "Personal Project",
  role: "Full Stack Developer & Designer",
  challenges: [
    "Designing a modern, clean, and professional UI that reflects personal brand",
    "Ensuring smooth navigation and responsiveness across all devices",
    "Integrating animations without compromising performance",
    "Building a scalable project structure for easy updates",
  ],
  features: [
    "Dynamic project details pages",
    "Animated sections with Framer Motion",
    "Custom cursor and smooth scrolling",
    "Responsive design for mobile, tablet, and desktop",
    "SEO-optimized metadata and structure",
  ],
  technologies: {
    frontend: ["React", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js (for future chatbot integration)"],
    database: ["N/A"],
    tools: ["Git", "Vercel"],
  },
  results: [
    "Improved online presence with a professional showcase of work",
    "Streamlined project display with dedicated detail pages",
  ],
},
{
    id: "waste-to-wealth-ai",
    title: "Waste-to-Wealth AI",
    description:
      "An AI-powered platform for waste management, featuring a backend training model, dashboard, and marketplace functionality.",
    longDescription:
      "The Waste-to-Wealth AI project is an innovative solution designed to optimize waste management processes through artificial intelligence. It includes a robust backend for training AI models, an intuitive dashboard for visualizing waste data and insights, and a marketplace to facilitate the exchange of recycled materials or waste-derived products. This platform aims to transform waste into valuable resources, promoting sustainability and efficiency.",
    category: ["AI/ML", "Web Development", "Data Visualization"],
    image: "/images/waste-to-wealth-ai.png",
    images: [
      "/w2w.png",
     "/w2w-1.png",
     "/w2w-2.png",
     "/w2w-3.png",
    ],
    tags: ["AI", "Machine Learning", "Node.js", "React", "Dashboard", "Marketplace"],
    featured: true,
    githubUrl: "https://github.com/KevalPatel2/Waste-to-Wealth-AI",
    liveUrl: "#", // Placeholder, as no live URL was provided
    timeline: "March 2025",
    client: "Hackathon Project",
    role: "Full Stack Developer & AI Engineer",
    challenges: [
      "Developing and integrating AI training models for waste classification",
      "Building a real-time data dashboard for waste metrics",
      "Creating a secure and scalable marketplace for waste materials",
      "Ensuring data privacy and compliance for waste-related information",
    ],
    features: [
      "AI-driven waste classification and prediction",
      "Interactive dashboard for waste analytics and trends",
      "User-friendly marketplace for waste exchange",
      "Authentication and authorization system",
      "Responsive design for various devices",
    ],
    technologies: {
      frontend: ["React", "Tailwind CSS", "Chart.js"],
      backend: ["Node.js", "Express", "Python (for AI models)"],
      database: ["MongoDB"],
      tools: ["Git", "Docker", "Jupyter Notebooks"],
    },
    results: [
      "Successfully integrated AI models for improved waste sorting efficiency",
      "Developed a functional dashboard for real-time waste insights",
      "Established a prototype marketplace for resource recovery",
    ],
  },
  {
    id: "flight-data-management-system",
    title: "Flight Data Management System",
    description:
      "A comprehensive solution for real-time telemetry monitoring and management of aircraft data, designed for training and analysis.",
    longDescription:
      "The Flight Data Management System (FDMS) is a comprehensive solution for real-time telemetry monitoring and management of aircraft data. Designed as a simulation for training and analysis, FDMS enables efficient transmission, processing, and visualization of critical flight data. It provides a robust platform for understanding flight dynamics and operational parameters, crucial for aerospace training and incident analysis.",
    category: ["Data Management", "Simulation", "Aerospace"],
    image: "/fdms.png",
    images: [
      "/fdms.png",
       "/fdms-1.png",
        "/fdms-2.png",
         "/fdms-3.png",
     
    ],
    tags: ["Telemetry", "Data Visualization", ".NET", "Blazor", "Simulation"],
    featured: true,
    githubUrl: "https://github.com/ShivangChordia/Flight-Data-Management-System",
    liveUrl: "#", // Placeholder, as no live URL was provided
    timeline: "December 2024", // Based on commit history
    client: "Academic Project",
    role: "Full Stack Developer",
    challenges: [
      "Implementing real-time data transmission and processing for telemetry",
      "Developing a robust and responsive UI for data visualization (Blazor)",
      "Ensuring data accuracy and integrity in a simulated environment",
      "Integrating various system components (Airport, Ground Terminal, GUI)",
    ],
    features: [
      "Real-time telemetry monitoring",
      "Efficient aircraft data management",
      "Interactive data visualization",
      "Simulation environment for training and analysis",
      "Modular system architecture (Airport, Ground Terminal, GUI)",
    ],
    technologies: {
      frontend: ["Blazor", ".NET"],
      backend: [".NET", "C#"],
      database: ["N/A (simulation focus)"], // Or infer if a database is used for logs/storage
      tools: ["Git", "Visual Studio"],
    },
    results: [
      "Created a functional simulation environment for flight data management",
      "Enabled real-time monitoring and analysis of simulated aircraft data",
      "Developed a comprehensive system for training and educational purposes",
    ],
  },

]

export function getProjectById(id) {
  return projects.find((project) => project.id === id)
}

export function getAllProjects() {
  return projects
}
