import React from "react";
import { Avatar } from "@material-ui/core";
import Navbar from "./Navbar";
import { connect } from "react-redux";

function Profile({ auth }) {
  const name = auth.user.name;
  const email = auth.user.email;

  return (
    <div style={{ background: "color", height: "100vh" }}>
      <Navbar />
      <div
        className="card"
        style={{
          background: "#333",
          color: "white",
          transition: "all .5s ease-in-out",
        }}
      >
        {" "}
        <center>
          <div className="row d-flex justify-content-center align-items-center">
            <div
              className="col-md-3 d-flex justify-content-center align-items-center"
              style={{ margin: "20px 0" }}
            >
              <Avatar
                alt="Cindy Baker"
                style={{ height: "120px", width: "120px" }}
              />
            </div>
            <div
              className="col-md-9 d-flex align-items-start flex-column"
              style={{ textAlign: "start", margin: " 20px 0", padding: "10px" }}
            >
              <div style={{ width: "80%", padding: "10px" }}>
                <h4>
                  <span>Name: </span>
                  <br />
                  {name}
                </h4>
              </div>

              <div style={{ width: "80%", padding: "10px" }}>
                <h4>
                  <span>Email</span>
                  <br />
                  {email}
                </h4>
              </div>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}

const mapStatetoProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStatetoProps, null)(Profile);
