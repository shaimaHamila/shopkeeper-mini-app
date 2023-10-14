import { orderedCake, restockCake } from "../features/cake/cakeSlice";
import store from "../store/store";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const Cake = () => {
  const numberOfCake = useAppSelector((state) => state.cake.numberOfCakes);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Number of cakes {numberOfCake}</h2>
      <button onClick={() => dispatch(orderedCake())}>Order cake</button>
      <button onClick={() => store.dispatch(restockCake(3))}>
        Restoke cakes
      </button>
    </div>
  );
};
export default Cake;
