import React from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaGithub, FaLinkedinIn, FaReact ,FaHtml5 } from "react-icons/fa";
import { SiTailwindcss, SiLeetcode , SiGeeksforgeeks , SiJavascript} from "react-icons/si";
import { BsCodeSlash} from "react-icons/bs";
import DownloadPDF1 from "../downloadbtn/resume";

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Competitive Coder.", "Front End Developer.", "Tech Enthusiast."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return(
            <div className="w-full lgl:w-1/2 flex flex-col gap-20">
                <div className="flex flex-col gap-3">
                    <h4 className="text-lg font-normal">WELCOME TO MY WORLD!</h4>
                    <h1 className="text-6xl font-bold text-white">
                        Hi, I'm {" "}
                        <span className="text-designColor capitalize">Prisha Thapar</span>
                    </h1>
                    <h2 className="text-4xl font-bold text-white">
                    a <span>{text}</span>
                    <Cursor 
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#ff014f"
                    />
                    </h2>
                    <p className="text-base font-bodyFont leading-6 tracking-wide">
                    I am a final year student pursuing Btech, major in Computer Science and Engineering at JSS ACADEMY OF TECHNICAL EDUCATION NOIDA, who is passionate about solving real-world problems.I am a FrontEnd Web Developer and Competitive Programmer with excellent problem-solving skills.
                    <DownloadPDF1 />
                    </p>
                </div>
                <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
                <div>
                    <h2 className="text-base uppercase font-titleFont mb-4">
                        Find me in
                    </h2>
                    <div className="flex gap-4">
                        <span className="bannerIcon">
                            <a href="https://www.linkedin.com/in/prisha-thapar-b78197265/" target="_blank">
                            <FaLinkedinIn />
                            </a>
                        </span>
                        <span className="bannerIcon">
                            <a href="https://leetcode.com/t_prisha06/" target="_blank">
                            <SiLeetcode />
                            </a>
                        </span>
                        <span className="bannerIcon">
                            <a href="https://auth.geeksforgeeks.org/user/prisha6thapar" target="_blank">
                            <SiGeeksforgeeks />
                            {/* <FaGithub /> */}
                            </a>
                        </span>
                        <span className="bannerIcon">
                            <a href="https://github.com/PrishaThapar06" target="_blank">
                            <FaGithub />
                            </a>
                        </span>
                    </div>
                </div>
                <div>
                    <h2 className="text-base uppercase font-titleFont mt-4 mb-4">
                        Best skill on
                    </h2>
                    <div className="flex gap-4">
                        <span className="bannerIcon">
                            <FaReact />
                        </span>
                        <span className="bannerIcon">
                            <SiTailwindcss />
                        </span>
                        <span className="bannerIcon">
                            <SiJavascript />
                            {/* <FaHtml5 /> */}
                        </span>
                        <span className="bannerIcon">
                            <BsCodeSlash />
                        </span>
                    </div>
                </div>
            </div>
                </div>
    )
}

export default LeftBanner;