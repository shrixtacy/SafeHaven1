import axios from 'axios';
import { NewsItem } from '../types';

// Simulated news data with real-time updates
const generateNewsData = (): NewsItem[] => {
  const now = new Date();
  
  return [
    {
      id: '1',
      title: 'Cyclone Warning: High Alert Issued for Coastal Regions',
      description: 'Meteorological Department issues red alert as cyclonic storm intensifies. Evacuation procedures initiated in vulnerable areas.',
      source: 'Weather Department',
      category: 'weather',
      url: 'https://example.com/news/1',
      publishedAt: new Date(now.getTime() - 30 * 60000).toISOString(), // 30 minutes ago
      imageUrl: 'https://images.unsplash.com/photo-1527482937786-6608f6e14c15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: '2',
      title: 'Emergency Response Teams Deployed to Affected Areas',
      description: 'NDRF teams positioned at strategic locations. Medical and rescue operations underway.',
      source: 'Disaster Management Authority',
      category: 'emergency',
      url: 'https://example.com/news/2',
      publishedAt: new Date(now.getTime() - 45 * 60000).toISOString(), // 45 minutes ago
      imageUrl: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: '3',
      title: 'Flood Alert: Rivers Above Danger Mark',
      description: 'Several rivers flowing above danger levels. Residents in low-lying areas advised to stay vigilant.',
      source: 'Flood Monitoring Center',
      category: 'disaster',
      url: 'https://example.com/news/3',
      publishedAt: new Date(now.getTime() - 60 * 60000).toISOString(), // 1 hour ago
      imageUrl: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: '4',
      title: 'Weather Update: Heavy Rainfall Expected',
      description: 'IMD predicts heavy to very heavy rainfall in the next 48 hours. Citizens advised to take precautions.',
      source: 'Meteorological Center',
      category: 'weather',
      url: 'https://example.com/news/4',
      publishedAt: new Date(now.getTime() - 90 * 60000).toISOString(), // 1.5 hours ago
      imageUrl: 'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: '5',
      title: 'Relief Camps Set Up in Affected Districts',
      description: 'Government establishes relief camps with essential supplies. Medical teams on standby.',
      source: 'District Administration',
      category: 'emergency',
      url: 'https://example.com/news/5',
      publishedAt: new Date(now.getTime() - 120 * 60000).toISOString(), // 2 hours ago
      imageUrl: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    }
  ];
};

export const fetchNews = async (): Promise<NewsItem[]> => {
  // Simulating API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return generateNewsData();
};