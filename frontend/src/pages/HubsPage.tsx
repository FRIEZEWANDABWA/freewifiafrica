import React, { useState, useEffect } from 'react';
import { 
  MagnifyingGlassIcon,
  FunnelIcon,
  MapIcon,
  ListBulletIcon
} from '@heroicons/react/24/outline';
import HubMap from '../components/HubMap';

interface Hub {
  id: string;
  name: string;
  location: {
    latitude: number;
    longitude: number;
    address: string;
    region: string;
    country: string;
  };
  status: 'active' | 'inactive' | 'maintenance';
  connectivity: {
    bandwidth: string;
    uptime: number;
    activeUsers: number;
    totalUsers: number;
  };
  services: string[];
  implementationDate: string;
  partner: string;
  targetAudience: string[];
}

const HubsPage: React.FC = () => {
  const [hubs, setHubs] = useState<Hub[]>([]);
  const [filteredHubs, setFilteredHubs] = useState<Hub[]>([]);
  const [selectedHub, setSelectedHub] = useState<string>('');
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    status: '',
    region: '',
    partner: ''
  });
  const [loading, setLoading] = useState(true);

  // Mock data - replace with actual API call
  useEffect(() => {
    const mockHubs: Hub[] = [
      {
        id: '1',
        name: 'Kibera Community Hub',
        location: {
          latitude: -1.3133,
          longitude: 36.7833,
          address: 'Kibera, Nairobi',
          region: 'Nairobi',
          country: 'Kenya'
        },
        status: 'active',
        connectivity: {
          bandwidth: '100 Mbps',
          uptime: 0.98,
          activeUsers: 245,
          totalUsers: 1850
        },
        services: ['Education', 'Health Info', 'Job Board', 'Government Services'],
        implementationDate: '2023-03-15',
        partner: 'Kenya ICT Authority',
        targetAudience: ['Youth', 'Women', 'Small Business Owners']
      },
      {
        id: '2',
        name: 'Mathare Digital Center',
        location: {
          latitude: -1.2574,
          longitude: 36.8621,
          address: 'Mathare, Nairobi',
          region: 'Nairobi',
          country: 'Kenya'
        },
        status: 'active',
        connectivity: {
          bandwidth: '50 Mbps',
          uptime: 0.95,
          activeUsers: 189,
          totalUsers: 1420
        },
        services: ['Education', 'Agriculture', 'Health Info'],
        implementationDate: '2023-05-20',
        partner: 'Safaricom Foundation',
        targetAudience: ['Farmers', 'Students', 'Healthcare Workers']
      },
      {
        id: '3',
        name: 'Kakuma Refugee Hub',
        location: {
          latitude: 3.7348,
          longitude: 34.6137,
          address: 'Kakuma Refugee Camp, Turkana',
          region: 'Turkana',
          country: 'Kenya'
        },
        status: 'maintenance',
        connectivity: {
          bandwidth: '25 Mbps',
          uptime: 0.85,
          activeUsers: 156,
          totalUsers: 980
        },
        services: ['Education', 'Legal Aid', 'Communication'],
        implementationDate: '2023-01-10',
        partner: 'UNHCR',
        targetAudience: ['Refugees', 'Youth', 'Women']
      }
    ];

    setTimeout(() => {
      setHubs(mockHubs);
      setFilteredHubs(mockHubs);
      setLoading(false);
    }, 1000);
  }, []);

  // Filter and search functionality
  useEffect(() => {
    let filtered = hubs;

    if (searchTerm) {
      filtered = filtered.filter(hub =>
        hub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hub.location.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hub.location.region.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filters.status) {
      filtered = filtered.filter(hub => hub.status === filters.status);
    }

    if (filters.region) {
      filtered = filtered.filter(hub => hub.location.region === filters.region);
    }

    if (filters.partner) {
      filtered = filtered.filter(hub => hub.partner === filters.partner);
    }

    setFilteredHubs(filtered);
  }, [hubs, searchTerm, filters]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'maintenance': return 'bg-yellow-100 text-yellow-800';
      case 'inactive': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatUptime = (uptime: number) => {
    return `${(uptime * 100).toFixed(1)}%`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Digital Access Hubs</h1>
          <p className="mt-2 text-gray-600">
            Explore our network of {hubs.length} connected hubs across Sub-Saharan Africa
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between">
          <div className="flex-1 max-w-lg">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search hubs by name, location, or region..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Filters */}
            <div className="flex items-center space-x-2">
              <FunnelIcon className="h-5 w-5 text-gray-400" />
              <select
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={filters.status}
                onChange={(e) => setFilters({ ...filters, status: e.target.value })}
              >
                <option value="">All Status</option>
                <option value="active">Active</option>
                <option value="maintenance">Maintenance</option>
                <option value="inactive">Inactive</option>
              </select>
              
              <select
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={filters.region}
                onChange={(e) => setFilters({ ...filters, region: e.target.value })}
              >
                <option value="">All Regions</option>
                <option value="Nairobi">Nairobi</option>
                <option value="Turkana">Turkana</option>
              </select>
            </div>

            {/* View Toggle */}
            <div className="flex rounded-lg border border-gray-300 p-1">
              <button
                onClick={() => setViewMode('map')}
                className={`flex items-center px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  viewMode === 'map'
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                <MapIcon className="h-4 w-4 mr-1" />
                Map
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  viewMode === 'list'
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                <ListBulletIcon className="h-4 w-4 mr-1" />
                List
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        {viewMode === 'map' ? (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <HubMap
              hubs={filteredHubs}
              selectedHub={selectedHub}
              onHubSelect={setSelectedHub}
              className="h-[600px] w-full"
            />
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {filteredHubs.map((hub) => (
              <div key={hub.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{hub.name}</h3>
                    <p className="text-sm text-gray-600">{hub.location.address}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(hub.status)}`}>
                    {hub.status}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Active Users:</span>
                    <span className="font-medium">{hub.connectivity.activeUsers.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total Users:</span>
                    <span className="font-medium">{hub.connectivity.totalUsers.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Uptime:</span>
                    <span className="font-medium">{formatUptime(hub.connectivity.uptime)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Partner:</span>
                    <span className="font-medium">{hub.partner}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Services:</p>
                  <div className="flex flex-wrap gap-1">
                    {hub.services.map((service, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedHub(hub.id);
                    setViewMode('map');
                  }}
                  className="mt-4 w-full bg-indigo-600 text-white text-sm py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  View on Map
                </button>
              </div>
            ))}
          </div>
        )}

        {filteredHubs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No hubs found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HubsPage;