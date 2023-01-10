import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { increase } from "../store";
import { changeName } from "../store/userSlice";

export default function Cart() {
  // 기본 문법임
  let cart = useSelector((state) => state.cart); // 가져오고 싶은 거만 가져올 수 있음.
  //Redux store에 있는 state를 가져옴
  let dispatch = useDispatch(); //store.js로 요청 보내주는 함수

  return (
    <div>
      <Table>
        <thead>
          {/* <tr> : 행 */}
          <tr>
            {/* <th>, <td> : 열 */}
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((data, i) => {
            return (
              <tr key={i}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.count}</td>
                <td>
                  <button
                    onClick={(e) => {
                      // store로 함수를 요청함. 파라미터는 id값을 보냄.
                      dispatch(increase(data.id));
                      console.log(data.id);
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
