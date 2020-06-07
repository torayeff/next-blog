import React from "react";

export default function ContentCard({title, children}) {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title title is-4 is-centered">
          {title}
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
}