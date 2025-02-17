import React, { useState, useEffect } from 'react';
import Counter from "./components/Counter.jsx";
import TotalSum from "./components/TotalSum.jsx";
import SavedList from "./components/SavedList.jsx";
import Buttons from "./components/Buttons.jsx";


const App = () => {
  // State
  const [curValue, setCurValue] = useState(0);
  const [savedValues, setSavedValues] = useState([]);
  const [totalSum, setTotalSum] = useState(0);

  // โหลดค่าจาก LocalStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedValues')) || [];
    const sum = JSON.parse(localStorage.getItem('totalSum')) || 0;
    setSavedValues(saved);
    setTotalSum(sum);
  }, []);

  // ฟังก์ชันเพิ่มค่า
  const handleIncrement = () => setCurValue(curValue + 1);

  // ฟังก์ชันลดค่า
  const handleDecrement = () => setCurValue(curValue - 1);

  // ฟังก์ชันรีเซ็ตค่า
  const handleReset = () => {
    setCurValue(0);
    setTotalSum(0);
    setSavedValues([]);
    localStorage.setItem('totalSum', JSON.stringify(0));
    localStorage.removeItem('savedValues');
  };

  // ฟังก์ชันบันทึกค่า
  const handleSave = () => {
    const now = new Date().toLocaleString();
    const newEntry = { value: curValue, timestamp: now };
    const updatedValues = [...savedValues, newEntry];

    setSavedValues(updatedValues);
    localStorage.setItem('savedValues', JSON.stringify(updatedValues));

    setTotalSum(prevTotal => {
      const newTotal = prevTotal + curValue;
      localStorage.setItem('totalSum', JSON.stringify(newTotal));
      return newTotal;
    });
  };

  return (
    <div className="container">
      <div className="card-body">
        <h1>User Counter</h1>
        <Counter curValue={curValue} />
        <Buttons
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
          onSave={handleSave}
        />
        <SavedList savedValues={savedValues} />
        <TotalSum totalSum={totalSum} />
        <button onClick={handleReset} id="clearSaved">Clear Saved Data</button>
      </div>
    </div>
  );
};

export default App;
