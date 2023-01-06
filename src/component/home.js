import { useState } from "react";
import data from "../data";

export default function Home() {
  let [shoes, setShoes] = useState(data);
  return (
    <>
      <div className="main-bg"></div>
      {/*{ bootstrap으로 비율 조절후 사진은 웹에서 가져옴 } */}
      <div className="container">
        <div className="row">
          {shoes.map((shoes, i) => {
            return <Shoes i={i} shoes={shoes} />;
          })}
        </div>
      </div>
    </>
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
