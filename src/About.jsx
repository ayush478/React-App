import React from "react";
import web from "./2.jpg";
import { NavLink } from "react-router-dom";
import Common from "./Common.jsx";

const About = () => {
  return (
    <>
      <Common
        name=" Innovation explored"
        imgsrc={web}
        visit="/Contact"
        btnname="Contact Us"
      />
    </>
  );
};

export default About;
