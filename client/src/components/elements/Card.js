import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

function Card({ card }) {
  const [isFlipped, SetisFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    SetisFlipped(!isFlipped);
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div
          className="container card"
          style={{
            border: "1px solid grey",
          }}
          onClick={handleClick}
        >
          <spna>Question</spna>
          <div className="text-center lead">
            <strong>{card.question}</strong>
          </div>
          <div>
            <i className="fa fa-rotate-right" style={{ marginRight: "2px" }} />
            Flip
          </div>
        </div>

        <div
          className="container card"
          style={{
            border: "1px solid grey",
          }}
          onClick={handleClick}
        >
          <spna>Answer</spna>
          <div className="text-center lead">
            <strong>{card.answer}</strong>
          </div>
          <div>
            <i className="fa fa-rotate-left" style={{ marginRight: "2px" }} />
            Flip
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default Card;
