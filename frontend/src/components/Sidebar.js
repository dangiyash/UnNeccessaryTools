import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();
  const [hoveredButton, setHoveredButton] = useState(null);
  const [clickedButton, setClickedButton] = useState(null);

  // Default button style
  const defaultButtonStyle = {
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '15px',
    borderRadius: '10px',
    border: 'none',
    paddingLeft: '100px',
    paddingRight: '100px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  };

  // Hovered button style
  const hoveredButtonStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Light black fill on hover
    color: '#ffffff', // Font color to white
  };

  // Clicked button style
  const clickedButtonStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.9)', // Darker black fill on click
    color: '#ffffff',
  };

  // Combine styles based on button state
  const getButtonStyle = (button) => {
    if (clickedButton === button) return { ...defaultButtonStyle, ...clickedButtonStyle };
    if (hoveredButton === button) return { ...defaultButtonStyle, ...hoveredButtonStyle };
    return defaultButtonStyle;
  };

  return (
    <div className='sidebarDivInternal'>
      <div style={{ backgroundColor: '#f1e4e4', padding: '2px', height: '630px', width: '270px', borderRadius: '12px' }}>
        <div style={{ position: 'absolute', top: '80px', left: '18px' }}>
          <button
            onClick={() => { setClickedButton('home'); navigate('/'); }}
            onMouseEnter={() => setHoveredButton('home')}
            onMouseLeave={() => setHoveredButton(null)}
            style={getButtonStyle('home')}
          >
            TextPdf
          </button>
        </div>
        <div style={{ position: 'absolute', top: '140px', left: '18px' }}>
          <button
            onClick={() => { setClickedButton('about'); navigate('/about'); }}
            onMouseEnter={() => setHoveredButton('about')}
            onMouseLeave={() => setHoveredButton(null)}
            style={getButtonStyle('about')}
          >
            PassGe
          </button>
        </div>
        <div style={{ position: 'absolute', top: '200px', left: '18px' }}>
          <button
            onClick={() => { setClickedButton('contact'); navigate('/contact'); }}
            onMouseEnter={() => setHoveredButton('contact')}
            onMouseLeave={() => setHoveredButton(null)}
            style={{ ...getButtonStyle('contact'), paddingLeft: '95px', paddingRight: '95px' }}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
