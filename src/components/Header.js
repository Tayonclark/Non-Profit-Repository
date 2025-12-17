import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="S_header">
      <div className="S_brand">
        <Link to="/">
          <img src="/logo.png" alt="COPE FOUNDATION logo" className="logo" />
        </Link>
        <div>
          <h1>COPE FOUNDATION</h1>
          <p className="Subtitle">
            Supporting families grieve with the loss of a child with healing
          </p>
        </div>
      </div>
    </header>
  );
}
