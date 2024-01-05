import useStore from "../hooks/useStore";

function Counter() {
  const { count, increment, decrement } = useStore();
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">My Counter</h1>
      <div className="mt-4 flex justify-center items-center gap-x-4">
        <button onClick={decrement}>-</button>
        <p>{count}</p>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default Counter;
