import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const FlowingButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const resumeUrl = 'https://asadsdevportfolio.linkyhost.com';

  return (
    <div
      className=" fixed bottom-6 left-8 z-[9999] group lg:absolute lg:bottom-25 lg:left-8"

      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      <div className="flex items-center space-x-2">


        <div className="w-10 h-10 rounded-full border-2 border-pink-500 bg-gray-800 flex items-center justify-center cursor-pointer transition-all duration-300 transform group-hover:scale-105 shadow-lg">
          <span className="text-pink-500 text-xl">📜</span>
        </div>

        <Link
          to={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            flex items-center space-x-2 
            py-2 px-4 
            rounded-full 
            bg-gray-800 border border-gray-700
            text-white text-sm font-medium
            shadow-xl
            transition-all duration-300 ease-in-out
            
            ${isHovered
              ? 'opacity-100 translate-x-0 pointer-events-auto'
              : 'opacity-0 translate-x-4 pointer-events-none'
            }
          `}
        >
          <FileText size={16} className="text-pink-500" />
          <span className='text-white'>View Resume</span>
        </Link>

      </div>
    </div>
  );
};

export default FlowingButton;