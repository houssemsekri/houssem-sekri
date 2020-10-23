import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Data } from "../context/DataContext";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
const override = css`
  border-color: blue;
`;
toast.configure();
function Admin() {
  const [upload, setupload] = useState(0);
  useEffect(() => {
    document.title = "Admin";
    window.scrollTo(0, 0);
  }, []);
  const data = useContext(Data).data;
  const setloggin = useContext(Data).setloggin;
  const loggin = useContext(Data).loggin;

  useEffect(() => {
    const ifToken = loggin.token;
    if (ifToken) {
      axios.defaults.headers.common["x-auth-token"] = ifToken;
    } else {
      delete axios.defaults.headers.common["x-auth-token"];
    }
    const k = localStorage.getItem("cvToken");

    const h = async () => {
      if (k) {
        try {
          const res = await axios.post("/api/loggin", { token: k });
          if (res) {
            return 0;
          }
        } catch (error) {
          localStorage.setItem("cvToken", "");
          setloggin({
            ...loggin,
            isLoggin: false,
          });
        }
      } else {
        setloggin({
          ...loggin,
          isLoggin: false,
        });
      }
    };

    h();
  }, []);
  const education = useContext(Data).education;
  const fetchData = useContext(Data).fetchData;
  const project = useContext(Data).project;
  const [educ, seteduc] = useState();
  const [state, setstate] = useState([
    {
      name: "homeParagraph",
      label: "home Paragraph",
      value: data[0].homeParagraph,
    },
    {
      name: "homeFacebook",
      label: "home Facebook",
      value: data[0].homeFacebook,
    },
    { name: "homeGithub", label: "home Github", value: data[0].homeGithub },
    {
      name: "aboutParagraph",
      label: "about Paragraph",
      value: data[0].aboutParagraph,
    },
    {
      name: "age",
      label: "about age",
      value: data[0].age,
    },

    { name: "aboutCv", label: "about Cv", value: data[0].aboutCv },
    { name: "aboutSkill1", label: "about Skill1", value: data[0].aboutSkill1 },
    { name: "aboutSkill2", label: "about Skill2", value: data[0].aboutSkill2 },
    { name: "aboutSkill3", label: "about Skill3", value: data[0].aboutSkill3 },
    {
      name: "contactEmail",
      label: "contact Email",
      value: data[0].contactEmail,
    },
    {
      name: "contactAdress",
      label: "contact Adress",
      value: data[0].contactAdress,
    },
    {
      name: "contactPhone",
      label: "contactPhone",
      value: data[0].contactPhone,
    },
    {
      name: "skills",
      label: "sklls",
      value: data[0].skills.toString(),
    },
  ]);
  const [input, setinput] = useState({
    id: data[0]._id,
    homeImage: data[0].homeImage,
    homeParagraph: data[0].homeParagraph,
    homeFacebook: data[0].homeFacebook,
    homeGithub: data[0].homeGithub,
    aboutParagraph: data[0].aboutParagraph,
    aboutCv: data[0].aboutCv,
    aboutSkill1: data[0].aboutSkill1,
    aboutSkill2: data[0].aboutSkill2,
    aboutSkill3: data[0].aboutSkill3,
    contactPhone: data[0].contactPhone,
    contactAdress: data[0].contactAdress,
    contactEmail: data[0].contactEmail,
    skills: data[0].skills.toString(),
    age: data[0].age,
    aboutImage: data[0].aboutImage,
  });
  const [ed, seted] = useState();
  const handleChange = (e) => {
    setinput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const res = await axios.post("/api/basic", input);

      fetchData();
      toast.info("Updated with Succes", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } catch (error) {
      toast.error("you are not authorized", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };
  const handleChange2 = (e) => {
    seted({
      ...ed,
      [e.target.name]: e.target.value,
    });
  };
  const handleDelete = async (element) => {
    const id = element._id;
    try {
      const res = await axios.post("/api/educationdelete", { id });
      fetchData();
      toast.info("Deleted with succes", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } catch (error) {
      toast.error("you are not authorized", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };
  const handleDelete2 = async (element) => {
    const id = element._id;
    const image = element.image;
    try {
      const res = await axios.post("/api/projectdelete", { id, image });
      fetchData();
      toast.info("Deleted with succes", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } catch (error) {
      toast.error("you are not authorized", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };
  const handleSubmit2 = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/education", ed);

      fetchData();
      toast.info("Add  with Succes", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } catch (error) {
      toast.error("you are not authorized", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };
  const handleChange3 = async (e) => {
    if (e.target.name == "teck") {
      let teck = e.target.value;
      let newTeck = teck.split(",");

      seteduc({ ...educ, teck: newTeck });
    } else {
      seteduc({
        ...educ,

        [e.target.name]: e.target.value,
      });
    }
  };
  const handleSubmit3 = async (e) => {
    e.preventDefault();

    try {
      const res = await axios({
        method: "post",
        url: "/api/project",
        data: educ,

        header: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      });

      fetchData();
      toast.info("Add  with Succes", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } catch (error) {
      toast.error("you are not authorized", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };
  const handleLogout = () => {
    localStorage.setItem("cvToken", "");
    window.location.reload(false);
    setloggin({ ...loggin, token: "", isLoggin: false });
  };
  return (
    <section className="section-admin">
      <h1 className="heading-secondary ">Admin dashboard </h1>
      <div style={{ float: "right" }}>
        <button className="btn-loggin" onClick={handleLogout}>
          logout
        </button>
      </div>
      <p style={{ color: "red", marginBottom: "3rem" }}>
        {" "}
        Note : only admin can make changes
      </p>
      <form action="" className="form-admin">
        {state.map((element, index) => {
          return (
            <div className="form__group--admin" key={index}>
              <label htmlFor="" className="form__label--admin">
                {" "}
                {element.label}{" "}
              </label>
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                className="form__input--admin"
                name={element.name}
                defaultValue={element.value}
              />
            </div>
          );
        })}
        <div className="form__control">
          <a href="" className="btn--primary" onClick={handleSubmit}>
            Submit
          </a>
        </div>
      </form>
      <h3
        style={{
          marginTop: "6.5rem",
          marginBottom: "3.5rem",
          textTransform: "uppercase",
        }}
      >
        add education
      </h3>
      <form action="">
        <div className="form__group--admin">
          <label htmlFor="" className="form__label--admin">
            Year
          </label>
          <input
            onChange={(e) => handleChange2(e)}
            type="text"
            className="form__input--admin"
            name="year"
          />
        </div>
        <div className="form__group--admin">
          <label htmlFor="" className="form__label--admin">
            Title
          </label>
          <input
            onChange={(e) => handleChange2(e)}
            type="text"
            className="form__input--admin"
            name="title"
          />
          <div className="form__group--admin">
            <label htmlFor="" className="form__label--admin">
              desc
            </label>
            <input
              onChange={(e) => handleChange2(e)}
              type="text"
              className="form__input--admin"
              name="desc"
            />
          </div>
        </div>
        <div className="form__control">
          <a href="" className="btn--primary" onClick={handleSubmit2}>
            Submit
          </a>
        </div>
      </form>
      <h3
        style={{
          marginTop: "6.5rem",
          marginBottom: "3.5rem",
          textTransform: "uppercase",
        }}
      >
        delete education
      </h3>
      <ul>
        {education.map((element) => {
          return (
            <li
              key={element._id}
              style={{ marginBottom: "2.5rem" }}
              id={element._id}
            >
              {element.title}{" "}
              <span
                className="btn-cercle"
                onClick={() => handleDelete(element)}
                style={{ marginLeft: "2rem", cursor: "pointer", color: "red" }}
              >
                X
              </span>
            </li>
          );
        })}
      </ul>

      <h3
        style={{
          marginTop: "6.5rem",
          marginBottom: "3.5rem",
          textTransform: "uppercase",
        }}
      >
        add project
      </h3>
      <form action="">
        <div className="form__group--admin">
          <label htmlFor="image" className="form__label--admin">
            Image
          </label>
          <input
            onChange={(e) => handleChange3(e)}
            type="text"
            className="form__input--admin"
            name="image"
          />
        </div>
        <div className="form__group--admin">
          <label htmlFor="" className="form__label--admin">
            desc
          </label>
          <input
            onChange={(e) => handleChange3(e)}
            type="text"
            className="form__input--admin"
            name="desc"
          />
          <div className="form__group--admin">
            <label htmlFor="" className="form__label--admin">
              teck
            </label>
            <input
              onChange={(e) => handleChange3(e)}
              type="text"
              className="form__input--admin"
              name="teck"
            />
          </div>
          <div className="form__group--admin">
            <label htmlFor="" className="form__label--admin">
              live
            </label>
            <input
              onChange={(e) => handleChange3(e)}
              type="text"
              className="form__input--admin"
              name="live"
            />
          </div>
          <div className="form__group--admin">
            <label htmlFor="" className="form__label--admin">
              youtube
            </label>
            <input
              onChange={(e) => handleChange3(e)}
              type="text"
              className="form__input--admin"
              name="youtube"
            />
          </div>
          <div className="form__group--admin">
            <label htmlFor="" className="form__label--admin">
              github
            </label>
            <input
              onChange={(e) => handleChange3(e)}
              type="text"
              className="form__input--admin"
              name="github"
            />
          </div>
          <div className="form__group--admin">
            <label htmlFor="" className="form__label--admin">
              order
            </label>
            <input
              onChange={(e) => handleChange3(e)}
              type="text"
              className="form__input--admin"
              name="order"
            />
          </div>
        </div>
        <div className="form__control">
          <a href="" className="btn--primary" onClick={handleSubmit3}>
            Submit
          </a>
        </div>
      </form>
      <h3
        style={{
          marginTop: "6.5rem",
          marginBottom: "3.5rem",
          textTransform: "uppercase",
        }}
      >
        delete project
      </h3>
      <ul>
        {project.map((element) => {
          return (
            <li
              key={element._id}
              style={{ marginBottom: "2.5rem" }}
              id={element._id}
            >
              {element.desc}{" "}
              <span
                className="btn-cercle"
                onClick={() => handleDelete2(element)}
                style={{ marginLeft: "2rem", cursor: "pointer", color: "red" }}
              >
                X
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Admin;
