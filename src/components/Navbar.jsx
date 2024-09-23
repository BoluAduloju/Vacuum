import { useState, useEffect  } from 'react'
import logo from "../assets/vacuum-logo.png"
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa'
import {LINKS} from '../constants'


const Navbar = () => {

  const[isOpen, setIsOpen] = useState(false);

  
  useEffect(() => {
    if(isOpen) {
        document.body.style.overflow = "hidden";
    }else {
        document.body.style.overflow = "auto";
    }
}, [isOpen])

useEffect(() => {
    const handleScroll = (e) => {
      if(isOpen) {
        e.preventDefault();
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
        window.removeEventListener("scroll", handleScroll)
    }
}, [isOpen])

const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const offset = -70;
    const element = document.getElementById(id);
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offSetPosition = elementPosition + offset;

    window.scrollTo({
        top: offSetPosition,
        behavior: "smooth"
    })
}


  return (
    <>
        <nav className="fixed z-10 w-full border-b border-emerald-950 bg-orange-50 ">
            <div className="container mx-auto px-4"> 
                <div className=" flex h-16 items-center justify-between  ">
                    <div className="flex items-center">
                        <a href="/"><img src={logo} alt="Vacuum"  width={120}  heigt={20} /></a> 
                    </div>
                    <div className="lg:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center justify-center bg-orange-50 text-emerald-950"> <FaBars className="h-6 w-6"/> </button>
                    </div>
                    <ul className="hidden lg:flex ml-5 space-x-5 mt-2 font-medium">
                                    {LINKS.map((Link,id) => (
                                        <li key={id}>
                                        <a href={Link.link} className="transition-colors duration-500 hover:text-orange-500 cursor-pointer">{Link.name} </a>
                                        </li>
                                    
                                    ))}
                                </ul>
                                <div className="hidden lg:flex justify-center space-x-5 items-center">
                                    <a href="#" className="py-2 px-3 font-medium cursor-pointer border rounded-md border-emerald-950 transition-colors duration-500 hover:font-bold">
                                        Book a Call
                                    </a>
                                    <a href="#" className="py-2 px-3 border bg-emerald-950 text-orange-50 rounded-md font-medium cursor-pointer transition-all duration-500 hover:bg-emerald-900">
                                        Learn More
                                    </a>
                                </div>
                </div>
            </div>
        </nav>
                {isOpen && (
                    <div  className="fixed inset-0 z-20 flex flex-col space-y-8 text-emerald-950 px-20 pt-20 text-5xl font-bold bg-orange-50 lg:text-6xl "> 
                        <button onClick={() => setIsOpen(false)} type="button" className="absolute right-4 top-4 rounded-full      text-emerald-950 p-2 bg-orange-100 lg:right-20">
                            <FaTimes className="h-8 w-8" />
                        </button>

                        {LINKS.map((link) => (
                            <a key={link.id} href={` #${link.id} `} onClick={() => handleLinkClick(e, link.id)} className="transition-colors duration-500 hover:text-orange-500">
                                {link.name}
                            </a>
                        ))}
                    </div>
                )}
    </>
  )
}

export default Navbar