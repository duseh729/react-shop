import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  //useState랑 비슷함
  name: "user",
  initialState: { name: "kim", age: 20 },
  // redux 함수 만드는 문법
  reducers: {
    changeName(state) {
      return `john ${state}`;
    },
    userIncrease(state, a) {
      state.age += a.payload; // userIncrease(10) 파라미터(10)를 사용하기 위한 문법
    },
  },
});

export let { changeName } = user.actions; // state 변경함수들이 남는다.
export default user;
