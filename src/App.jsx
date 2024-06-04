import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const gridSize = 10;
  const [position, setPosition] = useState({ row: 1, column: 1 });

  useEffect(() => {
      const handleKeyDown = (event) => {
          setPosition((prevPosition) => {
              let newRow = prevPosition.row;
              let newColumn = prevPosition.column;

              switch (event.key) {
                  case 'ArrowUp':
                      if (newRow > 1) newRow--;
                      break;
                  case 'ArrowDown':
                      if (newRow < gridSize) newRow++;
                      break;
                  case 'ArrowLeft':
                      if (newColumn > 1) newColumn--;
                      break;
                  case 'ArrowRight':
                      if (newColumn < gridSize) newColumn++;
                      break;
                  default:
                      break;
              }

              return { row: newRow, column: newColumn };
          });
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
          window.removeEventListener('keydown', handleKeyDown);
      };
  }, []);

  return (
      <div className="grid-container">
          <div
              className="movable-square"
              style={{
                  gridColumn: position.column,
                  gridRow: position.row,
              }}
          ></div>
      </div>
  );
}

export default App
