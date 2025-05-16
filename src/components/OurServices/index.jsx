


// import { useState, useEffect } from 'react';
// import { BookOpen, Laptop, Video, Code, ArrowRight } from 'lucide-react';

// export default function TrainingServices() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(null);
  
//   useEffect(() => {
//     setIsVisible(true);
    
//     // Auto-cycle through cards every 3 seconds
//     const interval = setInterval(() => {
//       setActiveIndex(prev => {
//         if (prev === null) return 0;
//         return (prev + 1) % 4;
//       });
//     }, 3000);
    
//     return () => clearInterval(interval);
//   }, []);


// // Create custom animation for arrow bounce
// const styles = `
// @keyframes bounce-x {
//   0%, 100% {
//     transform: translateX(0);
//   }
//   50% {
//     transform: translateX(5px);
//   }
// }
// .animate-bounce-x {
//   animation: bounce-x 1s infinite;
// }

// @keyframes float {
//   0% {
//     transform: translateY(0px);
//   }
//   50% {
//     transform: translateY(-10px);
//   }
//   100% {
//     transform: translateY(0px);
//   }
// }
// .animate-float {
//   animation: float 3s ease-in-out infinite;
// }

// @keyframes glow {
//   0%, 100% {
//     box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
//   }
//   50% {
//     box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
//   }
// }
// .animate-glow {
//   animation: glow 2s ease-in-out infinite;
// }
// `;

// // Add the style element
// useEffect(() => {
//   const styleElement = document.createElement("style");
//   styleElement.innerHTML = styles;
//   document.head.appendChild(styleElement);
//   return () => document.head.removeChild(styleElement);
// }, []);



//   const services = [
//     {
//       id: 1,
//       title: 'Classroom Training',
//       description: 'Interactive face-to-face learning with expert instructors',
//       icon: <BookOpen className="text-orange-500 group-hover:animate-pulse" size={32} />,
//       bgGradient: 'bg-gradient-to-br from-orange-50 to-orange-100',
//       hoverGradient: 'hover:bg-gradient-to-br hover:from-orange-100 hover:to-orange-200',
//       borderColor: 'border-orange-500',
//       iconBg: 'bg-gradient-to-br from-orange-100 to-orange-200',
//       buttonBg: 'bg-orange-500',
//       shadowColor: 'shadow-orange-200',
//     },
//     {
//       id: 2,
//       title: 'Online Training',
//       description: 'Flexible self-paced courses accessible anytime, anywhere',
//       icon: <Laptop className="text-teal-500 group-hover:animate-pulse" size={32} />,
//       bgGradient: 'bg-gradient-to-br from-teal-50 to-teal-100',
//       hoverGradient: 'hover:bg-gradient-to-br hover:from-teal-100 hover:to-teal-200',
//       borderColor: 'border-teal-500',
//       iconBg: 'bg-gradient-to-br from-teal-100 to-teal-200',
//       buttonBg: 'bg-teal-500',
//       shadowColor: 'shadow-teal-200',
//     },
//     {
//       id: 3,
//       title: 'Mock Interview Sessions',
//       description: 'Practice with real-world scenarios to build confidence',
//       icon: <Video className="text-red-600 group-hover:animate-pulse" size={32} />,
//       bgGradient: 'bg-gradient-to-br from-red-50 to-red-100',
//       hoverGradient: 'hover:bg-gradient-to-br hover:from-red-100 hover:to-red-200',
//       borderColor: 'border-red-600',
//       iconBg: 'bg-gradient-to-br from-red-100 to-red-200',
//       buttonBg: 'bg-red-600',
//       shadowColor: 'shadow-red-200',
//     },
//     {
//       id: 4,
//       title: 'Practical Training on Live Projects',
//       description: 'Hands-on experience with real industry projects',
//       icon: <Code className="text-amber-500 group-hover:animate-pulse" size={32} />,
//       bgGradient: 'bg-gradient-to-br from-amber-50 to-amber-100',
//       hoverGradient: 'hover:bg-gradient-to-br hover:from-amber-100 hover:to-amber-200',
//       borderColor: 'border-amber-500',
//       iconBg: 'bg-gradient-to-br from-amber-100 to-amber-200',
//       buttonBg: 'bg-amber-500',
//       shadowColor: 'shadow-amber-200',
//     }
//   ];

//   const [hoveredCard, setHoveredCard] = useState(null);

