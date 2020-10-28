import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Landing() {
  return (
    <div className="">
      <Navbar />

      <div className="container">
      <div
        className="d-flex justify-content-center align-items-center row"
        style={{ marginTop: "50px" }}
      >
        <div className="col-md-6 col-6">
          <h1>Churan for SILENCERS ;) </h1>
          <hr />
          <p>
            Lorem ipsum dolor sit amet recusandae expedita, quisquam iure
            voluptatibus molestiae perferendis quas adipisci corrupti
            consectetur magnam veniam amet aliquid voluptate atque incidunt
            cumque!
          </p>
          <hr />
          <Link to="/login">
            <button
              type="button"
              className="btn btn-info"
              style={{ marginRight: "15px" }}
            >
              Login
            </button>
          </Link>
          <Link to="/register">
            <button type="button" className="btn btn-outline-info">
              Register
            </button>
          </Link>
        </div>
        <div className="col-md-6 col-6">
          <img src="/home.png" className="img-responsive" alt="Langing" />
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default Landing;
