// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Navbar.css";
// import logo from "../assets/images/logo.png";

const Navbar = () => {
  const navigateto = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const toggleCheckbox = () => {
    if (isChecked) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  };

  // eslint-disable-next-line no-unused-vars
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    window.addEventListener("scroll", function () {
      // Get the new Value
      currentScrollPosition = window.pageYOffset;

      //Subtract the two and conclude
      if (previousScrollPosition - currentScrollPosition < 0) {
        document.querySelector(".navbar").classList.add("hide");
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        document.querySelector(".navbar").classList.remove("hide");
      }

      // Update the previous value
      previousScrollPosition = currentScrollPosition;
    });
    const handleScroll = () => {
      // Get current scroll position
      const currentScrollY = window.scrollY;

      // Check scroll position and add/remove classes accordingly
      if (currentScrollY > 20) {
        document.querySelector(".navbar").classList.add("sticky1");
      } else {
        document.querySelector(".navbar").classList.remove("sticky1");
      }
      // Update scrollY state
      setScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <>
      <nav className="navbar">
        <div onClick={() => navigateto("/")} className="logo">
          {/* <img src={logo} alt="SQ" /> */}S<span>Q</span>
        </div>
        <input id="active1" type="checkbox" />
        <label htmlFor="active1" className="hamburger" onClick={toggleCheckbox}>
          <input
            id="in1"
            type="checkbox"
            checked={isChecked}
            onChange={toggleCheckbox}
          />
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </label>
        <ul className="navitems">
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
