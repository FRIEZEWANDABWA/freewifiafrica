import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/analytics');
  }, [navigate]);

  return null;
};

export default AdminDashboard;