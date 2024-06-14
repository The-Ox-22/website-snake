import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'; // TODO: move this and rename it to Playground.css


function Slither() {
  const [position, setPosition] = useState({ row: 1, column: 1 });

  useEffect(() => {
      const fetchPosition = async () => {
          try {
              const response = await axios.get('http://127.0.0.1:8080/position');
              setPosition(response.data);
          } catch (error) {
              console.error('Error fetching position:', error);
          }
      };

      fetchPosition();
  }, []);

  useEffect(() => {
      const handleKeyDown = async (event) => {
          const direction = event.key;
          if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(direction)) {
              try {
                  const response = await axios.post('http://127.0.0.1:8080/move', { direction });
                  setPosition(response.data);
              } catch (error) {
                  console.error('Error updating position:', error);
              }
          }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
          window.removeEventListener('keydown', handleKeyDown);
      };
  }, []);

  return (
    <div> 
      <h1>Welcome To Slither</h1>
      <p>Use the Arrow Keys to move the box!</p>
      <div className="grid-container">
          <div
              className="movable-square"
              style={{
                  gridRowStart: position.row,
                  gridColumnStart: position.column,
              }}
          />
      </div>
    </div>
  );
}

function Playground() {
    return (
        <div>
            <h1>Playground</h1>
            <Slither />
        </div>
    )
}


export default Playground