import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import { Icon, LatLngBounds } from 'leaflet';
import { AlertTriangle, Home, Stethoscope } from 'lucide-react';
import { disasterEvents, resources } from '../data/mockData';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in React Leaflet
delete (Icon.Default.prototype as any)._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Map: React.FC = () => {
  // Odisha coordinates
  const odishaCenter: [number, number] = [20.9517, 85.0985];
  const odishaBounds = new LatLngBounds(
    [17.7800, 81.3700], // Southwest coordinates
    [22.5700, 87.5300]  // Northeast coordinates
  );

  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'red';
      case 'high': return 'orange';
      case 'medium': return 'yellow';
      case 'low': return 'green';
      default: return 'blue';
    }
  };

  return (
    <div className="space-y-6 fade-in">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Odisha Emergency Response Map</h2>
        <div className="h-[600px] rounded-lg overflow-hidden">
          <MapContainer
            center={odishaCenter}
            zoom={7}
            bounds={odishaBounds}
            className="h-full w-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {/* Disaster Events */}
            {disasterEvents.map((event) => (
              <React.Fragment key={event.id}>
                <Marker
                  position={[event.location.lat, event.location.lng]}
                  eventHandlers={{
                    click: () => setSelectedEvent(event.id)
                  }}
                >
                  <Popup>
                    <div className="p-2">
                      <h3 className="font-semibold">{event.type.toUpperCase()}</h3>
                      <p className="text-sm">{event.description}</p>
                      <p className="text-xs mt-1 text-gray-600">{event.location.address}</p>
                    </div>
                  </Popup>
                </Marker>
                <Circle
                  center={[event.location.lat, event.location.lng]}
                  radius={5000}
                  pathOptions={{
                    color: getSeverityColor(event.severity),
                    fillColor: getSeverityColor(event.severity),
                    fillOpacity: 0.2
                  }}
                />
              </React.Fragment>
            ))}

            {/* Resources */}
            {resources.map((resource) => (
              <Marker
                key={resource.id}
                position={[resource.location.lat, resource.location.lng]}
              >
                <Popup>
                  <div className="p-2">
                    <h3 className="font-semibold">{resource.name}</h3>
                    <p className="text-sm">{resource.type}</p>
                    <p className="text-xs mt-1">Status: {resource.status}</p>
                    <p className="text-xs text-gray-600">{resource.location.address}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 className="font-semibold mb-2 flex items-center">
            <AlertTriangle className="text-red-500 mr-2" size={20} />
            Active Events
          </h3>
          <p className="text-2xl font-bold">{disasterEvents.filter(e => e.status === 'active').length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 className="font-semibold mb-2 flex items-center">
            <Home className="text-blue-500 mr-2" size={20} />
            Available Shelters
          </h3>
          <p className="text-2xl font-bold">
            {resources.filter(r => r.type === 'shelter' && r.status === 'available').length}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 className="font-semibold mb-2 flex items-center">
            <Stethoscope className="text-green-500 mr-2" size={20} />
            Medical Centers
          </h3>
          <p className="text-2xl font-bold">
            {resources.filter(r => r.type === 'medical').length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Map;