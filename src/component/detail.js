import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { Context1 } from "../App";

export default function Detail(props) {
  let [count, setCount] = useState(0);
  let [timer, setTimer] = useState(true);
  let [isNum, setIsNum] = useState(false);
  let [numInput, setNumInput] = useState("");
  let [탭, 탭변경] = useState(0);
  let [fade, setFade] = useState("");
  useEffect(() => {
    let a = setTimeout(() => {
      setFade("end");
    }, 10);
    return () => {
      clearTimeout(a);
      setFade("");
    };
  }, []);
  useEffect(() => {
    if (isNaN(numInput)) {
      setIsNum(true);
    } else {
      setIsNum(false);
    }
  }, [numInput]);
  // mount, update시 이 코드 실행
  useEffect(() => {
    // prettier-ignore
    let a = setTimeout(() => {setTimer(false);}, 2000);
    return () => {
      clearTimeout(a);
    }; // useEffect 동작 전에 실행되는 코드. 별칭 : clean up function. 기존 코드 제거할 때 사용. ex) 기존 타이머 제거
  }, []); //[conut]는 useEffect 실행조건 넣을 수 있는 곳이다. 아무 것도 안넣으면 mount때만 실행된다.

  let { id } = useParams();
  // 응용 자료의 순서가 변경되었을 때 상세페이지가 고장나는문제
  // 상품에 id를 부여해서 id값으로 데이터를 찾아서 페이지를 보여준다.
  let shoes = props.shoes.find(element => element.id === parseInt(id));

  return (
    <div className={`container start ${fade}`}>
      {timer ? <div className="alert alert-warning">2초이내 구매시 할인</div> : null}
      {/* prettier-ignore */}
      <button onClick={()=>{setCount(count + 1)}}>버튼</button>
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${parseInt(id) + 1}.jpg`} width="100%" />
        </div>
        <div className="col-md-6">
          {/* prettier-ignore */}
          <input style={{border: '3px solid red'}} onChange={(e)=>{setNumInput(e.target.value)}} />
          {isNum ? <div className="alert alert-warning">숫자만 입력해라~</div> : null}
          <h4 className="pt-5">{shoes.title}</h4>
          <p>{shoes.content}</p>
          <p>{shoes.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      <Nav variant="tabs" defalutActiveKey="link0">
        <Nav.Item>
          {/* prettier-ignore */}
          <Nav.Link className="animation" onClick={()=>{탭변경(0)}} eventKey="link0">이름</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          {/* prettier-ignore */}
          <Nav.Link onClick={()=>{탭변경(1)}} eventKey="link1">재고</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          {/* prettier-ignore */}
          <Nav.Link onClick={()=>{탭변경(2)}} eventKey="link2">가격</Nav.Link>
        </Nav.Item>
      </Nav>
      {<Tab 탭={탭} shoes={props.shoes} />}
    </div>
  );
}

function Tab({ 탭 }) {
  let { 재고, shoes } = useContext(Context1);
  let { id } = useParams();
  let [fade, setFade] = useState("");
  useEffect(() => {
    let a = setTimeout(() => {
      setFade("end");
    }, 10);
    return () => {
      clearTimeout(a);
      setFade("");
    };
  }, [탭]);
  return <div className={`start ${fade}`}>{[<div>{shoes[id].title}</div>, <div>{재고[0]}</div>, <div>{shoes[id].price}</div>][탭]}</div>;
}
