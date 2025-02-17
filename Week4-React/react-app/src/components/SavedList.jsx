import React from "react";

const SavedList = ({ savedValues }) => {
  return (
    <div id="saved-container">
      <h3>Saved Values</h3>
      <ul id="savedList">
        {savedValues.length === 0 ? (
          <li>No data recorded</li>
        ) : (
          savedValues.map((entry, index) => (
            <li key={index}>
              Counter: {entry.value}, Time: {entry.timestamp}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default SavedList;
