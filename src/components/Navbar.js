import React from "react";

function Navbar() {
  return (
    <>
      <div className="d-flex justify-content-between navi">
        <a>
          <img
            src="https://startupz.world/images/white-logo.png"
            className="images"
            alt="..."
          />
        </a>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link fs-4" aria-current="page" href="#">
              HOME
            </a>
          </li>
          <li className="nav-item fs-4">
            <a className="nav-link" href="#">
              STARTUP
            </a>
          </li>
          <li className="nav-item fs-4">
            <a className="nav-link" href="#">
              INVESTOR
            </a>
          </li>
          <li className="nav-item fs-4">
            <a className="nav-link">ABOUT US</a>
          </li>
          <li className="nav-item fs-4">
            <a className="nav-link">LOG IN</a>
          </li>
          <button type="button" className="fs-4 btn btn-danger">ADD LISTING</button>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
