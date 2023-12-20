import React from "react";
import "./header.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <div>
      <div className="triangle__section"></div>
      <Navbar className="bg-body-white">
        <Container className="navbar__container__Wrapper">
          <Navbar.Collapse className="navbar__Wrapper">
            <div className="navbar__container">
              <div className="navbar__content">
                <img
                  src="https://i.postimg.cc/3wk5s8vs/0dcfb548989afdf22afff75e2a46a508-1-removebg-preview.png"
                  className="logo__style"
                  alt=""
                />
                <h6 className="top-navbar__header-section">
                  XYZ Enterprises Pvt. Ltd
                </h6>
              </div>
            </div>
            <div className="mx-2 arrow__down">
              <i class="fa-solid fa-arrow-down"></i>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
