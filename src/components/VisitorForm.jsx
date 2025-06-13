import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './VisitorForm.css';

const VisitorForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('visitorFormSubmitted');
    if (saved === 'true') {
      setFormSubmitted(true);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const nameRegex = /^[^\d]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!nameRegex.test(formData.name)) {
      setErrorMsg('Name must not contain numbers.');
      setLoading(false);
      return;
    }

    if (!emailRegex.test(formData.email)) {
      setErrorMsg('Please enter a valid email address.');
      setLoading(false);
      return;
    }

    if (!phoneRegex.test(formData.phone)) {
      setErrorMsg('Phone number must be exactly 10 digits.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setFormSubmitted(true);
        localStorage.setItem('visitorFormSubmitted', 'true');
      } else {
        setErrorMsg('Submission failed. Please try again.');
      }
    } catch (err) {
      console.error('Error:', err);
      setErrorMsg('Server error. Please try again later.');
    }

    setLoading(false);
  };

  const handleReset = () => {
    setFormSubmitted(false);
    localStorage.removeItem('visitorFormSubmitted');
    setFormData({ name: '', email: '', phone: '' });
    setErrorMsg('');
  };

  return (
    <motion.div
      className="visitor-form-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2>Get Access to Our PDF</h2>
      <div className="visitor-form-container">
        {!formSubmitted ? (
          <form onSubmit={handleSubmit} className="visitor-form">
            <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Your Phone Number" onChange={handleChange} required />
            <button type="submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </button>
            {errorMsg && <p className="error">{errorMsg}</p>}
          </form>
        ) : (
          <div className="download-section">
            <p>Thank you! You can now download the PDF:</p>
            <a
              href="http://localhost:5000/api/download-pdf"
              target="_blank"
              rel="noreferrer"
            >
              <button>Download PDF</button>
            </a>
            <button onClick={handleReset} style={{ marginTop: '1rem' }}>
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default VisitorForm;
