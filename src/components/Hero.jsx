import profileImg1 from '../assets/profile5.jpg'
import profileImg2 from '../assets/profile2.jpeg'
import profileImg3 from '../assets/profile3.jpg'
import heroImg from '../assets/Hero-img.jpg'
import { IoArrowForward } from 'react-icons/io5'
const Hero = () => {
  return (
  <section className=" min-h-screen mt-20 flex flex-wrap items-center bg-orange-50 text-emerald-950">
    <div className="w-full p-8 md:w-1/2">
       <div className="mb-4 flex space-x-2 justify-start">
            <img src={profileImg1} alt="customer image 1" className=" h-10 w-10 mr-0 rounded-full border-2 border-emerald-950" />
            <img src={profileImg2} alt="customer image 2" className=" h-10 w-10 rounded-full border-2 border-emerald-950" />
            <img src={profileImg3} alt="customer image 3" className=" h-10 w-10 rounded-full border-2 border-emerald-950" />  
         
           <div className="mt-3 uppercase lg:text[12px] ">
            <p >Join our 87+ clients using <span className="font-medium">Vacuum</span></p>
           </div>
       </div>
       <h1 className="text-5xl tracking-tighter md:text-5xl lg:text-7xl ">Build your brand and <span className="text-orange-500">increase</span> your sales
       </h1>
        
      
       <div className=" flex justify-start space-x-5 items-center mt-8">
                           
          <a href="#" className="py-3 px-4 border flex items-center gap-2 bg-emerald-950 text-white rounded-md font-medium cursor-pointer transition-all duration-500 hover:bg-emerald-900">
            Learn More
            <IoArrowForward />
          </a>
          <a href="#" className="py-3 px-4 font-medium  border rounded-md border-emerald-950 cursor-pointer transition-colors duration-500 hover:font-bold">
               Book a Call
          </a>
        </div>
    </div>
    <div className="w-full md:w-1/2 lg:p-8 mt-8">
            <img src={heroImg} alt="Vacuum" className="h-auto w-full rounded-md" />
    </div>
  </section>
  )
}

export default Hero