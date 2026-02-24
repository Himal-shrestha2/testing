
// import React, { useState } from "react";
// import contactImg from "../assets/images/contact.jpg"; // change if needed

// const Contact = () => {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      
//       {/* Main container */}
//       <div className="bg-white shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-2 max-w-4xl w-full">
        
//         {/* Image section */}
//         <div className="hidden md:flex items-center justify-center p-5">
//           <img
//             src={contactImg}
//             alt="Contact"
//             className="rounded-lg object-cover"
//           />
//         </div>

//         {/* Form section */}
//         <div className="p-8">
//           <h1 className="text-3xl font-bold mb-2 text-gray-800">
//             Contact Us
//           </h1>
//           <h2 className="text-gray-500 mb-6">
//             Feel free to send us a message
//           </h2>

//           {!submitted ? (
//             <form onSubmit={handleSubmit} className="space-y-4">

//               {/* Name */}
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   required
//                   placeholder="Enter your name"
//                   className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   required
//                   placeholder="Enter your email"
//                   className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* Message */}
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1">
//                   Message
//                 </label>
//                 <textarea
//                   required
//                   placeholder="Write your message"
//                   rows="4"
//                   className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 ></textarea>
//               </div>

//               {/* Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
//               >
//                 Send Message
//               </button>
//             </form>
//           ) : (
//             /* Thank you message */
//             <div className="text-center mt-10">
//               <h3 className="text-2xl font-semibold text-green-600">
//                 Thank You!
//               </h3>
//               <p className="text-gray-600 mt-2">
//                 Your message has been sent successfully.
//               </p>
//             </div>
//           )}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Contact;




import React, { useState } from "react";
import contactImg from "../assets/images/contact.jpg"; // change if needed

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      
      {/* Main container */}
      <div className="bg-white shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-2  w-full">
        
        {/* Image section */}
        <div className="hidden md:flex items-center justify-center p-5">
          <img
            src={contactImg}
            alt="Contact"
            className="rounded-lg h-full w-full object-cover"
          />
        </div>

        {/* Form section */}
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-2 text-[#3B82F6]">
            Contact Us
          </h1>
          <h2 className="text-gray-500 mb-6">
            Feel free to send us a message
          </h2>

          {!submitted ? (
            <form 
            action="https://formsubmit.co/8dabfe0cb858b66cd5f520d6b41de18c" 
            method="POST" 
            className="space-y-5"
          >

              {/* Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Message
                </label>
                <textarea
                  required
                  placeholder="Write your message"
                  rows="4"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-[#1E293B] text-[#F8FAFC] py-3 rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          ) : (
            /* Thank you message */
            <div className="text-center mt-10">
              <h3 className="text-2xl font-semibold text-green-600">
                Thank You!
              </h3>
              <p className="text-gray-600 mt-2">
                Your message has been sent successfully.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Contact;
