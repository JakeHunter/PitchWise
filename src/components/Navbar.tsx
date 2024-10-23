// src/components/Navbar.tsx
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-magenta-600 p-4 flex justify-between items-center">
      <div className="text-white text-xl font-bold flex items-center">
        <img
          src="/Pitchwise.jpeg" // Ensure the path is correct
          alt="Pitchwise Logo"
          className="w-10 h-10 mr-2" // Adjust the size of the logo
        />
        Pitchwise
      </div>
      <button className="bg-white text-magenta-600 py-2 px-4 rounded hover:bg-gray-100">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
