// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Navbar.css";
// import logo from "../assets/images/logo.png";

const Navbar = () => {
  const navigateto = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const navItemsRef = useRef(null);

  // Function to toggle hamburger menu
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    const navItems = navItemsRef.current;
    if (isChecked) {
      navItems.classList.remove("show1");
    } else {
      navItems.classList.add("show1");
    }
  };

  // Function to handle navigation item click (on mobile)
  const handleNavItemClick = () => {
    setIsChecked(!isChecked);
    const navItems = navItemsRef.current;
    navItems.classList.remove("show1");
  };

  // useEffect to handle scroll behavior and sticky navbar
  useEffect(() => {
    let previousScrollPosition = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (previousScrollPosition < currentScrollY) {
        document.querySelector(".navbar").classList.add("hide");
      } else {
        document.querySelector(".navbar").classList.remove("hide");
      }

      if (currentScrollY > 20) {
        document.querySelector(".navbar").classList.add("sticky1");
      } else {
        document.querySelector(".navbar").classList.remove("sticky1");
      }

      previousScrollPosition = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="z-50 navbar">
        <div onClick={() => navigateto("/")} className="logo">
          {/* <img src={logo} alt="SQ" /> */}S<span>Q</span>
        </div>
        <input id="active1" type="checkbox" className="hidden" />
        <label
          htmlFor="active1"
          className="cursor-pointer hamburger"
          onClick={toggleCheckbox}
        >
          <input id="in1" type="checkbox" checked={isChecked} />
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </label>
        <ul className="navitems" ref={navItemsRef}>
          <li>
            <Link
              onClick={handleNavItemClick}
              to="/"
              className="hover:text-green-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={handleNavItemClick}
              to="/Projects"
              className="hover:text-green-400"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={handleNavItemClick}
              to="/Skills"
              className="hover:text-green-400"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              onClick={handleNavItemClick}
              to="/About"
              className="hover:text-green-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={handleNavItemClick}
              to="/Contact"
              className="hover:text-green-400"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
