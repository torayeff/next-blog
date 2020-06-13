import React from "react";

export default function ContentContainer({children}) {
  return (
    <div className="container bottom-space">
      <div className="column is-10 is-offset-1">
        {children}
      </div>
    </div>
  );
}