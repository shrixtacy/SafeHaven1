import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, AlertTriangle, UserPlus, Bell, Package, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center fade-in">
      <div className="max-w-3xl mx-auto mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
          Welcome to SafeHaven
        </h1>
        <p className="text-xl text-gray-600">
          Your comprehensive disaster response and coordination platform. Stay informed, stay connected, stay safe.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          icon={<MapPin className="text-blue-500" size={32} />}
          title="Interactive Map"
          description="View real-time updates on affected areas and available resources"
          link="/map"
        />
        <FeatureCard
          icon={<AlertTriangle className="text-amber-500" size={32} />}
          title="Report Incidents"
          description="Submit and verify real-time reports about local conditions"
          link="/report"
        />
        <FeatureCard
          icon={<UserPlus className="text-green-500" size={32} />}
          title="Volunteer"
          description="Offer help or request assistance from community volunteers"
          link="/volunteer"
        />
        <FeatureCard
          icon={<Bell className="text-purple-500" size={32} />}
          title="Emergency Alerts"
          description="Receive critical updates and customized notifications"
          link="/alerts"
        />
        <FeatureCard
          icon={<Package className="text-rose-500" size={32} />}
          title="Resource Locator"
          description="Find nearby emergency resources and aid distribution points"
          link="/resources"
          className="md:col-span-2 lg:col-span-1"
        />
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, link, className = '' }) => {
  return (
    <Link 
      to={link} 
      className={`card p-6 hover-scale group ${className}`}
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 p-3 rounded-full bg-gray-50 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center text-blue-600 font-medium">
          <span>Learn More</span>
          <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
};

export default Home;