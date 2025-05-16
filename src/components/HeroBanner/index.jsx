// import React, { useEffect, useState } from 'react';
// import child from "../../assets/images/child.jpeg"
// const BannerSection = () => {
//   const [inView, setInView] = useState(false);

//   useEffect(() => {
//     setInView(true);
//   }, []);

//   return (
//     <section className="relative h-auto py-16 bg-gradient-to-br mt- from-orange-50 to-orange-100 overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute top-10 left-10 w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
//         <div className="absolute top-20 right-20 w-3 h-3 bg-orange-400 rounded-full animate-ping"></div>
//         <div className="absolute bottom-20 left-20 w-5 h-5 bg-orange-300 rounded-full animate-bounce"></div>
//         <div className="absolute bottom-10 right-10 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
//       </div>

//       {/* Floating Icons */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-20 left-20 text-4xl animate-float opacity-30">📱</div>
//         <div className="absolute top-32 right-32 text-3xl animate-float-delayed opacity-30">💻</div>
//         <div className="absolute bottom-40 left-16 text-3xl animate-float-delayed-2 opacity-30">⚙️</div>
//         <div className="absolute bottom-20 right-16 text-4xl animate-float opacity-30">🚀</div>
//       </div>

//       <div className="container mx-auto px-4 py-8 h-full flex items-center">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
//           {/* Content Side */}
//           <div className={`space-y-6 transition-all duration-1000 ${
//             inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
//           }`}>
//             <div>
//               <h1 className="text-5xl lg:text-6xl font-black text-orange-500 tracking-wide mb-2">
//                 BEST IT TRAINING
//               </h1>
//               <h2 className="text-xl lg:text-2xl font-semibold text-gray-700 mb-4">
//                 INSTITUTE IN KOLKATA
//               </h2>

//               {/* Divider with animated dot */}
//               <div className="relative">
//                 <div className="w-16 h-1 bg-orange-500 rounded"></div>
//                 <div className="absolute -right-6 -top-2 w-5 h-5 bg-orange-500 rounded-full animate-pulse"></div>
//               </div>
//             </div>

//             {/* Features List */}
//             <ul className="space-y-4">
//               {[
//                 'Online & Offline Classes',
//                 'Develop Interview Skill',
//                 'Latest Tools & Technology',
//                 '100% Job Support with Internship Facility'
//               ].map((feature, index) => (
//                 <li
//                   key={index}
//                   className={`flex items-center space-x-4 text-lg text-black transition-all duration-600 ${
//                     inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//                   }`}
//                   style={{ transitionDelay: `${800 + index * 200}ms` }}
//                 >
//                   <span className="flex items-center justify-center w-6 h-6 bg-orange-500 text-white rounded-full text-sm font-bold">
//                     ✓
//                   </span>
//                   <span>{feature}</span>
//                 </li>
//               ))}
//             </ul>

//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 pt-4">
//               <button className={`flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg transition-all duration-600 ${
//                 inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//               }`}
//               style={{ transitionDelay: '1600ms' }}>
//                 <span>🎯</span>
//                 GET PERSONALIZED ADVICE
//               </button>

//               <button className={`flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg transition-all duration-600 ${
//                 inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//               }`}
//               style={{ transitionDelay: '1800ms' }}>
//                 <span>📅</span>
//                 BOOK OUR FREE DEMO CLASS
//               </button>
//             </div>

//             {/* EMI Info */}
//             <div className={`bg-white p-4 rounded-lg border-l-4 border-orange-500 text-gray-600 transition-all duration-600 ${
//               inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//             }`}
//             style={{ transitionDelay: '2000ms' }}>
//               EMI facility with 0% interest - Starts From ₹4000
//             </div>
//           </div>

//           {/* Image Side */}
//           <div className={`flex justify-center lg:justify-end transition-all duration-1000 ${
//             inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
//           }`}
//           style={{ transitionDelay: '300ms' }}>
//             <div className="relative">

//               {/* Tech Icons around the image */}

//               <div className="absolute -bottom-10 -left-4 text-3xl animate-bounce-slow" style={{ animationDelay: '2s' }}>🔧</div>
//               <div className="absolute -bottom-10 -right-8 text-4xl animate-bounce-slow" style={{ animationDelay: '0.5s' }}>🚀</div>

