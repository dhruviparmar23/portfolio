import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost/ContactUs/contact-form.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      const data = await response.json();

      if (data.success) {
        setResponseMessage(data.message);
        setFormData({ name: "", email: "", description: "" });
      } else {
        setResponseMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("An error occurred. Please try again later.");
    }

    setIsSubmitting(false);
  };

  useEffect(() => {
    gsap.fromTo(".contact-left", { x: -50, opacity: 0 }, {
      x: 0, opacity: 1, duration: 1.2, ease: "power2.out", stagger: 0.2,
      scrollTrigger: { trigger: ".contact-left", start: "top 85%", toggleActions: "play none none reverse" }
    });

    gsap.fromTo(".contact-form", { y: 100, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1.2, ease: "power2.out",
      scrollTrigger: { trigger: ".contact-form", start: "top 85%", toggleActions: "play none none reverse" }
    });
  }, []);

  return (
    <div className="contact-container" id="contact">
      <h2 className="contact-heading">CONTACT ME</h2>
      <div className="contact-info">
        <div className="contact-left">
          <div className="contact-details">
            <div className="icon"><ion-icon name="location"></ion-icon></div>
            <div className="texts">
              <h3>ADDRESS</h3>
              <p>Mumbai, Maharashtra<br />Borivali East.</p>
            </div>
          </div>
          <div className="contact-details">
            <div className="icon"><ion-icon name="mail-outline"></ion-icon></div>
            <div className="texts">
              <h3>EMAIL</h3>
              <p>dhruviip8452@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <h2>Get In Touch</h2>
          <form className="form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your Name" name="name" value={formData.name} onChange={handleChange} required />
            <input type="email" placeholder="Enter a valid email address" name="email" value={formData.email} onChange={handleChange} required />
            <textarea name="description" id="description" placeholder="Your Message" value={formData.description} onChange={handleChange} required></textarea>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "SUBMIT"}
            </button>
          </form>
          {responseMessage && <p>{responseMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
