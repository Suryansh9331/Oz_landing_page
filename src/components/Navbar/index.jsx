// import React, { useState } from "react";
// import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="shadow-sm border-b border-[#e05527] bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
//         {/* Logo & Title */}
//         <div className="flex items-center space-x-3">
//           <div className="w-10 h-10 bg-[#e05527] rounded-full flex items-center justify-center text-white font-bold text-lg">
//             99
//           </div>
//           <div className="text-gray-800 font-semibold text-sm leading-tight">
//             <div>Graphics Design</div>
//             <div>Private Limited</div>
//           </div>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-6 text-sm font-semibold text-gray-700 uppercase">
//           <a href="#interview" className=" uppercase hover:text-[#e05527]">Courses</a>
//           <a href="#interview" className=" uppercase hover:text-[#e05527]">Interview Questions</a>
//           <a href="#about" className="uppercase hover:text-[#e05527]">PLACEMENT</a>
//           <a href="#contact" className="uppercase hover:text-[#e05527]">Contact</a>
//         </nav>

//         {/* Call Button */}
//         <a
//           href="tel:+918777517741"
//           className="bg-[#e05527] text-white px-4 py-2 rounded hover:opacity-90 flex items-center gap-2 font-semibold text-sm animate-pulse"
//         >
//           <FaPhoneAlt className="animate-vibrate" />
//           +91 8777517741
//         </a>

//         {/* Mobile Menu Toggle */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="text-[#e05527] md:hidden ml-4 text-xl focus:outline-none"
//         >
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="md:hidden px-4 pb-4 space-y-3 bg-white">
//           <a href="#interview" className="block text-sm text-gray-700 font-semibold hover:text-[#e05527]">Interview Questions</a>
//           <a href="#about" className="block text-sm text-gray-700 font-semibold hover:text-[#e05527]">About</a>
//           <a href="#contact" className="block text-sm text-gray-700 font-semibold hover:text-[#e05527]">Contact</a>
//         </div>
//       )}

//       {/* Custom Vibrate Animation */}
//       <style>{`
//         @keyframes vibrate {
//           0% { transform: rotate(0deg); }
//           25% { transform: rotate(10deg); }
//           50% { transform: rotate(-10deg); }
//           75% { transform: rotate(10deg); }
//           100% { transform: rotate(0deg); }
//         }
//         .animate-vibrate {
//           animation: vibrate 0.3s infinite;
//         }
//       `}</style>
//     </header>
//   );
// };

// export default Navbar;


// import logo from "../../assets/images/logo.jpeg";
// import React, { useState } from "react";
// import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="shadow-sm border-b border-[#e05527] bg-white">
//       <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 flex justify-between items-center py-3 sm:py-4">
//         {/* Logo */}
//         <div className="flex items-center">
//           <img 
//             src={logo} 
//             alt="Brand Logo" 
//             className="h-14 sm:h-12 lg:h-24 lg:w-24 md:w-24 md:h-24   object-cover"
//           />
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden lg:flex space-x-6 xl:space-x-8 text-sm xl:text-base font-semibold text-gray-700">
//           <a href="#courses" className="uppercase hover:text-[#e05527] transition-colors duration-200">Courses</a>
//           <a href="#interview" className="uppercase hover:text-[#e05527] transition-colors duration-200">Interview Questions</a>
//           <a href="#placement" className="uppercase hover:text-[#e05527] transition-colors duration-200">Placement</a>
//           <a href="#contact" className="uppercase hover:text-[#e05527] transition-colors duration-200">Contact</a>
//         </nav>

//         {/* Call Button - Larger Size */}
//         <a
//           href="tel:+918777517741"
//           className="hidden sm:flex bg-[#e05527] text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg hover:bg-[#c74420] transition-all duration-200 items-center gap-3 font-semibold text-sm lg:text-base shadow-lg hover:shadow-xl"
//         >
//           <FaPhoneAlt className="animate-vibrate text-lg lg:text-xl" />
//           <span className="whitespace-nowrap">+91 8777517741</span>
//         </a>

