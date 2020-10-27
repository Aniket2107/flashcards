import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/actions/authActions";

function Navbar({ auth, logout, history }) {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="#">
            Churan
          </Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cards">Flashcards</Link>
          </li>
          <li>
            <Link to="/memorize">Memorize</Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          {!auth.isAuthenticated && (
            <React.Fragment>
              <li>
                <Link to="/register">
                  <span className="glyphicon glyphicon-user"></span> Sign Up
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <span className="glyphicon glyphicon-log-in"></span> Login
                </Link>
              </li>
            </React.Fragment>
          )}
          {auth.isAuthenticated && (
            <React.Fragment>
              <li>
                <Link to="/profile">
                  <span className="glyphicon glyphicon-user"></span> Profile
                </Link>
              </li>
              <li
                onClick={() => {
                  logout();
                  history.push("/login");
                }}
              >
                {" "}
                <Link to="/login">
                  <span className="glyphicon glyphicon-log-in"></span> Logout
                </Link>
              </li>
            </React.Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));
