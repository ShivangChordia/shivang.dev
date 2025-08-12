// src/components/ExpertiseSection.jsx
"use client"

import { Monitor, Atom, Code } from "lucide-react"
import { motion } from "framer-motion"
const expertiseData = [
  {
    icon: Monitor,
    title: "Frontend Development",
    subtitle: "Web & UI/UX",
    description: "Skilled in HTML, CSS, JavaScript, React, and NextJS. Built responsive, user-friendly interfaces using modern design systems and TailwindCSS.",
    color: "from-green-400 to-blue-500"
  },
  {
    icon: Code,
    title: "Backend & Databases",
    subtitle: "APIs, SQL & NoSQL",
    description: "Experience with REST APIs, MySQL, PostgreSQL, MongoDB, and advanced SQL. Designed and optimized database schemas for real-world applications.",
    color: "from-blue-400 to-purple-500"
  },
  {
    icon: Atom,
    title: "Software Engineering",
    subtitle: "Systems & Security",
    description: "Proficient in OOP and system programming using C, C++, and Java. Worked on application security, operating systems, and secure software practices.",
    color: "from-orange-400 to-red-500"
  },
  {
    icon: Monitor,
    title: "IoT & Embedded Systems",
    subtitle: "Microcontrollers & Networks",
    description: "Hands-on with microprocessors, network protocols, and embedded C. Developed IoT prototypes, and configured real-time systems and sensors.",
    color: "from-cyan-400 to-indigo-500"
  },
  {
    icon: Code,
    title: "Tools & DevOps",
    subtitle: "Version Control & Optimization",
    description: "Comfortable with Git, GitHub, performance testing, Linux shell scripting, and CI/CD practices. Familiar with debugging and system instrumentation tools.",
    color: "from-lime-400 to-emerald-500"
  },
  {
    icon: Atom,
    title: "Currently Learning",
    subtitle: "Data Analysis & Science",
    description: "Exploring Python libraries like Pandas, NumPy, Matplotlib, and SciKit-Learn. Focusing on data visualization, statistics, and real-world insights.",
    color: "from-yellow-400 to-pink-500"
  }
]



export default function Expertise() {
  return (
    <section id="expertise" className="relative min-h-screen bg-black py-20 px-6 flex items-center justify-center">
 
  {/* Background Code Image */}
  <div className="absolute inset-0 z-0 opacity-50">
    <img
      src="/bg-code.png"
      alt="Code Background"
      className="w-full h-full object-none object-top-left md:object-contain md:object-left"
    />
  </div>

  {/* Optional: Dark overlay for readability */}
  <div className="absolute inset-0 bg-black/50 z-0"></div>

  {/* Main Content */}
  <div className="relative z-10 max-w-7xl mx-auto">
    

      <div className="relative z-10 max-w-7xl w-full text-center">
    
       <motion.h2
          className="text-5xl font-extrabold text-white text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-8 pt-3">
            <div className="w-12 h-px bg-cyan-400" />
            <span className="text-cyan-400 font-mono text-xl">// my expertise</span>
            <div className="w-12 h-px bg-cyan-400" />
          </div>
        </div>
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {expertiseData.map((item, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.03] hover:bg-white/10"
            >
              {/* Icon + Titles */}
              <div className="flex items-center mb-5">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} bg-opacity-30 mr-4`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className={`text-md bg-gradient-to-r ${item.color} bg-clip-text text-transparent font-medium`}>
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Code Styled Description */}
              <div className="text-left font-mono text-sm text-gray-300 leading-relaxed">
                <span className="text-gray-500">&lt;h3&gt;</span>
                <p className="pl-2 mt-1">{item.description}</p>
                <span className="text-gray-500">&lt;/h3&gt;</span>
              </div>

              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-16 space-x-3">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200" />
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500" />
        </div>
      </div>
  </div>
</section>

  )
}
