import React from "react";
import { Cross, ChevronLeft } from "../../icons";
import s from "./SidebarLayout.module.css";

const SidebarLayout = ({ children, className, handleClose, handleBack }) => {
  return (
    <div className={`${s.root} ${className}`}>
      <header className={s.header}>
        {handleClose && (
          <button
            onClick={handleClose}
            aria-label="Close"
            className="hover:text-accent-5 transition ease-in-out duration-150 flex items-center focus:outline-none"
          >
            <Cross className="h-6 w-6 hover:text-accent-3" />
            <span className="ml-2 text-accent-7 text-sm ">Close</span>
          </button>
        )}
        {handleBack && (
          <button
            onClick={handleBack}
            aria-label="Go back"
            className="hover:text-accent-5 transition ease-in-out duration-150 flex items-center focus:outline-none"
          >
            <ChevronLeft className="h-6 w-6 hover:text-accent-3" />
            <span className="ml-2 text-accent-7 text-xs">Back</span>
          </button>
        )}
        <span className={s.nav}>
         USER NAV
        </span>
      </header>
      <div className={s.container}>{children}</div>
    </div>
  );
};

export default SidebarLayout;
