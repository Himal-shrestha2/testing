// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { Home } from './page/Home';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <h1 className="text-3xl font-bold underline">Hello Tailwind CSS!</h1>
//     </>
//   )
// }

// export default App

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Service";
import Portfolio from "./pages/Portfolio";

import Sidebar from "./component/SideBar";
import "./App.css";

function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-8 overflow-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
