import profileImg1 from '../assets/profile5.jpg'
import profileImg2 from '../assets/profile4.jpg'
import profileImg3 from '../assets/profile3.jpg'
import heroImg from '../assets/Hero-img.jpg'
import { IoArrowForward } from 'react-icons/io5'
import { motion } from 'framer-motion'
const Hero = () => {
  return (
  <section className=" min-h-screen pt-20 flex flex-wrap items-center bg-orange-50 text-emerald-950">
    <div className="w-full p-8 md:w-1/2">
       <div className="mb-4 flex space-x-2 justify-start">
            <motion.img initial={{opacity: 0, scale: 0.8}} animate={{opacity: 1, scale: 1 }} transition={{duration: 0.8, delay: 0.7, ease:"easeIn"}} src={profileImg1} alt="customer image 1" className=" h-10 w-10 mr-0 rounded-full border-2 border-emerald-950" />
            <motion.img initial={{opacity: 0, scale: 0.8}} animate={{opacity: 1, scale: 1 }} transition={{duration: 0.8, delay: 0.7, ease:"easeIn"}} src={profileImg2} alt="customer image 2" className=" h-10 w-10 rounded-full border-2 border-emerald-950" />
            < motion.img initial={{opacity: 0, scale: 0.8}} animate={{opacity: 1, scale: 1 }} transition={{duration: 0.8, delay: 0.7, ease:"easeIn"}} src={profileImg3} alt="customer image 3" className=" h-10 w-10 rounded-full border-2 border-emerald-950" />  
         
           <div className="mt-3 uppercase lg:text[12px] ">
            <motion.p initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0 }} transition={{duration: 0.8,delay:0.7}}>Join our 87+ clients using <span className="font-medium">Vacuum</span></motion.p>
           </div>
       </div>
       <motion.h1 initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0 }} transition={{duration: 1, delay: 0.7, ease:"easeIn" }} className="text-5xl tracking-tighter md:text-5xl lg:text-7xl ">Build your brand and <span className="text-orange-500">increase</span> your sales
       </motion.h1>
        
      
       <motion.div initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0 }} transition={{duration: 1, delay: 0.7, ease:"easeIn"}} className=" flex justify-start space-x-5 items-center mt-8">
                           
          <a href="#" className="py-3 px-4 border flex items-center gap-2 bg-emerald-950 text-orange-50 rounded-md font-medium cursor-pointer transition-all duration-500 hover:bg-emerald-900">
            Learn More
            <IoArrowForward />
          </a>
          <a href="#" className="py-3 px-4 font-medium  border rounded-md border-emerald-950 cursor-pointer transition-colors duration-500 hover:font-bold">
               Book a Call
          </a>
        </motion.div>
    </div>
    <div className="w-full md:w-1/2 lg:p-8 mt-8">
            <motion.img initial={{opacity: 0, sacle: 0.8}} animate={{opacity: 1, scale: 1 }} transition={{duration: 1, delay: 0.7, ease:"easeIn"}} src={heroImg} alt="Vacuum" className="h-auto w-full rounded-md" />
    </div>
  </section>
  )
}

export default Hero