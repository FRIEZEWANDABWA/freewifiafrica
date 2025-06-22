import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GlobeAltIcon, 
  UserGroupIcon, 
  ChartBarIcon, 
  WifiIcon,
  AcademicCapIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const HomePage: React.FC = () => {
  const stats = [
    { name: 'Active Hubs', value: '127', icon: WifiIcon },
    { name: 'Communities Served', value: '45,000+', icon: UserGroupIcon },
    { name: 'Educational Content Views', value: '2.3M', icon: AcademicCapIcon },
    { name: 'Health Information Access', value: '890K', icon: HeartIcon },
  ];

  const features = [
    {
      title: 'Interactive Hub Map',
      description: 'Real-time visualization of connected sites across Africa with live data on user activity and community feedback.',
      icon: GlobeAltIcon,
      link: '/hubs'
    },
    {
      title: 'Impact Analytics',
      description: 'Comprehensive dashboard showing user engagement, content usage, and community impact metrics.',
      icon: ChartBarIcon,
      link: '/analytics'
    },
    {
      title: 'Community Portal',
      description: 'Access educational content, job boards, health information, and connect with local services.',
      icon: UserGroupIcon,
      link: '/portal'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-4 pt-14 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        
        <div className="mx-auto max-w-4xl py-20 sm:py-32 lg:py-40">
          <div className="text-center">
            <div className="mb-8">
              <div className="bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 inline-block shadow-lg">
                <span className="text-base font-semibold text-indigo-600">🌍 Free Wi-Fi • Digital Access • Community Impact</span>
              </div>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Gates Foundation
              </span>
              <br />
              <span className="text-gray-800">Digital Access Initiative</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              Empowering <span className="font-semibold text-indigo-600">2.4M+ youth</span> and vulnerable communities across 
              <span className="font-semibold text-green-600">7 African countries</span> through innovative digital solutions, 
              free Wi-Fi access, and transformative educational opportunities.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/content"
                className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
              >
                💡 Submit Your Ideas
              </Link>
              <Link
                to="/solutions"
                className="w-full sm:w-auto rounded-xl bg-white px-8 py-4 text-base font-semibold text-gray-900 shadow-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 border border-gray-200"
              >
                🎆 View Our Impact <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>147 Active Hubs</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>24K+ Daily Users</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span>98.7% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600 flex items-center justify-center gap-2">
                  <stat.icon className="h-6 w-6 text-indigo-600" />
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Digital Impact</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Empowering Communities Through Technology
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The Gates Foundation's Connected Access Hubs initiative demonstrates how strategic digital 
              investments create lasting change, reaching millions of young people and vulnerable populations 
              across Sub-Saharan Africa with life-changing opportunities.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.title} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.title}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                  <Link
                    to={feature.link}
                    className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Learn more
                    <span aria-hidden="true"> →</span>
                  </Link>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Gates Foundation Impact Stories */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Impact Stories</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Gates Foundation in Africa
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The Gates Foundation is transforming lives across Africa by investing in bold innovations and community-driven solutions—from malaria nets to high-tech agriculture. These stories celebrate real change in health, food security, and opportunity.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-red-600">
                    <span className="text-white text-xl">🦟</span>
                  </div>
                  Malaria Prevention
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Distributing life-saving malaria nets across Nigeria, Uganda, and Tanzania, protecting millions of families from deadly mosquito-borne diseases.</p>
                  <p className="mt-6">
                    <Link to="/impact" className="text-sm font-semibold leading-6 text-indigo-600">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
              
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-600">
                    <span className="text-white text-xl">💉</span>
                  </div>
                  HIV Prevention
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Revolutionary HIV prevention injections deployed in South Africa and Zimbabwe, offering new hope in the fight against AIDS.</p>
                  <p className="mt-6">
                    <Link to="/impact" className="text-sm font-semibold leading-6 text-indigo-600">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
              
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-green-600">
                    <span className="text-white text-xl">🫘</span>
                  </div>
                  Beans of the Future
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Iron-rich "beans of the future" transforming nutrition in Rwanda and Uganda, combating malnutrition with biofortified crops.</p>
                  <p className="mt-6">
                    <Link to="/solutions" className="text-sm font-semibold leading-6 text-indigo-600">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
              
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-cyan-600">
                    <span className="text-white text-xl">🐟</span>
                  </div>
                  Gift Fish Programs
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Supporting sustainable aquaculture across East Africa, providing communities with protein-rich food sources and economic opportunities.</p>
                  <p className="mt-6">
                    <Link to="/projects" className="text-sm font-semibold leading-6 text-indigo-600">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
              
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-yellow-600">
                    <span className="text-white text-xl">🌾</span>
                  </div>
                  Digital Agriculture
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">High-tech agriculture and market access tools empowering farmers with data-driven insights and direct market connections.</p>
                  <p className="mt-6">
                    <Link to="/solutions" className="text-sm font-semibold leading-6 text-indigo-600">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
              
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-purple-600">
                    <span className="text-white text-xl">💊</span>
                  </div>
                  Malaria Vaccines
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Breakthrough malaria vaccines being deployed in Ghana, Kenya, and Malawi, marking a historic milestone in disease prevention.</p>
                  <p className="mt-6">
                    <Link to="/impact" className="text-sm font-semibold leading-6 text-indigo-600">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            </dl>
            
            {/* Additional Stories */}
            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-blue-600">
                    <span className="text-white text-2xl">🧬</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">mRNA Vaccine Hubs</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Establishing cutting-edge mRNA vaccine manufacturing facilities in Senegal and South Africa, building Africa's capacity for local vaccine production and pandemic preparedness.
                </p>
                <Link to="/impact" className="text-sm font-semibold text-blue-600 hover:text-blue-800">
                  Read more about vaccine manufacturing →
                </Link>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-green-600">
                    <span className="text-white text-2xl">💰</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">$200B Commitment</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Bill Gates' historic $200 billion pledge with the majority targeting African programs, representing the largest private commitment to global development and health equity.
                </p>
                <Link to="/solutions" className="text-sm font-semibold text-green-600 hover:text-green-800">
                  Learn about the commitment →
                </Link>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Explore More Impact Stories</h3>
                <p className="text-gray-600 mb-6">
                  Discover how innovative partnerships and community-driven solutions are creating lasting change across Africa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/impact"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    View All Stories
                  </Link>
                  <Link
                    to="/projects"
                    className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    See Our Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to make an impact?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200">
              Join us in bridging the digital divide and empowering communities across Africa 
              through sustainable technology solutions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/analytics"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                View Analytics
              </Link>
              <a
                href="#contact"
                className="text-sm font-semibold leading-6 text-white"
              >
                Contact us <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;