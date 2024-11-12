import React from 'react';
import { Shield, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2 text-blue-600">
            <Shield size={24} />
            <span className="text-xl font-bold">SafeHaven</span>
          </div>
          <p className="text-gray-600 text-center">
            Made with <Heart className="inline-block w-4 h-4 text-red-500 mx-1" /> for community safety
          </p>
          <p className="text-sm text-gray-500">&copy; 2023 SafeHaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;