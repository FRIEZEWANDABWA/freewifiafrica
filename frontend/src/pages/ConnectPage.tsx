import React, { useState } from 'react';
import { WifiIcon, MapPinIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const ConnectPage: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState('nairobi');

  const regions = [
    {
      id: 'nairobi',
      name: 'Nairobi Region',
      hubs: [
        { name: 'Kibera Community Hub', address: 'Olympic Primary School, Kibera', hours: '6:00 AM - 10:00 PM' },
        { name: 'Mathare Digital Center', address: 'Mathare Social Hall', hours: '7:00 AM - 9:00 PM' },
        { name: 'Eastlands Connect', address: 'Umoja Community Center', hours: '8:00 AM - 8:00 PM' }
      ],
      instructions: [
        'Look for the "ConnectedHub-Nairobi" network on your device',
        'Connect and open your web browser',
        'Complete a quick 2-minute survey about your needs',
        'Enjoy 3 hours of free internet access',
        'Access renews automatically every 3 hours'
      ]
    },
    {
      id: 'coast',
      name: 'Coast Region',
      hubs: [
        { name: 'Mombasa Port Hub', address: 'Mombasa Community Center', hours: '6:00 AM - 11:00 PM' },
        { name: 'Malindi Beach Connect', address: 'Malindi Library', hours: '8:00 AM - 6:00 PM' }
      ],
      instructions: [
        'Connect to "ConnectedHub-Coast" Wi-Fi network',
        'Open browser and watch a 30-second community ad',
        'Read one health or farming tip (2 minutes)',
        'Get 2 hours of free internet access',
        'Renew by viewing new content every 2 hours'
      ]
    },
    {
      id: 'northern',
      name: 'Northern Kenya',
      hubs: [
        { name: 'Kakuma Refugee Hub', address: 'Kakuma Refugee Camp, Block 3', hours: '7:00 AM - 9:00 PM' },
        { name: 'Turkana Connect', address: 'Lodwar Town Hall', hours: '8:00 AM - 7:00 PM' }
      ],
      instructions: [
        'Find "ConnectedHub-North" in your Wi-Fi settings',
        'Connect and complete identity verification',
        'Participate in a community feedback survey',
        'Access educational content for 4 hours',
        'Automatic renewal with daily check-in'
      ]
    }
  ];

  const currentRegion = regions.find(r => r.id === selectedRegion);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How to Connect</h1>
          <p className="text-xl text-gray-600">Get free Wi-Fi access at any Connected Access Hub</p>
        </div>

        {/* Region Selector */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Your Region</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                className={`p-4 rounded-lg border-2 text-left transition-colors ${
                  selectedRegion === region.id
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <MapPinIcon className="h-6 w-6 text-indigo-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{region.name}</h3>
                    <p className="text-sm text-gray-600">{region.hubs.length} hubs available</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {currentRegion && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Connection Instructions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <WifiIcon className="h-6 w-6 text-indigo-600" />
                Connection Steps for {currentRegion.name}
              </h3>
              
              <div className="space-y-4">
                {currentRegion.instructions.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <span className="text-indigo-600 font-semibold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">💡 Pro Tips</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Best connection speeds during morning hours (7-10 AM)</li>
                  <li>• Download content for offline use during your session</li>
                  <li>• Share feedback to help improve the service</li>
                </ul>
              </div>
            </div>

            {/* Hub Locations */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <MapPinIcon className="h-6 w-6 text-indigo-600" />
                Hub Locations
              </h3>
              
              <div className="space-y-4">
                {currentRegion.hubs.map((hub, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{hub.name}</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPinIcon className="h-4 w-4" />
                        <span>{hub.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ClockIcon className="h-4 w-4" />
                        <span>{hub.hours}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <UserGroupIcon className="h-4 w-4" />
                        <span className="text-green-600 font-medium">Currently Active</span>
                      </div>
                    </div>
                    <button className="mt-3 text-indigo-600 hover:text-indigo-800 font-medium text-sm">
                      Get Directions →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Access Models */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Access Models</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Survey Access</h3>
              <p className="text-gray-600 text-sm">Complete a 2-minute community survey for 3 hours of free internet</p>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📺</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Ad-Supported</h3>
              <p className="text-gray-600 text-sm">Watch community ads and get 2 hours of internet access</p>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Educational Content</h3>
              <p className="text-gray-600 text-sm">Read health tips or farming guides for extended access</p>
            </div>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="font-semibold text-yellow-800 mb-3">Need Help Connecting?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-yellow-700">
            <div>
              <p className="font-medium mb-1">Can't see the network?</p>
              <p>Move closer to the hub location and refresh your Wi-Fi list</p>
            </div>
            <div>
              <p className="font-medium mb-1">Connection issues?</p>
              <p>Ask the hub coordinator for assistance or try restarting your device</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectPage;