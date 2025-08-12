"use client"

import { useState, useRef, useEffect } from "react"
import WaveCanvas from "./WaveCanvas"
import { Mouse, Volume2, VolumeX } from "lucide-react"

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef(null)

  const songData = {
    title: "Sunflower",
    artist: "Post Malone",
    audioUrl: "/audio/sunflower.mp3",
  }

useEffect(() => {
  const audio = audioRef.current
  if (audio) {
    audio.muted = true  
    audio.volume = 0.05
    audio.play().then(() => {
      audio.muted = false 
    }).catch((e) => {
      console.warn("Autoplay still blocked:", e)
    })
  }
}, [])

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted
      setIsMuted(audioRef.current.muted)
    }
  }

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <WaveCanvas isMuted={isMuted} />

      </div>

      {/* Audio element (hidden) */}
      <audio
        ref={audioRef}
        src={songData.audioUrl}
        autoPlay
        loop
        preload="metadata"
      />

      {/* Mute/Unmute Button - Bottom Right */}
      <div className="absolute bottom-6 right-6 z-20 bg-black bg-opacity-70 backdrop-blur-sm rounded-full p-3 border border-gray-700 hover:bg-opacity-90 transition">
        <button onClick={toggleMute} className="text-white">
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>

      {/* Main Text */}
      <div className="flex flex-col items-center justify-start text-center h-full pt-[35vh] mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tight animate-[fadeInUp_1s_ease-out]">
          SHIVANG CHORDIA
        </h1>
        <p className="text-lg md:text-xl font-medium text-gray-300 mt-4 animate-[fadeInUp_1s_ease-out]">
          Software Engineer, App Developer & Data Enthusiast
        </p>
      </div>
 <p className="text-sm md:text-base font-light text-black mt-2 italic animate-[fadeInUp_1s_ease-out] absolute bottom-10 right-20">
        Song: "Sunflower" by Post Malone and Swae Lee
      </p>

      {/* Scroll icon */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <Mouse size={36} className="text-white opacity-80 rotate-180" />
      </div>
    </section>
  )
}
