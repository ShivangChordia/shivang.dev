import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isClicking, setIsClicking] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    // Check if touch events are supported
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  useEffect(() => {
    if (isTouchDevice) return // Don't set event listeners if touch device

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleClickDown = () => setIsClicking(true)
    const handleClickUp = () => setIsClicking(false)

    document.addEventListener('mousemove', updatePosition)
    document.addEventListener('mousedown', handleClickDown)
    document.addEventListener('mouseup', handleClickUp)

    return () => {
      document.removeEventListener('mousemove', updatePosition)
      document.removeEventListener('mousedown', handleClickDown)
      document.removeEventListener('mouseup', handleClickUp)
    }
  }, [isTouchDevice])

  if (isTouchDevice) {
    // Return nothing on touch devices (or you could return null)
    return null
  }

  return (
    <>
      <style>{`body { cursor: none; }`}</style>
      <div
        className={`fixed z-[9999] pointer-events-none ${
          isClicking ? 'scale-50 opacity-70' : 'scale-100'
        } transition-transform duration-100 ease-out`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '16px',
          height: '16px',
          backgroundColor: 'white',
          borderRadius: '9999px',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  )
}
