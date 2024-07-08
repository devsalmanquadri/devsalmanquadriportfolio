// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound";
import AboutPage from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import "./App.css";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  const useCurrentRoute = () => {
    const location = useLocation();

    return location;
  };

  const location = useCurrentRoute();
  window.addEventListener("load", function () {
    document.querySelector(".loader1").style.display = "none";
  });
  const shouldRenderNavbarAndFooter = () => {
    const paths = [
      "/",
      "/about",
      "/About",
      "/Skills",
      "/Projects",
      "/projects",
      "/contact",
      "/Contact",
      "/skills",
    ];

    return paths.includes(location.pathname);
  };

  return (
    <>
      <div className="loader1">
        <div className="loader"></div>
      </div>

      {shouldRenderNavbarAndFooter() && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      {shouldRenderNavbarAndFooter() && <Footer />}
    </>
  );
};

export default App;
