import React from "react";
import "./card.css";
import Card from "react-bootstrap/Card";
const CardSection = ({
  classname = "",
  title,
  subtitle,
  price,
  style,
  user,
  storage,
  email,
}) => {
  return (
    <div className="card__Wrapper">
      <Card className="card__container__section mb-4 mt-3">
        <Card.Body>
          <Card.Title class="heading__style__wrapper">{title}</Card.Title>
          <Card.Subtitle class="mb-2 text-muted number__style">
            ${subtitle}/mon
          </Card.Subtitle>
          <Card.Subtitle class="mb-2 text-muted number__style__sub-section">
            ${price}/mon
          </Card.Subtitle>

          <div>
            <button
              style={style}
              className={`${classname} button__style__wrapper`}>
              Get Started{" "}
              <i
                class="fa-solid fa-arrow-right fa-sm mx-2"
                style={{ color: "#0d0d0d" }}></i>
            </button>
          </div>
          <hr />
          <h6>What You'll get:</h6>

          {/*  */}
          <div className="mt-4">
            <i class=" fa-solid fa-user" style={{ color: "#0f0f0f" }}></i>

            <span class=" ms-2 mx-2">Upto {user} Users</span>
          </div>

          {/* storage */}
          <div className="mt-4">
            <i class="fa-solid fa-hard-drive" style={{ color: "#0f0f0f" }}></i>

            <span class=" ms-2 mx-2">Upto {storage}gb Storage</span>
          </div>
          {/* email */}
          <div className="mt-4">
            <i class="fa-solid fa-envelope" style={{ color: "#0f0f0f" }}></i>

            <span class=" ms-2 mx-2">{email}</span>
          </div>

          <h6 className="text__style-explore">EXPLORE FEATURES</h6>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardSection;
