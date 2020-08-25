import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBox from "./components/serch-box/search-box.component";
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };

    //Ovaj di koda ne treba kao koristimo sintaksu: handleChange = (e) => {}
    //Ali ako koristimo sintaksu bez strelice onda ova linija ispod treba: handleChange(e){}
    /* this.handleChange = this.handleChange.bind(this); */
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

 /*  printState = () => {
    console.log("PrintState ", this.state);
  }; */

  handleChange = (e) => {
    this.setState({ searchField: e.target.value }, this.printState);
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <Container className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />

        <Row>
          <Col lg={16}>
            <CardList monsters={filteredMonsters}></CardList>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
