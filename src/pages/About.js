import React, { useEffect, useContext } from "react";
import { GrNode } from "react-icons/gr";
import { DiReact } from "react-icons/di";
import Decoration from "../components/Decoration";
import web from "../assets/svgs/web.png";
import h from "../assets/images/h.png";
import { Data } from "../context/DataContext";
import { useLocation } from "react-router-dom";
function About() {
  const data = useContext(Data).data;
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About";
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <section className="section-about">
      <div className="about">
        <div className="heading-box">
          <h2 className="heading-secondary">about me</h2>
        </div>
        <div className="about__box">
          <div className="about__image-container">
            <img src={h} alt="my photo" className="about__photo" />
          </div>
          <div className="about__text">
            <h3 className="heading-3rd">
              I am <span>houssem sekri</span>
            </h3>
            <p className="about__paragraph">{data[0].aboutParagraph}</p>
            <ul className="about__list">
              <li className="about__item">
                <b>Full name</b> houssem sekri
              </li>
              <li className="about__item">
                <b>Age</b> {data[0].age}
              </li>
              <li className="about__item">
                <b>Address</b> {data[0].contactAdress}{" "}
              </li>
              <li className="about__item">
                <b>Phone</b>
                {data[0].contactPhone}
              </li>
            </ul>
            <a href={data[0].aboutCv} className="btn--primary" target="_blank">
              Download Cv
            </a>
          </div>
        </div>
      </div>
      <div className="services">
        <h2 className="heading-secondary">Services</h2>

        <div className="card-container" data-os="fade-up">
          <div className="card">
            <div className="card__icon">
              <img src={web} alt="" style={{ width: "5rem" }} />
            </div>
            <div
              className="card__title"
              style={{ textTransform: "capitalize" }}
            >
              I Build Responsive Websites
            </div>
            <div className="card__text">{data[0].aboutSkill1}</div>
          </div>
          <div className="card">
            <div className="card__icon">
              <DiReact />
            </div>
            <div
              className="card__title"
              style={{ textTransform: "capitalize" }}
            >
              I build Web Applications
            </div>
            <div className="card__text">{data[0].aboutSkill2}</div>
          </div>
          <div className="card">
            <div className="card__icon">
              <GrNode />
            </div>
            <div
              className="card__title"
              style={{ textTransform: "capitalize" }}
            >
              I Build Restful API{" "}
            </div>
            <div className="card__text">{data[0].aboutSkill3}</div>
          </div>
        </div>
      </div>
      <Decoration />
    </section>
  );
}

export default About;
