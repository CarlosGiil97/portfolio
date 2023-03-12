import React from 'react';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Card } from 'react-bootstrap';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { FaNetworkWired } from 'react-icons/fa';



function Experiencia() {
    return (
        <>
            <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-8 rounded md:my-10 bg-gray-700" />


            <div id="experiencia" className="text-5xl font-extrabold ...">
                <h1 className="text-color-third-color font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center ">Experiencia</h1>
                <div class="container">
                    <div class="main-timeline">


                        <div class="timeline">
                            <div class="icon"></div>
                            <div class="date-content">
                                <div class="date-outer">
                                    <span class="date">
                                        <span class="month">desde</span>
                                        <span class="year">ago 2021</span>
                                    </span>
                                </div>
                            </div>
                            <div class="timeline-content">
                                <center>
                                <h3 class="title">Full-stack Developer</h3>
                                <img src="/assets/bspro.png"></img>
                                </center>
                                
                            </div>
                        </div>

                        <div class="timeline">
                            <div class="icon"></div>
                            <div class="date-content">
                                <div class="date-outer">
                                    <span class="date">
                                        <span class="month">4 meses</span>
                                        <br/>
                                        <span class="month">abril-ago</span>
                                        <span class="year">2021</span>
                                    </span>
                                </div>
                            </div>
                            <div class="timeline-content">
                                <center>
                                    <h3 class="title">JR Java developer</h3>
                                    <img width={'25%'} src="/assets/everis.png"></img>
                                </center>
                            </div>
                        </div>

                        <div class="timeline">
                            <div class="icon"></div>
                            <div class="date-content">
                                <div class="date-outer">
                                    <span class="date">
                                        <span class="month">4 meses</span>
                                        <br/>
                                        <span class="month">enero</span>
                                        <span class="year">2021</span>
                                    </span>
                                </div>
                            </div>
                            <div class="timeline-content">
                                <center>
                                    <h3 class="title">Full Stack developer</h3>
                                    <img width={'25%'} src="/assets/eye.png"></img>
                                </center>
                            </div>
                        </div>

                        
                        

                    </div>
                </div>
            </div>
        </>


    );
}

export default Experiencia;