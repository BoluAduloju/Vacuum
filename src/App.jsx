 import Navbar from "./components/Navbar"
 import Hero from "./components/Hero"
 import About from "./components/About"
 import Services from "./components/Services"
 import Projects from "./components/Projects"




const App = () => {
  return (
    <div className=" overflow-x-hidden bg-orange-50 text-emerald-950 antialiased">
      < Navbar />
      < Hero />
      <About />
      <Services />
      <Projects />
    </div>
    
    
  )
}

export default App
