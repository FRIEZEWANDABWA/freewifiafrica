import React, { useState, useEffect } from 'react';
import { WifiIcon, UserGroupIcon, ClockIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

interface LiveStatsProps {
  className?: string;
}

const LiveStats: React.FC<LiveStatsProps> = ({ className = '' }) => {
  const [stats, setStats] = useState({
    activeUsers: 12847,
    totalHubs: 127,
    uptime: 98.7,
    dataTransferred: 2.4
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 10) - 5,
        totalHubs: prev.totalHubs,
        uptime: Math.max(95, Math.min(100, prev.uptime + (Math.random() - 0.5) * 0.1)),
        dataTransferred: prev.dataTransferred + Math.random() * 0.01
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const statItems = [
    {
      name: 'Active Users',
      value: stats.activeUsers.toLocaleString(),
      icon: UserGroupIcon,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      change: '+2.4%'
    },
    {
      name: 'Connected Hubs',
      value: stats.totalHubs.toString(),
      icon: WifiIcon,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      change: '+5 new'
    },
    {
      name: 'Network Uptime',
      value: `${stats.uptime.toFixed(1)}%`,
      icon: ClockIcon,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
      change: 'Excellent'
    },
    {
      name: 'Data Served (TB)',
      value: stats.dataTransferred.toFixed(1),
      icon: ArrowTrendingUpIcon,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      change: '+12% today'
    }
  ];

  return (
    <div className={`bg-white rounded-lg shadow-sm p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Live Network Statistics</h3>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-600">Live</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statItems.map((item) => (
          <div key={item.name} className="text-center">
            <div className={`${item.bgColor} rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3`}>
              <item.icon className={`h-6 w-6 ${item.color}`} />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{item.value}</div>
            <div className="text-sm text-gray-600 mb-1">{item.name}</div>
            <div className="text-xs text-green-600 font-medium">{item.change}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveStats;