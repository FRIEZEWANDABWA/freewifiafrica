import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

interface DashboardProps {
  className?: string;
}

const InteractiveDashboard: React.FC<DashboardProps> = ({ className = "" }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [timeRange, setTimeRange] = useState('7d');
  const [realTimeData, setRealTimeData] = useState({
    activeUsers: 24567,
    dataUsage: 1.2,
    contentViews: 45678,
    satisfaction: 4.8
  });

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData(prev => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 10 - 5),
        dataUsage: prev.dataUsage + (Math.random() * 0.1 - 0.05),
        contentViews: prev.contentViews + Math.floor(Math.random() * 20),
        satisfaction: Math.max(4.0, Math.min(5.0, prev.satisfaction + (Math.random() * 0.1 - 0.05)))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const tabs = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'usage', name: 'Usage', icon: '📈' },
    { id: 'content', name: 'Content', icon: '📚' },
    { id: 'impact', name: 'Impact', icon: '🎯' }
  ];

  const timeRanges = [
    { id: '24h', name: '24 Hours' },
    { id: '7d', name: '7 Days' },
    { id: '30d', name: '30 Days' },
    { id: '90d', name: '90 Days' }
  ];

  // Chart data
  const usageData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Active Users',
        data: [12000, 19000, 15000, 25000, 22000, 18000, 24000],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const contentData = {
    labels: ['Education', 'Health', 'Agriculture', 'Business', 'Entertainment'],
    datasets: [
      {
        data: [35, 25, 20, 15, 5],
        backgroundColor: [
          '#3B82F6',
          '#10B981',
          '#F59E0B',
          '#EF4444',
          '#8B5CF6',
        ],
        borderWidth: 0,
      },
    ],
  };

  const impactData = {
    labels: ['Kenya', 'Nigeria', 'Ghana', 'Uganda', 'Tanzania'],
    datasets: [
      {
        label: 'Communities Reached',
        data: [15000, 12000, 8000, 6000, 4000],
        backgroundColor: 'rgba(16, 185, 129, 0.8)',
        borderColor: 'rgb(16, 185, 129)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
      },
    },
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4">User Activity Trend</h3>
              <div className="h-64">
                <Line data={usageData} options={chartOptions} />
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Real-time Metrics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-700 font-medium">Active Users</span>
                  <motion.span 
                    className="text-2xl font-bold text-blue-600"
                    key={realTimeData.activeUsers}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {realTimeData.activeUsers.toLocaleString()}
                  </motion.span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-green-700 font-medium">Data Usage (TB)</span>
                  <motion.span 
                    className="text-2xl font-bold text-green-600"
                    key={realTimeData.dataUsage}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {realTimeData.dataUsage.toFixed(1)}
                  </motion.span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="text-purple-700 font-medium">Content Views</span>
                  <motion.span 
                    className="text-2xl font-bold text-purple-600"
                    key={realTimeData.contentViews}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {realTimeData.contentViews.toLocaleString()}
                  </motion.span>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <span className="text-yellow-700 font-medium">Satisfaction</span>
                  <motion.span 
                    className="text-2xl font-bold text-yellow-600"
                    key={realTimeData.satisfaction}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {realTimeData.satisfaction.toFixed(1)} ⭐
                  </motion.span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'usage':
        return (
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Usage Analytics</h3>
            <div className="h-96">
              <Line data={usageData} options={chartOptions} />
            </div>
          </div>
        );
      case 'content':
        return (
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Content Distribution</h3>
            <div className="h-96">
              <Doughnut data={contentData} options={doughnutOptions} />
            </div>
          </div>
        );
      case 'impact':
        return (
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Regional Impact</h3>
            <div className="h-96">
              <Bar data={impactData} options={chartOptions} />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Interactive Dashboard</h2>
        <div className="flex items-center space-x-2">
          <div className="flex items-center text-green-600">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
            <span className="text-sm font-medium">Live Data</span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        {/* Tabs */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </div>

        {/* Time Range Selector */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
          {timeRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => setTimeRange(range.id)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                timeRange === range.id
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {range.name}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {renderTabContent()}
      </motion.div>
    </div>
  );
};

export default InteractiveDashboard;