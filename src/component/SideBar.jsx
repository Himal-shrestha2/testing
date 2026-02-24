
import { NavLink } from "react-router-dom";
import img1 from "../assets/images/abc.jpg";

const linkClasses = ({ isActive }) =>
  `flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300
   ${isActive
    ? "bg-white/30 shadow-lg scale-105"
    : "hover:bg-white/20 hover:scale-105"}`;

const Sidebar = () => {
  return (
    <div className="w-80 h-screen text-[#F8FAFC] flex flex-col justify-between px-6 py-10 shadow-2xl bg-[#1E293B]"> 
      
      
      <div className="text-center">
        <h2 className="font-extrabold text-2xl">Himal shrestha</h2>
        <p className="semi-bold py-3">Web Developer</p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <img
          src={img1}
          alt="profile"
          className="w-38.5 h-39.5 rounded-[100%] shadow-2xl"
        />
      </div>

      <div className="flex flex-col  justify-center gap-5 mb-3">
        <NavLink to="/" className={linkClasses}>
          <p className="font-medium text-lg">Home</p>
        </NavLink>
        
        <NavLink to="/services" className={linkClasses}>
          <p className="font-medium text-lg">Services</p>
        </NavLink>
        <NavLink to="/portfolio" className={linkClasses}>
          <p className="font-medium text-lg">Portfolio</p>
        </NavLink>
       <NavLink to="/contact" className={linkClasses}>
          <p className="font-medium text-lg">Contact</p>
        </NavLink>



      </div>

     <a
        href="#"
        className="bg-[#3B82F6] py-3 rounded-md text-center shadow-2xl text-[#F8FAFC] font-bold w-full"
      >
        DOWNLOAD CV
      </a>

    </div>
    
  );
};

export default Sidebar;