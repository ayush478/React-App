import React from "react";
import web from "./2.jpg";
import { NavLink } from "react-router-dom";
import Common from "./Common.jsx";

const Home = () => {
  return (
    <>
      <Common
        name=" Grow your buiseness with "
        imgsrc={web}
        visit="/Services"
        btnname="Get Started"
      />
    </>
  );
};

export default Home;
