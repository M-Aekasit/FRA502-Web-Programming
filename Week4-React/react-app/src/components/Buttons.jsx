import React from "react";

const Buttons = ({ onIncrement, onDecrement, onReset, onSave }) => {
  return (
    <div className="card-btn">
      <button onClick={onDecrement} id="decrement">
        Down
      </button>
      <button onClick={onReset} id="reset">
        Reset
      </button>
      <button onClick={onIncrement} id="increment">
        Up
      </button>
      <button onClick={onSave} id="save">
        Save
      </button>
    </div>
  );
};

export default Buttons;
