import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [selectedCoordinate, setSelectedCoordinate] = useState('');
  const [rooks, setRooks] = useState(Array(8).fill(null).map(() => Array(8).fill(false)));

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