//   return (
//     <div className="w-full max-w-6xl mx-auto p-4 py-16 bg-gradient-to-br from-slate-50 to-white">
//       <div className="relative mb-16">
//         <div className="absolute inset-0 flex items-center justify-center opacity-5">
//           <div className="text-8xl font-bold text-black">TRAINING</div>
//         </div>
//         <h2 
//           className="text-4xl font-bold text-center relative z-10 opacity-0 transform translate-y-6 transition-all duration-700 ease-out" 
//           style={{ 
//             opacity: isVisible ? 1 : 0, 
//             transform: isVisible ? 'translateY(0)' : 'translateY(1.5rem)',
//             textShadow: '0 4px 6px rgba(0,0,0,0.05)'
//           }}
//         >
//           Our Training <span className="text-blue-600">Services</span>
//         </h2>
//         <div 
//           className="h-1 w-24 bg-blue-600 mx-auto mt-4 rounded-full opacity-0 transform scale-x-0 transition-all duration-700 delay-300 ease-out"
//           style={{ 
//             opacity: isVisible ? 1 : 0, 
//             transform: isVisible ? 'scaleX(1)' : 'scaleX(0)'
//           }}
//         ></div>
//       </div>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {services.map((service, index) => (
//           <div
//             key={service.id}
//             className={`group rounded-2xl transition-all duration-500 ease-out transform p-6 h-full flex flex-col ${service.bgGradient} ${service.hoverGradient} border-b-4 border-transparent hover:border-b-4 ${service.borderColor} ${service.shadowColor} shadow-lg hover:shadow-xl relative overflow-hidden`}
//             style={{
//               opacity: isVisible ? 1 : 0,
//               transform: isVisible 
//                 ? (hoveredCard === service.id || activeIndex === index) 
//                   ? 'translateY(-12px) scale(1.05)' 
//                   : 'translateY(0) scale(1)' 
//                 : 'translateY(40px) scale(0.9)',
//               transitionDelay: `${index * 150}ms`
//             }}
//             onMouseEnter={() => {
//               setHoveredCard(service.id);
//               setActiveIndex(null); // Stop auto-cycling when user interacts
//             }}
//             onMouseLeave={() => setHoveredCard(null)}
//           >
//             {/* Background animated decoration */}
//             <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-white opacity-10 transition-transform duration-700 ease-in-out group-hover:scale-150"></div>
            
//             <div 
//               className={`${service.iconBg} p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-5 transition-all duration-500 group-hover:shadow-lg z-10`}
//             >
//               {service.icon}
//             </div>
            
//             <h3 className="text-2xl font-bold mb-3 transition-all duration-300 group-hover:translate-x-1">{service.title}</h3>
            
//             <p className="text-gray-600 flex-grow mb-6 transition-all duration-300 group-hover:text-gray-700">
//               {service.description}
//             </p>
            
//             <div 
//               className={`${service.buttonBg} text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center opacity-0 transition-all duration-500 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 cursor-pointer`}
//             >
//               Learn more
//               <ArrowRight className="ml-2 h-4 w-4 group-hover:animate-bounce-x" />
//             </div>
            
//             {/* Active indicator dot */}
//             {activeIndex === index && (
//               <div className="absolute bottom-2 right-2 h-2 w-2 rounded-full bg-blue-600 animate-ping"></div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




import { useState, useEffect } from 'react';
import { BookOpen, Laptop, Video, Code, ArrowRight } from 'lucide-react';

