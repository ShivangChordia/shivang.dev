// src/components/ProjectCard.jsx
import { Github, ExternalLink } from "lucide-react"

export default function ProjectCard({ title, description, tech, link, github }) {
  return (
    <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-6 shadow-xl transform transition hover:scale-[1.03] hover:shadow-2xl hover:border-white/40 hover:bg-white/20 duration-300">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, idx) => (
          <span key={idx} className="text-xs px-2 py-1 bg-white/20 text-white rounded-full">
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Github className="text-white hover:text-gray-200" />
          </a>
        )}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="text-white hover:text-gray-200" />
          </a>
        )}
      </div>
    </div>
  )
}
