import React from 'react';
import { WifiIcon, AcademicCapIcon, BriefcaseIcon, HeartIcon } from '@heroicons/react/24/outline';

const UserPortal: React.FC = () => {
  const services = [
    { name: 'Free Wi-Fi Access', icon: WifiIcon, description: 'High-speed internet for all' },
    { name: 'Educational Content', icon: AcademicCapIcon, description: 'Courses and learning materials' },
    { name: 'Job Opportunities', icon: BriefcaseIcon, description: 'Local job board and skills training' },
    { name: 'Health Information', icon: HeartIcon, description: 'Healthcare resources and tips' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Community Portal</h1>
          <p className="text-xl text-gray-600">Access free services and resources at your local hub</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => (
            <div key={service.name} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <service.icon className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Connect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">1</span>
              </div>
              <h3 className="font-semibold mb-2">Find Your Hub</h3>
              <p className="text-gray-600">Locate the nearest Connected Access Hub in your community</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">2</span>
              </div>
              <h3 className="font-semibold mb-2">Connect to Wi-Fi</h3>
              <p className="text-gray-600">Join the "ConnectedHub" network and complete registration</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">3</span>
              </div>
              <h3 className="font-semibold mb-2">Access Services</h3>
              <p className="text-gray-600">Browse educational content, job listings, and health resources</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPortal;