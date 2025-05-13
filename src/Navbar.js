import React from 'react';

export default function Navbar({ onToggle }) {
  return (
    <nav className="navbar">
      <div className="Start">
        Anand
      </div>
      <div className="nav-links">
        <a href="#whoami">whoami</a>
        <a href="#essays">essays</a>
        <a href="#projects">projects</a>
      </div>
      <button className="toggle-btn" onClick={onToggle}>
        light/dark
      </button>
    </nav>
  );
}