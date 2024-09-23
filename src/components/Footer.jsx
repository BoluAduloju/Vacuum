import { FaFacebook, FaFacebookF, FaInstagram } from "react-icons/fa"
import { FaLinkedin, FaX, FaXTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-orange-50 py-6">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4 md:space-y-0">
        <div className="mb-4 flex"></div>
        <div className="mb-4 flex space-x-4">
            <a href="#">
                <FaFacebookF size={20} />
            </a>
            <a href="#">
                <FaInstagram size={20} />
            </a>
            <a href="#">
                <FaXTwitter size={20} />
            </a>
            <a href="#">
                <FaLinkedin size={20} />
            </a>
        </div>
        <div className="text-sm opacity-50">
            &copy; {new Date().getFullYear()} Vacuum. All rights reserved. | @BoluAduloju
        </div>
      </div>
    </footer>
  )
}

export default Footer