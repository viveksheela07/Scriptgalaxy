import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Homepage from "./components/Homepage";
import LiteratureReview from "./components/LiteratureReview"; 
import Aiwriter from "./components/Aiwriter"; 
import Aidetector from "./components/Aidetector";
import Chatwithpdf from "./components/Chatwithpdf";
import Findtopic from "./components/Findtopic";
import Paraphrasing from "./components/Paraphrasing";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/literature-review" element={<LiteratureReview />} />
              <Route path="/ai-writer" element={<Aiwriter />} /> 
              <Route path="/ai-detector" element={<Aidetector />} />
              <Route path="/chat-with-pdf" element={<Chatwithpdf />} />
              <Route path="/find-topics" element={<Findtopic />} />
              <Route path="/paraphraser" element={<Paraphrasing />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
