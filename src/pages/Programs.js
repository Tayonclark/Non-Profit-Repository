import React from "react";
import programsData from "../data/programs.json";
import ProgramCard from "../components/cards/ProgramCard";
import Gallery from "../components/Gallery";

export default function Programs() {
  return (
    <section>
      <h1>Programs</h1>
      <p>Our Programs are listed below</p>

      <div className="programs_MO">
        {programsData.map((p) => (
          <ProgramCard key={p.id} program={p} />
        ))}
      </div>

      <h2 id="resources">Resources</h2>
      <ul>
        <li>
          <a
            href="https://WWW.copefoundation.org/"
            targer="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Official COPE Foundation Website
          </a>
        </li>
        <li>
          <a href="#contact">| Contact us on our site</a>
        </li>
      </ul>
    </section>
  );
}
