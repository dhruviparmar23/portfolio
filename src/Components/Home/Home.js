import React, { useEffect } from 'react';
import { gsap } from "gsap";
import './Home.css'
import picture from '../../assets/picture.jpeg'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {

    useEffect(() => {
        gsap.fromTo(
            ".home-header > *",
            {
                y: 500,         // Start 500px below
                opacity: 0      // Start invisible
            },
            {
                y: 0,           // End at original position (y = 0)
                opacity: 1,     // End fully visible
                duration: 1.5,  // Total duration of the animation
                ease: "power2.out", // Smooth easing
                delay: 0.5,      // Delay before starting animation
                stagger: 0.2

            }
        );
        gsap.fromTo(
            ".profile-pic",
            {
                y: -500,         // Start 500px below
                opacity: 0      // Start invisible
            },
            {
                y: 0,           // End at original position (y = 0)
                opacity: 1,     // End fully visible
                duration: 1.5,  // Total duration of the animation
                ease: "power2.out", // Smooth easing
                delay: 0.5,      // Delay before starting animation

            }
        );
    }, []);
    return (
        <div class="area" >
            <ul class="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>


            <div className="home-content" id='home' >

                <div className="home-header" id='home-header'>
                    <p>Hey , There!</p>
                    <h2 className='text'>I'm a<span className='typing-text'> Frontend Developer </span></h2>
                    <p className='p'>I specialize in building modern web applications with a focus on frontend technologies</p>
                    <div className='profile-btn'>
                        <a href="https://www.linkedin.com/in/dhruvi-parmar-084bb0249/" target='_blank'>LinkedIn</a><br />
                        <a href="https://github.com/dhruviparmar23" target='_blank' >GitHub</a>
                    </div>
                </div>
                <div className="profile-pic">
                    <img src={picture}></img>
                </div>
            </div>
        </div >
    )
}

export default Home