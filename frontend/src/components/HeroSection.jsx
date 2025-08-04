// src/components/HeroSection.jsx
import WaveCanvas from './WaveCanvas'

import { Mouse } from 'lucide-react' // or any icon you like

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <WaveCanvas />
      </div>

      <div className="flex flex-col items-center justify-start text-center h-full pt-[35vh] mx-auto px-4">

        <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tight animate-[fadeInUp_1s_ease-out]">SHIVANG CHORDIA</h1>
<p className="text-lg md:text-xl font-medium text-gray-300 mt-4 animate-[fadeInUp_1s_ease-out]">Software Engineer, App Developer & Data Enthusiast</p>

      
      </div>
         {/* Scroll icon */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <Mouse size={36} className="text-white opacity-80  rotate-180" />
      </div>
    </section>
  )
}
