import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AlertTriangle, MapPin, UserPlus, Bell, Package, Shield, Newspaper } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-300">
            <Shield size={28} />
            <span>SafeHaven</span>
          </Link>
          <nav className="bg-gray-50 rounded-full px-2 py-1 shadow-inner">
            <ul className="flex space-x-1">
              <NavItem to="/map" icon={<MapPin size={18} />} text="Map" isActive={isActive('/map')} />
              <NavItem to="/report" icon={<AlertTriangle size={18} />} text="Report" isActive={isActive('/report')} />
              <NavItem to="/volunteer" icon={<UserPlus size={18} />} text="Volunteer" isActive={isActive('/volunteer')} />
              <NavItem to="/alerts" icon={<Bell size={18} />} text="Alerts" isActive={isActive('/alerts')} />
              <NavItem to="/resources" icon={<Package size={18} />} text="Resources" isActive={isActive('/resources')} />
              <NavItem to="/news" icon={<Newspaper size={18} />} text="News" isActive={isActive('/news')} />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  text: string;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, text, isActive }) => (
  <li>
    <Link
      to={to}
      className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${
        isActive 
          ? 'bg-white text-blue-600 shadow-sm font-medium' 
          : 'text-gray-600 hover:bg-white hover:text-blue-600 hover:shadow-sm'
      }`}
    >
      {icon}
      <span className="ml-2">{text}</span>
    </Link>
  </li>
);

export default Header;