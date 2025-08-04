import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  const links = ["about", "expertise", "projects", "contact"]

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-[85%] mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand */}
        <div>
             <a
          href="#home"
          className="text-3xl font-bold font-mono bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent tracking-wide"
        >
          Shivang._
        </a>
        </div>


        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8 text-white text-sm font-mono uppercase tracking-wide">
          {links.map((link, i) => (
            <a
              key={link}
              href={`#${link}`}
              className="hover:text-teal-400 transition"
            >
              <span className="text-gray-400 mr-1">0{i + 1}</span> // {link}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-95 px-6 pb-4 pt-2 space-y-4 text-white text-base font-mono uppercase tracking-wide">
          {links.map((link, i) => (
            <a
              key={link}
              href={`#${link}`}
              className="block hover:text-teal-400 transition"
              onClick={toggleMenu}
            >
              <span className="text-gray-400 mr-1">0{i + 1}</span> // {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
