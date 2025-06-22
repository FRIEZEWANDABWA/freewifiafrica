import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Bars3Icon, 
  XMarkIcon,
  GlobeAltIcon,
  ChartBarIcon,
  UserGroupIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';

const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: GlobeAltIcon },
    { name: 'Solutions', href: '/solutions', icon: ChartBarIcon },
    { name: 'Hub Map', href: '/hubs', icon: GlobeAltIcon },
    { name: 'Projects', href: '/projects', icon: UserGroupIcon },
    { name: 'Impact Stories', href: '/impact', icon: UserGroupIcon },
    { name: 'Gates Content', href: '/content', icon: ChartBarIcon },
    { name: 'How to Connect', href: '/connect', icon: UserGroupIcon },
    { name: 'Analytics', href: '/analytics', icon: ChartBarIcon },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm relative z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Connected Access Hubs</span>
            <div className="flex items-center space-x-2">
              <GlobeAltIcon className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">Connected Access Hubs</span>
            </div>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`group flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-semibold leading-6 transition-all duration-200 ${
                isActive(item.href)
                  ? 'bg-indigo-100 text-indigo-600 shadow-sm'
                  : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              <item.icon className={`h-4 w-4 transition-transform duration-200 group-hover:scale-110 ${
                isActive(item.href) ? 'text-indigo-600' : 'text-gray-500 group-hover:text-indigo-600'
              }`} />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3">
          <Link
            to="/content"
            className="group rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            <span className="group-hover:animate-bounce">💡</span>
            Submit Ideas
          </Link>
          <Link
            to="/solutions"
            className="group rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            <span className="group-hover:animate-pulse">🎆</span>
            Our Solutions
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-40 bg-black bg-opacity-25" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Connected Access Hubs</span>
                <div className="flex items-center space-x-2">
                  <GlobeAltIcon className="h-8 w-8 text-indigo-600" />
                  <span className="text-lg font-bold text-gray-900">CAH</span>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`-mx-3 flex items-center space-x-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors ${
                        isActive(item.href)
                          ? 'bg-indigo-50 text-indigo-600'
                          : 'text-gray-900 hover:bg-gray-50'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-3">
                  <Link
                    to="/content"
                    className="block rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg flex items-center justify-center gap-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    💡 Submit Ideas
                  </Link>
                  <Link
                    to="/solutions"
                    className="block rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg flex items-center justify-center gap-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    🎆 Our Solutions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;