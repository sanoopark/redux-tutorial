import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
number.innerText = 0;

// reducer : 모든 데이터 변경에 대한 책임 -> 새로운 상태를 반환
const countModifier = (count = 0, action) => {
  if (action.type === "ADD") return count + 1;
  if (action.type === "MINUS") return count - 1;
  return count;
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

// subscribe : 상태 변경 후 실행
countStore.subscribe(onChange);

const handleAdd = () => {
  // dispatch : reducer에 action 전송
  countStore.dispatch({ type: "ADD" });
};

const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
