import React, { useState } from 'react';
import { 
  BriefcaseIcon, 
  HeartIcon, 
  BeakerIcon, 
  ExclamationTriangleIcon,
  MagnifyingGlassIcon 
} from '@heroicons/react/24/outline';

const EducationPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState('jobs');

  const jobListings = [
    {
      id: 1,
      title: 'Data Entry Clerk',
      company: 'Nairobi Tech Solutions',
      location: 'Nairobi',
      type: 'Part-time',
      salary: 'KSh 25,000/month',
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'Community Health Worker',
      company: 'Kenya Health Initiative',
      location: 'Kibera',
      type: 'Full-time',
      salary: 'KSh 35,000/month',
      posted: '1 week ago'
    },
    {
      id: 3,
      title: 'Mobile Money Agent',
      company: 'M-Pesa',
      location: 'Various Locations',
      type: 'Commission',
      salary: 'Commission-based',
      posted: '3 days ago'
    }
  ];

  const healthBulletins = [
    {
      id: 1,
      title: 'Malaria Prevention During Rainy Season',
      category: 'Prevention',
      date: '2024-01-15',
      summary: 'Essential tips for protecting your family during the rainy season'
    },
    {
      id: 2,
      title: 'Free Vaccination Drive - February 2024',
      category: 'Vaccination',
      date: '2024-01-10',
      summary: 'Community vaccination schedule for children under 5'
    },
    {
      id: 3,
      title: 'Mental Health Support Resources',
      category: 'Mental Health',
      date: '2024-01-08',
      summary: 'Local counseling services and support groups available'
    }
  ];

  const farmingGuides = [
    {
      id: 1,
      title: 'Drought-Resistant Crops for 2024',
      category: 'Crop Selection',
      season: 'Dry Season',
      summary: 'Best crop varieties for water-scarce conditions'
    },
    {
      id: 2,
      title: 'Organic Fertilizer Production',
      category: 'Soil Management',
      season: 'All Seasons',
      summary: 'Make your own fertilizer using local materials'
    },
    {
      id: 3,
      title: 'Market Prices - January 2024',
      category: 'Market Info',
      season: 'Current',
      summary: 'Latest commodity prices in Nairobi markets'
    }
  ];

  const misinformationAlerts = [
    {
      id: 1,
      title: 'False COVID-19 Treatment Claims',
      severity: 'High',
      date: '2024-01-14',
      summary: 'Beware of unverified treatments being shared on social media'
    },
    {
      id: 2,
      title: 'Fake Government Benefit Programs',
      severity: 'Medium',
      date: '2024-01-12',
      summary: 'Verify all government programs through official channels'
    }
  ];

  const tabs = [
    { id: 'jobs', name: 'Job Portal', icon: BriefcaseIcon },
    { id: 'health', name: 'Health Bulletins', icon: HeartIcon },
    { id: 'farming', name: 'Farming Guides', icon: BeakerIcon },
    { id: 'alerts', name: 'Misinformation Alerts', icon: ExclamationTriangleIcon },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Education & Resources Portal</h1>
          <p className="text-gray-600">Access jobs, health information, farming guides, and stay informed</p>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-5 w-5 mr-2" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'jobs' && (
          <div>
            <div className="mb-6">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search jobs by title, company, or location..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
            
            <div className="grid gap-4">
              {jobListings.map((job) => (
                <div key={job.id} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                      <p className="text-gray-600">{job.company}</p>
                    </div>
                    <span className="text-sm text-gray-500">{job.posted}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span>📍 {job.location}</span>
                    <span>⏰ {job.type}</span>
                    <span>💰 {job.salary}</span>
                  </div>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'health' && (
          <div className="grid gap-4">
            {healthBulletins.map((bulletin) => (
              <div key={bulletin.id} className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{bulletin.title}</h3>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    {bulletin.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-3">{bulletin.summary}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{bulletin.date}</span>
                  <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'farming' && (
          <div className="grid gap-4">
            {farmingGuides.map((guide) => (
              <div key={guide.id} className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{guide.title}</h3>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                    {guide.season}
                  </span>
                </div>
                <p className="text-gray-600 mb-3">{guide.summary}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{guide.category}</span>
                  <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                    View Guide →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'alerts' && (
          <div className="grid gap-4">
            {misinformationAlerts.map((alert) => (
              <div key={alert.id} className="bg-white p-6 rounded-lg shadow-sm border border-red-200">
                <div className="flex items-start gap-3">
                  <ExclamationTriangleIcon className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{alert.title}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        alert.severity === 'High' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {alert.severity} Priority
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{alert.summary}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{alert.date}</span>
                      <button className="text-red-600 hover:text-red-800 font-medium">
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationPortal;