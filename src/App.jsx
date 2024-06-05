import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [position, setPosition] = useState({ row: 1, column: 1 });

  useEffect(() => {
      fetch('/position')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network Response was not OK');
            }
            // console.log("initial response:", response)
            return response.json();
          })
          .then(data => {
            // console.log('Position fetched:', data);
            setPosition(data);
          })
          .catch(error => {
            console.log('There was a problem with the fetch operation:', error)
          });

      const handleKeyDown = async (event) => {
          const direction = event.key;
          // console.log('Key pressed:', direction);
          const response = await fetch('/move', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ direction }),
          });
          if (!response.ok) {
            console.error('Network response was not ok');
            return;
          }
          const data = await response.json();
          // console.log('Position updated:', data);
          setPosition(data);
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
                  gridRow: position.row
              }}
          ></div>
      </div>
  );
}


export default App
