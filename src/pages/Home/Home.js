import React from "react";
import SideNavbar from "../../components/SideNavbar/SideNavbar";

import "./home.css";
import { Route, Routes } from "react-router-dom";
import Pnf from "../Pnf/pnf";
import Dashboard from "../Dashboard/Dashboard";

const Home = () => {
  return (
    <div className="home__container">
      <div className="home__sidebar">
        <SideNavbar></SideNavbar>
      </div>
      <div className="home__dashboard">
        <Routes>
          <Route path="/" element={<Dashboard></Dashboard>}></Route>
          <Route path="*" element={<Pnf></Pnf>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Home;
