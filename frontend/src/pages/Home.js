import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './home.css'
import users from '../utils/users.json';

function Home() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4244/api/generate', {
        title,
        content,
      }, {
        responseType: 'blob', // Expect a file as response
      });

      // Create a download link
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'output.pdf');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div className="body" style={{ padding: '20px' }}>
      <h1>Online PDF Maker</h1>
      <form onSubmit={handleSubmit}>
        <div className="dv">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="dv">
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="10"
            required
          />
        </div>
        <button className='btn' type="submit">Generate PDF</button>
      </form>
    </div>
  );
}

export default Home;
