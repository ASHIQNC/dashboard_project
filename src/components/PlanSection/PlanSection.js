import React from "react";
import "./plansection.css";

const PlanSection = ({
  style,
  plan,
  value,
  discription,
  planuser,
  planstorage,
  storagestyle,
  basicdetail,
}) => {
  return (
    <div className="bottom__card__wrapper">
      <div className="left__section">
        <div>
          <button
            style={style}
            className="bottom__card__button__style mt-3 mb-3">
            {value}
          </button>
        </div>
        <h3> {plan}</h3>
        <p> {discription}</p>

        <div>
          <button style={style} className="bottom__card__button__style">
            Get Started{" "}
            <i
              class="fa-solid fa-arrow-right fa-sm mx-2"
              style={{ color: "#0d0d0d" }}></i>{" "}
          </button>
        </div>
      </div>
      <div className="right__section">
        <h6>What You'll get:</h6>

        {/*  */}
        <div className="mt-4">
          <i class=" fa-solid fa-user" style={{ color: "#0f0f0f" }}></i>

          <span class=" ms-2 mx-2">Upto {planuser} Users</span>
        </div>

        <div className="mt-4" style={storagestyle}>
          <i class="fa-solid fa-hard-drive" style={{ color: "#0f0f0f" }}></i>

          <span class=" ms-2 mx-2">Upto {planstorage}gb Storage</span>
        </div>

        <div className="mt-4" style={storagestyle}>
          <i class="fa-solid fa-envelope" style={{ color: "#0f0f0f" }}></i>

          <span class=" ms-2 mx-2">Email Support</span>
        </div>

        <div className="mt-4" style={{ display: "flex" }}>
          <i class="fa-solid fa-check-double" style={{ color: "#0f0f0f" }}></i>

          <span class=" ms-2 mx-2">{basicdetail}</span>
        </div>
      </div>
    </div>
  );
};

export default PlanSection;
