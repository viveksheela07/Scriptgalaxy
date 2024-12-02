import React, { useState } from 'react';
import { Upload, File, MessageSquare, FileText } from 'lucide-react';

const ChatWithPDFLanding = () => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          ChatWithPDF: Your AI Document Companion
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Transform how you interact with documents. Instantly chat with, analyze, and extract insights from any PDF.
        </p>
        
        {/* CTA Button */}
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
          Get Started Now
        </button>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <FileText className="mx-auto mb-4 text-blue-600" size={48} />
          <h3 className="text-xl font-semibold mb-2">Intelligent PDF Analysis</h3>
          <p className="text-gray-600">AI-powered insights from your documents in seconds</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <MessageSquare className="mx-auto mb-4 text-green-600" size={48} />
          <h3 className="text-xl font-semibold mb-2">Interactive Chat Interface</h3>
          <p className="text-gray-600">Ask questions, get instant contextual answers</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <Upload className="mx-auto mb-4 text-purple-600" size={48} />
          <h3 className="text-xl font-semibold mb-2">Easy Document Upload</h3>
          <p className="text-gray-600">Simply drag and drop or select your PDF</p>
        </div>
      </div>

      {/* PDF Upload Section */}
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-6">Upload Your PDF</h2>
          <div 
            className="border-2 border-dashed border-blue-300 p-12 text-center 
                       rounded-xl hover:border-blue-500 transition-all 
                       cursor-pointer relative"
          >
            <input 
              type="file" 
              accept=".pdf"
              onChange={handleFileUpload}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <File className="mx-auto mb-4 text-blue-500" size={64} />
            <p className="text-gray-600 mb-4">
              {uploadedFile 
                ? `Selected: ${uploadedFile.name}` 
                : 'Drag and drop your PDF or click to upload'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWithPDFLanding;