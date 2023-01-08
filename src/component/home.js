import { useState } from "react";
import data from "../data";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  let [shoes, setShoes] = useState(data);
  return (
    <>
      <div className="main-bg"></div>
      {/*{ bootstrap으로 비율 조절후 사진은 웹에서 가져옴 } */}
      <div className="container">
        <div className="row">
          {shoes.map((shoes, i) => {
            return <Shoes i={i} shoes={shoes} key={i} />;
          })}
        </div>
      </div>
      <button
        onClick={() => {
          // axios.get를 활용한 데이터 가져오기.
          // prettier-ignore
          axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result)=>{
              let copy = [...shoes, ...result.data];
              setShoes(copy);
            })
            // 데이터 요청 실패시 실행될 코드
            .catch(()=>{
              console.log('실패;;')
          })
        }}
      >
        더보기
      </button>
    </>
  );
}
function Load() {
  return (
    <>
      <div className="alert alert-warning">로딩중이야~</div>
    </>
  );
}

function Shoes(props) {
  return (
    <div className="col-md-4" key={props.i}>
      <Link className="link" to={`/detail/${props.i}`}>
        <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} width="80%" />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
      </Link>
    </div>
  );
}
