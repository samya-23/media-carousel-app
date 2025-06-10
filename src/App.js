// src/App.js
import React from 'react';
import './App.css';
import MediaCarousel from './components/MediaCarousel';
import CapabilityCard from './components/CapabilityCard';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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

  const capabilities = [
    {
      title: 'AI Conversational Agents',
      description: 'Designing human-like AI chatbots and voice assistants for seamless user interactions.',
      icon: '🧠'
    },
    {
      title: 'Web & Mobile Apps',
      description: 'Building cross-platform applications with modern UI/UX and scalable backend.',
      icon: '📱'
    },
    {
      title: 'Database Management Systems',
      description: 'Solutions for Task, Health, HR, and Customer Relations management.',
      icon: '🗄️'
    },
    {
      title: 'Voice-first & AI Apps',
      description: 'Building next-gen voice-command powered apps integrated with smart AI.',
      icon: '🎙️'
    },
    {
      title: 'Systems Integration',
      description: 'Connecting tools, platforms, and databases into a unified smart ecosystem.',
      icon: '🔗'
    },
    {
      title: 'Data Analytics',
      description: 'Visualizing data and extracting insights using dashboards and AI-driven analysis.',
      icon: '📊'
    }
  ];

  const analyticsData = [
    { name: 'Jan', users: 30 },
    { name: 'Feb', users: 80 },
    { name: 'Mar', users: 45 },
    { name: 'Apr', users: 60 }
  ];

  return (
    <div className="App">
      <nav className="navbar">
        <a href="#hero">Home</a>
        <a href="#capabilities">Capabilities</a>
        <a href="#analytics">Analytics</a>
        <a href="#contact">Contact</a>
      </nav>

      <div id="hero" className="hero">
        <h1>Experience <span>Codepackers</span></h1>
        <p>Innovative AI-first solutions & platform showcase</p>
      </div>

      <MediaCarousel mediaItems={mediaItems} />

      <div id="capabilities" className="capabilities">
        {capabilities.map((cap, idx) => (
          <CapabilityCard
            key={idx}
            title={cap.title}
            description={cap.description}
            icon={cap.icon}
          />
        ))}
      </div>

      <div id="analytics" className="analytics-section">
        <h2>Analytics Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={analyticsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill="#1f3c88" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: hello@codepackers.com</p>
        <p>Phone: +91-9876543210</p>
      </div>
    </div>
  );
}

export default App;
