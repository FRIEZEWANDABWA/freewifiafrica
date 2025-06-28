import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

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
    activeUsers: number;
    totalUsers: number;
    uptime: number;
  };
  services: string[];
}

interface HubMapProps {
  hubs: Hub[];
  selectedHub?: string;
  onHubSelect?: (hubId: string) => void;
  className?: string;
}

// Custom icons for different hub statuses
const createHubIcon = (status: string) => {
  const color = status === 'active' ? '#10b981' : status === 'maintenance' ? '#f59e0b' : '#ef4444';
  return new Icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(`
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12.5" cy="12.5" r="10" fill="${color}" stroke="white" stroke-width="2"/>
        <circle cx="12.5" cy="12.5" r="4" fill="white"/>
      </svg>
    `)}`,
    iconSize: [25, 25],
    iconAnchor: [12.5, 12.5],
    popupAnchor: [0, -12.5],
  });
};

const HubMap: React.FC<HubMapProps> = ({ 
  hubs, 
  selectedHub, 
  onHubSelect, 
  className = "h-96 w-full" 
}) => {
  const [mapCenter, setMapCenter] = useState<[number, number]>([-1.2921, 36.8219]); // Nairobi, Kenya
  const [mapZoom, setMapZoom] = useState(6);

  // Focus on selected hub
  useEffect(() => {
    if (selectedHub) {
      const hub = hubs.find(h => h.id === selectedHub);
      if (hub) {
        setMapCenter([hub.location.latitude, hub.location.longitude]);
        setMapZoom(12);
      }
    }
  }, [selectedHub, hubs]);

  const MapController = () => {
    const map = useMap();
    
    useEffect(() => {
      map.setView(mapCenter, mapZoom);
    }, [map]);

    return null;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'maintenance': return 'text-yellow-600 bg-yellow-100';
      case 'inactive': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const formatUptime = (uptime: number) => {
    return `${(uptime * 100).toFixed(1)}%`;
  };

  return (
    <div className={className}>
      <MapContainer
        center={mapCenter}
        zoom={mapZoom}
        style={{ height: '100%', width: '100%' }}
        className="rounded-lg shadow-lg"
      >
        <MapController />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {hubs.map((hub) => (
          <Marker
            key={hub.id}
            position={[hub.location.latitude, hub.location.longitude]}
            icon={createHubIcon(hub.status)}
            eventHandlers={{
              click: () => onHubSelect?.(hub.id),
            }}
          >
            <Popup className="hub-popup">
              <div className="p-2 min-w-[250px]">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg text-gray-900">{hub.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(hub.status)}`}>
                    {hub.status}
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 mb-3">{hub.location.address}</p>
                
                <div className="space-y-2">
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
                </div>
                
                {hub.services.length > 0 && (
                  <div className="mt-3">
                    <p className="text-sm font-medium text-gray-700 mb-1">Services:</p>
                    <div className="flex flex-wrap gap-1">
                      {hub.services.slice(0, 3).map((service, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                      {hub.services.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{hub.services.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
                
                <button
                  onClick={() => onHubSelect?.(hub.id)}
                  className="mt-3 w-full bg-indigo-600 text-white text-sm py-2 px-3 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  View Details
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default HubMap;