import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import Navbar from "../Navbar";
import { getCards } from "../../redux/actions/cardAction";

function Boxes({ card, getCards }) {
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [box3, setBox3] = useState(false);

  useEffect(() => {
    getCards();
  }, []);

  let cards1 = [],
    cards2 = [],
    cards3 = [];

  card.items.map((item) => {
    if (item.boxId === 1) {
      cards1.push(item);
    } else if (item.boxId === 2) {
      cards2.push(item);
    } else {
      cards3.push(item);
    }
  });

  const check = cards1.length === 0 && cards2.length === 0;

  return (
    <div style={{ background: "color", height: "100vh" }}>
      <Navbar />
      {check ? (
        <div className="lead">No cards found</div>
      ) : (
        <>
          <div className="row">
            <div
              className="col-md-4 col-4"
              style={{ height: "50px", border: "1px solid gray" }}
              onClick={() => {
                setBox1(true);
                setBox2(false);
                setBox3(false);
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
                setBox3(false);
              }}
            >
              <h4>Box 2</h4>
            </div>
            <div
              className="col-md-4 col-4"
              style={{ height: "50px", border: "1px solid gray" }}
              onClick={() => {
                setBox3(true);
                setBox2(false);
                setBox1(false);
              }}
            >
              <h4>Box 3</h4>
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
          {box3 && (
            <>
              <h4 style={{ marginBottom: "-45px", color: "blue" }}>Box 2</h4>
              {cards3?.map((card3, idx) => (
                <div key={idx}>
                  <Card card={card3} />
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
