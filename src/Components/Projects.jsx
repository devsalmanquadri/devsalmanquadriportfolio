// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";

const projects = [
  {
    title: "My Music Website",
    description:
      "A modern music player website showcasing responsive design and interactive features.",
    iframeSrc: "https://devsalmanquadri.github.io/musicwebsite/",
    github: "https://github.com/devsalmanquadri/musicwebsite",
    details:
      "This project features a sleek music player interface with dynamic playlist management, play/pause functionality, volume control, and song progress tracking. It demonstrates proficiency in frontend development, emphasizing responsive design and user experience.",
  },
  {
    title: "Multi Page Portfolio",
    description:
      "A comprehensive multi-page portfolio demonstrating advanced frontend development techniques.",
    iframeSrc: "https://devsalmanquadri.github.io/Multiport/",
    github: "https://github.com/devsalmanquadri/Multiport",
    details:
      "This project includes multiple pages and advanced UI/UX features, highlighting my skills in responsive design and frontend development.",
  },
  {
    title: "Amazon Clone",
    description:
      "A clone of the Amazon website, focusing on replicating its home page.",
    iframeSrc: "https://devsalmanquadri.github.io/amazonclo/",
    github: "https://github.com/devsalmanquadri/amazonclo",
    details:
      "This project showcases my ability to mimic website designs and using the fundamentals of html and css.",
  },
  {
    title: "Login System",
    description: "A basic login form",
    iframeSrc: "https://devsalmanquadri.github.io/login/",
    github: "https://github.com/devsalmanquadri/login",
    details:
      "This project demonstrates my proficiency in frontend development and implementing Login system.",
  },
  {
    title: "Portfolio 1",
    description:
      "My first portfolio project, showcasing foundational HTML and CSS skills.",
    iframeSrc: "https://devsalmanquadri.github.io/Portfolio1",
    github: "https://github.com/devsalmanquadri/Portfolio1",
    details:
      "This project was my initial exploration into web development, focusing on creating a visually appealing portfolio using basic web technologies.",
  },
  {
    title: "Portfolio 2",
    description:
      "An updated version of my personal portfolio, featuring enhanced design and functionality.",
    iframeSrc: "https://devsalmanquadri.github.io/portfolio2/",
    github: "https://github.com/devsalmanquadri/portfolio2",
    details:
      "This project represents my growth as a developer, incorporating new technologies and design principles to create a more polished and modern portfolio.",
  },
  {
    title: "To-Do App",
    description:
      "A simple to-do list application with task management capabilities.",
    iframeSrc: "https://devsalmanquadri.github.io/todo/",
    github: "https://github.com/devsalmanquadri/todo",
    details:
      "This project demonstrates my proficiency in frontend development by creating an intuitive and responsive task management application using html and css.",
  },
];

const Projects = () => {
  const [modalProject, setModalProject] = useState(null);

  return (
    <div className="relative flex flex-col items-center min-h-screen py-20 text-white sm:py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Title */}
      <h2 className="relative mb-10 text-4xl font-bold text-center text-white md:text-5xl">
        <span className="inline-block">
          <span className="block pb-3 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            My Projects
          </span>
          <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-green-400 to-blue-500"></span>
        </span>
      </h2>

      <div className="grid grid-cols-1 gap-8 px-4 md:px-12 lg:px-24 max-w-7xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative overflow-hidden transition-transform duration-300 transform bg-gray-800 shadow-lg cursor-pointer group rounded-xl hover:shadow-2xl"
            onClick={() => setModalProject(project)}
          >
            <div className="relative overflow-hidden h-60 sm:h-80">
              <iframe
                src={project.iframeSrc}
                title={project.title}
                className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-75 group-hover:opacity-100"
              />
              <div className="absolute inset-0 opacity-50 bg-gradient-to-t from-black to-transparent"></div>
            </div>
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-300">{project.description}</p>
              <div className="flex items-center mt-4 space-x-4">
                <a
                  href={project.iframeSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaExternalLinkAlt size={20} />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-auto bg-black bg-opacity-75">
          <div className="relative w-full max-w-4xl p-4 bg-gray-900 shadow-2xl rounded-xl md:p-6 md:max-w-6xl">
            <button
              className="absolute z-40 p-2 text-red-600 bg-black top-4 right-4 hover:text-gray-200 focus:outline-none"
              onClick={() => setModalProject(null)}
            >
              <FaTimes size={24} />
            </button>
            <div className="relative overflow-hidden h-[60vh] rounded-lg">
              <iframe
                src={modalProject.iframeSrc}
                title={modalProject.title}
                className="absolute inset-0 w-full h-full rounded-lg"
              />
            </div>
            <h2 className="mt-6 text-2xl font-bold md:text-3xl">
              {modalProject.title}
            </h2>
            <p className="mt-2 text-gray-400 md:text-lg">
              {modalProject.details}
            </p>
            <div className="flex items-center mt-6 space-x-4">
              <a
                href={modalProject.iframeSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-200"
              >
                <FaExternalLinkAlt size={24} />
              </a>
              <a
                href={modalProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-200"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
