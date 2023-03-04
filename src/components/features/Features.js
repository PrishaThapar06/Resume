import React from "react";
import { AiFillAppstore , AiFillCode} from "react-icons/ai";
import { FaMobile , FaGlobe } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
    return(
        <section id="features" className="w-full py-20 border-b-[1px] border-b-black">
        <div className='flex justify-center items-center text-center'>
        <Title title="Features" des="What I Do" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
                <Card 
                    title="FrontEnd Development"
                    des="I have constructed various responsive webpages for projects."
                    icon={<CgWebsite />}
                />
                {/* <Card 
                    title="App Development"
                    des="I have been constructing these business strategies to enhance the company profits per annum."
                    icon={<AiFillAppstore />}
                /> */}
                <Card 
                    title="Competitive Programmer"
                    des="I am skilled in DSA and eager to solve real world problems."
                    icon={<AiFillCode />}
                />
                {/* <Card 
                    title="Mobile Development"
                    des="I have been constructing these business strategies to enhance the company profits per annum."
                    icon={<FaMobile />}
                /> */}
                {/* <Card 
                    title="UX Design"
                    des="I have been constructing these business strategies to enhance the company profits per annum."
                    icon={<SiAntdesign />}
                /> */}
                <Card 
                    title="Hosting Websites"
                    des="I can host websites on web browsers for various users to get access to our website. Hence improve the visibilty."
                    icon={<FaGlobe />}
                />
            </div>
        </section>
    )
}

export default Features;