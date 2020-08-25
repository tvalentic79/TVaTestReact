import React from "react";
import "./card.styles.css";
import Card from "react-bootstrap/Card";

const MyCard = (props) => {
  return (
    /* <div className="card card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      />
      <h2>{props.monster.name}</h2>
      <p> {props.monster.email}</p>
    </div> */
<div className="my-card">
    <Card>
      <Card.Img
        variant="top"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      />
      <Card.Body>
        <Card.Title>{props.monster.name}</Card.Title>
        <Card.Text>This content is a little bit longer.</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{props.monster.email}</small>
      </Card.Footer>
    </Card>
    </div>
  );
};

export default MyCard;