import React from "react";
import MyCard from "../card/my-card.component";
import "./card-list.stayles.css";
/* import Card from 'react-bootstrap/Card'; */
import CardDeck from "react-bootstrap/CardDeck";

/* <div className="card-list"> */
/*  <Card key={monster.id} monster={monster} /> */

const CardList = (props) => {
  console.log(props);
  return (
    <CardDeck className="card-deck">
      {props.monsters.map((monster) => (
        <MyCard key={monster.id} monster={monster} />
      ))}
    </CardDeck>
  );
};

export default CardList;
