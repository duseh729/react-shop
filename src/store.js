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
    // 보통 i는 action으로 작명한다.
    // action.type : state변경함수 이름, action.payload : 파라미터
    increase(state, i) {
      // 파라미터(i)로 온 id 값을 찾아서 수량을 더하는 함수
      state.find(k => k.id === i.payload).count += 1;
    },
    addItem(state, data) {
      if (state.find(k => k.id === data.payload.id)) {
        state.find(k => k.id === data.payload.id).count += 1;
      } else {
        state.push(data.payload);
      }
    },
    removeItem(state, action) {
      console.log(state.findIndex(k => k.id === action.payload));
      // prettier-ignore
      state.splice(state.findIndex(k => k.id === action.payload), 1);
    },
  },
});
export let { increase, addItem, removeItem } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer, // redux store에 등록 문법
    cart: cart.reducer,
  },
});
