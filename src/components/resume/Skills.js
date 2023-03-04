import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}} className='w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20'>
            <div className="w-full lgl:w-1/2">
                <div className="py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px] uppercase">Features</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Programming Skill</h2>
                </div>
                <div className="mt-14 w-full flex flex-col gap-6">
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">C/C++</p>
                        <motion.span 
                        initial={{x:"-1000%", opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:0.5, delay:0.5}}
                        className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                            <span className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                <span className="absolute -top-7 right-0">100%</span>
                            </span>
                        </motion.span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">Arrays & Strings</p>
                        <motion.span 
                        initial={{x:"-1000%", opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:0.5, delay:0.5}}
                        className="w-[90%] h-2 bgOpacity inline-flex rounded-md mt-2">
                            <span className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                <span className="absolute -top-7 right-0">90%</span>
                            </span>
                        </motion.span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">Stack & Queues</p>
                        <motion.span 
                        initial={{x:"-1000%", opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:0.5, delay:0.5}}
                        className="w-[75%] h-2 bgOpacity inline-flex rounded-md mt-2">
                            <span className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                <span className="absolute -top-7 right-0">75%</span>
                            </span>
                        </motion.span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">Linked List</p>
                        <motion.span 
                        initial={{x:"-1000%", opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:0.5, delay:0.5}}
                        className="w-[80%] h-2 bgOpacity inline-flex rounded-md mt-2">
                            <span className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                <span className="absolute -top-7 right-0">80%</span>
                            </span>
                        </motion.span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">Trees & Graphs</p>
                        <motion.span 
                        initial={{x:"-1000%", opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:0.5, delay:0.5}}
                        className="w-[65%] h-2 bgOpacity inline-flex rounded-md mt-2">
                            <span className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                <span className="absolute -top-7 right-0">65%</span>
                            </span>
                        </motion.span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">OOPS</p>
                        <motion.span 
                        initial={{x:"-1000%", opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:0.5, delay:0.5}}
                        className="w-[85%] h-2 bgOpacity inline-flex rounded-md mt-2">
                            <span className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                <span className="absolute -top-7 right-0">85%</span>
                            </span>
                        </motion.span>
                    </div>
                </div>
            </div>
            <div className="w-full lgl:w-1/2">
                <div className="py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px] uppercase">Features</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Development Skill</h2>
                </div>
                <div className="mt-14 w-full flex flex-col gap-6">
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">React</p>
                        <motion.span 
                        initial={{x:"-1000%", opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:0.5, delay:0.5}}
                        className="w-[90%] h-2 bgOpacity inline-flex rounded-md mt-2">
                            <span className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                <span className="absolute -top-7 right-0">90%</span>
                            </span>
                        </motion.span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">Redux</p>
                        <motion.span 
                        initial={{x:"-1000%", opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:0.5, delay:0.5}}
                        className="w-[75%] h-2 bgOpacity inline-flex rounded-md mt-2">
                            <span className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                <span className="absolute -top-7 right-0">75%</span>
                            </span>
                        </motion.span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">HTML 5</p>
                        <motion.span 
                        initial={{x:"-1000%", opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:0.5, delay:0.5}}
                        className="w-[95%] h-2 bgOpacity inline-flex rounded-md mt-2">
                            <span className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                <span className="absolute -top-7 right-0">95%</span>
                            </span>
                        </motion.span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">CSS3</p>
                        <motion.span 
                        initial={{x:"-1000%", opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:0.5, delay:0.5}}
                        className="w-[80%] h-2 bgOpacity inline-flex rounded-md mt-2">
                            <span className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                <span className="absolute -top-7 right-0">80%</span>
                            </span>
                        </motion.span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">JavaScript</p>
                        <motion.span 
                        initial={{x:"-1000%", opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:0.5, delay:0.5}}
                        className="w-[80%] h-2 bgOpacity inline-flex rounded-md mt-2">
                            <span className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                <span className="absolute -top-7 right-0">80%</span>
                            </span>
                        </motion.span>
                    </div>
                    <div className="overflow-x-hidden">
                        <p className="text-sm uppercase font-medium">Bootstrap</p>
                        <motion.span 
                        initial={{x:"-1000%", opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:0.5, delay:0.5}}
                        className="w-[90%] h-2 bgOpacity inline-flex rounded-md mt-2">
                            <span className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                                <span className="absolute -top-7 right-0">90%</span>
                            </span>
                        </motion.span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Skills;