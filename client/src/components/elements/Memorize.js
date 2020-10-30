import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./cards.css";
import Quiz from "./Quiz";

function Memorize({ card }) {
  let questions = card.items;

  useEffect(() => {
    shuffleData(questions);
  }, []);

  const shuffleData = (data) => {
    let i = data.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1)),
        temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    questions = data;
    return data;
  };

  console.log(questions);

  return (
    <div className="" style={{ background: "black", height: "100vh" }}>
      <Navbar />
      <div className="container">
        <div>
          <Link
            to="/boxes"
            className="btn"
            style={{ background: "grey", color: "white" }}
          >
            Boxes
          </Link>
        </div>
        <Quiz questions={questions} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  card: state.card,
});

export default connect(mapStateToProps, null)(Memorize);
