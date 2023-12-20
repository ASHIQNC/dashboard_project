import React from "react";
import "./sidenavbar.css";

const SideNavbar = () => {
  return (
    <div className="side__bar__container">
      <div className="left__section__wrapper">
        <div className="navbar__content__wrapper">
          <img
            src="https://i.postimg.cc/Y2gsJQBq/download-removebg-preview.png"
            className="logo__style2"
            alt=""
          />
          <div class="navbar__avatar">
            <div className="avatar__wrapper">
              <img
                className="me-3 avatar__style "
                src="https://i.postimg.cc/JzvgHMwK/profile1.jpg"
                alt=""
              />
            </div>
            <div class="navbar__avatar__container">
              <h4 className="avatar__subheading">
                <b>John Doe</b>
              </h4>
              <p className="avatar__discription">Architect & Engineer</p>
            </div>
          </div>

          <ul class="nav nav-pills flex-column mt-4 list__style__wrapper">
            <li class="nav-item list__content__style">
              <a
                style={{ border: "1px solid lightgray", borderRadius: "10px" }}
                class="nav-link text-black list__content__subsection">
                <i
                  class="fs-5 fa-solid fa-user"
                  style={{ color: "#0f0f0f" }}></i>

                <span class="fs-5  ms-2 support__style">Dashboard</span>
              </a>
            </li>

            <li class="nav-item list__content__style">
              <a
                style={{ border: "1px solid lightgray", borderRadius: "10px" }}
                class="nav-link text-dark mt-3 list__content__subsection"
                role="button">
                <i
                  class="fs-5 fa-solid fa-sack-dollar"
                  style={{ color: "#0f0f0f" }}></i>
                <span class="fs-5 ms-2 support__style">Perks</span>
              </a>
            </li>

            <li class="nav-item list__content__style">
              <a
                style={{ border: "1px solid lightgray", borderRadius: "10px" }}
                class="nav-link text-dark mt-3 list__content__subsection">
                <i
                  class="fs-5 fa-solid fa-dollar-sign"
                  style={{ color: "#0f0f0f" }}></i>
                <span class="fs-5 ms-2 support__style">Addons</span>
              </a>
            </li>

            <li class="nav-item list__content__style">
              <a
                style={{ border: "1px solid lightgray", borderRadius: "10px" }}
                class="nav-link text-dark mt-3 list__content__subsection ">
                <i
                  class="fs-5 fa-solid fa-table-list"
                  style={{ color: "#0f0f0f" }}></i>
                <span class="fs-5  ms-2 support__style">FAQ</span>
              </a>
            </li>

            <li class="nav-item list__content__style">
              <a
                style={{ border: "1px solid lightgray", borderRadius: "10px" }}
                href="#"
                class="nav-link text-dark mt-3 list__content__subsection">
                <i
                  class="fs-5 fa-solid fa-user"
                  style={{ color: "#0f0f0f" }}></i>

                <span class="fs-5  ms-2 support__style">Support</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
