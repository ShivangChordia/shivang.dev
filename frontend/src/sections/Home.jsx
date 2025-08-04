// src/sections/Home.jsx
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-purple-900 opacity-60 -z-10" />

      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Hi, I'm <span className="text-blue-400">Shivang</span> 👋
      </h1>

      <h2 className="text-2xl md:text-3xl font-medium text-gray-300 mb-6">
        I'm a{" "}
        <span className="text-blue-400 font-bold">
          <Typewriter
            words={["Developer", "Student", "Tech Enthusiast", "IoT Tinkerer"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </span>
      </h2>

      <a
        href="#projects"
        className="px-6 py-3 text-lg bg-blue-500 hover:bg-blue-600 rounded-full transition duration-300 shadow-lg"
      >
        View My Work
      </a>
    </section>
  );
}
