import { useState } from "react";

function LiteratureReview() {
  const [language, setLanguage] = useState("English");

  // Suggestions for users
  const suggestions = [
    "How does climate change affect agriculture?",
    "What are the latest advancements in AI?",
    "What are the impacts of social media on mental health?",
  ];

  // Handle language change for dropdown
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-2/3 max-w-3xl">
        {/* Page Heading */}
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Literature Review
        </h1>

        {/* Search Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search for literature..."
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Language Dropdown */}
          <select
            value={language}
            onChange={handleLanguageChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </select>
        </div>

        {/* Suggestions Section */}
        <div className="mt-4 text-center">
          <h2 className="text-lg font-semibold mb-4">Try asking or searching for:</h2>
          <ul className="list-disc list-inside space-y-2">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LiteratureReview;
