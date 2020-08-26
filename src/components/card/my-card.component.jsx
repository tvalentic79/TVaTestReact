import React from "react";
import "./card.styles.css";
import Card from "react-bootstrap/Card";

/* <div className="card card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      />
      <h2>{props.monster.name}</h2>
      <p> {props.monster.email}</p>
    </div> */

const MyCard = (props) => {
  return (
    <div className="my-card">
      <Card>
        <Card.Img
          variant="top"
         /*  src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} */
         src={`https://robohash.org/${props.monster.id}?set=set4&size=180x180`}
        />
        <Card.Body>
          <Card.Title>{props.monster.name}</Card.Title>
          <Card.Text>This content is a little bit longer. Nova verzija 77.</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{props.monster.email}</small>
          <small className="text-muted">{props.monster.email}</small>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default MyCard;
