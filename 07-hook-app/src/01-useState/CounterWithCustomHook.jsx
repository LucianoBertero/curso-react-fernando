import { useCounter } from "../hooks/useCounter";

const CounterWithCustomHook = () => {
  const { counter, increment, reset, decrement } = useCounter(20);

  return (
    <>
      <h1>counter with Hook:{counter}</h1>
      <hr />
      <button onClick={() => increment(2)} className="btn btn-primary">
        +1
      </button>
      <button onClick={reset} className="btn btn-primary">
        reset
      </button>
      <button onClick={() => decrement()} className="btn btn-primary">
        -1
      </button>
    </>
  );
};

export default CounterWithCustomHook;
