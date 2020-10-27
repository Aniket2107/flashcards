import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { addCard } from "../../redux/actions/cardAction";
import Navbar from "../Navbar";

function AddCards({ addCard }) {
  const [values, Setvalues] = useState({
    question: "",
    answer: "",
  });

  const { question, answer } = values;

  const handleChange = (name) => (event) => {
    Setvalues({ ...values, [name]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addCard(values);

    return <Redirect to="/cards" />;
  };

  return (
    <div className="container">
      <Navbar />
      <form className="form">
        <div className="form-group mt-4">
          <label> Question : </label>
          <input
            className="form-control"
            value={question}
            onChange={handleChange("question")}
            type="text"
          />
        </div>
        <div className="form-group mb-3">
          <label> Answer : </label>
          <textarea
            className="form-control"
            type="textarea"
            value={answer}
            onChange={handleChange("answer")}
          />
        </div>
        <button className="btn btn-success" onClick={onSubmit}>
          Add
        </button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (data) => dispatch(addCard(data)),
  };
};

export default connect(null, mapDispatchToProps)(AddCards);
