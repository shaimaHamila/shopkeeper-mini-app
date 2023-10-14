import { useState } from "react";
import "./App.css";
import store from "./store/store";
import { orderedCake, restockCake } from "./features/cake/cakeSlice";
import { orderedIcecream, restockIcecream } from "./features/icecream/icecream";
import { fetchUsers } from "./features/user/userSlice";
import Icecream from "./components/Icecream";
import { User } from "./components/User";
import Cake from "./components/Cake";

function App() {
  const [count, setCount] = useState(0);
  const handelOnClick = () => {
    setCount((count) => count + 1);
    // console.log("Updated State", store.getState()); // using logger middleware
    store.dispatch(orderedCake());
    store.dispatch(restockCake(3));
    store.dispatch(orderedIcecream());
    store.dispatch(restockIcecream(3));
  };
  return (
    <>
      <h1>Learn React redux toolkit </h1>
      <div className="card">
        <button type="button" onClick={handelOnClick}>
          count is {count}
        </button>
        <Cake />
        <Icecream />
        <User />
      </div>
    </>
  );
}

export default App;
