import React from "react";

function ArrowBottom({ ...props }) {
  return (
    <svg
      width={13 * props.scale || 1}
      height={5 * props.scale || 1}
      viewBox="0 0 13 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M6.5 0L0.870834 4.5L12.1292 4.5L6.5 0Z" />
    </svg>
  );
}

export default ArrowBottom;
