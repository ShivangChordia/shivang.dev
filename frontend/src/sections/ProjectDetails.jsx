"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Github, ExternalLink, Calendar, User, Building, CheckCircle, Zap, Target } from "lucide-react"
import { Link, useParams, Navigate } from "react-router-dom"
import { getProjectById } from "../data/projects-data"
import { useState } from "react"

export default function ProjectDetails() {
  const { id } = useParams()
  const project = getProjectById(id || "")
  const [selectedImage, setSelectedImage] = useState(0)

  if (!project) {
    return <Navigate to="/" replace />
  }

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
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-mono">Back to Projects</span>
          </Link>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-16">
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-4">
                {project.featured && (
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full text-sm font-medium">
                    Featured Project
                  </span>
                )}
                {project.category.map((cat, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {project.title}
              </h1>

              <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">{project.description}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-lg font-semibold text-white transition-all duration-300 shadow-lg shadow-purple-500/25 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View Live Project</span>
                <ExternalLink className="w-4 h-4 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </motion.a>

              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-transparent border-2 border-gray-700 hover:border-cyan-400 rounded-lg font-semibold text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
                <span className="relative z-10">View Source</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            </div>
          </motion.div>

          {/* Project Images */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
              <img
                src={project.images[selectedImage] || "/placeholder.svg"}
                alt={`${project.title} - Image ${selectedImage + 1}`}
                className="relative w-full h-130 lg:h-[500px] object-cover rounded-xl shadow-2xl border border-gray-700"
              />
            </div>

            {project.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {project.images.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === idx
                        ? "border-cyan-400 shadow-lg shadow-cyan-400/25"
                        : "border-gray-700 hover:border-gray-600"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Project Info Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Project Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400">Project Overview</h2>
                <p className="text-gray-300 leading-relaxed text-lg">{project.longDescription}</p>
              </div>

              {/* Features */}
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
                  <Zap className="w-6 h-6" />
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
                  <Target className="w-6 h-6" />
                  Challenges & Solutions
                </h2>
                <div className="space-y-4">
                  {project.challenges.map((challenge, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              {project.results && (
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
                  <h2 className="text-2xl font-bold mb-6 text-cyan-400">Results & Impact</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Meta */}
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4 text-white">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-sm text-gray-400">Timeline</div>
                      <div className="text-white">{project.timeline}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-sm text-gray-400">Role</div>
                      <div className="text-white">{project.role}</div>
                    </div>
                  </div>

                  {project.client && (
                    <div className="flex items-center gap-3">
                      <Building className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="text-sm text-gray-400">Client</div>
                        <div className="text-white">{project.client}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Technologies */}
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4 text-white">Technologies Used</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-cyan-400 mb-2">Frontend</div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.frontend.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-800/50 border border-gray-700 rounded text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-cyan-400 mb-2">Backend</div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.backend.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-800/50 border border-gray-700 rounded text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.technologies.database && (
                    <div>
                      <div className="text-sm text-cyan-400 mb-2">Database</div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.database.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-800/50 border border-gray-700 rounded text-xs text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <div className="text-sm text-cyan-400 mb-2">Tools</div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.tools.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-800/50 border border-gray-700 rounded text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4 text-white">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-cyan-400/20 border border-purple-500/30 rounded-full text-sm text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
