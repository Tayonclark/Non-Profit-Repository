import React from "react";

export default function Gallery() {
  return (
    <div>
      <h2>Our Programs</h2>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <div>
          <img src="/images/support.jpg" alt="Support Group" width={300} />
          <p>Support Group</p>
        </div>
        <div>
          <img src="/images/workshop.jpg" alt="Workshop" width={300} />
          <p>Workshop</p>
        </div>
        <div>
          <img src="/images/parent.jpg" alt="Parent Workshop" width={300} />
          <p>Parent Workshop</p>
        </div>
      </div>
    </div>
  );
}
