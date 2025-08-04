import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Contact from './sections/Contact'
import Projects from './sections/Projects'
import Expertise from './sections/Expertise'
import About from './sections/About'

function App() {
  return (
    <main>
      <Navbar/>
      <HeroSection />
      <About/>
      <Expertise/>
      <Projects/>
      <Contact/>
    </main>
  )
}

export default App
