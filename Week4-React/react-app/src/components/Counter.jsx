import { useState } from "react";
import MenCounter from "./MenCounter";
import WomenCounter from "./WomenCounter";

const Counter = () => {
  const [men, setMen] = useState(0);
  const [women, setWomen] = useState(0);
  const [history, setHistory] = useState([]);

  const updateHistory = (action) => {
    const time = new Date().toLocaleString();
    setHistory((prevHistory) => [
      `[${time}] : M:${men}, F:${women}, T:${men + women} (${action})`,
      ...prevHistory, // บันทึกล่าสุดอยู่ด้านบน
    ]);
  };

  const handleSave = () => updateHistory("Saved");
  const handleReset = () => {
    updateHistory("Reset");
    setMen(0);
    setWomen(0);
  };

  const handleClearHistory = () => setHistory([]); 

  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter</h1>

      <div className="counter-buttons">
        <MenCounter count={men} setCount={setMen} />
        <WomenCounter count={women} setCount={setWomen} />
      </div>

      <div className="action-buttons">
        <button onClick={handleSave} className="action-button save-button">
          Save
        </button>
        <button onClick={handleReset} className="action-button reset-button">
          Reset
        </button>
        <button
          onClick={handleClearHistory}
          className="action-button clear-button"
        >
          Clear History
        </button>
      </div>

      <div className="history-container">
        <h2 className="history-title">History</h2>
        <div className="history-scroll">
          {history.length > 0 ? (
            history.map((item, index) => (
              <p key={index} className="history-item">
                {item}
              </p>
            ))
          ) : (
            <p className="no-records-yet">No records yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Counter;
