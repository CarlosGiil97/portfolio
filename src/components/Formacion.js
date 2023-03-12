import React from 'react';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Card } from 'react-bootstrap';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { FaNetworkWired} from 'react-icons/fa';



function Formación() {
  return (
    <>
      <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-8 rounded md:my-10 bg-gray-700" />


      <div id="formacion" className="text-5xl font-extrabold ">
      <h1 className="text-color-third-color font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center ">
          Formación
        </h1>     
        <div className="container-fluid">
        <AnimationOnScroll animateIn="animate__bounceIn">
          <div className="row">

              <div className="col-md-6 col-sm-12 mt-5 mb-5">
                <div className='rounded border-solid border-2 border-indigo-600 shadow-md text-center px-4 py-6'>
                  <center>
                    <HiOutlineDesktopComputer size={60} className='font-sansBold text-color-third-color'/>
                  </center>
                  <h3 className='text-3xl md:text-5xl  font-sansBold text-color-third-color'>Desarrollo de aplicaciones web</h3>
                  <span class="text-lg text-ternary-dark dark:text-ternary-light">(2018 - 2020)</span>
                </div>
              </div>
            
            <div className="col-md-6 col-sm-12 mt-5 mb-5">
              <div className='rounded border-solid border-2 border-indigo-600 shadow-md text-center px-4 py-6'>
              <center>
                    <FaNetworkWired size={60} className='font-sansBold text-color-third-color'/>
                  </center>
                <h3 className='text-3xl md:text-5xl  font-sansBold text-color-third-color'>Administrador de sistemas informáticos en red</h3>
                <span class="text-lg text-ternary-dark dark:text-ternary-light">(2015 - 2018)</span>
              </div>
            </div>

            
          </div>
          </AnimationOnScroll>
        </div>

      </div>
    </>

   
  );
}

export default Formación;