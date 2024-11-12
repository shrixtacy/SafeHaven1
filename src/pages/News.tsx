import React, { useState, useEffect } from 'react';
import { ExternalLink, AlertCircle, Loader, Search, Filter } from 'lucide-react';
import NewsCard from '../components/NewsCard';
import { NewsItem } from '../types';
import { fetchNews } from '../services/newsService';
import { formatDistanceToNow } from 'date-fns';

const News: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'latest' | 'relevant'>('latest');

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);
        const newsData = await fetchNews();
        setNews(newsData);
        setError(null);
      } catch (err) {
        setError('Failed to fetch news updates');
      } finally {
        setLoading(false);
      }
    };

    loadNews();
    const interval = setInterval(loadNews, 300000); // Refresh every 5 minutes

    return () => clearInterval(interval);
  }, []);

  const filteredNews = news
    .filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = category === 'all' || item.category === category;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'latest') {
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      }
      return 0; // For relevance, we'll keep the order from the API
    });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader className="animate-spin text-blue-600" size={32} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px] text-red-500">
        <AlertCircle className="mr-2" />
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 fade-in">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Latest Updates</h1>
        <a
          href="https://www.imd.gov.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
        >
          <span className="mr-1">IMD Updates</span>
          <ExternalLink size={16} />
        </a>
      </div>

      <div className="mb-6 space-y-4">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search news..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Categories</option>
            <option value="weather">Weather</option>
            <option value="disaster">Disaster</option>
            <option value="emergency">Emergency</option>
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'latest' | 'relevant')}
            className="px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="latest">Latest First</option>
            <option value="relevant">Most Relevant</option>
          </select>
        </div>
      </div>

      <div className="space-y-6">
        {filteredNews.length > 0 ? (
          filteredNews.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            <Filter className="mx-auto mb-2" size={24} />
            <p>No news found matching your criteria</p>
          </div>
        )}
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h2 className="text-lg font-semibold text-blue-800 mb-2">Stay Informed</h2>
        <p className="text-blue-600">
          Follow official channels and local authorities for the latest updates.
          Keep emergency contacts handy and follow evacuation instructions if issued.
        </p>
      </div>
    </div>
  );
};

export default News;