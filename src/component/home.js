import { useState } from "react";
import data from "../data";
import axios from "axios";

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
      <button
        onClick={() => {
          // axios.get를 활용한 데이터 가져오기.
          // prettier-ignore
          axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((result)=>{
            let copy = [...shoes]
            result.data.forEach((a)=>{copy = copy.concat(a)})
            setShoes(copy)
          })
          // 데이터 요청 실패시 실행될 코드
          .catch(()=>{
            console.log('실패;;')
          })
        }}
      >
        버튼
      </button>
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
