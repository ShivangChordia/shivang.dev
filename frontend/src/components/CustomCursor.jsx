import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
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
  }, [])

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
