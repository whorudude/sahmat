import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [selectedCoordinate, setSelectedCoordinate] = useState('');
  const [rooks, setRooks] = useState(Array(8).fill(null).map(() => Array(8).fill(false)));

  const isRookSafe = (row, col) => {
    // Verificăm pe aceeași linie și coloană
    for (let i = 0; i < 8; i++) {
      if (rooks[row][i] || rooks[i][col]) {
        return false;
      }
    }
    return true;
  };

  /* const generateAllPossibleRooks = () => {
    const generateRooksHelper = (row) => {
      if (row === 8) {
      
            if (generateRooksHelper(row + 1)) {
              setRooks(newRooks);
              return true;
            }
            newRooks[row][col] = false; // Revertim modificările dacă nu am găsit o soluție
          }
        }
      } else {
        return generateRooksHelper(row + 1);
      }
  
      return false;
    };
    generateRooksHelper(0);
  }; */

  //const handleAddRook = () => {
   
  const handleClearRooks = () => {
    setRooks(Array(8).fill(null).map(() => Array(8).fill(false)));
  };

  const renderCells = () => {
    const cells = [];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const cellClass = (i + j) % 2 === 0 ? 'white' : 'black';
        const isRookPresent = rooks[i][j];
  
        cells.push(
          <td key={j} className={`cell ${cellClass}`}>
            {isRookPresent && <div className="rook">&#9814;</div>}
          </td>
        );
      }
    }
    return cells;
  };
  
  const renderRows = () => {
    const rows = [];
    for (let i = 0; i < 8; i++) {
      rows.push(
        <tr key={i}>
          <td className="coordinates">{8 - i}</td>
          {renderCells().slice(i * 8, (i + 1) * 8)}
        </tr>
      );
    }
    return rows;
  };

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
