import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MediaManager = () => {
  const [media, setMedia] = useState([]);
  const [file, setFile] = useState(null);
  const [type, setType] = useState('image');
  const [caption, setCaption] = useState('');
  const [message, setMessage] = useState('');

  const API_URL = 'http://localhost:5000/api/v1/homepage/media';

  const fetchMedia = async () => {
    try {
      const res = await axios.get(API_URL);
      setMedia(res.data);
    } catch {
      setMessage('Failed to fetch media.');
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('media_file', file);
    formData.append('type', type);
    formData.append('caption', caption);

    try {
      await axios.post(API_URL, formData);
      setMessage('Uploaded successfully!');
      fetchMedia();
    } catch {
      setMessage('Failed to upload.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchMedia();
    } catch {
      setMessage('Error deleting media.');
    }
  };

  return (
    <div>
      <h2>Manage Media</h2>

      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="image">Image</option>
        <option value="video">Video</option>
      </select>
      <input
        type="text"
        placeholder="Caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <button onClick={handleUpload}>Upload</button>

      <div style={{ marginTop: '1rem' }}>
        {media.map((item) => (
          <div key={item.id}>
            <p>{item.caption}</p>
            {item.type === 'image' ? (
              <img src={`http://localhost:5000/uploads/${item.filename}`} alt={item.caption} width="150" />
            ) : (
              <video width="200" controls>
                <source src={`http://localhost:5000/uploads/${item.filename}`} type="video/mp4" />
              </video>
            )}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        ))}
      </div>

      {message && <p>{message}</p>}
    </div>
  );
};

export default MediaManager;
