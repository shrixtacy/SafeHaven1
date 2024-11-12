import React, { useState } from 'react';
import { Bell, BellOff, AlertTriangle, CloudRain, Wind } from 'lucide-react';
import { weatherAlerts } from '../data/mockData';

const Alerts: React.FC = () => {
  const [alertPreferences, setAlertPreferences] = useState({
    weatherUpdates: true,
    evacuationNotices: true,
    communityRequests: false,
    resourceAvailability: true,
  });

  const handleToggleAlert = (alertType: keyof typeof alertPreferences) => {
    setAlertPreferences(prev => ({
      ...prev,
      [alertType]: !prev[alertType]
    }));
  };

  const getAlertIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'cyclone warning':
        return <Wind className="text-red-500" />;
      case 'flood alert':
        return <CloudRain className="text-yellow-500" />;
      default:
        return <AlertTriangle className="text-orange-500" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto fade-in">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Emergency Alerts</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
              <AlertTriangle className="mr-2 text-red-500" />
              Active Weather Alerts
            </h2>
            <div className="space-y-4">
              {weatherAlerts.map((alert) => (
                <div key={alert.id} className="border-l-4 border-red-500 pl-4 py-3 bg-red-50 rounded-r-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      {getAlertIcon(alert.type)}
                      <div className="ml-3">
                        <h3 className="font-semibold text-gray-900">{alert.type}</h3>
                        <p className="text-sm text-gray-600">{alert.description}</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">
                      {new Date(alert.timestamp).toLocaleString()}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <span className="text-gray-600">Duration: {alert.duration}</span>
                    <span className={`px-2 py-1 rounded-full ${
                      alert.severity === 'high' ? 'bg-red-100 text-red-800' :
                      alert.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {alert.severity.toUpperCase()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Community Alerts</h2>
            <div className="space-y-4">
              <AlertItem
                type="Evacuation Notice"
                message="Mandatory evacuation order for Coastal Zone A due to approaching cyclone."
                timestamp="2023-06-15 14:30"
                severity="high"
              />
              <AlertItem
                type="Resource Update"
                message="New medical supply distribution center opened at Central Community Center."
                timestamp="2023-06-15 12:15"
                severity="medium"
              />
              <AlertItem
                type="Community Request"
                message="Volunteers needed for sandbag filling at River Park. Bring shovels if available."
                timestamp="2023-06-15 10:00"
                severity="low"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white shadow-lg rounded-lg p-6 sticky top-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Alert Settings</h2>
            <div className="space-y-4">
              {Object.entries(alertPreferences).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                  <button
                    onClick={() => handleToggleAlert(key as keyof typeof alertPreferences)}
                    className={`flex items-center px-3 py-1 rounded-md transition-colors duration-300 ${
                      value ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                    }`}
                  >
                    {value ? (
                      <>
                        <Bell className="mr-1" size={16} />
                        On
                      </>
                    ) : (
                      <>
                        <BellOff className="mr-1" size={16} />
                        Off
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface AlertItemProps {
  type: string;
  message: string;
  timestamp: string;
  severity: 'low' | 'medium' | 'high';
}

const AlertItem: React.FC<AlertItemProps> = ({ type, message, timestamp, severity }) => {
  const severityColors = {
    low: 'bg-yellow-100 border-yellow-400 text-yellow-700',
    medium: 'bg-orange-100 border-orange-400 text-orange-700',
    high: 'bg-red-100 border-red-400 text-red-700',
  };

  return (
    <div className={`border-l-4 p-4 rounded-r-lg ${severityColors[severity]}`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-gray-900">{type}</h3>
          <p className="mt-1 text-sm">{message}</p>
        </div>
        <span className="text-xs whitespace-nowrap ml-4">{timestamp}</span>
      </div>
    </div>
  );
};

export default Alerts;