import { useState } from "react";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { MdOutlineSubscriptions, MdPictureAsPdf, MdEditDocument, MdOutlineContentCopy } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { BiEditAlt, BiBrain } from "react-icons/bi";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaSearchengin } from "react-icons/fa6";
import { AiOutlineDatabase } from "react-icons/ai";
import { IoBook } from "react-icons/io5";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarItems = [
    { id: 1, name: "Home", icon: <GoHome />, path: "/" },
    { id: 2, name: "Chat with PDF", icon: <MdPictureAsPdf />, path: "/chat-with-pdf" },
    { id: 3, name: "Literature Review", icon: <BiEditAlt />, path: "/literature-review" },
    { id: 4, name: "AI Writer", icon: <GiArtificialIntelligence />, path: "/ai-writer" },
    { id: 5, name: "Find Topics", icon: <FaSearchengin />, path: "/find-topics" },
    { id: 6, name: "Paraphraser", icon: <MdEditDocument />, path: "/paraphraser" },
    { id: 7, name: "Citation Generator", icon: <MdOutlineContentCopy />, path: "/citation-generator" },
    { id: 8, name: "Extract Data", icon: <AiOutlineDatabase />, path: "/extract-data" },
    { id: 9, name: "AI Detector", icon: <BiBrain />, path: "/ai-detector" },
  ];

  const sidebarItems2 = [
    { id: 1, name: "Chrome Extension", icon: <PiUserSquareThin />, path: "/chrome-extension" },
    { id: 2, name: "Use on Chatgpt", icon: <IoBook />, path: "/use-on-chatgpt" },
    { id: 3, name: "Contact Us", icon: <MdOutlineSubscriptions />, path: "/contact-us" },
  ];

  return (
    <div
      className={`px-6 h-[calc(100vh)] overflow-x-hidden transition-all duration-50 ${
        isOpen ? "w-[15%]" : "w-[0%]"
      }`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="space-y-3 items-center">
        {sidebarItems.map((item) => (
          <Link
            to={item.path}
            key={item.id}
            className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1"
          >
            <div className="text-xl">{item.icon}</div>
            {isOpen && <span className="cursor-pointer">{item.name}</span>}
          </Link>
        ))}
      </div>
      <br />
      <hr />
      <div className="mt-4 space-y-3 items-center">
        {sidebarItems2.map((item) => (
          <Link
            to={item.path}
            key={item.id}
            className="flex items-center space-x-3 hover:bg-gray-300 duration-300 rounded-xl p-1"
          >
            <div className="text-xl">{item.icon}</div>
            {isOpen && <span className="cursor-pointer">{item.name}</span>}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
