// src/App.js
import React from 'react';
import './App.css';
import MediaCarousel from './components/MediaCarousel';

function App() {
  const mediaItems = [
    {
      type: 'image',
      src: 'https://media.licdn.com/dms/image/v2/D5612AQGfkrqIN_4sjA/article-cover_image-shrink_720_1280/B56ZXxhnAZGcAI-/0/1743513879404?e=2147483647&v=beta&t=-eKhUj8F0d4PVgUe16JoGNq4eSPdcgkpPSJJY1UtTXU'
    },
    {
      type: 'video',
      src: 'https://www.youtube.com/embed/FwOTs4UxQS4?si=F1-RYbHgKnE_cBgV'
    },
    {
      type: 'image',
      src: 'https://www.intelliscence.com/wp-content/uploads/2024/07/Custom-Software-Development.jpg'
    },
    {
      type: 'video',
      src: 'https://www.youtube.com/embed/Cg2A3L58pY0?si=ePEpmx5Nx52HsQk3'
    }
  ];

  return (
    <div className="App">
      <div className="hero">
        <h1>Experience <span>Codepackers</span></h1>
        <p>Innovative AI-first solutions & platform showcase</p>
      </div>
      <MediaCarousel mediaItems={mediaItems} />
    </div>
  );
}

export default App;
