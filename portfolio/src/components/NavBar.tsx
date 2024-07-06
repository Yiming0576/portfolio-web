import React, { useState, useEffect } from "react";
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

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
    <Router>
      <nav className={`fixed w-full top-0 bg-white shadow-lg ${scrolled ? "scrolled" : ""}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div>
              <a href="/" className="flex items-center">
                <img src={logo} alt="Logo" className="h-8" />
              </a>
            </div>
            <div className="flex items-center">
              <div className="hidden md:flex space-x-4">
                <NavLink href="#home" active={activeLink === 'home'} onClick={() => onUpdateActiveLink('home')}>Home</NavLink>
                <NavLink href="#skills" active={activeLink === 'skills'} onClick={() => onUpdateActiveLink('skills')}>Skills</NavLink>
                <NavLink href="#projects" active={activeLink === 'projects'} onClick={() => onUpdateActiveLink('projects')}>Projects</NavLink>
              </div>
              <div className="flex items-center ml-4">
                <a href="#" className="text-gray-700 hover:text-blue-500 px-2">
                  <img src={navIcon1} alt="" className="h-6" />
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-500 px-2">
                  <img src={navIcon2} alt="" className="h-6" />
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-500 px-2">
                  <img src={navIcon3} alt="" className="h-6" />
                </a>
                <HashLink to='#connect'>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-full ml-4 hover:bg-blue-600">
                    <span className="font-medium">Let’s Connect</span>
                  </button>
                </HashLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Router>
  )
}

// NavLink component to handle navigation links
const NavLink = ({ href, active, onClick, children }: { href: string, active: boolean, onClick: () => void, children: React.ReactNode }) => {
  return (
    <a
      href={href}
      className={`text-gray-700 hover:text-blue-500 px-3 py-2 ${active ? 'font-semibold' : ''}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
};