//               {/* Main Image */}
//               <img
//                 src= "https://th.bing.com/th/id/OIP.LfCkB9oeWVvJf36AMmmWzwHaE7?w=256&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
//                 alt="Student with laptop"
//                 className="relative z-10 w-96 h-96 lg:w-[500px] lg:h-[500px] object-cover rounded-2xl shadow-2xl animate-float"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }
//         @keyframes float-delayed {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-15px); }
//         }
//         @keyframes float-delayed-2 {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-25px); }
//         }
//         @keyframes bounce-slow {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//         }
//         @keyframes slow-spin {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         .animate-float-delayed {
//           animation: float-delayed 4s ease-in-out infinite;
//         }
//         .animate-float-delayed-2 {
//           animation: float-delayed-2 5s ease-in-out infinite;
//         }
//         .animate-bounce-slow {
//           animation: bounce-slow 3s ease-in-out infinite;
//         }
//         .animate-slow-spin {
//           animation: slow-spin 20s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default BannerSection;

// import React, { useEffect, useState } from 'react';

// const BannerSection = () => {
//   const [inView, setInView] = useState(false);

//   useEffect(() => {
//     setInView(true);
//   }, []);

//   return (
//     <section className="relative h-auto py-12 sm:py-16 bg-gradient-to-br from-orange-50 to-orange-100 overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute top-10 left-10 w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
//         <div className="absolute top-20 right-20 w-3 h-3 bg-orange-400 rounded-full animate-ping"></div>
//         <div className="absolute bottom-20 left-20 w-5 h-5 bg-orange-300 rounded-full animate-bounce"></div>
//         <div className="absolute bottom-10 right-10 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
//       </div>

//       {/* Floating Icons */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-20 left-6 sm:left-20 text-3xl sm:text-4xl animate-float opacity-30">📱</div>
//         <div className="absolute top-32 right-6 sm:right-32 text-2xl sm:text-3xl animate-float-delayed opacity-30">💻</div>
//         <div className="absolute bottom-32 left-6 sm:left-16 text-2xl sm:text-3xl animate-float-delayed-2 opacity-30">⚙️</div>
//         <div className="absolute bottom-16 right-6 sm:right-16 text-3xl sm:text-4xl animate-float opacity-30">🚀</div>
//       </div>

//       <div className="container mx-auto px-4 h-full flex items-center">
//       <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center w-full">

//           {/* Content Side */}
//           <div className={`space-y-6 transition-all duration-1000 ${
//             inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
//           }`}>
//             <div>
//               <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-orange-500 tracking-wide mb-2">
//                 BEST IT TRAINING
//               </h1>
//               <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-4">
//                 INSTITUTE IN KOLKATA
//               </h2>
//               <div className="relative">
//                 <div className="w-16 h-1 bg-orange-500 rounded"></div>
//                 <div className="absolute -right-6 -top-2 w-5 h-5 bg-orange-500 rounded-full animate-pulse"></div>
//               </div>
//             </div>

//             {/* Features List */}
//             <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
//               {[
//                 'Online & Offline Classes',
//                 'Develop Interview Skill',
//                 'Latest Tools & Technology',
//                 '100% Job Support with Internship Facility',
//               ].map((feature, index) => (
//                 <li
//                   key={index}
//                   className={`flex items-start space-x-3 sm:space-x-4 text-black transition-all duration-600 ${
//                     inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//                   }`}
//                   style={{ transitionDelay: `${800 + index * 200}ms` }}
//                 >
//                   <span className="flex items-center justify-center w-6 h-6 bg-orange-500 text-white rounded-full text-sm font-bold">
//                     ✓
//                   </span>
//                   <span>{feature}</span>
//                 </li>
//               ))}
//             </ul>

//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 pt-4">
//               <button
//                 className={`w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg ${
//                   inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//                 }`}
//                 style={{ transitionDelay: '1600ms' }}
//               >
//                 <span>🎯</span> GET PERSONALIZED ADVICE
//               </button>

//               <button
//                 className={`w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg ${
//                   inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//                 }`}
//                 style={{ transitionDelay: '1800ms' }}
//               >
//                 <span>📅</span> BOOK OUR FREE DEMO CLASS
//               </button>
//             </div>

//             {/* EMI Info */}
//             <div
//               className={`bg-white p-4 rounded-lg border-l-4 border-orange-500 text-gray-600 transition-all duration-600 text-sm sm:text-base ${
//                 inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//               }`}
//               style={{ transitionDelay: '2000ms' }}
//             >
//               EMI facility with 0% interest - Starts From ₹4000
//             </div>
//           </div>

