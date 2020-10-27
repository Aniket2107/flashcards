import Axios from "axios";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { API } from "../../backend";

import { right, wrong } from "../../redux/actions/boxAction";
import Navbar from "../Navbar";

function Memorize({ card, right, wrong }) {
  const [currentQuestion, SetcurrentQuestion] = useState(0);
  const [isFlipped, SetisFlipped] = useState(false);
  const [score, Setscore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    SetisFlipped(!isFlipped);

    if (currentQuestion >= questions.length - 1) {
      console.log("yes");
      setShowScore(true);
    }
  };

  const questions = card.items;

  const handleRight = () => {
    Setscore(score + 1);
    right(questions[currentQuestion]);
    SetcurrentQuestion(currentQuestion + 1);
    SetisFlipped(!isFlipped);
  };

  const handleWrong = () => {
    wrong(questions[currentQuestion]);
    SetcurrentQuestion(currentQuestion + 1);
    SetisFlipped(!isFlipped);
  };

  const storeDb = () => {
    let token = localStorage.getItem("token");
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let data = {
      score: score,
      date: new Date(),
    };

    Axios.post(`${API}addScore`, data, config)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <Navbar />
      <div>
        <Link
          to="/boxes"
          className="btn"
          style={{ background: "grey", color: "white" }}
        >
          Boxes
        </Link>
      </div>

      {showScore ? (
        <div>
          You scored {score} out of {questions.length}
          {storeDb()}
        </div>
      ) : (
        <div
          style={{
            border: "1px solid gray",
            width: "500px",
            height: "70px",
            marginTop: "50px",
          }}
        >
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div>
              <div className="text-center lead m-2">
                {questions[currentQuestion].question}
              </div>
              <div>
                <button onClick={handleClick} className="btn btn-info">
                  Check
                </button>
              </div>
            </div>
            <div>
              <div>
                <div className="text-center lead">
                  {questions[currentQuestion].answer}
                </div>
                <div>
                  <button className="btn btn-danger" onClick={handleWrong}>
                    Wrong
                  </button>
                  <button className="btn btn-success" onClick={handleRight}>
                    Right
                  </button>
                </div>
              </div>
            </div>
          </ReactCardFlip>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  card: state.card,
});

const mapDispatchToProps = (dispatch) => ({
  right: (data) => dispatch(right(data)),
  wrong: (data) => dispatch(wrong(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Memorize);
