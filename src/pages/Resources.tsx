import React, { useState } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Resources: React.FC = () => {
  const [resources] = useState([
    {
      name: "City General Hospital",
      type: "Medical Center",
      address: "123 Main St, Cityville",
      phone: "(555) 123-4567",
      hours: "24/7",
      supplies: ["Medical care", "Emergency supplies"],
    },
    {
      name: "Central High School",
      type: "Shelter",
      address: "456 Oak Ave, Cityville",
      phone: "(555) 987-6543",
      hours: "8:00 AM - 8:00 PM",
      supplies: ["Food", "Water", "Blankets"],
    },
    {
      name: "Downtown Pharmacy",
      type: "Pharmacy",
      address: "789 Elm St, Cityville",
      phone: "(555) 246-8135",
      hours: "9:00 AM - 9:00 PM",
      supplies: ["Medications", "First aid supplies"],
    },
  ]);

  return (
    <div className="max-w-4xl mx-auto fade-in">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Resource Locator & Aid Distribution</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource, index) => (
          <ResourceCard key={index} resource={resource} />
        ))}
      </div>
    </div>
  );
};

interface Resource {
  name: string;
  type: string;
  address: string;
  phone: string;
  hours: string;
  supplies: string[];
}

const ResourceCard: React.FC<{ resource: Resource }> = ({ resource }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-2 text-blue-700">{resource.name}</h2>
      <p className="text-gray-600 mb-4">{resource.type}</p>
      <div className="space-y-2">
        <div className="flex items-start">
          <MapPin className="mr-2 mt-1 text-blue-500" size={18} />
          <span className="text-gray-700">{resource.address}</span>
        </div>
        <div className="flex items-center">
          <Phone className="mr-2 text-blue-500" size={18} />
          <span className="text-gray-700">{resource.phone}</span>
        </div>
        <div className="flex items-center">
          <Clock className="mr-2 text-blue-500" size={18} />
          <span className="text-gray-700">{resource.hours}</span>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold mb-2 text-gray-800">Available Supplies:</h3>
        <ul className="list-disc list-inside text-gray-700">
          {resource.supplies.map((supply, index) => (
            <li key={index}>{supply}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resources;