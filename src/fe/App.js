import React, { useState } from 'react';
import './App.css';

  const App = () => {
  
    const handleClearRooks = () => {
      setRooks(Array(8).fill(null).map(() => Array(8).fill(false)));
    };
  
    return (
      <div className="chessboard">
        <div>
          <button onClick={handleClearRooks}>Șterge Toate</button>
        </div>
        <table>
          <tbody>
            {renderRows()}
          </tbody>
        </table>
      </div>
    );
  //const handleAddRook = () => {
   
  //};

  //const renderCells = () => {

//};

  //const renderRows = () => {
  //};

  return (
    <div className="chessboard">
      <div>
        <label>
          Coordonate:
          <input
            type="text"
            value={selectedCoordinate}
            onChange={(e) => setSelectedCoordinate(e.target.value.toUpperCase())}
          />
        </label>
        <button onClick={handleAddRook}>Adaugă Turn</button>
      </div>
      <table>
        <tbody>
          {renderRows()}
        </tbody>
      </table>
    </div>
  );
};

export default App;