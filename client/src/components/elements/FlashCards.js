import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "../Navbar";
import Card from "../elements/Card";
import { getCards } from "../../redux/actions/cardAction";

function FlashCards({ card, getCards }) {
  useEffect(() => {
    getCards();
  }, [getCards]);

  const cards = card.items;

  return (
    <div style={{ background: "black", height: "100vh" }}>
      <Navbar />
      <div className="container">
        <div style={{ float: "right" }}>
          <Link to="/addCards" className="btn btn-primary">
            Add Cards
          </Link>
        </div>
        <br />
        <br />
        <div className="row">
          {card.loading && <div className="lead">Loading ...</div>}
          {cards?.map((cardM, idx) => (
            <Card card={cardM} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    card: state.card,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCards: () => dispatch(getCards()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FlashCards);
