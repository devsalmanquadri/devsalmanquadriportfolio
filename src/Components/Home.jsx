/* eslint-disable no-unused-vars */

import React, { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import AOS from "aos";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "aos/dist/aos.css";
import "../Styles/Home.css"; // Assuming you keep your styles in a CSS file
import lang_icon1 from "../assets/images/python.png";
import lang_icon2 from "../assets/images/c.png";
import lang_icon3 from "../assets/images/cpp.png";
import lang_icon4 from "../assets/images/html-5.png";
import lang_icon5 from "../assets/images/css.png";
import lang_icon6 from "../assets/images/java-script.png";
import lang_icon7 from "../assets/images/vitelogo.png";
import lang_icon8 from "../assets/images/reactjs.png";
import lang_icon9 from "../assets/images/expressjs.png";
import lang_icon10 from "../assets/images/java.png";
import lang_icon11 from "../assets/images/mysql.png";
import lang_icon12 from "../assets/images/php.png";
import mountain from "../assets/images/mountain1.png";
import clouds from "../assets/images/clouds.png";
import mainbg from "../assets/images/mainbg.jpg";
import sun from "../assets/images/sun.png";
import PropTypes from "prop-types";
import svg6 from "../assets/images/svg6.svg";
import svg7 from "../assets/images/svg7.svg";
import svg8 from "../assets/images/svg8.svg";
import svg9 from "../assets/images/svg9.svg";
import svg10 from "../assets/images/svg10.svg";
import { Link } from "react-router-dom";

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);
  const percentageofskill = [
    "90%",
    "90%",
    "80%",
    "100%",
    "100%",
    "90%",
    "90%",
    "80%",
    "60%",
    "60%",
    "70%",
    "80%",
  ];
  const lang_icon = [
    lang_icon1,
    lang_icon2,
    lang_icon3,
    lang_icon4,
    lang_icon5,
    lang_icon6,
    lang_icon7,
    lang_icon8,
    lang_icon9,
    lang_icon10,
    lang_icon11,
    lang_icon12,
  ];
  const lang_names = [
    "Python",
    "C",
    "C++",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Vite",
    "ReactJS",
    "ExpressJS",
    "Java",
    "MySQL",
    "PHP",
  ];
  const formRef = useRef(null);
  const img1Ref = useRef(null);
  const skillsContainerRef = useRef(null);
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "none",
      once: true,
    });

    const typed = new Typed("#element", {
      strings: ["Web Developer", "Programmer", "Developer", "Designer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    gsap.to(img1Ref.current, {
      duration: 1,
      repeat: -1,
      boxShadow: "4px 4px 0px #abff9f, -4px -4px 0px #e1ffd2",
      borderRadius: "45% 55% 42% 58% / 67% 60% 40% 33%",
      yoyo: true,
      ease: "none",
    });
    const progressBars =
      skillsContainerRef.current.querySelectorAll(".progress-bar");
    const percentageElements =
      skillsContainerRef.current.querySelectorAll(".skill-percentage");
    progressBars.forEach((element) => {
      ScrollTrigger.create({
        trigger: element,
        start: "top bottom", // Start animation when the top of the element is at the bottom of the viewport
        end: "bottom top", // End animation when the bottom of the element is at the top of the viewport
        animation: gsap.to(element, {
          width: element.getAttribute("data-progress"), // Use the data-progress attribute
          duration: 1,
          delay: 0.4,
          ease: "none",
        }),
        toggleActions: "play none none none", // Control actions on scroll events
      });
    });
    percentageElements.forEach((element, index) => {
      gsap.fromTo(
        element,
        { innerText: 0 },
        {
          innerText: percentageofskill[index],
          duration: 1,
          ease: "none",
          snap: { innerText: 1 }, // Ensure the text value rounds to nearest integer
          scrollTrigger: {
            trigger: element,
            start: "top bottom", // Start animation when the top of the element is at the bottom of the viewport
            end: "bottom top", // End animation when the bottom of the element is at the top of the viewport
            toggleActions: "play none none none", // Control actions on scroll events
            // markers: true, // Optional: Add markers to debug
          },
        }
      );
    });

    return () => {
      typed.destroy(); // Cleanup on unmount
    };
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycby8rKRJR0ALHqzPeSBp5TVdAV6SnDMsRAorxB8P9Fe3Jfryn6R5iVdO7802FKvpqN_U/exec";

    fetch(scriptURL, { method: "POST", body: new FormData(formRef.current) })
      .then((response) => {
        alert("Thank you! your form is submitted successfully.");
        window.location.reload();
      })
      .catch((error) => console.error("Error!", error.message));
  };

  return (
    <div>
      <div className="bg-home">
        <img src={mainbg} alt="mountain" />
      </div>
      <div className="bg-home">
        <img
          data-aos-delay="300"
          data-aos="fade-up"
          src={mountain}
          alt="mountain"
        />
      </div>
      <div className="bg-home">
        <img
          data-aos-delay="600"
          data-aos="fade-up"
          src={clouds}
          alt="clouds"
        />
      </div>
      <div className="bg-home1">
        <img
          data-aos-delay="900"
          data-aos-anchor-placement="top-end"
          data-aos="fade-up"
          src={sun}
          alt="clouds"
        />
      </div>
      <div className="page1" id="1">
        <div className="left" data-aos-delay="1000" data-aos="slide-right">
          <div className="intro">
            <p>Hello, my name is</p>
            <h1>Salman Quadri</h1> I am <span id="element"></span>
          </div>
          <div className="social-media-icons">
            <button
              className="Btn1"
              onClick={() =>
                window.open("https://github.com/devsalmanquadri", "_blank")
              }
            >
              <span className="svgContainer1">
                <svg fill="white" viewBox="0 0 496 512" height="1.6em">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                </svg>
              </span>
              <span className="BG1"></span>
            </button>
            <button
              className="Btn1"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/devSalmanquadri/",
                  "_blank"
                )
              }
            >
              <span className="svgContainer1">
                <svg
                  viewBox="0 0 320 512"
                  height="1.3em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svgIcon"
                  fill="white"
                >
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                </svg>
              </span>
              <span className="BG2"></span>
            </button>
            <button
              className="Btn1"
              onClick={() =>
                window.open("https://www.youtube.com/@CodingGeeksCG", "_blank")
              }
            >
              <span className="svgContainer1">
                <svg
                  viewBox="0 0 576 512"
                  fill="white"
                  height="1.6em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"></path>
                </svg>
              </span>
              <span className="BG3"></span>
            </button>
            <button
              className="Btn1"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/salman-quadri-b99781248/",
                  "_blank"
                )
              }
            >
              <span className="svgContainer1">
                <svg
                  viewBox="0 0 448 512"
                  height="1.6em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="svgIcon"
                  fill="white"
                >
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path>
                </svg>
              </span>
              <span className="BG4"></span>
            </button>
            <button
              className="Btn1"
              onClick={() =>
                window.open("https://wa.me/917062747786", "_blank")
              }
            >
              <span className="svgContainer1">
                <svg
                  viewBox="0 0 448 512"
                  fill="white"
                  height="1.6em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                </svg>
              </span>
              <span className="BG5"></span>
            </button>
            <button
              className="Btn1"
              onClick={() =>
                window.open(
                  "https://instagram.com/__salman__quadri__",
                  "_blank"
                )
              }
            >
              <span className="svgContainer1">
                <svg
                  fill="white"
                  className="svgIcon"
                  viewBox="0 0 448 512"
                  height="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </span>
              <span className="BG6"></span>
            </button>
          </div>
        </div>
      </div>
      <div className="page2 sm:space-y-5">
        <h2 className="text-3xl font-medium text-gray-100">About Me</h2>
        <div className="flex flex-row sm:space-y-4 sm:flex-col about lg:flex-col lg:space-y-8 justify-evenly">
          <div className="right" data-aos="slide-right">
            <div className="img1" ref={img1Ref}></div>
          </div>
          <div
            className="text-gray-100 about-text sm:font-semibold"
            data-aos="slide-left"
          >
            <p>
              Hi, Im Salman Quadri, a passionate web developer with a flair for
              crafting dynamic and engaging web applications. With a solid
              foundation in HTML5, CSS3, JavaScript, and ReactJS, I transform
              creative ideas into functional and user-friendly digital
              experiences.
            </p>
            <p>
              I thrive in fast-paced environments and enjoy working on projects
              that challenge my problem-solving skills. Beyond coding, I love
              gaming and exploring the latest tech trends, always looking for
              new ways to enhance my skill set. Let’s connect and create
              something amazing together!
            </p>
            <Link className="btn-link" to="/about">
              <button className="text-gray-100 type1">More About Me</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="page3-home">
        <h2 className="text-3xl font-medium text-center text-gray-100 sm:text-2xl">
          My Skills
        </h2>
        <div className="overflow-y-hidden skills-home sm:w-full">
          <div
            ref={skillsContainerRef}
            className="grid grid-cols-1 px-10 pt-10 sm:px-2 sm:w-full skills-container"
          >
            {lang_icon.map((langicon, index) => (
              <div
                key={index}
                className="skill-contain flex items-center mb-10 sm:w-full justify-between w-[50vw] skill pointer-events-none"
              >
                <div className="absolute z-10 p-1 text-lg font-medium text-center text-white capitalize transition-all duration-300 border-2 border-transparent rounded-lg shadow-lg bg-gradient-to-r from-pink-500 to-red-500 -left-3 -top-11 hover:shadow-2xl hoverelement">
                  {lang_names[index]}
                </div>

                <img
                  className="object-contain object-center transition duration-300 ease-in-out skills-img sm:w-10 w-14 hover:scale-110"
                  src={langicon}
                  alt={`Skill ${index + 1}`}
                />
                <div className=" bg-zinc-900 rounded-lg flex items-start w-[100%] ml-10 mr-10">
                  <div
                    data-progress={percentageofskill[index]}
                    className="h-4 bg-green-600 rounded-lg progress-bar"
                    style={{ width: "0%" }} // Ensure initial width is 0
                  ></div>
                </div>
                <p className="font-serif font-semibold skill-percentage"></p>
              </div>
            ))}
          </div>
        </div>
        <Link className="btn-link" to="/skills">
          <button className="text-gray-100 type1">More Skills...</button>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center w-full overflow-x-hidden page4-home">
        <h2 className="text-3xl font-medium text-white">Contact me</h2>
        <section className="flex flex-row w-full p-6 space-x-8 space-y-0 sm:space-y-5 sm:space-x-0 sm:flex-col max-w-7xl">
          {/* Left Side: Contact Information */}
          <div
            className="w-1/2 space-y-2 text-left sm:w-full "
            data-aos="fade-right"
          >
            <p className="text-xl text-gray-100 font lg:text-xl">
              Have a project in mind? Feel free to reach out to me.
            </p>
            <p className="text-xl text-gray-100 lg:text-xl">
              I am always open to new opportunities and collaborations.
            </p>
            <p className="text-xl text-gray-100 lg:text-xl">
              Lets create something amazing together!
            </p>
            <p className="text-xl text-gray-100 lg:text-xl">
              You can also reach me at:
            </p>
            <div className="flex items-center text-lg text-gray-100 ">
              Email:
              <a
                href="mailto:secretofsk@gmail.com"
                className="block ml-2 text-lg font-medium hover:underline"
              >
                secretofsk@gmail.com
              </a>
            </div>
            <div className="flex items-center text-lg text-gray-100 ">
              Mobille Number:
              <a
                href="tel:+917062747786"
                className="block ml-2 text-lg font-medium hover:underline"
              >
                +91 7062747786
              </a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="w-1/2 sm:w-full " data-aos="fade-left">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="relative form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder=" "
                  required
                  className="w-full px-4 py-2 transition-all duration-300 bg-transparent border-b-2 border-gray-300 rounded-lg focus:border-blue-600"
                />
                <label
                  htmlFor="name"
                  className="absolute text-sm text-white transition-all duration-300 left-4 top-2"
                >
                  Name
                </label>
              </div>
              <div className="relative form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder=" "
                  required
                  className="w-full px-4 py-2 transition-all duration-300 bg-transparent border-b-2 border-gray-300 rounded-lg focus:border-blue-600"
                />
                <label
                  htmlFor="email"
                  className="absolute text-sm text-white transition-all duration-300 left-4 top-2"
                >
                  Email
                </label>
              </div>
              <div className="relative form-group">
                <input
                  name="message"
                  id="message"
                  placeholder=" "
                  required
                  className="w-full px-4 py-2 transition-all duration-300 bg-transparent border-b-2 border-gray-300 rounded-lg focus:border-blue-600"
                  rows="4"
                />
                <label
                  htmlFor="message"
                  className="absolute text-sm text-white transition-all duration-300 left-4 top-2"
                >
                  Message
                </label>
              </div>
              <button type="submit" className="button-home">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
