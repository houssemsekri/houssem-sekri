import React, { Fragment, useEffect, useContext } from "react";
import Particles from "../components/Particule";
import { AiFillGithub } from "react-icons/ai";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import Decoration from "../components/Decoration";

import { Data } from "../context/DataContext";
function Home() {
  const data = useContext(Data).data;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Home";
  }, []);
  return (
    <Fragment>
      <Particles />
      <div className="section-home h-flex-center">
        <div className="text-box h-text-center">
          <h1 className="heading__primary">
            Hi, I am{" "}
            <span className="heading__primary__span"> Houssem Sekri </span>
          </h1>
          <p className="home__text h-text-center">{data[0].homeParagraph}</p>
          <a href={data[0].homeFacebook} className="btn-cercle" target="_blank">
            <FiFacebook />
          </a>

          <a href={data[0].homeGithub} target="_blank" className="btn-cercle">
            <AiFillGithub />
          </a>
        </div>
      </div>
      <Decoration />
    </Fragment>
  );
}

export default Home;
