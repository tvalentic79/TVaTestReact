import React from "react";
import MyCard from "../card/my-card.component";
import "./card-list.stayles.css";
/* import Card from 'react-bootstrap/Card'; */
import CardDeck from "react-bootstrap/CardDeck";

const CardList = (props) => {
  console.log(props);
  return (
    /* <div className="card-list"> */
    /*  <Card key={monster.id} monster={monster} /> */

    <CardDeck className="card-list">
      {props.monsters.map((monster) => (
        <MyCard key={monster.id} monster={monster} />
      ))}
    </CardDeck>
  );
};

export default CardList;
