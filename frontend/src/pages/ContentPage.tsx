import React, { useState } from 'react';
import { PlayIcon, DocumentTextIcon, CalendarIcon, EyeIcon } from '@heroicons/react/24/outline';

interface ContentItem {
  id: string;
  title: string;
  type: 'video' | 'article' | 'infographic' | 'course';
  category: 'health' | 'education' | 'agriculture' | 'youth' | 'women';
  description: string;
  views: number;
  avgTimeSpent: number;
  targetRegion: string;
  publishDate: string;
  status: 'published' | 'scheduled' | 'draft';
}

const ContentPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('browse');

  const gatesContent: ContentItem[] = [
    {
      id: '1',
      title: 'Gates Foundation: Empowering African Youth Through Technology',
      type: 'video',
      category: 'youth',
      description: 'How digital access transforms opportunities for young people across Africa',
      views: 12500,
      avgTimeSpent: 4.2,
      targetRegion: 'Kenya',
      publishDate: '2024-01-15',
      status: 'published'
    },
    {
      id: '2',
      title: 'Digital Health Solutions for Rural Communities',
      type: 'article',
      category: 'health',
      description: 'Innovative healthcare delivery through connected access hubs',
      views: 8900,
      avgTimeSpent: 6.8,
      targetRegion: 'Nigeria',
      publishDate: '2024-01-10',
      status: 'published'
    },
    {
      id: '3',
      title: 'Women Entrepreneurs: Success Stories from Connected Hubs',
      type: 'video',
      category: 'women',
      description: 'Real stories of women building businesses through digital access',
      views: 15600,
      avgTimeSpent: 5.1,
      targetRegion: 'Rwanda',
      publishDate: '2024-01-08',
      status: 'published'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return PlayIcon;
      case 'article': return DocumentTextIcon;
      default: return DocumentTextIcon;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'health': return 'bg-red-100 text-red-800';
      case 'education': return 'bg-blue-100 text-blue-800';
      case 'youth': return 'bg-green-100 text-green-800';
      case 'women': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Gates Foundation Impact Stories</h1>
          <p className="text-gray-600">Real investments, measurable impact: From M-PESA's 194K household poverty reduction to $40M mRNA vaccine manufacturing in Senegal</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-600">$70M</div>
              <div className="text-sm text-green-700">MenAfriVac Investment</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600">194K</div>
              <div className="text-sm text-blue-700">Households Lifted from Poverty</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-purple-600">$45M</div>
              <div className="text-sm text-purple-700">MADIBA Training Program</div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('browse')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'browse'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Browse Content
            </button>
            <button
              onClick={() => setActiveTab('schedule')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'schedule'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Schedule Content
            </button>
            <button
              onClick={() => setActiveTab('submit')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'submit'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Submit Ideas
            </button>
          </nav>
        </div>

        {/* Browse Content Tab */}
        {activeTab === 'browse' && (
          <div className="grid gap-6">
            {gatesContent.map((content) => {
              const IconComponent = getTypeIcon(content.type);
              return (
                <div key={content.id} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-100 p-3 rounded-lg">
                      <IconComponent className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold text-gray-900">{content.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(content.category)}`}>
                          {content.category}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{content.description}</p>
                      <div className="flex items-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <EyeIcon className="h-4 w-4" />
                          <span>{content.views.toLocaleString()} views</span>
                        </div>
                        <div>Avg. time: {content.avgTimeSpent} min</div>
                        <div>Target: {content.targetRegion}</div>
                        <div>{content.publishDate}</div>
                      </div>
                      <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                        View Content
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Schedule Content Tab */}
        {activeTab === 'schedule' && (
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Schedule New Content</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Content Title</label>
                  <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Content Type</label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                    <option>Video</option>
                    <option>Article</option>
                    <option>Infographic</option>
                    <option>Course</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Target Region</label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                    <option>Kenya</option>
                    <option>Nigeria</option>
                    <option>Uganda</option>
                    <option>Ethiopia</option>
                    <option>Rwanda</option>
                    <option>All Regions</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Publish Date</label>
                  <input type="date" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea rows={4} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"></textarea>
              </div>
              <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                Schedule Content
              </button>
            </form>
          </div>
        )}

        {/* Submit Ideas Tab */}
        {activeTab === 'submit' && (
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Submit Your Ideas for Gates Foundation Review</h2>
            <p className="text-gray-600 mb-6">Have an innovative idea that could help reach more people across Africa? Submit it for potential funding consideration.</p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                  <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Target Population</label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                    <option>Youth (18-35)</option>
                    <option>Women</option>
                    <option>Rural Communities</option>
                    <option>Healthcare Workers</option>
                    <option>Farmers</option>
                    <option>All Populations</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Title</label>
                <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Description</label>
                <textarea rows={6} placeholder="Describe your innovative idea, how it will help communities, and the impact you expect to achieve..." className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Budget (USD)</label>
                <input type="number" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors">
                Submit for Review
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentPage;