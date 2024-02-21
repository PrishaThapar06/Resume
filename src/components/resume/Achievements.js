import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Achievements = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020-2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Educational Achievements</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Cleared IIT Advanced"
            subTitle="Qualified JEE Advanced in my first attempt."
            result="2020"
            des="Scored an All India Rank 28372."
          />
          <ResumeCard
            title="KAVACH - Cyber Security Hackathon"
            subTitle="Grandfinalist"
            result="2023"
            des="Our team developed a cutting-edge app to combat cyber crime, empowering users to safeguard their digital lives with advanced security features and intuitive user interface using React Native"
          />
          <ResumeCard
            title="Code Conquests"
            subTitle="My ratings on various coding platforms."
            result="2020-2024"
            des="Codeforces:@Pupil (1238 best).
             Leetcode:Contest Rank(1853 best).
              GeeksforGeeks:Institute Rank(53).
               Codechef:3star (1625 best)"
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

export default Achievements;