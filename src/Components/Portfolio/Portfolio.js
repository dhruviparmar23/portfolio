import React, { useEffect } from 'react';
import { gsap } from "gsap";
import './Portfolio.css';
import fruit from '../../assets/fruit1.png'
import gemini from '../../assets/gemini.png'
import tech from '../../assets/techgear.png'
import Cardcontainer from './Cardcontainer';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  useEffect(() => {

    gsap.fromTo(
      ".cards",
      {
        x: 500,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        delay: 0.5,
        ease: "easein",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".cards",
          scroller: "body",
          start: "top 80%",
          end: "top 10%",
          toggleActions: "play none none reverse",
        }
      }
    );
  }, []);
  return (
    <div className='main-container' id='portfolio'>
       <div class='light x1'></div>
  <div className='light x2'></div>
  <div className='light x3'></div>
  <div className='light x4'></div>
  <div className='light x5'></div>
  <div className='light x6'></div>
  <div className='light x7'></div>
  <div className='light x8'></div>
  <div className='light x9'></div>
      <h2 className='main-text'>PORTFOLIO</h2>
      <div className='cards' data-tilt data-tilt-glare>
        <Cardcontainer
          image={fruit}
          title='Fruit App'
          link="https://dhruviparmar23.github.io/Greengroves/"
          button="Click Me"

        />
        <Cardcontainer
          image={gemini}
          title='Gemini Ai'
          link="https://bartchatbot.netlify.app/"
          button="Click Me"
        />
        <Cardcontainer
          image={tech}
          title='TechGear App'
          link="https://techgear-bydhruvi.netlify.app/"
          button="Click Me"
        />
      </div>
    </div>
  )
};


export default Portfolio;