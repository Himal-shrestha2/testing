import {
  BiSolidUserVoice,
  BiCodeAlt,
  BiPaint,
  BiCamera,
  BiMobileAlt,
  BiBullseye,
  BiSearchAlt2,
  BiBookAlt,
  BiBarChartAlt2,
 BiMoviePlay,    // Added for Animation
  BiBrush,        // Added for Digital Art
  BiShapePolygon, // Added for Logo Design
} from "react-icons/bi";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
const Service = () => {
  const services = [
    {
      icon: <BiSolidUserVoice size={40} />,
      name: "UI/UX Design",
      description:
        "Creating intuitive and visually appealing user interfaces with seamless user experiences.",
    },
    {
      icon: <BiCodeAlt size={40} />,
      name: "Web Development",
      description:
        "Building fast, responsive, and scalable websites tailored to your business needs.",
    },
    {
      icon: <BiPaint size={40} />,
      name: "Graphic Design",
      description:
        "Designing eye-catching graphics, branding materials, and visual content that stand out.",
    },
    {
      icon: <BiCamera size={40} />,
      name: "Photography/Videography",
      description:
        "Capturing high-quality photos and videos to elevate your brand’s visual identity.",
    },
    {
      icon: <BiMoviePlay size={40} />,
      name: "Animation",
      description:
        "Creating engaging animations and motion graphics to bring your content to life.",
    },
    {
      icon: <BiBrush size={40} />,
      name: "Digital Art",
      description:
        "Creating stunning digital artwork and illustrations for your brand.",
    },
    {
      icon: <BiShapePolygon size={40} />,
      name: "Logo Design",
      description:
        "Crafting unique and memorable logos that effectively represent your brand identity.",
    },
    {
      icon: <BiBookAlt size={40} />,
      name: "Content Writing",
      description:
        "Crafting engaging, informative, and SEO-friendly content for websites, blogs.",
    },
    {
      icon: <BiBarChartAlt2 size={40} />,
      name: "Analytics/Reporting",
      description:
        "Providing detailed insights and performance reports to guide data-driven decisions.",
    },
  ];
  return (
    <>
    <h1 className="text-center text-[#3B82F6] font-bold text-3xl mb-12 uppercase tracking-wide">
        Our Services
      </h1>
    <div className="h-full grid grid-cols-3 gap-5">
      {services.map((service, index) => (
        <div
          key={service.name}
          className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
        >
          <div className="text-[#3B82F6] mb-5 bg-sky-50 p-4 rounded-full">{service.icon}</div>
          <h3 className=" text-[#1E293B] text-xl font-semibold mb-2">{service.name}</h3>
          <p className="text-gray-600">{service.description}</p>
          {/* New Social Media Section */}
            <div className="mt-auto pt-6 flex gap-5 text-gray-400 border-t border-gray-100 w-full justify-center">
              <FaFacebook className="hover:text-sky-600 cursor-pointer transition-colors" size={20} />
              <FaInstagram className="hover:text-pink-500 cursor-pointer transition-colors" size={20} />
              <FaTwitter className="hover:text-sky-400 cursor-pointer transition-colors" size={20} />
              <FaLinkedin className="hover:text-sky-700 cursor-pointer transition-colors" size={20} />
            </div>
    </div>
      ))}
    </div>
    
    
    </>
  );
}
export default Service;




// import {
//   BiSolidUserVoice, BiCodeAlt, BiPaint, BiCamera, BiMobileAlt,
//   BiBullseye, BiSearchAlt2, BiBookAlt, BiBarChartAlt2, BiMoviePlay,
//   BiBrush, BiShapePolygon
// } from "react-icons/bi";
// import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

// const Service = () => {
//   const services = [
//     { icon: <BiSolidUserVoice />, name: "UI/UX Design", description: "Intuitive interfaces and seamless user experiences." },
//     { icon: <BiCodeAlt />, name: "Web Development", description: "Fast, responsive, and scalable business websites." },
//     { icon: <BiShapePolygon />, name: "Logo Design", description: "Memorable brand identities and logo concepts." },
//     { icon: <BiPaint />, name: "Graphic Design", description: "Eye-catching graphics and branding materials." },
//     { icon: <BiBrush />, name: "Digital Art", description: "Unique digital illustrations and concept art." },
//     { icon: <BiMoviePlay />, name: "Animation", description: "Engaging 2D/3D motion graphics and animations." },
//     { icon: <BiCamera />, name: "Photography", description: "High-quality photos and videos for your brand." },
//     { icon: <BiMobileAlt />, name: "App Dev", description: "User-friendly mobile apps for iOS and Android." },
//     { icon: <BiBullseye />, name: "Marketing", description: "Growth through targeted digital strategies." },
//     { icon: <BiSearchAlt2 />, name: "SEO", description: "Improving rankings to increase organic traffic." },
//     { icon: <BiBookAlt />, name: "Content", description: "Engaging, SEO-friendly content for web and blogs." },
//     { icon: <BiBarChartAlt2 />, name: "Analytics", description: "Detailed insights to guide data-driven decisions." },
//   ];

//   return (
//     // h-screen makes the section exactly the size of the window
//     // overflow-hidden prevents any accidental scrollbars
//     <div className="h-screen w-full bg-slate-50 flex flex-col p-4 lg:p-8 overflow-hidden">
      
//       {/* Header takes up a small fixed height */}
//       <div className="text-center mb-4">
//         <h1 className="text-sky-500 font-bold text-2xl lg:text-3xl uppercase tracking-tighter">
//           Our Services
//         </h1>
//         <div className="h-1 w-20 bg-sky-500 mx-auto mt-1 rounded-full"></div>
//       </div>
      
//       {/* The Grid: flex-1 tells it to take up all remaining vertical space */}
//       <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
//         {services.map((service) => (
//           <div
//             key={service.name}
//             className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 
//                        flex flex-col items-center text-center transition-all 
//                        hover:shadow-md hover:border-sky-200 group"
//           >
//             {/* Icon size scales slightly with screen size */}
//             <div className="text-sky-500 mb-2 text-3xl lg:text-4xl group-hover:scale-110 transition-transform">
//                 {service.icon}
//             </div>

//             <h3 className="text-base lg:text-lg font-bold text-slate-800 mb-1 leading-tight">
//                 {service.name}
//             </h3>
            
//             <p className="text-xs lg:text-sm text-slate-500 leading-snug flex-1">
//               {service.description}
//             </p>

//             {/* Social Icons at the bottom */}
//             <div className="mt-3 pt-3 flex gap-4 text-slate-300 border-t border-slate-50 w-full justify-center">
//               <FaFacebook className="hover:text-sky-600 cursor-pointer transition-colors" />
//               <FaInstagram className="hover:text-pink-500 cursor-pointer transition-colors" />
//               <FaTwitter className="hover:text-sky-400 cursor-pointer transition-colors" />
//               <FaLinkedin className="hover:text-sky-700 cursor-pointer transition-colors" />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Service;