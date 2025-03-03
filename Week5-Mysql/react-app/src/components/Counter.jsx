import { useEffect, useState } from "react";
import { clearHistory, fetchHistory, saveCounter } from "../services/api"; // นำเข้าฟังก์ชันจาก api.js
import MenCounter from "./MenCounter";
import WomenCounter from "./WomenCounter";

const Counter = () => {
  const [men, setMen] = useState(0);
  const [women, setWomen] = useState(0);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const getHistory = async () => {
      try {
        const data = await fetchHistory();
        setHistory(data);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };
    getHistory();
  }, []);

  const handleSave = async () => {
    try {
      const newRecord = {
        male_count: men,
        female_count: women,
        total: men + women,
      };
      await saveCounter(newRecord);
      const data = await fetchHistory();
      setHistory(data);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleReset = () => {
    setMen(0);
    setWomen(0);
  };

  const handleClearHistory = async () => {
    try {
      await clearHistory();
      setHistory([]);
    } catch (error) {
      console.error("Error clearing history:", error);
    }
  };

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
                [{item.id}] M: {item.male_count}, F: {item.female_count}, T:{" "}
                {item.total} - {new Date(item.created_at).toLocaleString()}
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
