import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import Navbar from "../Navbar";
import { getCards } from "../../redux/actions/cardAction";

function Boxes({ card, getCards }) {
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);

  useEffect(() => {
    getCards();
  }, []);

  let cards1 = [],
    cards2 = [];

  card.items.map((item) => {
    if (item.boxId === 1) {
      cards1.push(item);
    } else {
      cards2.push(item);
    }
  });

  const check = cards1.length === 0 && cards2.length === 0;

  return (
    <div className="container">
      <Navbar />
      {check ? (
        <div className="lead">No cards found</div>
      ) : (
        <>
          <div className="container row">
            <div
              className="col-md-4 col-4"
              style={{ height: "50px", border: "1px solid gray" }}
              onClick={() => {
                setBox1(true);
                setBox2(false);
              }}
            >
              <h4>Box 1</h4>
            </div>
            <div
              className="col-md-4 col-4"
              style={{ height: "50px", border: "1px solid gray" }}
              onClick={() => {
                setBox2(true);
                setBox1(false);
              }}
            >
              <h4>Box 2</h4>
            </div>
          </div>
          {box1 && (
            <>
              <h4 style={{ marginBottom: "-45px", color: "red" }}>Box 1</h4>
              {cards1?.map((card1, idx) => (
                <div key={idx}>
                  <Card card={card1} />
                </div>
              ))}
            </>
          )}
          {box2 && (
            <>
              <h4 style={{ marginBottom: "-45px", color: "blue" }}>Box 2</h4>
              {cards2?.map((card2, idx) => (
                <div key={idx}>
                  <Card card={card2} />
                </div>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  card: state.card,
});

const mapDispatchToProps = (dispatch) => ({
  getCards: () => dispatch(getCards()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Boxes);
