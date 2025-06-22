import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ContentModerationPage: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/projects');
  }, [navigate]);

  return null;
};

export default ContentModerationPage;