//         {/* Mobile Menu Toggle */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="text-[#e05527] lg:hidden text-2xl focus:outline-none"
//           aria-label="Toggle mobile menu"
//         >
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="lg:hidden px-4 pb-4 bg-white border-t border-gray-200">
//           <div className="space-y-3 py-3 flex justify-center items-center flex-col">
//             <a 
//               href="#courses" 
//               className="block text-base text-gray-700 font-semibold px-8 hover:text-[#e05527] py-2 transition-colors duration-200 hover:border border-rounded-lg border-black  "
//               onClick={() => setIsOpen(false)}
//             >
//               Courses
//             </a>
//             <a 
//               href="#interview" 
//               className="block text-base text-gray-700 font-semibold hover:text-[#e05527] py-2 transition-colors duration-200 hover:border border-rounded-lg border-black px-6"
//               onClick={() => setIsOpen(false)}
//             >
//               Interview Questions
//             </a>
//             <a 
//               href="#placement" 
//               className="block text-base text-gray-700 font-semibold hover:text-[#e05527] py-2 transition-colors duration-200 hover:border border-rounded-lg border-black px-6"
//               onClick={() => setIsOpen(false)}
//             >
//               Placement
//             </a>
//             <a 
//               href="#contact" 
//               className="block text-base text-gray-700 font-semibold hover:text-[#e05527] py-2 transition-colors duration-200 hover:border border-rounded-lg border-black px-6"
//               onClick={() => setIsOpen(false)}
//             >
//               Contact
//             </a>
//           </div>
          
//           {/* Mobile Call Button */}
//           <div className="pt-3 border-t border-gray-200">
//             <a
//               href="tel:+918777517741"
//               className="flex bg-[#e05527] text-white px-6 py-3 rounded-lg hover:bg-[#c74420] transition-all duration-200 items-center justify-center gap-3 font-semibold text-base shadow-lg w-full"
//             >
//               <FaPhoneAlt className="animate-vibrate text-lg" />
//               <span>+91 8777517741</span>
//             </a>
//           </div>
//         </div>
//       )}

//       {/* Custom Vibrate Animation */}
//       <style>{`
//         @keyframes vibrate {
//           0% { transform: rotate(0deg); }
//           25% { transform: rotate(8deg); }
//           50% { transform: rotate(-8deg); }
//           75% { transform: rotate(8deg); }
//           100% { transform: rotate(0deg); }
//         }
//         .animate-vibrate {
//           animation: vibrate 0.3s infinite;
//         }
//       `}</style>
//     </header>
//   );
// };

// export default Navbar;



