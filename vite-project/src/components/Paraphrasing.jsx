import React, { useState } from 'react';
import { Copy, Zap, Sparkle, FileText } from 'lucide-react';

// Main App Component
const ParaphrasingToolApp = () => {
  const [inputText, setInputText] = useState('');
  const [paraphrasedText, setParaphrasedText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleParaphrase = async () => {
    if (!inputText.trim()) return;

    setLoading(true);
    try {
      // Simulated AI paraphrasing (replace with actual API call)
      const response = await new Promise(resolve => 
        setTimeout(() => resolve({
          text: inputText
            .split(' ')
            .map(word => 
              Math.random() > 0.5 ? word : getSynonym(word)
            )
            .join(' ')
        }), 1500)
      );
      setParaphrasedText(response.text);
    } catch (error) {
      console.error('Paraphrasing error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(paraphrasedText);
  };

  // Simple synonym replacement (mock function)
  const getSynonym = (word) => {
    const synonyms = {
      'beautiful': 'stunning',
      'happy': 'joyful',
      'big': 'massive',
      'small': 'tiny'
    };
    return synonyms[word.toLowerCase()] || word;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Sparkle className="text-indigo-600" />
          <h1 className="text-2xl font-bold text-gray-800">AI Paraphraser</h1>
        </div>
        <nav className="space-x-4">
          <a href="#" className="text-gray-600 hover:text-indigo-600">Features</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600">Pricing</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Input */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Instant AI-Powered Paraphrasing
          </h2>
          <p className="text-gray-600">
            Transform your text with advanced AI that understands context and nuance.
          </p>
          
          <div className="space-y-4">
            <textarea 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste your text here..."
              className="w-full h-48 p-4 border-2 border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-500 transition"
            />
            
            <button 
              onClick={handleParaphrase}
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Zap className="animate-pulse" />
                  <span>Paraphrasing...</span>
                </>
              ) : (
                <>
                  <Zap />
                  <span>Paraphrase Text</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column - Output */}
        <div className="space-y-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Paraphrased Result
              </h3>
              {paraphrasedText && (
                <button 
                  onClick={handleCopy}
                  className="text-indigo-600 hover:bg-indigo-50 p-2 rounded-full transition"
                >
                  <Copy size={20} />
                </button>
              )}
            </div>
            
            <div className="min-h-48 border-2 border-gray-100 rounded-lg p-4">
              {paraphrasedText ? (
                <p className="text-gray-700">{paraphrasedText}</p>
              ) : (
                <p className="text-gray-400 italic">
                  Your paraphrased text will appear here
                </p>
              )}
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <FeatureCard 
              icon={<FileText className="text-indigo-600" />}
              title="Preserve Meaning"
              description="AI ensures original intent is maintained"
            />
            <FeatureCard 
              icon={<Sparkle className="text-green-600" />}
              title="Multiple Styles"
              description="Supports various writing tones"
            />
            <FeatureCard 
              icon={<Copy className="text-purple-600" />}
              title="Easy Copy"
              description="One-click text copying"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-6 px-4 text-center">
        <p className="text-gray-600">
          © 2024 AI Paraphraser. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white shadow-md rounded-lg p-4 text-center space-y-2 hover:shadow-lg transition">
    <div className="flex justify-center mb-2">{icon}</div>
    <h4 className="font-semibold text-gray-800">{title}</h4>
    <p className="text-xs text-gray-600">{description}</p>
  </div>
);

export default ParaphrasingToolApp;