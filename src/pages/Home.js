// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <h1>Welcome To The COPE FOUNDATION</h1>
      <p>Connecting Our Paths Eternally COPE</p>

      <article className="Home_cards">
        <div className="card_1">
          <h2>Programs</h2>
          <p>Join a Group, Events, community</p>
          <Link to="/programs" className="click">
            Show Programs
          </Link>
        </div>

        <div className="card_2">
          <h2>Volunteer</h2>
          <p>Help us help families by Volunteering</p>
          <Link to="/contact" className="click">
            See Volunteer Positions
          </Link>
        </div>
      </article>
    </section>
  );
}
