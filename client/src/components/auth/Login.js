import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../redux/actions/authActions";
import Navbar from "../Navbar";

function Login({ auth, login }) {
  const [values, Setvalues] = useState({
    email: "",
    password: "",
  });

  const { email, password } = values;

  const handleChange = (name) => (event) => {
    Setvalues({ ...values, [name]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login(values);
  };

  const performRedirect = () => {
    if (auth.isAuthenticated) {
      return <Redirect to="/cards" />;
    }
  };

  const registerForm = () => {
    return (
      <form>
        {auth.error && (
          <div className="col-3">
            <div className="alert alert-danger">{auth.error}</div>
          </div>
        )}

        <div className="form-group">
          <label>Email : </label>
          <input
            type="email"
            value={email}
            onChange={handleChange("email")}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Password : </label>
          <input
            type="password"
            value={password}
            onChange={handleChange("password")}
            className="form-control"
          />
        </div>
        <button className="btn btn-warning text-dark" onClick={onSubmit}>
          Login
        </button>
      </form>
    );
  };

  return (
    <div className="container">
      {performRedirect()}
      <Navbar />
      <h1>Login</h1>
      {registerForm()}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(login(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
