import React from 'react';
import './App.css';
import MediaCarousel from './components/MediaCarousel';
import CapabilityCard from './components/CapabilityCard';
import VisitorForm from './components/VisitorForm';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

function App() {
  const mediaItems = [
    { type: 'image', src: '/assets/image0.jpg' },
    { type: 'video', src: '/assets/demo1_fixed.mp4' },
    { type: 'custom' },
    { type: 'video', src: '/assets/demo2_fixed.mp4' },
    { type: 'iframe', src: 'https://www.youtube.com/embed/FwOTs4UxQS4' },
    { type: 'image', src: '/assets/image1.jpg' },
    { type: 'iframe', src: 'https://www.youtube.com/embed/Cg2A3L58pY0' }
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
      {/* Navbar */}
      <nav className="navbar">
        <a href="#hero">Home</a>
        <a href="#form">Form</a>
        <a href="#capabilities">Capabilities</a>
        <a href="#analytics">Analytics</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <h1>
          Experience <span>Codepackers</span>
        </h1>
        <p>Innovative AI-first solutions & platform showcase</p>
      </section>

      {/* Media Carousel Section */}
      <section id="media">
        <MediaCarousel mediaItems={mediaItems} />
      </section>

      {/* Visitor Form Section */}
      <section id="form">
        <VisitorForm />
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="capabilities">
        {capabilities.map((cap, idx) => (
          <CapabilityCard
            key={idx}
            title={cap.title}
            description={cap.description}
            icon={cap.icon}
          />
        ))}
      </section>

      {/* Analytics Section */}
      <section id="analytics" className="analytics-section">
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>
          Email: <a href="mailto:hello@codepackers.com">hello@codepackers.com</a>
        </p>
        <p>
          Phone: <a href="tel:+919876543210">+91-9876543210</a>
        </p>
      </section>
    </div>
  );
}

export default App;
