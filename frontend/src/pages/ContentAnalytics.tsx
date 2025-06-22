import React from 'react';
import { EyeIcon, ClockIcon, UserGroupIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

const ContentAnalytics: React.FC = () => {
  const contentMetrics = [
    {
      title: 'Youth Empowerment Video',
      views: 12500,
      avgTime: 4.2,
      region: 'Kenya',
      engagement: 85,
      leads: 340
    },
    {
      title: 'Digital Health Solutions',
      views: 8900,
      avgTime: 6.8,
      region: 'Nigeria',
      engagement: 92,
      leads: 180
    },
    {
      title: 'Women Entrepreneurs Stories',
      views: 15600,
      avgTime: 5.1,
      region: 'Rwanda',
      engagement: 88,
      leads: 420
    }
  ];

  const recommendations = [
    {
      region: 'Kenya',
      suggestion: 'Push more youth-focused content during 2-6 PM peak hours',
      priority: 'High'
    },
    {
      region: 'Nigeria',
      suggestion: 'Health content performs well - increase frequency',
      priority: 'Medium'
    },
    {
      region: 'Ethiopia',
      suggestion: 'Agricultural content needed - low engagement detected',
      priority: 'High'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Gates Foundation Content Analytics</h2>
        
        {/* Content Performance */}
        <div className="grid gap-6 mb-8">
          {contentMetrics.map((content, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{content.title}</h3>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">{content.region}</span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="text-center">
                  <EyeIcon className="h-6 w-6 text-gray-400 mx-auto mb-1" />
                  <div className="text-2xl font-bold text-gray-900">{content.views.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Views</div>
                </div>
                <div className="text-center">
                  <ClockIcon className="h-6 w-6 text-gray-400 mx-auto mb-1" />
                  <div className="text-2xl font-bold text-gray-900">{content.avgTime}m</div>
                  <div className="text-sm text-gray-600">Avg Time</div>
                </div>
                <div className="text-center">
                  <UserGroupIcon className="h-6 w-6 text-gray-400 mx-auto mb-1" />
                  <div className="text-2xl font-bold text-green-600">{content.engagement}%</div>
                  <div className="text-sm text-gray-600">Engagement</div>
                </div>
                <div className="text-center">
                  <ArrowTrendingUpIcon className="h-6 w-6 text-gray-400 mx-auto mb-1" />
                  <div className="text-2xl font-bold text-indigo-600">{content.leads}</div>
                  <div className="text-sm text-gray-600">Leads Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {Math.round((content.views / 1000) * content.engagement / 10)}
                  </div>
                  <div className="text-sm text-gray-600">Impact Score</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recommendations */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">AI-Powered Recommendations</h3>
          <div className="space-y-4">
            {recommendations.map((rec, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg">
                <div className={`px-2 py-1 rounded text-xs font-medium ${
                  rec.priority === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {rec.priority}
                </div>
                <div>
                  <div className="font-medium text-gray-900">{rec.region}</div>
                  <div className="text-gray-600">{rec.suggestion}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentAnalytics;