import { ABOUT } from "../constants"
import { motion } from "framer-motion"



const About = () => {

  const imageVariant = {
    hidden: {opacity: 0, y: 50},
    visible: {opacity: 1, y: 0}
  }
  return (
    <section className="flex min-h-screen flex-col items-center bg-stone-50 text-emerald-950 justify-center px-6 " id="about">
       <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">About Us</h2> 
       <div className="mb-10 flex items-center justify-center gap-4 ">
        {ABOUT.profileImages.map((image,index) => (
            <motion.img variants={imageVariant} initial="hidden" whileInView="visible" viewport={{once: true}} transition={{duration: 1, delay: image.delay, ease: "easeIn"}} key={index} src={image.src} alt={image.alt} className="w-1/4 rounded-3xl shadow-lg" />
        ))}
       </div>
       <p className="mb-8 max-w-4xl text-center text-xl lg:text-4xl tracking-tight">
        {ABOUT.aboutUsText}
       </p>
    </section>
  )
}

export default About