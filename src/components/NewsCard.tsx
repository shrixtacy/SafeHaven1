import React from 'react';
import { Calendar, ExternalLink, Tag } from 'lucide-react';
import { NewsItem } from '../types';
import { formatDistanceToNow } from 'date-fns';

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  const getCategoryColor = (category?: string) => {
    switch (category?.toLowerCase()) {
      case 'weather':
        return 'bg-blue-100 text-blue-800';
      case 'disaster':
        return 'bg-red-100 text-red-800';
      case 'emergency':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full md:w-48 object-cover"
            src={news.imageUrl}
            alt={news.title}
            loading="lazy"
          />
        </div>
        <div className="p-6 flex-1">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar size={16} className="mr-1" />
              <span>{formatDistanceToNow(new Date(news.publishedAt), { addSuffix: true })}</span>
            </div>
            {news.category && (
              <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center ${getCategoryColor(news.category)}`}>
                <Tag size={12} className="mr-1" />
                {news.category}
              </span>
            )}
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{news.title}</h2>
          <p className="text-gray-600 mb-4">{news.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-blue-600 font-medium">{news.source}</span>
            {news.url && (
              <a
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-700 transition-colors text-sm group"
              >
                Read More
                <ExternalLink size={14} className="ml-1 group-hover:translate-x-0.5 transition-transform" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;