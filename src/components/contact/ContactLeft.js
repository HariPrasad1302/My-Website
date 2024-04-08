import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Hari Prasad</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Whether you have a job opportunity, a project collaboration, or just want to say hello, I'd love to hear from you. Please feel free to reach out using the contact form below or connect with me through my social media channels. I'm always open to new opportunities and conversations.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 6382169780</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">hariofficial1306@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          

          <a href='https://github.com/HariPrasad1302' className="bannerIcon">
                    <FaGithub/>
                  </a>
                  <a href='https://www.linkedin.com/in/hari-prasad-3ba737230/'  className="bannerIcon">
                    <FaLinkedinIn />
                  </a>
                  <a href='https://www.instagram.com/hari13_official/' className="bannerIcon">
                    <FaInstagram />
                  </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft