import React, { useContext } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Data } from "../context/DataContext";
import image from "../../src/assets/images/user.jpg";
function Picture(props) {
  const data = useContext(Data).data;
  return (
    <div className=" side-nav__picture-box">
      <div className="icon icon--nav" onClick={props.handleClick}>
        {" "}
        <div className="xd">
          {props.navToggle ? <AiOutlineClose /> : <GiHamburgerMenu />}{" "}
        </div>
      </div>
      <div className="photo">
        <img
          src={image}
          alt=""
          className="photo__user"
          style={{ background: "rgba(255,255,255,0.2)" }}
        />
      </div>
    </div>
  );
}

export default Picture;
