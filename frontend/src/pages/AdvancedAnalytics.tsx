import React, { useState } from 'react';
import { 
  ChartBarIcon, 
  UsersIcon, 
  ClockIcon, 
  DevicePhoneMobileIcon,
  MapPinIcon,
  ArrowTrendingUpIcon,
  EyeIcon,
  WifiIcon
} from '@heroicons/react/24/outline';

const AdvancedAnalytics: React.FC = () => {
  const [timeRange, setTimeRange] = useState('30d');

  const wifiAnalytics = {
    totalSessions: 45680,
    uniqueUsers: 28940,
    avgSessionDuration: '18.5 min',
    dataConsumption: '2.4 TB',
    peakHours: '2:00 PM - 6:00 PM',
    returnRate: '67%'
  };

  const userDemographics = [
    { age: '18-24', percentage: 34, color: 'bg-blue-500' },
    { age: '25-34', percentage: 28, color: 'bg-green-500' },
    { age: '35-44', percentage: 22, color: 'bg-yellow-500' },
    { age: '45+', percentage: 16, color: 'bg-purple-500' }
  ];

  const deviceBreakdown = [
    { device: 'Mobile', percentage: 78, users: 22500 },
    { device: 'Tablet', percentage: 15, users: 4300 },
    { device: 'Laptop', percentage: 7, users: 2000 }
  ];

  const locationAnalytics = [
    { location: 'Kibera Hub', users: 1850, sessions: 4200, avgDuration: '22 min', satisfaction: 4.7 },
    { location: 'Mathare Center', users: 1240, sessions: 2800, avgDuration: '19 min', satisfaction: 4.5 },
    { location: 'Nyeri Market', users: 2100, sessions: 5600, avgDuration: '15 min', satisfaction: 4.8 },
    { location: 'Kisumu Hospital', users: 890, sessions: 1900, avgDuration: '25 min', satisfaction: 4.6 }
  ];

  const contentEngagement = [
    { category: 'Job Listings', views: 125000, engagement: '85%', avgTime: '8.2 min' },
    { category: 'Health Info', views: 98000, engagement: '92%', avgTime: '6.5 min' },
    { category: 'Education', views: 87000, engagement: '78%', avgTime: '12.1 min' },
    { category: 'Agriculture', views: 65000, engagement: '88%', avgTime: '9.3 min' }
  ];

  const behaviorInsights = [
    {
      insight: 'Peak Usage Patterns',
      description: 'Highest activity between 2-6 PM when students finish school',
      recommendation: 'Schedule educational content during peak hours for maximum reach'
    },
    {
      insight: 'Content Preferences',
      description: 'Job-related content has 34% higher engagement than average',
      recommendation: 'Increase job training and career guidance content'
    },
    {
      insight: 'Session Duration',
      description: 'Users spend 40% more time on health content',
      recommendation: 'Expand health education programs and telemedicine services'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Advanced Wi-Fi Analytics</h2>
        <select 
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500"
        >
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
          <option value="1y">Last year</option>
        </select>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center gap-2 mb-2">
            <WifiIcon className="h-5 w-5 text-blue-600" />
            <span className="text-sm text-gray-600">Total Sessions</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{wifiAnalytics.totalSessions.toLocaleString()}</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center gap-2 mb-2">
            <UsersIcon className="h-5 w-5 text-green-600" />
            <span className="text-sm text-gray-600">Unique Users</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{wifiAnalytics.uniqueUsers.toLocaleString()}</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center gap-2 mb-2">
            <ClockIcon className="h-5 w-5 text-purple-600" />
            <span className="text-sm text-gray-600">Avg Duration</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{wifiAnalytics.avgSessionDuration}</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center gap-2 mb-2">
            <ChartBarIcon className="h-5 w-5 text-orange-600" />
            <span className="text-sm text-gray-600">Data Used</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{wifiAnalytics.dataConsumption}</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center gap-2 mb-2">
            <ArrowTrendingUpIcon className="h-5 w-5 text-indigo-600" />
            <span className="text-sm text-gray-600">Return Rate</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{wifiAnalytics.returnRate}</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="flex items-center gap-2 mb-2">
            <ClockIcon className="h-5 w-5 text-red-600" />
            <span className="text-sm text-gray-600">Peak Hours</span>
          </div>
          <div className="text-sm font-bold text-gray-900">{wifiAnalytics.peakHours}</div>
        </div>
      </div>

      {/* User Demographics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">User Demographics (Age Groups)</h3>
          <div className="space-y-4">
            {userDemographics.map((demo, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-16 text-sm font-medium">{demo.age}</div>
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${demo.color}`}
                    style={{ width: `${demo.percentage}%` }}
                  ></div>
                </div>
                <div className="w-12 text-sm font-medium">{demo.percentage}%</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Device Usage</h3>
          <div className="space-y-4">
            {deviceBreakdown.map((device, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <DevicePhoneMobileIcon className="h-5 w-5 text-gray-600" />
                  <span className="font-medium">{device.device}</span>
                </div>
                <div className="text-right">
                  <div className="font-bold">{device.percentage}%</div>
                  <div className="text-sm text-gray-600">{device.users.toLocaleString()} users</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Location Analytics */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Hub Performance Analytics</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4">Location</th>
                <th className="text-left py-3 px-4">Active Users</th>
                <th className="text-left py-3 px-4">Sessions</th>
                <th className="text-left py-3 px-4">Avg Duration</th>
                <th className="text-left py-3 px-4">Satisfaction</th>
              </tr>
            </thead>
            <tbody>
              {locationAnalytics.map((location, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="h-4 w-4 text-gray-600" />
                      {location.location}
                    </div>
                  </td>
                  <td className="py-3 px-4 font-medium">{location.users.toLocaleString()}</td>
                  <td className="py-3 px-4">{location.sessions.toLocaleString()}</td>
                  <td className="py-3 px-4">{location.avgDuration}</td>
                  <td className="py-3 px-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                      ⭐ {location.satisfaction}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Content Engagement */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Content Engagement Analytics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {contentEngagement.map((content, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <EyeIcon className="h-5 w-5 text-blue-600" />
                <h4 className="font-semibold">{content.category}</h4>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Views:</span>
                  <span className="font-medium">{content.views.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Engagement:</span>
                  <span className="font-medium text-green-600">{content.engagement}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Avg Time:</span>
                  <span className="font-medium">{content.avgTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Behavioral Insights */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">AI-Powered Behavioral Insights</h3>
        <div className="space-y-6">
          {behaviorInsights.map((insight, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-900 mb-2">{insight.insight}</h4>
              <p className="text-gray-600 mb-2">{insight.description}</p>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm font-medium text-blue-800">
                  💡 Recommendation: {insight.recommendation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvancedAnalytics;