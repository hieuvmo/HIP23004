import { Button } from "antd";

import { useAppDispatch, useAppSelector } from "hooks/useRedux";
import { decrement, increment } from "redux/features/counter.slice";
import { RootState } from "redux/store";

const Home = () => {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state: RootState) => state.counter);

  return (
    <div>
      <Button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </Button>
      <span>{value}</span>
      <Button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </Button>
    </div>
  );
};

export default Home;
