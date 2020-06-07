import React from "react";

export default function ContentContainer({children}) {
  return (
    <div className="container bottom-space">
      <div className="column is-8 is-offset-2">
        {children}
      </div>
    </div>
  );
}