"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Code2, Monitor, User } from "lucide-react"

const images = [
    {
    src: "shivang.jpg",
    alt: "Me",
  },
  {
    src: "graduation.png",
    alt: "Already a Grad :)",
  },
  {
    src: "hackathon.jpg",
    alt: "Coding environment",
  },
  {
    src: "prep.jpg",
    alt: "Prepping for a Demo",
  },
  {
    src: "presentation.jpg",
    alt: "Public Speaking",
  },
 
]

export default function AboutSection() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const next = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
    setIsAutoPlaying(false)
  }

  const prev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
    setIsAutoPlaying(false)
  }

  const goToImage = (index) => {
    setCurrentImage(index)
    setIsAutoPlaying(false)
  }

  return (
    <section id="about" className="relative min-h-screen bg-black text-white px-6 py-20 overflow-hidden">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-cyan-400" />
            <span className="text-cyan-400 font-mono text-xl">// about me</span>
            <div className="w-12 h-px bg-cyan-400" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Text Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              I'm <span className="text-cyan-400">Shivang Chordia</span>
            </h2>

            <div className="flex flex-wrap gap-3">
              <Badge icon={<Code2 />} text="Software Engineer" />
              <Badge icon={<Monitor />} text="Full Stack Developer" />
            </div>

            <p className="text-gray-300 leading-relaxed text-lg">
              I’m a software engineer passionate about crafting elegant solutions through code. I enjoy building
              beautiful UIs, solving performance issues, and exploring new technologies across full-stack ecosystems.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Outside of code, I explore hardware projects, dabble in UI/UX, and drink too much coffee.
              I believe the best software is built with curiosity and collaboration.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-800">
              <Stat number="3+" label="Academic Years Experience" />
              <Stat number="10+" label="Projects Built" />
              <Stat number="∞" label="Coffee Cups" />
            </div>
          </div>

          {/* RIGHT: Image Carousel */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-900 border border-gray-800">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt={img.alt}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    index === currentImage ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Controls */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentImage ? "bg-cyan-400 scale-110" : "bg-gray-600 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* Status */}
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
              <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? "bg-green-400" : "bg-gray-500"}`} />
              {isAutoPlaying ? "Auto-playing" : "Manual control"}
            </div>
          </div>
        </div>

      
      </div>
    </section>
  )
}

// Reusable Badge component
function Badge({ icon, text }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-full text-sm text-gray-300">
      {icon}
      {text}
    </div>
  )
}

// Reusable Stat component
function Stat({ number, label }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-cyan-400">{number}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  )
}
