import React from "react";

function Widgets({ name }) {
  return (
    <div
      style={{
        height: "50px",
        backgroundColor: "grey",
        margin: "5px",
        padding: "10px",
      }}
    >
      {name}
    </div>
  );
}

export default Widgets;
