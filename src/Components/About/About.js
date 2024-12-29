import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./About.css";
import picture from '../../assets/picture.jpeg'
import html from '../../assets/html.png';
import css from '../../assets/css3.png';
import js from '../../assets/js.png';
import react from '../../assets/react.webp';
import boot from '../../assets/boot.png';
import git from '../../assets/git.png';
import python from '../../assets/python.png';
import hand from '../../assets/swipe-right.png';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {

    gsap.fromTo(
      ".about-right",
      {
        x: 500,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-right",
          scroller: "body",
          start: "top 60%",
          toggleActions: "play none none reverse",
        }
      }
    );
    gsap.fromTo(
      ".about-left img",
      {
        x: -500,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-left",
          scroller: "body",
          start: "top 60%",
          toggleActions: "play none none reverse",
          once: false
        }
      }
    );
    gsap.fromTo(
      ".skill-logo",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 1,
        ease: "bounce",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".about-left",
          scroller: "body",
          start: "top 60%",
          toggleActions: "play none none reverse",
          once: false,
        }
      }
    );
  }, []);

  return (
    <div className="about-container" id="about">
      <div className="header">
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
        <h1>ABOUT ME</h1>
      </div>
      <div className="about-content">
        <div className="about-left">
          <img src={picture} alt="About me" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              "Turning imagination into interactive, beautiful designs. As a
              passionate frontend developer, I blend HTML, CSS, and JavaScript to
              create seamless, responsive user interfaces. With expertise in
              React, CSS frameworks like Bootstrap , and a love for clean, modern
              design, I focus on delivering pixel-perfect, user-centric
              experiences. From wireframes to fully functional web applications, I
              bring creativity and technical precision to every project. Let's
              build something beautiful and functional together!"
            </p>
          </div>
          <div className="lang">
          <div className="skill-images">
            <div className="skill-logo">
              <img src={html} alt="HTML" /><p>HTML</p>
            </div>
            <div className="skill-logo">
              <img src={css} alt="CSS" /><p>CSS</p>
            </div>
            <div className="skill-logo">
              <img src={js} alt="JavaScript" /><p>JavaScript</p>
            </div>
            <div className="skill-logo">
              <img src={react} alt="React" /><p>React</p>
            </div>
            <div className="skill-logo">
              <img src={python} alt="Python" /><p>Python</p>
            </div>
            <div className="skill-logo">
              <img src={git} alt="GitHub" /><p>GitHub</p>
            </div>
            <div className="skill-logo">
              <img src={boot} alt="Bootstrap" /><p>Bootstrap</p>
            </div>
          </div>
          </div>
          <div className="resume-link">
            <div className="link-desc">
              <p>Check out My Resume</p>
              <img className="hand-img" src={hand} alt="Swipe right" />
            </div>
            <a href="https://acrobat.adobe.com/id/urn:aaid:sc:ap:28accf9d-4b39-4cf5-bf9a-cb091b31c094" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>
      </div>
    </div >
  );
};

export default About;
