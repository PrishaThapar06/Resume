import React from "react";
import {FaGithub , FaLinkedinIn} from "react-icons/fa";
import {SiLeetcode} from "react-icons/si";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
    return (
        <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-between">
              <img className="w-full h-64 object-cover rounded-lg mb-2" src={contactImg} alt="contactImg"></img>
              <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-bold text-white">Prisha Thapar</h3>
                <p className="text-lg font-normal text-gray-400">FrontEnd Developer</p>
                <p className="text-base text-gray-400 tracking-wide">A tech enthusiast keen on solving real-world problems and learning new technologies.</p>
                <p className="text-base text-gray-400 flex items-center gap-2">Phone: <span className="text-lightText">+91 8929898544</span></p>
                <p className="text-base text-gray-400 flex items-center gap-2">Email: <span className="text-lightText">prisha6thapar@gmail.com</span></p>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">Find Me In</h2>
                <div className="flex gap-4">
                    <span className="bannerIcon">
                      <a href="https://www.linkedin.com/in/prisha-thapar-b78197265/" target="_blank">
                      <FaLinkedinIn />
                      </a>
                    </span>
                    <span className="bannerIcon">
                      <a href="https://leetcode.com/Prisha06/" target="_blank">
                      <SiLeetcode />
                      </a>
                    </span>
                    <span className="bannerIcon">
                      <a href="https://github.com/Prisha6Thapar" target="_blank">
                      <FaGithub />
                      </a>
                    </span>
                </div>
              </div>
            </div>
    )
}

export default ContactLeft;