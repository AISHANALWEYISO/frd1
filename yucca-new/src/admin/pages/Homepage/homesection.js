import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SectionManager = () => {
  const [sections, setSections] = useState([]);
  const [newSection, setNewSection] = useState({ title: '', description: '', order: '' });
  const [message, setMessage] = useState('');

  const API_URL = 'http://localhost:5000/api/v1/homepage/sections';

  useEffect(() => {
    fetchSections();
  }, []);

  const fetchSections = async () => {
    try {
      const res = await axios.get(API_URL);
      setSections(res.data);
    } catch {
      setMessage('Failed to load sections.');
    }
  };

  const handleAdd = async () => {
    try {
      await axios.post(API_URL, newSection);
      setNewSection({ title: '', description: '', order: '' });
      setMessage('Section added!');
      fetchSections();
    } catch {
      setMessage('Error adding section.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchSections();
    } catch {
      setMessage('Failed to delete section.');
    }
  };

  return (
    <div>
      <h2>Manage Sections</h2>

      <input
        type="text"
        placeholder="Title"
        value={newSection.title}
        onChange={(e) => setNewSection({ ...newSection, title: e.target.value })}
      />
      <textarea
        placeholder="Description"
        value={newSection.description}
        onChange={(e) => setNewSection({ ...newSection, description: e.target.value })}
      />
      <input
        type="number"
        placeholder="Order"
        value={newSection.order}
        onChange={(e) => setNewSection({ ...newSection, order: e.target.value })}
      />
      <button onClick={handleAdd}>Add Section</button>

      {sections.map((sec) => (
        <div key={sec.id} style={{ marginTop: '1rem' }}>
          <h4>{sec.title} (#{sec.order})</h4>
          <p>{sec.description}</p>
          <button onClick={() => handleDelete(sec.id)}>Delete</button>
        </div>
      ))}

      {message && <p>{message}</p>}
    </div>
  );
};

export default SectionManager;
