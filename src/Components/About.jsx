// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import "../Styles/About.css"; // Import your CSS file
import AOS from "aos";
import "aos/dist/aos.css";
// import svgabout1 from "../assets/images/svgabout1.svg";
import bg_abt from "../assets/images/img1.jpg";
import bg_abt1 from "../assets/images/img1_1.png";
import { Link } from "react-router-dom";

const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease-in",
      once: true,
    });
  }, []);

  return (
    <>
      <div className="md:opacity-0 bg-home">
        <img src={bg_abt} alt="mountain" />
      </div>
      <div className="z-40 md:opacity-0 bg-home">
        <img src={bg_abt1} alt="mountain" />
      </div>
      <div className="min-h-screen overflow-x-hidden md:pt-10 md:bg-zinc-200 page1-about">
        <div className="w-1/2 md:hidden right" data-aos="slide-right"></div>

        <div
          className="w-auto h-auto max-w-3xl overflow-hidden transition-all duration-500 transform bg-white shadow-xl md:w-11/12 rounded-2xl hover:scale-105"
          data-aos="slide-left"
        >
          <div className="p-6 text-black bg-crimson md:p-8">
            <h2
              className="mb-2 text-4xl font-bold "
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="300"
            >
              About Me
            </h2>
            <h4
              className="text-xl font-medium text-black opacity-75 md:text-2xl"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="300"
            >
              A Frontend & Backend Web Developer
            </h4>
          </div>
          <div
            className="p-6 md:p-8 bg-gray-50"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="300"
          >
            <p className="mb-6 text-gray-800">
              Hello, I&apos;m Salman Quadri, a passionate front-end programmer
              and designer. Here&apos;s a brief overview of my background and
              aspirations:
            </p>
            <ul className="pl-5 space-y-4 text-gray-700 list-disc">
              <li>
                <strong className="text-crimson">Current Education:</strong>{" "}
                Pursuing a Bachelor of Computer Application (BCA) degree at
                Engineering College Bikaner.
              </li>
              <li>
                <strong className="text-crimson">Professional Focus:</strong>{" "}
                Specializing in creating visually appealing and user-friendly
                websites. Leveraging coding and design skills to transform ideas
                into compelling digital experiences.
              </li>
              <li>
                <strong className="text-crimson">Personal Drive:</strong> Deeply
                committed to the art of front-end development. Enthusiastically
                exploring new technologies and industry trends in the
                ever-evolving tech landscape.
              </li>
              <li>
                <strong className="text-crimson">Career Goals:</strong>{" "}
                Dedicated to enhancing my technical skills. Aiming to contribute
                to creating engaging and innovative online experiences.
              </li>
              <li>
                <strong className="text-crimson">Hobbies and Interests:</strong>{" "}
                Enjoy exploring creative pursuits outside of coding. Staying
                updated with the latest advancements in technology and design.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around min-h-screen p-8 overflow-x-hidden sm:w-full md:bg-zinc-200 page2-about md:p-4">
        <div className="md:hidden"></div>
        <div
          className="w-auto max-w-3xl p-6 overflow-hidden transition-transform duration-500 transform border shadow-lg md:w-full sm:w-full md:p-8 backdrop-filter backdrop-blur-lg bg-white/70 border-white/50 rounded-2xl hover:scale-105"
          data-aos="slide-left"
        >
          <h1 className="mb-6 text-4xl font-bold text-crimson md:text-4xl">
            Information
          </h1>
          <div className="space-y-4">
            <h4
              className="text-xl font-medium text-gray-800 md:text-2xl"
              data-aos="fade-in"
            >
              <span className="text-crimson">Name:</span> Salman Quadri
            </h4>
            <h4
              className="text-xl font-medium text-gray-800 md:text-2xl"
              data-aos="fade-in"
            >
              <span className="text-crimson">Date of birth:</span> November 04,
              2004
            </h4>
            <h4
              className="text-xl font-medium text-gray-800 md:text-2xl"
              data-aos="fade-in"
            >
              <span className="text-crimson">Address:</span> Bikaner, Rajasthan
            </h4>
            <h4
              className="text-xl font-medium text-gray-800 md:text-2xl"
              data-aos="fade-in"
            >
              <span className="text-crimson">Pin Code:</span> 334001
            </h4>
            <h4
              className="text-xl font-medium text-gray-800 md:text-2xl"
              data-aos="fade-in"
            >
              <span className="text-crimson">Email:</span>
              <a
                href="mailto:secretofsk@gmail.com"
                className="text-blue-600 hover:underline"
              >
                {" "}
                secretofsk@gmail.com
              </a>
            </h4>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 text-lg font-semibold text-white transition duration-300 transform rounded-full shadow-md bg-crimson hover:bg-crimson-dark hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-crimson hover:scale-105"
            >
              Know More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
