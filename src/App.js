import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import data from "./data";
// Bootstrap 사용을 위한 import
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./component/detail";
import Home from "./component/home";

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  return (
    <div className="App">
      {/* 참고로 className으로 커스터마이징이 가능하다. */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">DYshop</Navbar.Brand>
          <Nav className="me-auto">
            {/* prettier-ignore */}
            <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
            {/* prettier-ignore */}
            <Nav.Link onClick={() => {navigate('/detail/0')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* url 파라미터 문법 */}
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        {/* path='*'은 지정한 경로 외에 모든 경로 */}
        <Route path="*" element={<div>없는 페이지야;;</div>} />
      </Routes>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
  // <Route path="/about" element={<About />}>
  //   <Route path="member" element={<div>멤버</div>} />
  //   <Route path="location" element={<About />} />
  // </Route>;
}

function About() {
  return (
    <div>
      <h4>회사정보</h4>
      {/* 빈 공간이다. 하위페이지를 넣을 공간이다. */}
      <Outlet></Outlet>
    </div>
  );
  // <Route path="/event" element={<Event />}>
  //   <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
  //   <Route path="two" element={<p>쿠폰 줄게</p>} />
  // </Route>;
}

export default App;
