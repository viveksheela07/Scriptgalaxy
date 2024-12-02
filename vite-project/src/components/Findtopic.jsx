import React, { useState } from 'react';
import { Search, ChevronRight } from 'lucide-react';

const FindTopicsLandingPage = () => {
  const [suggestions, setSuggestions] = useState([
    {
      text: 'Benchmarks for evaluation of large language models',
      link: '#'
    },
    {
      text: 'Efficient materials for solar panels',
      link: '#'
    },
    {
      text: 'Effective interventions for treating depression',
      link: '#'
    },
    {
      text: 'Renewable energy trends for the next decade',
      link: '#'
    },
    {
      text: 'Main causes of economic recessions',
      link: '#'
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-5xl font-bold text-gray-800 mb-6 text-center">
          Go deeper within research papers
        </h2>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Extract insightful topics from a vast collection of research.
        </p>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for topics across research papers..."
              className="w-full rounded-full bg-white py-4 pl-12 pr-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Suggestions Section */}
      <div className="bg-white py-6 shadow-lg">
        <div className="container mx-auto px-3">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Try asking or searching for:
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {suggestions.map((suggestion, index) => (
              <a
                key={index}
                href={suggestion.link}
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 px-6 rounded-full transition-colors shadow-md flex items-center justify-between"
              >
                <span>{suggestion.text}</span>
                <ChevronRight className="ml-4" size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindTopicsLandingPage;