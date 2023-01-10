// state 저장하는 곳
import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    increase(state, i) {
      // 파라미터(i)로 온 id 값을 찾아서 수량을 더하는 함수
      state.find((k) => k.id === i.payload).count += 1;
    },
  },
});
export let { increase } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer, // redux store에 등록 문법
    cart: cart.reducer,
  },
});
