// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound";
import AboutPage from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";

const App = () => {
  const useCurrentRoute = () => {
    const location = useLocation();

    return location;
  };

  const location = useCurrentRoute();

  return (
    <>
      <div className="loader1">
        <div className="loader"></div>
      </div>

      {(location.pathname === "/" ||
        location.pathname === "/about" ||
        location.pathname === "/About" ||
        location.pathname === "/Skills" ||
        location.pathname === "/Projects" ||
        location.pathname === "/projects" ||
        location.pathname === "/skills") && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
