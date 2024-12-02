import { FaDollarSign } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";
import logo from "../../public/logo.png";
function Navbar() {
  return (
    <div className="flex justify-between px-4 py-2  border border-gray-200 
    sm:flex-column">
      <div className="flex items-center space-x-4 ">
        <img src ={logo}alt="" className="w-28 cursor-pointer " />  
      </div>
      <div className=" flex w-[35%]border border-black"> 
      </div>
      <div className=" flex space-x-5 items-center ">
      <button className="flex items-center space-x-2 px-4 py-2 border rounded-full hover:bg-gray-100 duration-200">
          <FaDollarSign size={"20px"} />
          <span className="text-sm">Pricing</span>
        </button>
      <button className="flex items-center space-x-2 px-4 py-2 border rounded-full hover:bg-gray-100 duration-200">
          <FiLogIn size={"20px"} />
          <span className="text-sm">Login</span>
        </button>
      <button className="flex items-center space-x-2 px-4 py-2 border rounded-full hover:bg-gray-100 duration-200">
          <FiUserPlus size={"20px"} />
          <span className="text-sm">Signup</span>
      </button> 
      </div>
    </div>
  );
}

export default Navbar;
