import React from "react";
import spinner from "./spinner.gif";

function Spinner() {
  return (
    <div className="spinner-container">
      <img
        src={spinner}
        alt="Loading..."
      />
    </div>
  );
}

export default Spinner;
