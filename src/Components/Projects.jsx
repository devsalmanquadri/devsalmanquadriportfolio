// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";

const projects = [
  {
    title: "Multi Page Portfolio",
    description:
      "A comprehensive multi-page portfolio demonstrating advanced frontend development techniques.",
    iframeSrc: "https://devsalmanquadri.github.io/Multiport/", // Replace with your iframe URL
    github: "https://github.com/devsalmanquadri/Multiport",
    details:
      "This project includes multiple pages and advanced UI/UX features, highlighting my skills in responsive design and frontend development.",
  },
  {
    title: "Amazon Clone",
    description:
      "A clone of the Amazon website, focusing on replicating its home page.",
    iframeSrc: "https://devsalmanquadri.github.io/amazonclo/", // Replace with your iframe URL
    github: "https://github.com/devsalmanquadri/amazonclo",
    details:
      "This project showcases my ability to mimic website designs and using the fundamentals of html and css.",
  },
  {
    title: "Login System",
    description: "A basic login form",
    iframeSrc: "https://devsalmanquadri.github.io/login/", // Replace with your iframe URL
    github: "https://github.com/devsalmanquadri/login",
    details:
      "This project demonstrates my proficiency in frontend development and implementing Login system.",
  },
  {
    title: "Portfolio 1",
    description:
      "My first portfolio project, showcasing foundational HTML and CSS skills.",
    iframeSrc: "https://devsalmanquadri.github.io/Portfolio1", // Replace with your iframe URL
    github: "https://github.com/devsalmanquadri/Portfolio1",
    details:
      "This project was my initial exploration into web development, focusing on creating a visually appealing portfolio using basic web technologies.",
  },

  {
    title: "Portfolio 2",
    description:
      "An updated version of my personal portfolio, featuring enhanced design and functionality.",
    iframeSrc: "https://devsalmanquadri.github.io/portfolio2/", // Replace with your iframe URL
    github: "https://github.com/devsalmanquadri/portfolio2",
    details:
      "This project represents my growth as a developer, incorporating new technologies and design principles to create a more polished and modern portfolio.",
  },
  {
    title: "To-Do App",
    description:
      "A simple to-do list application with task management capabilities.",
    iframeSrc: "https://devsalmanquadri.github.io/todo/", // Replace with your iframe URL
    github: "https://github.com/devsalmanquadri/todo",
    details:
      "This project demonstrates my proficiency in frontend development by creating an intuitive and responsive task management application using html and css.",
  },
];

const Projects = () => {
  const [modalProject, setModalProject] = useState(null);

  return (
    <div className="flex flex-col items-center min-h-screen p-10 pt-24 bg-gradient-to-br from-purple-800 via-indigo-800 to-blue-800">
      <h2 className="mx-5 mb-10 text-3xl font-medium text-center border-b-4 border-green-600 font-ubuntu text-zinc-100 sm:text-2xl">
        My Projects
      </h2>
      <div className="grid w-full grid-cols-2 xl:grid-cols-1 gap-10 max-w-[80%]">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative flex-row p-6 transition-transform duration-500 transform shadow-2xl cursor-pointer group bg-white/10 backdrop-blur-md rounded-3xl hover:scale-105 hover:shadow-2xl"
            onClick={() => setModalProject(project)}
          >
            <div className="relative overflow-hidden rounded-2xl aspect-w-16 aspect-h-9">
              <iframe
                src={project.iframeSrc}
                title={project.title}
                className="absolute inset-0 w-full h-full transition-opacity duration-300 rounded-2xl group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 rounded-2xl"></div>
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-indigo-400">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-gray-300 line-clamp-3">
                {project.description}
              </p>
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

      {modalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 bg-black bg-opacity-60">
          <div className="relative w-full p-8 transition-all duration-300 shadow-xl max-w-[80%] md:max-w-full bg-white/20 backdrop-blur-2xl rounded-3xl">
            <button
              className="absolute text-white top-4 right-4 hover:text-indigo-200"
              onClick={() => setModalProject(null)}
            >
              <FaTimes size={24} />
            </button>
            <div className="relative mb-2 overflow-hidden rounded-2xl aspect-w-16">
              <iframe
                src={modalProject.iframeSrc}
                title={modalProject.title}
                className="absolute inset-0 object-cover w-full h-[70%] rounded-2xl"
                tabIndex={-1} // Ensure modal is focusable
              />
            </div>
            <h2 className="mb-2 text-3xl font-bold text-white">
              {modalProject.title}
            </h2>
            <p className="text-sm text-gray-300">{modalProject.details}</p>
            <div className="flex items-center mt-6 space-x-6">
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
