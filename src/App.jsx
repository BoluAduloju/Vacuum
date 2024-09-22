 import Navbar from "./components/Navbar"
 import Hero from "./components/Hero"
 import About from "./components/About"
 import Services from "./components/Services"
 import Projects from "./components/Projects"
 import Pricing from "./components/Pricing"
 import Team from "./components/Team"
 import Testimonial from "./components/Testimonial"



const App = () => {
  return (
    <div className=" overflow-x-hidden bg-orange-50 text-emerald-950 antialiased">
      < Navbar />
      < Hero />
      <About />
      <Services />
      <Projects />
      <Pricing />
      <Team />
      <Testimonial />
    </div>
    
    
  )
}

export default App
