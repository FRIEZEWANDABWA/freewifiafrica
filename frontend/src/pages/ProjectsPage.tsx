import React, { useState } from 'react';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';

interface Project {
  id: string;
  title: string;
  location: string;
  status: 'active' | 'planning' | 'completed';
  users: number;
  description: string;
  image: string;
  partner: string;
  targetAudience: string[];
}

const ProjectsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [regionFilter, setRegionFilter] = useState('');

  const projects: Project[] = [
    // Kenya Projects (Main Focus)
    {
      id: '1',
      title: 'Kibera Digital Bridge',
      location: 'Kibera, Nairobi, Kenya',
      status: 'active',
      users: 1850,
      description: 'Providing free Wi-Fi and digital literacy training to Kenya\'s largest urban slum',
      image: '/api/placeholder/400/250',
      partner: 'Kenya ICT Authority',
      targetAudience: ['Youth', 'Women', 'Small Business Owners']
    },
    {
      id: '2',
      title: 'Bungoma Community Connect',
      location: 'Bungoma County, Kenya',
      status: 'active',
      users: 1240,
      description: 'Rural connectivity hub serving farming communities with agricultural information',
      image: '/api/placeholder/400/250',
      partner: 'Kenya Agricultural Board',
      targetAudience: ['Farmers', 'Rural Communities', 'Youth']
    },
    {
      id: '3',
      title: 'Kisumu Hospital Wi-Fi Access',
      location: 'Kisumu, Kenya',
      status: 'active',
      users: 890,
      description: 'Free Wi-Fi for patients and families with health education content',
      image: '/api/placeholder/400/250',
      partner: 'Ministry of Health Kenya',
      targetAudience: ['Patients', 'Healthcare Workers', 'Families']
    },
    {
      id: '4',
      title: 'Nyeri Market Public Wi-Fi',
      location: 'Nyeri Town, Kenya',
      status: 'active',
      users: 2100,
      description: 'Market-based Wi-Fi hub connecting traders with digital payment systems',
      image: '/api/placeholder/400/250',
      partner: 'Nyeri County Government',
      targetAudience: ['Traders', 'Small Business Owners', 'Customers']
    },
    // Uganda Projects
    {
      id: '5',
      title: 'Kampala University Wi-Fi',
      location: 'Kampala, Uganda',
      status: 'active',
      users: 3200,
      description: 'Campus-wide free Wi-Fi supporting 5,000+ students with educational resources',
      image: '/api/placeholder/400/250',
      partner: 'Uganda Communications Commission',
      targetAudience: ['Students', 'Faculty', 'Researchers']
    },
    // Nigeria Projects
    {
      id: '6',
      title: 'Aiyetoro-Gbede Digital Hub',
      location: 'Kogi State, Nigeria',
      status: 'active',
      users: 1560,
      description: 'Rural town connectivity with focus on youth empowerment and digital skills',
      image: '/api/placeholder/400/250',
      partner: 'Nigeria ICT Development Agency',
      targetAudience: ['Youth', 'Students', 'Entrepreneurs']
    },
    {
      id: '7',
      title: 'Ota Community Connect',
      location: 'Ogun State, Nigeria',
      status: 'active',
      users: 2800,
      description: 'Industrial town Wi-Fi hub supporting workers and families',
      image: '/api/placeholder/400/250',
      partner: 'Ogun State Government',
      targetAudience: ['Industrial Workers', 'Families', 'Students']
    },
    // Ethiopia Projects
    {
      id: '8',
      title: 'Digital Roots Dilla',
      location: 'Dilla, Ethiopia',
      status: 'active',
      users: 1800,
      description: 'Coffee-producing region hub with agricultural extension and market access',
      image: '/api/placeholder/400/250',
      partner: 'Ethiopian Coffee & Tea Authority',
      targetAudience: ['Coffee Farmers', 'Students', 'Health Workers']
    },
    // Rwanda Projects
    {
      id: '9',
      title: 'Smart Villages Nyagatare',
      location: 'Nyagatare, Rwanda',
      status: 'active',
      users: 2500,
      description: 'Government smart village initiative with agricultural and business focus',
      image: '/api/placeholder/400/250',
      partner: 'Rwanda Development Board',
      targetAudience: ['Farmers', 'Students', 'Entrepreneurs']
    },
    // South Africa Projects
    {
      id: '10',
      title: 'Mthatha Wi-Connect Project',
      location: 'Mthatha, Eastern Cape, South Africa',
      status: 'active',
      users: 3000,
      description: 'University town connectivity supporting education and healthcare access',
      image: '/api/placeholder/400/250',
      partner: 'Eastern Cape Provincial Government',
      targetAudience: ['University Students', 'Healthcare Workers', 'Local Vendors']
    },
    // Senegal Projects
    {
      id: '11',
      title: 'Kédougou Access4All Program',
      location: 'Kédougou, Senegal',
      status: 'active',
      users: 1200,
      description: 'Mining and eco-tourism region connectivity with cross-border trade access',
      image: '/api/placeholder/400/250',
      partner: 'Senegal Ministry of Digital Economy',
      targetAudience: ['Miners', 'Tourists', 'Cross-border Traders']
    },
    // Planning Phase
    {
      id: '12',
      title: 'Kakuma Refugee Hub',
      location: 'Kakuma Refugee Camp, Kenya',
      status: 'planning',
      users: 0,
      description: 'Comprehensive digital access for refugee education and communication',
      image: '/api/placeholder/400/250',
      partner: 'UNHCR',
      targetAudience: ['Refugees', 'Students', 'Families']
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !statusFilter || project.status === statusFilter;
    const matchesRegion = !regionFilter || project.location.includes(regionFilter);
    return matchesSearch && matchesStatus && matchesRegion;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'planning': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Digital Access Projects Across Africa</h1>
          <p className="text-gray-600">Explore our community Wi-Fi initiatives in Kenya, Nigeria, Uganda, Ethiopia, Rwanda, Senegal, and South Africa</p>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-green-50 p-3 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{projects.filter(p => p.location.includes('Kenya')).length}</div>
              <div className="text-sm text-green-700">Kenya Projects</div>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{projects.filter(p => p.status === 'active').length}</div>
              <div className="text-sm text-blue-700">Active Hubs</div>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">{projects.reduce((sum, p) => sum + p.users, 0).toLocaleString()}</div>
              <div className="text-sm text-purple-700">Total Users</div>
            </div>
            <div className="bg-orange-50 p-3 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">7</div>
              <div className="text-sm text-orange-700">Countries</div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects by name or location..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <FunnelIcon className="h-5 w-5 text-gray-400" />
            <select
              className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="planning">Planning</option>
              <option value="completed">Completed</option>
            </select>
            
            <select
              className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
            >
              <option value="">All Countries</option>
              <option value="Kenya">Kenya</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Uganda">Uganda</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Senegal">Senegal</option>
              <option value="South Africa">South Africa</option>
            </select>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-indigo-100">{project.location}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  <span className="text-sm text-gray-600">
                    {project.users.toLocaleString()} users
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-1">Partner:</p>
                  <p className="text-sm font-medium">{project.partner}</p>
                </div>
                
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2">Target Audience:</p>
                  <div className="flex flex-wrap gap-1">
                    {project.targetAudience.map((audience, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {audience}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors text-sm font-medium">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;