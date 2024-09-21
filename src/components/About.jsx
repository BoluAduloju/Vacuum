import { ABOUT } from "../constants"



const About = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 " id="about">
       <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">About Us</h2> 
       <div className="mb-10 flex items-center justify-center gap-4 ">
        {ABOUT.profileImages.map((images,index) => (
            <img key={index} src={images.src} alt={images.alt} className="w-1/4 rounded-3xl shadow-lg" />
        ))}
       </div>
       <p className="mb-8 max-w-4xl text-center text-xl lg:text-4xl tracking-tight">
        {ABOUT.aboutUsText}
       </p>
    </section>
  )
}

export default About