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
      <div className="relative flex flex-col items-center justify-center min-h-screen pt-20 text-white bg-gradient-to-br from-gray-900 to-gray-700">
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
          <img
            src={bg_skill}
            alt="mountain"
            className="object-cover w-full h-full opacity-30"
          />
        </div>

        <div className="relative z-10 w-11/12 max-w-6xl p-10 border shadow-lg bg-white/10 backdrop-blur-lg rounded-3xl border-gray-400/20">
          <div className="absolute inset-0 overflow-hidden rounded-3xl -z-10">
            <img
              src={bg_skills}
              alt="greenery"
              className="object-cover w-full h-full"
            />
          </div>

          <h2 className="mb-10 text-4xl font-bold text-center text-white md:text-5xl">
            My Skills
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 transition-all transform shadow-md w-80 bg-white/10 backdrop-blur-md rounded-2xl hover:scale-105 hover:shadow-xl"
                data-aos="fade"
              >
                <img
                  src={skill.imgSrc}
                  className="w-20 h-20 mb-4 rounded-lg"
                  alt={`${skill.title} icon`}
                />
                <div className="text-center">
                  <p className="mb-2 text-xl font-semibold text-white">
                    {skill.title}
                  </p>
                  <p className="mb-4 text-sm text-gray-300">
                    {skill.description}
                  </p>
                  <a href="./Skills/skills.html">
                    <button className="px-4 py-2 text-white transition duration-300 bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
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
