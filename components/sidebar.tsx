import React from 'react';

const Sidebar = () => {
     return (
          <div className="bg-gray-800 text-white w-64 space-y-6 py-16 px-3 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
               <nav>
                    <a href="/profile" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-700 hover:text-white">
                         Profile
                    </a>
                    <a href="/upload" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-700 hover:text-white">
                         Upload
                    </a>
                    <a href="/history" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-700 hover:text-white">
                         Contracts
                    </a>
                    <a href="/logout" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-purple-700 hover:text-white">
                         Logout
                    </a>
               </nav>
          </div>
     );
};

export default Sidebar; 

