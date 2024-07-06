// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
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

import bg_skills from "../assets/images/skill_bg.jpg";
import bg_skill from "../assets/images/bg_skill.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease-in",
      once: true,
    });
  }, []);
  const skills = [
    {
      title: "Python",
      description:
        "Proficient in Python, with a focus on web development using frameworks like Django and Flask. Skilled in building automation scripts, data analysis, and machine learning models.",
      imgSrc: lang_icon1,
    },
    {
      title: "C",
      description:
        "Experienced in C programming for systems-level programming and embedded systems. Proficient in writing efficient code for performance-critical applications.",
      imgSrc: lang_icon2,
    },
    {
      title: "C++",
      description:
        "Proficient in C++ with expertise in object-oriented programming, data structures, and algorithms. Familiar with C++11 and C++14 standards.",
      imgSrc: lang_icon3,
    },
    {
      title: "HTML5",
      description:
        "Skilled in HTML5 for creating modern web pages with semantic markup and interactive elements. Experience in integrating HTML5 with CSS3 and JavaScript.",
      imgSrc: lang_icon4,
    },
    {
      title: "CSS3",
      description:
        "Proficient in CSS3 for designing responsive and visually appealing web interfaces. Knowledgeable in using pre-processors like SASS and tools like Tailwind CSS.",
      imgSrc: lang_icon5,
    },
    {
      title: "JavaScript",
      description:
        "Skilled in JavaScript for developing dynamic and interactive web applications. Experienced with ES6+ features and frameworks like ReactJS and VueJS.",
      imgSrc: lang_icon6,
    },
    {
      title: "Vite",
      description:
        "Experienced with Vite for building fast and optimized frontend applications. Knowledgeable in configuring Vite for various development needs.",
      imgSrc: lang_icon7,
    },
    {
      title: "ReactJS",
      description:
        "Proficient in ReactJS for building modern, scalable, and high-performance web applications. Experienced with hooks, context API, and state management solutions.",
      imgSrc: lang_icon8,
    },
    {
      title: "ExpressJS",
      description:
        "Experienced in ExpressJS for building robust and scalable backend applications. Proficient in RESTful API development and middleware configuration.",
      imgSrc: lang_icon9,
    },
    {
      title: "Java",
      description:
        "Skilled in Java for building enterprise-level applications. Proficient in object-oriented programming, data structures, and multi-threading.",
      imgSrc: lang_icon10,
    },
    {
      title: "MySQL",
      description:
        "Experienced in MySQL for database management and querying. Proficient in designing relational databases, writing complex SQL queries, and optimization.",
      imgSrc: lang_icon11,
    },
    {
      title: "PHP",
      description:
        "Proficient in PHP for server-side scripting and web development. Experienced in building dynamic web applications and integrating with databases.",
      imgSrc: lang_icon12,
    },
  ];

  return (
    <>
      <div className="bg-home">
        <img src={bg_skill} alt="mountain" />
      </div>
      <div className="relative flex items-center justify-center w-full h-full py-20 backdrop-blur-2xl">
        <div className="relative w-11/12 object-cover flex flex-col items-center justify-center h-80% py-10 backdrop-blur-sm rounded-[4rem] bg-white/20">
          <div className="absolute top-0 object-center w-full h-full -z-10 object-conver bg-skill">
            <img
              className="w-full h-full rounded-[4rem]"
              src={bg_skills}
              alt="greenry"
            />
          </div>
          <h2 className="mx-5 text-3xl font-medium text-center border-b-4 border-green-600 font-ubuntu text-zinc-100 sm:text-2xl">
            My Skills
          </h2>
          <br />
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-grow p-6 transition-transform duration-500 transform bg-white shadow-lg basis-auto bg-opacity-30 backdrop-blur-md rounded-2xl card"
                data-aos="flip-up"
              >
                <img
                  src={skill.imgSrc}
                  className="w-20 h-20 mb-4"
                  alt={`${skill.title} icon`}
                />
                <div className="text-center card__content">
                  <p className="mb-2 text-2xl font-semibold text-gray-800">
                    {skill.title}
                  </p>
                  <p className="mb-6 text-sm text-gray-700 card__description">
                    {skill.description}
                  </p>
                  <a href="./Skills/skills.html">
                    <button className="px-6 py-2 text-sm font-medium text-white transition duration-300 transform bg-blue-500 rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:scale-105">
                      More...
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
