import React, { useState } from 'react';

function Navbar() {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [clickedButton, setClickedButton] = useState(null);

  // Default button style
  const defaultButtonStyle = {
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '9px',
    borderRadius: '10px',
    border: 'none',
    paddingLeft: '40px',
    paddingRight: '40px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  };

  // Darker hover style
  const hoveredButtonStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: '#ffffff',
  };

  // Even darker click style
  const clickedButtonStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    color: '#ffffff',
  };

  // Apply styles conditionally
  const getButtonStyle = (button) => {
    if (clickedButton === button) return { ...defaultButtonStyle, ...clickedButtonStyle };
    if (hoveredButton === button) return { ...defaultButtonStyle, ...hoveredButtonStyle };
    return defaultButtonStyle;
  };

  return (
    <div className='navbarDivInternal'>
      <div style={{ backgroundColor: '#f1e4e4', padding: '2px', height: '40px', width: '1340px', borderRadius: '12px' }}>
        <div style={{ padding: '2px', position: 'absolute', left: '400px' }}>
          <button
            
            onMouseEnter={() => setHoveredButton('button1')}
            onMouseLeave={() => setHoveredButton(null)}
            style={getButtonStyle('button1')}
          >
            Button
          </button>
        </div>
        <div style={{ padding: '2px', position: 'absolute', left: '560px' }}>
          <button
            
            onMouseEnter={() => setHoveredButton('button2')}
            onMouseLeave={() => setHoveredButton(null)}
            style={getButtonStyle('button2')}
          >
            Button
          </button>
        </div>
        <div style={{ padding: '2px', position: 'absolute', left: '720px' }}>
          <button
            
            onMouseEnter={() => setHoveredButton('button3')}
            onMouseLeave={() => setHoveredButton(null)}
            style={getButtonStyle('button3')}
          >
            Button
          </button>
        </div>
        <div style={{ padding: '2px', position: 'absolute', left: '880px' }}>
          <button
            
            onMouseEnter={() => setHoveredButton('button4')}
            onMouseLeave={() => setHoveredButton(null)}
            style={getButtonStyle('button4')}
          >
            Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
