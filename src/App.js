import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
// Bootstrap 사용을 위한 import
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import data from "./data";

function App() {
  let [shoes, setShoes] = useState(data);
  return (
    <div className="App">
      {/* 참고로 className으로 커스터마이징이 가능하다. */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">DYshop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      {/* bootstrap으로 비율 조절후 사진은 웹에서 가져옴 */}
      <div className="container">
        <div className="row">
          {shoes.map((shoes, i) => {
            return <Shoes i={i} shoes={shoes} />;
          })}
        </div>
      </div>
    </div>
  );
}

function Shoes(props) {
  return (
    <div className="col-md-4" key={props.i}>
      <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
