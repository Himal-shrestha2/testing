// const Home = () => {
//   return <h1>Home Page</h1>;
// };
// export default Home;





// import React from "react";
// import aaa from "../assets/images/111.jpg";
// export const Home = () => {
//   return (
//     <div className="w-full h-157.5 flex flex-row border-2  items-center justify-between bg-gray-100 relative px-6  overflow-hidden">
//       {/* left */}
//       <div>
//         <h1>Himal Shrestha</h1>
//         <p>
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur,
//           beatae dicta molestiae voluptate, veniam, magnam repellendus delectus
//           necessitatibus illum velit rem quaerat neque expedita accusantium!
//           Sequi facilis neque labore laborum.
//         </p>
//         <button>Hire Me!</button>
//       </div>
//       {/* Right */}
//       <div>
//         <img src={aaa} alt="imgmy" className="shadow-2xl rounded-[5%]" />
//       </div>
//     </div>
//   );
// };








// import aaa from "../assets/images/111.jpg";
// import {typewriter} from "react-simple-typewriter" ;
// const Home = () => {
//   return (
//     <div className="w-full h-157.5 flex flex-row border-2 items-center justify-between bg-gray-100 relative px-6 overflow-hidden">
//       {/* Left */}
//       <div className="max-w-xl">
//         <h1 className="text-3xl font-bold mb-4">
//          Himal Shrestha
//         </h1>
// <typewriter
// words={['Web Developer', 'Designer', 'Freelancer']}
// loop={5}
// cursor
// cursorStyle='|'
// typeSpeed={70}
// deleteSpeed={50}
// delaySpeed={1000}
// />  
//         <p className="mb-4 text-gray-700">
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//           Pariatur, beatae dicta molestiae voluptate, veniam, magnam
//           repellendus delectus necessitatibus illum velit rem quaerat
//           neque expedita accusantium! Sequi facilis neque labore laborum.
//         </p>

//         <button className="px-6 py-2 bg-black text-white rounded-lg">
//           Hire Me!
//         </button>
//       </div>

//       {/* Right */}
//       <div>
//         <img
//           src={aaa}
//           alt="imgmy"
//           className="shadow-2xl rounded-[5%] w-80"
//         />
//       </div>
//     </div>
//   );
// };

// export default Home;



import React from "react";
import aaa from "../assets/images/111.jpg";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div className="w-full min-h-157.5 flex flex-row items-center justify-between bg-gray-100 px-6 overflow-hidden">
      
      {/* Left Section */}
      <div className="flex-1 flex flex-col gap-6 pl-12 justify-center h-full">
        <h2 className="text-4xl font-semibold text-gray-800">
          Hi! I'm <span className="text-[#3B82F6]">Himal Shrestha</span>
        </h2>

        <h3 className="text-2xl font-medium bg-[#1C1C1C] inline-block text-transparent bg-clip-text">
          <Typewriter
            words={["Web Developer", "Designer", "Freelancer"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1000}
          />
        </h3>

        <p className="text-gray-600 max-w-md">
          I design modern websites, produce high-quality videos, and craft striking visuals that make your brand unforgettable. Let’s make it happen.
        </p>

        <button className="mt-6 w-max px-6 py-3 bg-[#1E293B] text-[#F8FAFC] font-semibold rounded-lg shadow-lg hover:bg-sky-600 transition all duration-300">
          Hire Me
        </button>
      </div>

      {/* Right Section */}
      <div className="flex-1 relative flex justify-center items-center h-full">
        <img
          src={aaa}
          alt="Profile"
          className="w-90 rounded-xl shadow-2xl object-cover"
        />
      </div>

    </div>
  );
};

export default Home;
