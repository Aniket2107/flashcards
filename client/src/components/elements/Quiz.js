import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { connect } from "react-redux";
import Axios from "axios";
import { API } from "../../backend";
import { right, wrong } from "../../redux/actions/boxAction";
import "./cards.css";

function Quiz({ questions, right, wrong }) {
  const [currentQuestion, SetcurrentQuestion] = useState(0);
  const [isFlipped, SetisFlipped] = useState(false);
  const [score, Setscore] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    SetisFlipped(!isFlipped);
  };

  const handleRight = () => {
    Setscore(score + 1);
    right(questions[currentQuestion]);
    if (currentQuestion < questions.length) {
      SetcurrentQuestion(currentQuestion + 1);
    }
    SetisFlipped(!isFlipped);
  };

  const handleWrong = () => {
    wrong(questions[currentQuestion]);
    if (currentQuestion <= questions.length) {
      SetcurrentQuestion(currentQuestion + 1);
    }
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
    <div style={{ background: "black", height: "100vh" }}>
      {questions[currentQuestion] ? (
        <>
          <div>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
              <div>
                <div className="text-center lead m-2 card-blue">
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
                  <div className="text-center lead card-purple">
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
        </>
      ) : (
        <div style={{ color: "white" }}>
          You scored {score} out of {questions.length}
          {storeDb()}
        </div>
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  right: (data) => dispatch(right(data)),
  wrong: (data) => dispatch(wrong(data)),
});

export default connect(null, mapDispatchToProps)(Quiz);
