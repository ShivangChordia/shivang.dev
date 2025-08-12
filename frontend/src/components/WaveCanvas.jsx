"use client"

import { useEffect, useRef } from "react"

export default function WaveCanvas({ isMuted }) {
  const canvasRef = useRef(null)
  const intensityRef = useRef(0) // This controls transition smoothing

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId
    let time = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const drawWave = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Smooth transition of intensity based on mute state
      const targetIntensity = isMuted ? 0 : 1
      intensityRef.current += (targetIntensity - intensityRef.current) * 0.03 // easing

      const numWaves = 3
      for (let layer = 0; layer < numWaves; layer++) {
        const opacity = 0.2 + layer * 0.2
        const amplitude = 30 + layer * 20 * (0.5 + intensityRef.current)
        const frequency = 0.008 + layer * 0.002
        const speed = 1 + layer * 0.3

        const hue = (time * 0.5 + layer * 60) % 360
        const color = isMuted
          ? `rgba(237,232,208, ${opacity})`
          : `hsla(${hue}, 70%, 60%, ${opacity})`

        ctx.beginPath()
        ctx.moveTo(0, canvas.height)

        for (let x = 0; x <= canvas.width; x += 10) {
          const y =
            canvas.height -
            200 +
            Math.sin((x + time * speed) * frequency) * amplitude
          ctx.lineTo(x, y)
        }

        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.closePath()

        ctx.fillStyle = color
        ctx.fill()
      }

      time += 1
      animationId = requestAnimationFrame(drawWave)
    }

    resizeCanvas()
    drawWave()

    window.addEventListener("resize", resizeCanvas)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [isMuted]) // Watch for changes in mute state

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}
