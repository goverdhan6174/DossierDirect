import { useState, useEffect, useRef } from "react";
import s from "./Navbar.module.css";

const NavbarRoot = ({ children }) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const lastCalledRef = useRef(false);

  const throttle = (fn, delay) => {
    let lastCalled = lastCalledRef.current;
    return (...args) => {
      let now = new Date().getTime();
      if (now - lastCalled < delay) {
        return;
      }
      lastCalledRef.current = now;
      return fn(...args);
    };
  };

  useEffect(() => {
    const handleScroll = throttle(() => {
      const offset = 0;
      const { scrollTop } = document.documentElement;
      const scrolled = scrollTop > offset;

      if (hasScrolled !== scrolled) {
        setHasScrolled(scrolled);
        console.log("show Nav Bar");
      }
    }, 200);

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  return <div className={s.root}>{children}</div>;
};

export default NavbarRoot;
