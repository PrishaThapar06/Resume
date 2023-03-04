import React from 'react';
import Title from '../layouts/Title';
import {projectOne , projectTwo , projectThree} from '../../assets/index';
import ProjectCard from './ProjectCard';
 
const Projects = () => {
    return (
        <section id='projects' className='w-full py-20 border-b-[1px] border-b-black'>
            <div className='flex justify-center items-center text-center'>
              <Title 
                  title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
                  des="MY PROJECTS"
              />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
                <ProjectCard 
                    title='HOMESTAY COVER'
                    des="I build a cover page for a HomeStay website using ReactJs , HTML , CSS and JavaScript. This has an interactive user interface."
                    src={projectOne}
                    locationGithub="https://github.com/Prisha6Thapar/Analog-Clock"
                    locationProject="https://homestay-cover.netlify.app/"
                />
                <ProjectCard 
                    title='ANALOG CLOCK'
                    des="I created an Analog Clock using HTML , CSS and JavaScript. This is dynamic in nature , displaying the current time like any other analog."
                    src={projectTwo}
                    locationGithub="https://github.com/Prisha6Thapar/Analog-Clock"
                    locationProject="https://analog-clock-prishathapar.netlify.app/"
                />
                <ProjectCard 
                    title='DRUM KIT'
                    des="I created a Drum Kit project using HTML , CSS and JavaScript. This is used to get a feeling of palying drums using similar sounds along with each instrument."
                    src={projectThree}
                    locationGithub="https://github.com/Prisha6Thapar/drum-kit"
                    locationProject="https://band-using-drum-kit.netlify.app/"
                />
                {/* <ProjectCard 
                    title='SOCIAL MEDIA CLONE'
                    des="this app is build using reactjs html css js tailwindcss bootstrap sass etc. this works exactly like anyother social media app with an interactive user interface"
                    src={projectOne}
                    locationGithub="https://github.com/Prisha6Thapar/Analog-Clock"
                    locationProject="https://homestay-cover.netlify.app/"
                /> */}
                {/* <ProjectCard 
                    title='E-COMMERCE WEBSITE'
                    des="this app is build using reactjs html css js tailwindcss bootstrap sass etc. this works exactly like anyother social media app with an interactive user interface"
                    src={projectTwo}
                    locationGithub="https://github.com/Prisha6Thapar/Analog-Clock"
                    locationProject="https://homestay-cover.netlify.app/"
                /> */}
                {/* <ProjectCard 
                    title='CHATTING APP'
                    des="this app is build using reactjs html css js tailwindcss bootstrap sass etc. this works exactly like anyother social media app with an interactive user interface"
                    src={projectThree}
                    locationGithub="https://github.com/Prisha6Thapar/Analog-Clock"
                    locationProject="https://homestay-cover.netlify.app/"
                /> */}
            </div>
        </section>
    )
}

export default Projects;