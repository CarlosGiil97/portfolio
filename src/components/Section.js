import {React} from 'react';
import { Navbar, Container } from 'react-bootstrap';
import logo from '../logo.svg';
import {AiFillLinkedin, AiFillGithub,AiFillInstagram} from 'react-icons/ai';
import { useEffect, useState } from 'react';


function Section() {

    const first_text = "- Full stack developer -";
    const second_text = " actualmente en BeSoccerPro";

    const [text, setText] = useState("");
    const [text1, setText1] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
          setText(first_text.slice(0, text.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      }, [text]);

      useEffect(() => {
        const timeout = setTimeout(() => {
          setText1(second_text.slice(0, text1.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      }, [text1]);

  return (
    <section id='home' className='font-sans text-center mt-4 flex flex-col justify-center '>
        <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-56 h-56 relative overflow-hidden md:h-96 md:w-96 mb-2">
            <img className="mx-auto" src='assets/avatar.png' layout="fill" objectFit="cover" />
        </div>
        <h1 className='text-3xl md:text-5xl  font-sansBold text-color-third-color'>Carlos Gil Terriente</h1>
        <h3 className='text-2xl md:text-2xl'>{text}</h3>
        <a href="https://pro.besoccer.com" class="underline decoration-wavy text-dark">{text1}</a>
        <p className='text-md py-1 text-gray-800 md:text-xl mt-4 p-2'>
        Soy un desarrollador Fullstack apasionado por la tecnología y con dos años de experiencia en el campo. Me especializo en el desarrollo de aplicaciones web y móviles,
         y tengo experiencia en trabajar tanto en el lado del cliente como en el lado del servidor.
         Además, me considero una persona que lucha por los objetivos hasta el final, y siempre estoy buscando maneras de optimizar el rendimiento y
          mejorar la experiencia del usuario. Soy capaz de trabajar en equipo, comunicar de manera efectiva y estoy comprometido en aprender y desarrollar mis habilidades constantemente.
        </p>
        <div className='text-5xl py-4 flex justify-center gap-16 text-gray-600'>
            <a href="https://www.linkedin.com/in/carlos-gil-terriente-99bb36120">
                <AiFillLinkedin href="" className='text-color-third-color'/>
            </a>
            <a href="https://github.com/CarlosGilTerriente">
                <AiFillGithub href="https://github.com/CarlosGiil97" className='text-color-third-color'/>
            </a>
            
            
        </div>
    </section>
  );
}

export default Section;