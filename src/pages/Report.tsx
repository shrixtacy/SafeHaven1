import React, { useState } from 'react';
import { Camera, Upload } from 'lucide-react';

const Report: React.FC = () => {
  const [formData, setFormData] = useState({
    type: '',
    description: '',
    location: '',
    image: null as File | null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prevState => ({ ...prevState, image: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting report:', formData);
    setFormData({ type: '', description: '', location: '', image: null });
  };

  return (
    <div className="max-w-2xl mx-auto fade-in">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Report an Incident</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-lg rounded-lg p-6">
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">Incident Type</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            required
          >
            <option value="">Select an incident type</option>
            <option value="flood">Flood</option>
            <option value="fire">Fire</option>
            <option value="earthquake">Earthquake</option>
            <option value="road-blockage">Road Blockage</option>
            <option value="power-outage">Power Outage</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            placeholder="Provide details about the incident..."
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            placeholder="Enter the incident location"
            required
          />
        </div>
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Upload Image</label>
          <div className="mt-1 flex items-center">
            <label htmlFor="image-upload" className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <span>Upload a file</span>
              <input id="image-upload" name="image" type="file" accept="image/*" onChange={handleImageUpload} className="sr-only" />
            </label>
            {formData.image && <span className="ml-3">{formData.image.name}</span>}
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
          >
            Submit Report
          </button>
        </div>
      </form>
    </div>
  );
};

export default Report;