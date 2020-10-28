import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import './cards.css';


function Card({ card }) {
  const [isFlipped, SetisFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    SetisFlipped(!isFlipped);
  };

  return (
    <div className='col-md-6'>
      <div className="flipping_card">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div
          className="card-blue"
          onClick={handleClick}
        >
          <spna>Question</spna>
          <div className="text-center lead">
            <strong>{card.question}</strong>
          </div>
          <div>
            <i className="fa fa-rotate-right" />
            Flip
          </div>
        </div>

        <div
          className="card-green"
          onClick={handleClick}
        >
          <spna>Answer</spna>
          <div className="text-center lead">
            <strong>{card.answer}</strong>
          </div>
          <div>
            <i className="fa fa-rotate-left" />
            Flip
          </div>
        </div>
      </ReactCardFlip>
      </div>
    </div>
  );
}

export default Card;
