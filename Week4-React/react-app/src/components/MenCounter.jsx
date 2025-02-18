const MenCounter = ({ count, setCount }) => {
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <div className="men-counter">
      <h2>Men</h2>
      <p>{count}</p>
      <div className="button-container">
        <button onClick={increment} className="button up-button">
          UP
        </button>
        <button onClick={decrement} className="button down-button">
          DOWN
        </button>
      </div>
    </div>
  );
};

export default MenCounter;
