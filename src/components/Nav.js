// src/components/Nav.js
import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="MainNavigation" aria-label="Main_navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/donate" target="_blank">
            Donate
          </Link>
        </li>
        <li>
          <Link to="/programs">Programs</Link>
        </li>
        <li>
          <Link to="/about">About COPE</Link>
        </li>
      </ul>
    </nav>
  );
}