//           {/* Image Side */}
//           <div
//             className={`flex justify-center lg:justify-end transition-all duration-1000 ${
//               inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
//             }`}
//             style={{ transitionDelay: '300ms' }}
//           >
//             <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
//               <div className="absolute -bottom-10 -left-4 text-2xl sm:text-3xl animate-bounce-slow" style={{ animationDelay: '2s' }}>🔧</div>
//               <div className="absolute -bottom-10 -right-8 text-3xl sm:text-4xl animate-bounce-slow" style={{ animationDelay: '0.5s' }}>🚀</div>
//               <img
//                 src="https://th.bing.com/th/id/OIP.LfCkB9oeWVvJf36AMmmWzwHaE7?w=256&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
//                 alt="Student with laptop"
//                 className="relative z-10 w-full  lg:w-150 h-120 object-cover rounded-2xl shadow-2xl animate-float"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }
//         @keyframes float-delayed {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-15px); }
//         }
//         @keyframes float-delayed-2 {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-25px); }
//         }
//         @keyframes bounce-slow {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//         }
//         .animate-float { animation: float 6s ease-in-out infinite; }
//         .animate-float-delayed { animation: float-delayed 4s ease-in-out infinite; }
//         .animate-float-delayed-2 { animation: float-delayed-2 5s ease-in-out infinite; }
//         .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
//       `}</style>
//     </section>
//   );
// };

// export default BannerSection;

import React, { useEffect, useRef, useState } from "react";
import boy from "../../assets/images/boy.jpg";
import boy2 from "../../assets/images/boy2.jpg";
import girl from "../../assets/images/girl.jpg";
const HeroSection = ({ setIsOpen }) => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full px-4 sm:px-8 lg:px-16 py-10 lg:py-10 bg-white"
    >
      <div className="w-full flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-68 left-32 sm:left-150 text-3xl sm:text-4xl animate-float opacity-50">
            📱
          </div>

          <div className="absolute bottom-22 left-6 sm:left-16 text-2xl sm:text-3xl animate-float-delayed-2 opacity-70">
            ⚙️
          </div>
          <div className="absolute bottom-16 right-6 sm:right-16 text-3xl sm:text-4xl animate-float opacity-50">
            🚀
          </div>
        </div>
        {/* TEXT CONTENT */}
        <div
          className={`space-y-6 transition-all duration-1000 w-full ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
          }`}
        >
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-orange-500 tracking-wide mb-2">
              BEST IT TRAINING
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">
              INSTITUTE IN INDORE
            </h2>
            <div className="relative">
              <div className="w-16 h-1 bg-orange-500 rounded"></div>
              <div className="absolute -right-6 -top-2 w-5 h-5 bg-orange-500 rounded-full animate-pulse"></div>
            </div>
          </div>

          <ul className="space-y-4">
            {[
              "Online & Offline Classes",
              "Develop Interview Skill",
              "Latest Tools & Technology",
              "100% Job Support with Internship Facility",
            ].map((feature, index) => (
              <li
                key={index}
                className={`flex items-center space-x-4 text-lg text-black font-semibold transition-all duration-600 ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${800 + index * 200}ms` }}
              >
                <span className="flex items-center justify-center w-6 h-6 bg-orange-500 text-white rounded-full text-sm font-bold">
                  ✓
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Floating Icons */}
        {/* IMAGE - Middle on mobile/tablet, right on large */}
        <div
          className={`flex justify-center w-full transition-all duration-1000 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="relative">
            <div
              className="absolute -bottom-10 -left-4 text-3xl animate-bounce-slow"
              style={{ animationDelay: "2s" }}
            >
              🔧
            </div>
            <div
              className="absolute -bottom-10 -right-8 text-4xl animate-bounce-slow"
              style={{ animationDelay: "0.5s" }}
            >
              🚀
            </div>
            <img
              src={boy2}
              alt="Student with laptop"
              className="relative  z-10 w-72 sm:w-80 md:w-96 object-contain rounded-2xl  animate-float"
            />
          </div>
        </div>

        {/* BUTTONS + EMI - bottom on mobile, left on desktop */}
        <div
          className={`w-full transition-all duration-600 space-y-10 mt-8 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "1600ms" }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg"
            >
              🎯 GET PERSONALIZED ADVICE
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg"
            >
              📅 BOOK OUR FREE DEMO CLASS
            </button>
          </div>

          <div className="bg-[#fff9eb] p-4 rounded-lg border-l-4 border-orange-500 text-gray-800">
            EMI facility with 0% interest - Starts From ₹4000
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes float-delayed-2 {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-25px);
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }
        .animate-float-delayed-2 {
          animation: float-delayed-2 5s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
