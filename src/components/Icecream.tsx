import { useSelector } from "react-redux";
import {
  orderedIcecream,
  restockIcecream,
  selectNumberOfIcecream,
} from "../features/icecream/icecream";
import store from "../store/store";

const Icecream = () => {
  const numberOfIcream = useSelector(selectNumberOfIcecream);
  return (
    <div>
      <h2>Number of icecream {numberOfIcream}</h2>
      <button onClick={() => store.dispatch(orderedIcecream())}>
        Order icecream
      </button>
      <button
        onClick={() => {
          store.dispatch(restockIcecream(2));
        }}
      >
        Restoke icecreams
      </button>
    </div>
  );
};
export default Icecream;
