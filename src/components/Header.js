import React, { useState, useEffect } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";
import { FiSun } from "react-icons/fi";
import Picture from "./Picture";
import Navigation from "./Navigation";
import Footer from "./Footer";

function Header() {
  const hh = localStorage.getItem("dark");
  let init;
  if (hh == 1) {
    init = false;
  } else if (hh == 2) {
    init = true;
  } else {
    init = false;
  }
  const [dark, setdark] = useState(init);

  useEffect(() => {
    function set() {
      if (!dark) {
        let root = document.documentElement;
        root.style.setProperty("--color-blue-light", "#068bf4");
        root.style.setProperty("--color-blue-dark-1", "#235f9a");
        root.style.setProperty("--color-blue-dark-2", "#013161");
        root.style.setProperty("--color-blue-dark-3", "#013366");
        root.style.setProperty("--color-border", "#007bff");
        root.style.setProperty("--color-blue", "#068bf4");
        root.style.setProperty("--color-grey-dark", "rgb(236, 234, 234)");
        root.style.setProperty("--color-white", "white");
        root.style.setProperty("--color-black", "black");
      }
      if (dark) {
        let root = document.documentElement;
        root.style.setProperty("--color-blue-light", "#037fff");
        root.style.setProperty("--color-blue-dark-1", "#2e344e");
        root.style.setProperty("--color-blue-dark-2", "#191d2b");
        root.style.setProperty("--color-blue-dark-3", "#10121b");
        root.style.setProperty("--color-border", "#1b1f2f");
        root.style.setProperty("--color-blue", "#007bff");
        root.style.setProperty("--color-grey-dark", "#a4acc4");
        root.style.setProperty("--color-white", "white");
        root.style.setProperty("--color-black", "black");
      }
    }
    set();
    return function cleanup() {
      if (!dark) {
        localStorage.setItem("dark", 2);
      } else {
        localStorage.setItem("dark", 1);
      }
    };
  }, [dark]);

  const [navToggle, setnavToggle] = useState(true);
  const handleClick = () => {
    setnavToggle(!navToggle);
    console.log(navToggle);
    window.scrollTo(0, 0);
  };
  let navClass;
  if (navToggle) {
    navClass = `side-nav side-nav--open`;
  } else {
    navClass = `side-nav`;
  }

  return (
    <React.Fragment>
      <div className={navClass}>
        <Picture handleClick={handleClick} navToggle={navToggle} />
        <div
          style={{
            width: "100%",
            display: "flex",

            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <div
            onClick={() => setdark(!dark)}
            style={{ cursor: "pointer", fontSize: "2.5rem" }}
          >
            {dark ? <WiMoonAltWaningCrescent4 /> : <FiSun />}
          </div>
          <div style={{ marginTop: "0.5rem", marginLeft: "1.7rem" }}>
            <a
              href="https://houssem-sekri-portfolio-fr.herokuapp.com/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                src="https://cdn.webshopapp.com/shops/94414/files/54002808/france-flag-icon-free-download.jpg"
                style={{ width: "2rem" }}
                alt=""
              />
              <span style={{ marginLeft: "0.5rem" }}>FR</span>
            </a>
          </div>
        </div>
        <Navigation handleClick={handleClick} navToggle={navToggle} />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Header;
