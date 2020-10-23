import React, { useContext, useEffect } from "react";
import Decoration from "../components/Decoration";
import { AiFillGithub, AiOutlineYoutube } from "react-icons/ai";
import { MdOpenInBrowser } from "react-icons/md";
import { Data } from "../context/DataContext";
import { useLocation } from "react-router-dom";
function Portfolio() {
  const project = useContext(Data).project;
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Projects";
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <section className="section-project">
      <Decoration />
      <div className="project">
        <h2 className="heading-secondary">Projects</h2>

        <div className="card-project">
          {project.map((element) => {
            let path = `../../..${element.image}`;

            return (
              <div className="project__card" key={element._id}>
                {" "}
                <div className="project__image">
                  <a href={element.live ? element.live : ""} target="_blank">
                    <img
                      src={element.image}
                      alt=""
                      className="project__photo"
                    />
                  </a>
                </div>{" "}
                <div
                  className="div"
                  style={{
                    textAlign: "center",
                    marginTop: "2rem",
                    marginBottom: "-1.5rem",
                  }}
                >
                  {element.live ? (
                    <a
                      href={element.live}
                      target="_blank"
                      className="btn-cercle za"
                    >
                      <i class="fa fa-eye" aria-hidden="true"></i>
                    </a>
                  ) : null}
                  {element.github ? (
                    <a
                      href={element.github}
                      target="_blank"
                      className="btn-cercle za"
                    >
                      <i class="fa fa-code" aria-hidden="true"></i>
                    </a>
                  ) : null}

                  {element.youtube ? (
                    <a
                      href={element.youtube}
                      target="_blank"
                      className="btn-cercle za"
                    >
                      <AiOutlineYoutube title="youtube demo" />
                    </a>
                  ) : null}
                </div>
                <h3
                  className="project__heading"
                  style={{ textTransform: "lowercase" }}
                >
                  {element.desc}
                </h3>
                <ul className="project__text">
                  {element.teck.map((a, index) => {
                    return (
                      <li key={index} style={{ marginLeft: "1rem" }}>
                        <span>
                          <i class="fa fa-minus" aria-hidden="true"></i>
                        </span>{" "}
                        {a}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
