import { IoArrowForward } from "react-icons/io5"
import { PACKAGES } from "../constants"

const Pricing = () => {
  return (
    <section className="bg-stone-50 px-4 py-12 md:px-8 mx-auto container" id="pricing">
      <div>
          <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">Pricing</h2>
          <p className="mb-4 text-center text-lg tracking-tighter md:text-3xl">Select the best suitable package for your business</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4  space-y-8  ">
        {PACKAGES.map((pkg, index) => (
           <div key={index} className=" rounded-xl border-2 border-emerald-950 p-4 mt-8">
             <div className="flex flex-col items-center justify-between ">
               <div className="mb-6 flex flex-col md:mb-0 md:w-full p-4" >
                    <h2 className="mb-2 text-lg font-semibold tracking-tighter text-orange-500">{pkg.name}</h2>
                    <p className="mb-2 text-5xl font-bold ">{pkg.price}</p>
                    <p className="px-2">{pkg.description}</p>
               </div>
               <div className="flex flex-col md:w-1/2">
                    <h3 className="mb-2 font-semibold tracking-tighter">What's included?</h3>
                    <ul className="mb-4">
                      {pkg.services.map((service, index) => (
                          <li key={index} > - {service}</li>
                      ))}
                    </ul>
                    <div>
                      <button className="py-3 px-4 border flex items-center gap-2 bg-emerald-950 text-white rounded-md font-medium cursor-pointer transition-all duration-500 hover:bg-emerald-900">
                        <span>Get Started</span>
                        <IoArrowForward />
                      </button>
                    </div>
               </div>
             </div>
           </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing