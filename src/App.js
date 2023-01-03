import logo from "./logo.svg";
import "./App.css";
// Bootstrap 사용을 위한 import
import { Button, Navbar, Container, Nav } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      {/* 참고로 className으로 커스터마이징이 가능하다. */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">DYshop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
