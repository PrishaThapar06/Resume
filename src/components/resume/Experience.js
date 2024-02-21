import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022-2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Project Work</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="KD Global Administrations Service Limited"
            subTitle="Frontend Developer"
            result="05/2023-06/2023"
            des="Worked collaboratively with design and backend teams to seamlessly integrate features, ensuring optimal navigation. Executed responsive layouts, interactive components, and efficient data fetching to elevate user experience."
          />
          <ResumeCard
            title="College Website"
            subTitle="ReactJS & Tailwind CSS"
            result="2023-2024"
            des="Crafted a comprehensive college website utilizing ReactJS, tailored to serve a diverse student audience. This platform provides essential insights into scholarships, universities, and relevant information, streamlining academic paths and future aspirations."
          />
          <ResumeCard
            title="Resume Website"
            subTitle="ReactJS & Tailwind CSS"
            result="2022-2023"
            des="This is a portfolio website that I have created to showcase all my projects and skills ."
          />
          <ResumeCard
            title="HomeStay Cover"
            subTitle="ReactJS"
            result="2022"
            des="Created a cover for a HomeStay Website with an interactive user interface just like any other travel and tourism website."
          />
        </div>
      </div>
      {/* part Two */}

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div> */}
    </motion.div>
  );
}

export default Experience;