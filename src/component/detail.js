import { useParams } from "react-router-dom";

export default function Detail(props) {
  let { id } = useParams();
  // 응용 자료의 순서가 변경되었을 때 상세페이지가 고장나는문제
  // 상품에 id를 부여해서 id값으로 데이터를 찾아서 페이지를 보여준다.
  let shoes = props.shoes.find((element) => element.id === parseInt(id));

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${parseInt(id) + 1}.jpg`} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{shoes.title}</h4>
          <p>{shoes.content}</p>
          <p>{shoes.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}