import logo from "../../assets/images/logo.jpeg";
import React, { useState, useRef, useEffect } from "react";
import { FaPhoneAlt, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [isMobileCoursesDropdownOpen, setIsMobileCoursesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Sample course data - replace with your actual courses
  const courses = [
    { id: 1, name: "Full Stack Development", link: "#RegisterForm" },
    { id: 2, name: "React Development", link: "#RegisterForm" },
    { id: 3, name: "Data Science", link: "#RegisterForm" },
    { id: 4, name: "Machine Learning", link: "#RegisterForm" },
    { id: 5, name: "Mobile App Development", link: "#RegisterForm" },
    { id: 6, name: "DevOps", link: "#RegisterForm" }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCoursesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="shadow-sm border-b-2 border-[#e05527] bg-white relative">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 flex justify-between items-center py-3 sm:py-4">
        {/* Logo */}
        <div className="flex items-center">
         <a href="/"> <img 
            src={logo} 
            alt="Brand Logo" 
            className="h-14 sm:h-12 lg:h-24 lg:w-24 md:w-24 md:h-24 object-cover"
          />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 xl:space-x-8 text-sm xl:text-base font-semibold text-gray-700">
          {/* Courses Dropdown */}
          <div 
            className="relative" 
            ref={dropdownRef}
            onMouseEnter={() => setIsCoursesDropdownOpen(true)}
            onMouseLeave={() => setIsCoursesDropdownOpen(false)}
          >
            <button
              className="uppercase hover:text-[#e05527] transition-colors duration-200 flex items-center gap-1  relative"
            >
              Courses
              <FaChevronDown 
                className={`transition-transform duration-200 text-xs ${
                  isCoursesDropdownOpen ? 'rotate-180' : ''
                }`} 
              />
            </button>
            
            {/* Desktop Dropdown Menu */}
            {isCoursesDropdownOpen && (
              <div className="absolute  left-[-30] w-60 bg-white rounded-lg shadow-lg border-2 border-[#e05527] z-50">
                <div className="py-4">
                  {courses.map((course) => (
                    <a
                      key={course.id}
                      href={course.link}
                      className="block px-4 py-4 text-gray-700 hover:bg-[#e05527] hover:text-white transition-all duration-200 font-medium"
                    >
                      {course.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Other Navigation Items */}
          <a href="#RegisterForm" className="uppercase hover:text-[#e05527] transition-colors duration-200">Interview Questions</a>
          <a href="#RegisterForm" className="uppercase hover:text-[#e05527] transition-colors duration-200">Placement</a>
          <a href="#RegisterForm" className="uppercase hover:text-[#e05527] transition-colors duration-200">Contact</a>
        </nav>

        {/* Call Button - Larger Size */}
        <a
          href="tel:+918777517741"
          className="hidden sm:flex bg-[#e05527] text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg hover:bg-[#c74420] transition-all duration-200 items-center gap-3 font-semibold text-sm lg:text-base shadow-lg hover:shadow-xl animate-bounce"
        >
          <FaPhoneAlt className="animate-vibrate text-lg lg:text-xl" />
          <span className="whitespace-nowrap">+91 8777517741</span>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#e05527] lg:hidden text-2xl focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4 bg-white border-t border-gray-200">
          <div className="space-y-3 py-3 flex justify-center items-center flex-col">
            {/* Mobile Courses Dropdown */}
            <div className="w-full text-center">
              <button
                onClick={() => setIsMobileCoursesDropdownOpen(!isMobileCoursesDropdownOpen)}
                className="block text-base text-gray-700 font-semibold hover:text-[#e05527] py-2 transition-all duration-200 hover:border border-rounded-lg border-black px-8 w-full flex items-center justify-center gap-2"
              >
                COURSES
                <FaChevronDown 
                  className={`transition-transform duration-200 text-xs ${
                    isMobileCoursesDropdownOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {/* Mobile Courses Submenu */}
              {isMobileCoursesDropdownOpen && (
                <div className="mt-2 bg-gray-50 rounded-lg border border-gray-200 shadow-inner">
                  <div className="py-2">
                    {courses.map((course) => (
                      <a
                        key={course.id}
                        href={course.link}
                        className="block px-4 py-2 text-gray-600 hover:text-[#e05527] hover:bg-[#e05527]/10 transition-all duration-200 font-medium text-sm"
                        onClick={() => {
                          setIsOpen(false);
                          setIsMobileCoursesDropdownOpen(false);
                        }}
                      >
                        • {course.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Other Mobile Navigation Items */}
            <a 
              href="#RegisterForm" 
              className=" uppercase block text-base text-gray-700 font-semibold hover:text-[#e05527] py-2 transition-colors duration-200 hover:border border-rounded-lg border-black px-6"
              onClick={() => setIsOpen(false)}
            >
              Interview Questions
            </a>
            <a 
              href="#RegisterForm" 
              className="uppercase block text-base text-gray-700 font-semibold hover:text-[#e05527] py-2 transition-colors duration-200 hover:border border-rounded-lg border-black px-6"
              onClick={() => setIsOpen(false)}
            >
              Placement
            </a>
            <a 
              href="#RegisterForm" 
              className="uppercase block text-base text-gray-700 font-semibold hover:text-[#e05527] py-2 transition-colors duration-200 hover:border border-rounded-lg border-black px-6"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
          
          {/* Mobile Call Button */}
          <div className="pt-3 border-t border-gray-200">
            <a
              href="tel:+918777517741"
              className="flex bg-[#e05527] text-white px-6 py-3 rounded-lg hover:bg-[#c74420] transition-all duration-200 items-center justify-center gap-3 font-semibold text-base shadow-lg w-full"
            >
              <FaPhoneAlt className="animate-vibrate text-lg" />
              <span>+91 8777517741</span>
            </a>
          </div>
        </div>
      )}

      {/* Custom Vibrate Animation */}
      <style>{`
        @keyframes vibrate {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(8deg); }
          50% { transform: rotate(-8deg); }
          75% { transform: rotate(8deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-vibrate {
          animation: vibrate 0.3s infinite;
        }
      `}</style>
    </header>
  );
};

export default Navbar;