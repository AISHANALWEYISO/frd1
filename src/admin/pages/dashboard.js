// src/admin/pages/Dashboard.js

import React, { useEffect, useState } from 'react';
import api from '../utils/api';

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get('/admin/dashboard')
      .then(res => setData(res.data))
      .catch(err => console.error('Dashboard error:', err));
  }, []);

  if (!data) return <p>Loading dashboard...</p>;

  return (
    <div>
      <h2>{data.welcome}</h2>
      <p><strong>Total Users:</strong> {data.stats.total_users}</p>
    </div>
  );
};

export default Dashboard;

