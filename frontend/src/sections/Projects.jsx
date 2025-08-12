"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, ArrowRight } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { useEffect } from "react"

const projects = [
  {
    id: "ontario-health-maps",
    title: "Ontario Health Maps",
    description:
      "An interactive health data platform using React, Node.js, and Pentaho to visualize health trends across Ontario.",
    category: ["Data Visualization", "Web Development"],
    image: "/ohm.png",
    tags: ["React", "Node.js", "Pentaho", "Research"],
    featured: true,
    githubUrl: "https://github.com/ShivangChordia/OntarioHealthMap",
    liveUrl: "https://ontariohealthmaps.com",
  },
  {
    id: "portfolio",
    title: "Personal Porfolio",
    category: ["Web Development"],
    image: "/portfolio.png",
    tags: ["React", "Tailwind", "Framer Motion", "AI chatbot"],
    githubUrl: "https://github.com/username/ai-lab-granada",
    liveUrl: "https://ailab-granada.com",
  },
  {
    id: "waste-to-wealth-ai",
    title: "Waste-to-Wealth AI",
    description:
      "An AI-powered platform for waste management, featuring a backend training model, dashboard, and marketplace functionality.",
    category: ["AI/ML", "Web Development", "Data Visualization"],
    image: "/w2w.png",
    tags: ["AI", "Machine Learning", "Node.js", "React"],
    githubUrl: "https://github.com/KevalPatel2/Waste-to-Wealth-AI",
    liveUrl: "https://github.com/KevalPatel2/Waste-to-Wealth-AI",
  },
  {
    id: "flight-data-management-system",
    title: "Flight Data Management System",
    description:
      "A comprehensive solution for real-time telemetry monitoring and management of aircraft data, designed for training and analysis.",
    category: ["Data Management", "Simulation", "Aerospace"],
   image: "/fdms.png",
   tags: ["Telemetry", "Data Visualization", ".NET", "Blazor", "Simulation"],
    githubUrl: "https://github.com/ShivangChordia/Flight-Data-Management-System",
    liveUrl: "https://github.com/ShivangChordia/Flight-Data-Management-System",
  },
]

export default function Projects() {
  const featuredProject = projects.find((p) => p.featured)
  const filteredProjects = projects.filter((p) => !p.featured)
  const location = useLocation()

  // Scroll to the #projects section when the component mounts if the hash is present
  useEffect(() => {
    if (location.hash === "#projects") {
      const projectsSection = document.getElementById("projects")
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [location.hash])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="projects" className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 font-mono text-xl tracking-wider">// my work</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-cyan-400" />
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          className="max-w-4xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 font-mono text-lg leading-relaxed">
            Deployed scalable travel, event and telemedicine web and hybrid mobile apps using React SPA and PWA.
            <br />
            <span className="text-cyan-400">Collaborated in 140+ projects</span> with{" "}
            <span className="text-cyan-400">50+ clients</span> all around the world. I am also interested in{" "}
            <span className="text-purple-400">data analytics and visualization</span>.
          </p>
        </motion.div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase">Featured Project</span>
                    <h2 className="text-4xl lg:text-5xl font-bold mt-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {featuredProject.title}
                    </h2>
                  </div>
                  <p className="text-gray-400 text-lg leading-relaxed">{featuredProject.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Link to={`/project/${featuredProject.id}`}>
                      <motion.div
                        className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-lg font-semibold text-white transition-all duration-300 shadow-lg shadow-purple-500/25 flex items-center gap-2 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="relative z-10">View Details</span>
                        <ArrowRight className="w-4 h-4 relative z-10" />
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                      </motion.div>
                    </Link>
                    <motion.a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative px-8 py-4 bg-transparent border-2 border-gray-700 hover:border-cyan-400 rounded-lg font-semibold text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="relative z-10">Live Demo</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.a>
                    <motion.a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative px-8 py-4 bg-transparent border-2 border-gray-700 hover:border-cyan-400 rounded-lg font-semibold text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      <span className="relative z-10">GitHub</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.a>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <motion.div className="relative group" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
                    <img
                      src={featuredProject.image || "/placeholder.svg"}
                      alt={featuredProject.title}
                      className="relative w-full rounded-xl shadow-2xl border border-gray-700"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-800/70 border border-gray-700 rounded-full text-xs text-gray-400 group-hover:border-gray-600 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Link to={`/project/${project.id}`} className="flex-1">
                      <motion.div
                        className="w-full px-4 py-2 bg-gradient-to-r from-purple-600/80 to-purple-700/80 hover:from-purple-500 hover:to-purple-600 rounded-lg text-sm font-medium text-white transition-all duration-300 text-center flex items-center justify-center gap-2 cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </motion.div>
                    </Link>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
