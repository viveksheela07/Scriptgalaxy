import { CiSearch } from 'react-icons/ci'; // Search icon
import { IoMdMic } from 'react-icons/io';  // Microphone icon
import { RiVideoAddLine } from 'react-icons/ri'; // Video add icon

function Homepage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-center mb-10">
        <span className="text-indigo-600">Effortless Research Paper Formatting in Minutes!</span>
      </h1>
      {/* Subline */}
      <p className="text-lg text-center text-gray-600 mb-8">
        Simplifying Research, One Paper at a Time.
      </p>

      {/* Search Bar Container */}
      <div className="flex justify-center w-full sm:w-[80%] md:w-[60%] lg:w-[40%] ">
        <div className="flex items-center w-full p-2 border rounded-full shadow-md bg-white">
          <input
            type="text"
            placeholder="Search for Research Tools"
            className="w-full p-2 border-none rounded-l-full focus:outline-none"
          />
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-full">
            <CiSearch size={24} /> {/* Search icon inside the button */}
          </button>
        </div>
      </div>

      {/* Icons Section */}
      <div className="flex space-x-5 items-center mt-8">
        {/* Microphone Icon */}
        <IoMdMic
          size={40}
          className="cursor-pointer hover:bg-gray-200 p-2 rounded-full"
        />
        {/* Video Add Icon */}
        <RiVideoAddLine
          size={40}
          className="cursor-pointer hover:bg-gray-200 p-2 rounded-full"
        />
      </div>
    </div>
  );
}

export default Homepage;
