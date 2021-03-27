/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, Fragment } from "react";
import AuthContext from "../context/Auth/authContext";



function NavBar(props) {
  const authContext = useContext(AuthContext);
  const { isAuthenicated, logout, user } = authContext;

  const userLogout = () => {
    logout();
    console.log("user logged out");
    props.history.push("/login");
  };
  return (
    <Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-dark sticky-top"
        style={{ backgroundColor: "black" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            BSC
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/login">
                      Login{" "}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/signup">
                      Signup{" "}
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!" onClick={userLogout}>
                      Logout{" "}
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Profile
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/kids">
                      Chores & Kids{" "}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Add Child{" "}
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Add Chore
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <h5 style={{ color: "white" }}> Hello: {user && user.name}</h5>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default NavBar;
