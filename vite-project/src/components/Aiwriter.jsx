function AiWriterLandingPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Section 1: Heading and Introduction */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 animate__animated animate__fadeIn">
          Boost Your Ideas with AI Precision
        </h1>
        <p className="text-lg text-gray-700 mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Transform your concepts into polished masterpieces with the help of AI.
        </p>
      </div>

      {/* Section 2: Highlight Points */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Refinement</h3>
          <p className="text-gray-700">Enhance your ideas with intelligent suggestions and improvements.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Seamless Citations</h3>
          <p className="text-gray-700">Add credible references automatically with AI-driven citation tools.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Write with Confidence</h3>
          <p className="text-gray-700">Polish your ideas into professional, ready-to-publish content.</p>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-12">
        <p className="text-gray-700">© 2024 AI Writer. All rights reserved.</p>
      </div>
    </div>
  );
}

export default AiWriterLandingPage;
