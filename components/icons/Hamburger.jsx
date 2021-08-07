import React from "react";

function Hamburger({ ...props }) {
  return (
    <svg viewBox="0 0 36 24" width="24" height="24" className={props.className}>
      <rect
        y={props.gap * 0}
        width={props.lineWidth || "100"}
        height={props.lineHeight || "3"}
      ></rect>
      <rect
        y={props.gap * 1}
        width={props.lineWidth || "100"}
        height={props.lineHeight || "3"}
      ></rect>
      <rect
        y={props.gap * 2}
        width={props.lineWidth || "100"}
        height={props.lineHeight || "3"}
      ></rect>
    </svg>
  );
}

export default Hamburger;
