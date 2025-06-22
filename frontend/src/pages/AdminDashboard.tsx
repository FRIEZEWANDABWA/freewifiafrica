import React from 'react';

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
        <div className="bg-white p-8 rounded-lg shadow">
          <p className="text-gray-600">Admin features will be available after authentication setup.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;