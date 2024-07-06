import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.svg";
import navIconlinkedin from "../assets/images/nav-icon1-lin.svg";
import navIconInstgram from "../assets/images/nav-icon-ins.svg";
import navIconGithub from "../assets/images/nav-icon-git.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value: React.SetStateAction<string>) => {
    setActiveLink(value);
  }

  return (
    <nav className={`fixed w-full top-0 bg- shadow-lg ${scrolled ? "scrolled" : ""}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div>
            <a href="/" className="flex items-center">
              <img src={logo} alt="Logo" className="h-8" />
            </a>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex space-x-4">
              <Link to="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}  >Home</Link>
              <Link to="#skills" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('skills')}>Skills</Link>
              <Link to="#projects" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Link>
              
            </div>
            <div className="flex items-center ml-4">
              <a href="#" className="text-gray-700 hover:text-blue-500 px-2">
                <img src={navIconlinkedin} alt="" className="h-6" />
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-500 px-2">
                <img src={navIconGithub} alt="" className="h-6" />
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-500 px-2">
                <img src={navIconInstgram} alt="" className="h-6" />
              </a>
              <Link to='#connect'>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full ml-4 hover:bg-blue-600">
                  <span className="font-medium">Let’s Connect</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
