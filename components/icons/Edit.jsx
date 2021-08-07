import React from "react";

function Edit({ ...props }) {
  return (
    <svg
      width={16 * props.scale || 1}
      height={16 * props.scale || 1}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.3333 2.00004C11.5084 1.82494 11.7163 1.68605 11.9451 1.59129C12.1738 1.49653 12.419 1.44775 12.6666 1.44775C12.9143 1.44775 13.1595 1.49653 13.3882 1.59129C13.617 1.68605 13.8249 1.82494 14 2.00004C14.1751 2.17513 14.314 2.383 14.4087 2.61178C14.5035 2.84055 14.5523 3.08575 14.5523 3.33337C14.5523 3.58099 14.5035 3.82619 14.4087 4.05497C14.314 4.28374 14.1751 4.49161 14 4.66671L4.99998 13.6667L1.33331 14.6667L2.33331 11L11.3333 2.00004Z"
        stroke="#455ECE"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Edit;
