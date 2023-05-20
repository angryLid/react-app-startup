import { increment } from "../store/counter";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export default function () {
  const dispatch = useAppDispatch();
  const { value: count } = useAppSelector((s) => s.counter);

  return (
    <div>
      count: {count}
      <button onClick={() => dispatch(increment())}>increase</button>
    </div>
  );
}
