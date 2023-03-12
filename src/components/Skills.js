import React from 'react';
import "animate.css/animate.min.css";
import { AnimationOnScroll,animate__rubberBand } from 'react-animation-on-scroll';
import { Card } from 'react-bootstrap';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { FaPhp,FaNodeJs,FaPython} from 'react-icons/fa';
import {DiMysql,DiMongodb,DiJavascript1,DiReact} from 'react-icons/di';
import { AiFillApi,AiFillHtml5 ,AiFillGithub,AiFillGitlab} from 'react-icons/ai';
import {VscJson} from 'react-icons/vsc';
import {SiJquery,SiTypescript,SiTailwindcss,SiVmware,SiVirtualbox,SiJira,SiNetlify,SiVercel} from 'react-icons/si';
import { BsFiletypeCss,BsFillHddNetworkFill} from 'react-icons/bs';




//creo un objeto con tecnologias backend
const backend = [
    {'name': 'PHP', 'icon': <FaPhp/>},
    {'name': 'Node.JS', 'icon': <FaNodeJs/>},
    {'name': 'SQL', 'icon': <DiMysql/>},
    {'name': 'Mongo', 'icon': <DiMongodb/>},
    {'name': 'Apis', 'icon': <AiFillApi/>},
    {'name': 'JSON', 'icon': <VscJson/>},
    {'name': 'Python', 'icon': <FaPython/>},
    {'name': 'Netlify', 'icon': <SiNetlify/>},
    {'name': 'Vercel', 'icon': <SiVercel/>},
    
];

const frontend = [
    {'name': 'JS', 'icon': <DiJavascript1/>},
    {'name': 'React', 'icon': <DiReact/>},
    {'name': 'JQuery', 'icon': <SiJquery/>},
    {'name': 'Typescript', 'icon': <SiTypescript/>},
    {'name': 'HTML', 'icon': <AiFillHtml5/>},
    {'name': 'Tailwind', 'icon': <SiTailwindcss/>},
    {'name': 'CSS', 'icon': <BsFiletypeCss/>},
];

const others = [
    {'name': 'Github', 'icon': <AiFillGithub/>},
    {'name': 'Gitlab', 'icon': <AiFillGitlab/>},
    {'name': 'VMWare', 'icon': <SiVmware/>},
    {'name': 'VirtualBox', 'icon': <SiVirtualbox/>},
    {'name': 'Jira', 'icon': <SiJira/>},
    {'name': 'Redes', 'icon': <BsFillHddNetworkFill/>},
];



function Skills() {
  return (
    <>
    
    <div id="skills" className="text-5xl font-extrabold third-color p-5 mx-auto my-8">

        <div className='p-5'>
            <h1 className='overline text-color-fourth-color'>BACKEND</h1>
            <div class="flex flex-wrap flex-row my-4 p-5 justify-center">
                {backend.map((item, index) => (
                    <>
                    <div class="w-20 h-20 rounded-full fourth-color flex items-center justify-center mr-4 animate__animated animate__fadeInDownBig">
                    {   item.icon}
                    </div>
                    <center>
                        <p className="text-xs white text-color-fourth-color">{item.name}</p>
                    </center>
                    </>
                
                ))}
            </div>

            <h1 className='overline text-color-fourth-color'>FRONTEND</h1>
            <div class="flex flex-wrap  my-4 p-5 justify-center">
                {frontend.map((item, index) => (
                    <>
                        <div class="w-20 h-20 rounded-full fourth-color flex items-center justify-center mr-4 animate__animated animate__fadeInDownBig">
                        {item.icon}
                    </div>
                    <center>
                        <p className="text-xs white text-color-fourth-color">{item.name}</p>
                    </center>
                    </>
                
                ))}
            </div>

            <h1  className='overline text-color-fourth-color'>OTROS</h1>
            <div class="flex flex-wrap flex-row my-4 p-5 justify-center">
                {others.map((item, index) => (
                    <>
                    <div className="w-20 h-20 rounded-full fourth-color flex items-center justify-center mr-4 animate__animated animate__fadeInDownBig" >
                        {item.icon}
                        
                    </div>
                    <center>
                        <p className="text-xs white text-color-fourth-color">{item.name}</p>
                    </center>
                    </>
                

                ))}
            </div>
        </div>

</div>
    </>

   
  );
}

export default Skills;