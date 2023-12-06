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
        <button onClick={generateAllPossibleRooks}>Generează Toate</button>
        <button onClick={handleClearRooks}>Șterge Toate</button>
      </div>
      <table>
        <tbody>
          <tr>
            <td className="coordinates"></td>
            <td className="coordinates">A</td>
            <td className="coordinates">B</td>
            <td className="coordinates">C</td>
            <td className="coordinates">D</td>
            <td className="coordinates">E</td>
            <td className="coordinates">F</td>
            <td className="coordinates">G</td>
            <td className="coordinates">H</td>
          </tr>
          {renderRows()}
        </tbody>
      </table>
    </div>
  );
};

export default App;