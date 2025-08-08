import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE = 'http://localhost:5000/api/v1/homepage';

const IntroManager = () => {
  const [intro, setIntro] = useState({ heading: '', paragraph: '' });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  // Fetch intro data from backend on component mount
  useEffect(() => {
    const fetchIntro = async () => {
      try {
        const res = await axios.get(`${API_BASE}/intro`);
        setIntro(res.data);
      } catch (error) {
        setMessage('Failed to load intro content');
      } finally {
        setLoading(false);
      }
    };
    fetchIntro();
  }, []);

  const handleChange = (e) => {
    setIntro({ ...intro, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage('');
    try {
      await axios.put(`${API_BASE}/intro`, intro);
      setMessage('Intro content updated successfully!');
    } catch (error) {
      setMessage('Failed to save intro content');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p>Loading intro content...</p>;

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2>Manage Homepage Intro</h2>

      <label style={{ display: 'block', marginBottom: '0.5rem' }}>Heading:</label>
      <input
        type="text"
        name="heading"
        value={intro.heading}
        onChange={handleChange}
        style={{ width: '100%', padding: '8px', marginBottom: '1rem' }}
      />

      <label style={{ display: 'block', marginBottom: '0.5rem' }}>Paragraph:</label>
      <textarea
        name="paragraph"
        value={intro.paragraph}
        onChange={handleChange}
        rows={5}
        style={{ width: '100%', padding: '8px', marginBottom: '1rem' }}
      />

      <button
        onClick={handleSave}
        disabled={saving}
        style={{
          backgroundColor: '#366000',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: saving ? 'not-allowed' : 'pointer',
        }}
      >
        {saving ? 'Saving...' : 'Save Changes'}
      </button>

      {message && <p style={{ marginTop: '1rem' }}>{message}</p>}
    </div>
  );
};

export default IntroManager;
