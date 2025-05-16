import React, { useState } from 'react';
import { Download, FileText, ChevronRight } from 'lucide-react';

const DownloadSyllabusSection = ({ setIsOpen }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  return (
    <div className="w-full py-16 px-4 overflow-hidden" style={{ backgroundColor: '#fff3e3' }}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight" style={{ color: '#11182b' }}>
          Get Your <span style={{ color: '#e05527' }}>Free</span> Course Syllabus
        </h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl mb-8 opacity-80" style={{ color: '#11182b' }}>
          Discover what you'll learn in our comprehensive training program
        </p>

        {/* Download Button Container */}
        <div className="relative">
          <button
             onClick={() => setIsOpen(true)}
            
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            disabled={isDownloading}
            className={`
              group relative overflow-hidden rounded-full px-8 py-4 md:px-12 md:py-6
              font-bold text-lg md:text-xl transition-all duration-500 transform
              ${isHovered ? 'scale-105' : 'scale-100'}
              ${isDownloading ? 'cursor-not-allowed opacity-90' : 'cursor-pointer'}
              border-4 border-transparent hover:border-white
              shadow-lg hover:shadow-2xl
            `}
            style={{ 
              backgroundColor: '#e05527',
              color: '#ffffff'
            }}
          >
            {/* Background Glow Effect */}
            <div
              className={`
                absolute inset-0 rounded-full transition-all duration-500
                ${isHovered ? 'scale-150 opacity-30' : 'scale-100 opacity-0'}
              `}
              style={{ backgroundColor: '#e05527' }}
            />
            
            {/* Button Content */}
            <div className="relative flex items-center gap-4">
              {/* Icon */}
              <div className={`transition-all duration-300 ${isDownloading ? 'animate-spin' : ''}`}>
                {isDownloading ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Download className="w-6 h-6" />
                )}
              </div>
              
              {/* Text */}
              <span className="transition-all duration-300">
                {isDownloading ? 'Preparing Download...' : 'Download Syllabus'}
              </span>
              
              {/* Decorative Icon */}
              <FileText 
                className={`w-6 h-6 transition-all duration-300 ${
                  isHovered ? 'translate-x-2 opacity-100' : 'translate-x-0 opacity-0'
                }`}
              />
            </div>

            {/* Ripple Effect */}
            <div
              className={`
                absolute inset-0 rounded-full transition-transform duration-700
                ${isHovered ? 'scale-100' : 'scale-0'}
              `}
              style={{ 
                background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)'
              }}
            />
          </button>

          {/* Additional Info */}
          <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-6 text-sm md:text-base" style={{ color: '#11182b' }}>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#e05527' }}></div>
              <span>Instant Download</span>
            </div>
          
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#e05527' }}></div>
              <span>PDF Format</span>
            </div>
          </div>

          {/* Call-to-Action Arrow */}
         
        </div>

        {/* Decorative Elements */}
        <div className="relative inset-0 overflow-hidden pointer-events-none">
          <div className="relative   w-20 h-20 opacity-10 animate-pulse">
            <FileText className="w-full h-full" style={{ color: '#e05527' }} />
          </div>
          <div className="absolute bottom-0 right-10 w-16 h-16 opacity-20 animate-bounce">
            <Download className="w-full h-full" style={{ color: '#e05527' }} />
          </div>
          <div className="absolute top-1/3 right-10 w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: '#e05527' }}></div>
          <div className="absolute bottom-1/3 left-10 w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: '#e05527' }}></div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSyllabusSection;