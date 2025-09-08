import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import ProjectsSection from "./components/ProjectsSection"

const App = () => {
  return (
    <div id="main" className="flex flex-col min-h-screen">
      <NavBar />
      <Hero />
      <ProjectsSection />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App