export default function TrainingServices({setIsOpen}) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // Define custom animations
  const styles = `
    @keyframes bounce-x {
      0%, 100% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(5px);
      }
    }
    .animate-bounce-x {
      animation: bounce-x 1s infinite;
    }

    @keyframes float {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
      100% {
        transform: translateY(0px);
      }
    }
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }

    @keyframes glow {
      0%, 100% {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
      }
      50% {
        box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
      }
    }
    .animate-glow {
      animation: glow 2s ease-in-out infinite;
    }
  `;

  useEffect(() => {
    // Add the style element
    const styleElement = document.createElement("style");
    styleElement.innerHTML = styles;
    document.head.appendChild(styleElement);
    
    // Set visibility and start auto-cycling
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setActiveIndex(prev => {
        if (prev === null) return 0;
        return (prev + 1) % 4;
      });
    }, 3000);
    
    return () => {
      clearInterval(interval);
      document.head.removeChild(styleElement);
    };
  }, []);

  const services = [
    {
      id: 1,
      title: 'Classroom Training',
      description: 'Interactive face-to-face learning with expert instructors',
      icon: <BookOpen className="text-orange-500 group-hover:animate-pulse" size={32} />,
      bgGradient: 'bg-gradient-to-br from-orange-50 to-orange-100',
      hoverGradient: 'hover:bg-gradient-to-br hover:from-orange-100 hover:to-orange-200',
      borderColor: 'border-orange-500',
      iconBg: 'bg-gradient-to-br from-orange-100 to-orange-200',
      buttonBg: 'bg-orange-500',
      shadowColor: 'shadow-orange-200',
    },
    {
      id: 2,
      title: 'Online Training',
      description: 'Flexible self-paced courses accessible anytime, anywhere',
      icon: <Laptop className="text-teal-500 group-hover:animate-pulse" size={32} />,
      bgGradient: 'bg-gradient-to-br from-teal-50 to-teal-100',
      hoverGradient: 'hover:bg-gradient-to-br hover:from-teal-100 hover:to-teal-200',
      borderColor: 'border-teal-500',
      iconBg: 'bg-gradient-to-br from-teal-100 to-teal-200',
      buttonBg: 'bg-teal-500',
      shadowColor: 'shadow-teal-200',
    },
    {
      id: 3,
      title: 'Mock Interview Sessions',
      description: 'Practice with real-world scenarios to build confidence',
      icon: <Video className="text-red-600 group-hover:animate-pulse" size={32} />,
      bgGradient: 'bg-gradient-to-br from-red-50 to-red-100',
      hoverGradient: 'hover:bg-gradient-to-br hover:from-red-100 hover:to-red-200',
      borderColor: 'border-red-600',
      iconBg: 'bg-gradient-to-br from-red-100 to-red-200',
      buttonBg: 'bg-red-600',
      shadowColor: 'shadow-red-200',
    },
    {
      id: 4,
      title: 'Practical Training on Live Projects',
      description: 'Hands-on experience with real industry projects',
      icon: <Code className="text-amber-500 group-hover:animate-pulse" size={32} />,
      bgGradient: 'bg-gradient-to-br from-amber-50 to-amber-100',
      hoverGradient: 'hover:bg-gradient-to-br hover:from-amber-100 hover:to-amber-200',
      borderColor: 'border-amber-500',
      iconBg: 'bg-gradient-to-br from-amber-100 to-amber-200',
      buttonBg: 'bg-amber-500',
      shadowColor: 'shadow-amber-200',
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 py-16 bg-gradient-to-br from-slate-50 to-white">
      {/* Animated heading section */}
      <div className="relative mb-16">
        {/* <div className="absolute w-full inset-0 flex items-center justify-center opacity-5">
          <div className="text-2xl md:text-4xl font-bold text-black">TRAINING</div>
        </div> */}
        <h2 
          className="text-4xl font-bold text-center relative z-10 opacity-0 transform translate-y-6 transition-all duration-700 ease-out" 
          style={{ 
            opacity: isVisible ? 1 : 0, 
            transform: isVisible ? 'translateY(0)' : 'translateY(1.5rem)',
            textShadow: '0 4px 6px rgba(0,0,0,0.05)'
          }}
        >
          Our Training <span className="text-blue-600">Services</span>
        </h2>
        <div 
          className="h-1 w-24 bg-blue-600 mx-auto mt-4 rounded-full opacity-0 transform scale-x-0 transition-all duration-700 delay-300 ease-out"
          style={{ 
            opacity: isVisible ? 1 : 0, 
            transform: isVisible ? 'scaleX(1)' : 'scaleX(0)'
          }}
        ></div>
      </div>
      
      {/* Service cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`group rounded-2xl transition-all duration-500 ease-out transform p-6 h-full flex flex-col ${service.bgGradient} ${service.hoverGradient} border-b-4 border-transparent hover:border-b-4 ${service.borderColor} ${service.shadowColor} shadow-lg hover:shadow-xl relative overflow-hidden`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible 
                ? (hoveredCard === service.id || activeIndex === index) 
                  ? 'translateY(-12px) scale(1.05)' 
                  : 'translateY(0) scale(1)' 
                : 'translateY(40px) scale(0.9)',
              transitionDelay: `${index * 150}ms`
            }}
            onMouseEnter={() => {
              setHoveredCard(service.id);
              setActiveIndex(null); // Stop auto-cycling when user interacts
            }}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Background animated decoration */}
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-white opacity-10 transition-transform duration-700 ease-in-out group-hover:scale-150"></div>
            
            {/* Icon container */}
            <div 
              className={`${service.iconBg} p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-5 transition-all duration-500 group-hover:shadow-lg z-10`}
            >
              {service.icon}
            </div>
            
            {/* Service title */}
            <h3 className="text-2xl font-bold mb-3 transition-all duration-300 group-hover:translate-x-1">{service.title}</h3>
            
            {/* Service description */}
            <p className="text-gray-600 flex-grow mb-6 transition-all duration-300 group-hover:text-gray-700">
              {service.description}
            </p>
            
            {/* Learn more button */}
            <div   onClick={() => setIsOpen(true)}
              className={`${service.buttonBg} text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center opacity-0 transition-all duration-500 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 cursor-pointer`}
            >
              Learn more
              <ArrowRight className="ml-2 h-4 w-4 animate-bounce-x" />
            </div>
            
            {/* Active indicator dot */}
            {activeIndex === index && (
              <div className="absolute bottom-2 right-2 h-2 w-2 rounded-full bg-blue-600 animate-ping"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}