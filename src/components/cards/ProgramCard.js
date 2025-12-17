import React, { useState } from "react";

export default function ProgramCard({ program }) {
  const [activeProgramId, setActiveProgramId] = useState(null);
  const h_Click = () => {
    setActiveProgramId(activeProgramId === program.id ? null : program.id);
  };

  const getPopupImage = () => {
    if (program.id === "p_1") {
      return "/images/support.jpg";
    }
    if (program.id === "p_2") {
      return "/images/workshop.jpg";
    }
    return null;
  };

  const popupImage = getPopupImage();

  return (
    <article className="Programcard">
      <h2
        style={{ cursor: popupImage ? "pointer" : "default" }}
        onClick={popupImage ? h_Click : undefined}
      >
        {program.title}
      </h2>

      {activeProgramId === program.id && popupImage && (
        <img
          src={popupImage}
          alt={program.title}
          width={350}
          style={{ margin: "1rem 0" }}
        />
      )}

      <p>{program.summary}</p>
    </article>
  );
}
