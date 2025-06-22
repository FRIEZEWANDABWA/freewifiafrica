import React, { useState } from 'react';
import LiveStats from '../components/LiveStats';
import ContentAnalytics from './ContentAnalytics';
import AdvancedAnalytics from './AdvancedAnalytics';

const AnalyticsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Gates Foundation Analytics Dashboard</h1>
        
        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Platform Overview
            </button>
            <button
              onClick={() => setActiveTab('content')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'content'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Content Analytics
            </button>
            <button
              onClick={() => setActiveTab('wifi')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'wifi'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Wi-Fi Analytics
            </button>
          </nav>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">Total Hubs</h3>
            <p className="text-3xl font-bold text-gray-900">147</p>
            <p className="text-xs text-green-600">+20 new hubs</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">Active Users</h3>
            <p className="text-3xl font-bold text-green-600">24,820</p>
            <p className="text-xs text-green-600">Across 7 countries</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">Content Views</h3>
            <p className="text-3xl font-bold text-blue-600">4.1M</p>
            <p className="text-xs text-blue-600">+78% this month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-500">Network Uptime</h3>
            <p className="text-3xl font-bold text-indigo-600">98.7%</p>
            <p className="text-xs text-indigo-600">Excellent reliability</p>
          </div>
        </div>

        {activeTab === 'overview' && (
          <div>
            <LiveStats className="mb-8" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Regional Impact</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>🇰🇪 Kenya</span>
                <span className="font-semibold">67 hubs, 18,500 users</span>
              </div>
              <div className="flex justify-between items-center">
                <span>🇳🇬 Nigeria</span>
                <span className="font-semibold">25 hubs, 8,200 users</span>
              </div>
              <div className="flex justify-between items-center">
                <span>🇺🇬 Uganda</span>
                <span className="font-semibold">18 hubs, 5,400 users</span>
              </div>
              <div className="flex justify-between items-center">
                <span>🇪🇹 Ethiopia</span>
                <span className="font-semibold">12 hubs, 3,600 users</span>
              </div>
              <div className="flex justify-between items-center">
                <span>🇷🇼 Rwanda</span>
                <span className="font-semibold">15 hubs, 4,200 users</span>
              </div>
              <div className="flex justify-between items-center">
                <span>🇿🇦 South Africa</span>
                <span className="font-semibold">8 hubs, 2,800 users</span>
              </div>
              <div className="flex justify-between items-center">
                <span>🇸🇳 Senegal</span>
                <span className="font-semibold">2 hubs, 1,200 users</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Gates Foundation Impact</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Year 1 Target Progress</span>
                <span className="font-semibold text-green-600">147/20 hubs (735%)</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Monthly Active Users</span>
                <span className="font-semibold text-green-600">480K/500K (96%)</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Digital Literacy Courses</span>
                <span className="font-semibold">4,680 completed</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Job Placements Facilitated</span>
                <span className="font-semibold">1,340 successful</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Healthcare Access Improved</span>
                <span className="font-semibold">12,500 patients</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Agricultural Info Accessed</span>
                <span className="font-semibold">8,900 farmers</span>
              </div>
            </div>
          </div>
        </div>
          </div>
        )}
        
        {activeTab === 'content' && <ContentAnalytics />}
        
        {activeTab === 'wifi' && <AdvancedAnalytics />}
      </div>
    </div>
  );
};

export default AnalyticsPage;