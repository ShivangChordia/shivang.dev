import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Contact from "./sections/Contact"
import Projects from "./sections/Projects" // This is your ProjectsSection.jsx
import Expertise from "./sections/Expertise"
import About from "./sections/About"
import CustomCursor from "./components/CustomCursor"
import ProjectDetails from "./sections/ProjectDetails"
function App() {
  return (
    <Router>
      <CustomCursor />
      
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Navbar />
              <HeroSection />
              <About />
              <Expertise />
              <Projects />
              <Contact />
            </main>
          }
        />
        <Route path="/project/:id" element={<ProjectDetails/>} />
      </Routes>
    </Router>
  )
}

export default App
