









// import { useState, useEffect, useRef } from "react";
// import { Clock, User, ArrowRight, Star, Award, Settings, Book } from "lucide-react";
// import mern from "../../assets/images/mern.png"
// import dataScience from "../../assets/images/data_Science.jpg"
// import UI from "../../assets/images/uiux.jpg"
// import App from "../../assets/images/app.jpg"
// import Ai from "../../assets/images/Ai.jpg"
// import DM from "../../assets/images/digitalM.jpg"
// // Reusable component that can be imported into any page
// const CoursesOverview = ({ 
//   title = "Discover Our Elite Courses",
//   subtitle = "Unleash your potential with our industry-leading courses designed by experts",
  
//   courses = defaultCourses,
 
//   animationEnabled = true
// }) => {
//   const [visibleCourses, setVisibleCourses] = useState(animationEnabled ? [] : courses);
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [animationComplete, setAnimationComplete] = useState(!animationEnabled);
//   const headerRef = useRef(null);

//   useEffect(() => {
//     if (!animationEnabled) return;
    
//     // Header entrance animation
//     if (headerRef.current) {
//       headerRef.current.style.animation = "fadeSlideDown 1s ease-out forwards";
//     }
    
//     // Staggered courses animation
//     const interval = setInterval(() => {
//       setVisibleCourses(prev => {
//         if (prev.length < courses.length) {
//           return [...prev, courses[prev.length]];
//         }
//         clearInterval(interval);
//         setAnimationComplete(true);
//         return prev;
//       });
//     }, 200);

//     return () => clearInterval(interval);
//   }, [courses, animationEnabled]);

//   const renderStars = (rating) => {
//     const starCount = 5;
//     return Array(starCount).fill(0).map((_, i) => (
//       <Star 
//         key={i} 
//         size={16} 
//         className={`${i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"} 
//                    ${i === Math.floor(rating) && (rating % 1) > 0 ? "text-yellow-400" : ""}`}
//         fill={i < Math.floor(rating) ? "#FBBF24" : "none"}
//       />
//     ));
//   };

//   const handleMouseEnter = (index) => {
//     setActiveIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setActiveIndex(null);
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-20 relative bg-white">
//       {/* Background decoration */}
     
//       <div ref={headerRef} className={`text-center mb-20 ${animationEnabled ? 'opacity-0' : 'opacity-100'}`}>
       
//         <h2 className="text-5xl font-bold mb-6 bg-[#e05527] inline-block text-transparent bg-clip-text">
//           {title}
//         </h2>
//         <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//           {subtitle}
//         </p>
//       </div>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {visibleCourses.map((course, index) => (
//           <div 
//             key={course.id}
//             className="bg-white backdrop-filter backdrop-blur-lg bg-opacity-95 rounded-2xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl"
//             style={{
//               opacity: animationEnabled ? 0 : 1,
//               animation: animationEnabled ? `fadeSlideUp 0.7s ease-out ${index * 0.15}s forwards` : 'none',
//               transform: activeIndex === index ? "translateY(-10px) scale(1.03)" : "translateY(0) scale(1)",
//               boxShadow: activeIndex === index ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : "",
//               transition: "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.5s ease"
//             }}
//             onMouseEnter={() => handleMouseEnter(index)}
//             onMouseLeave={handleMouseLeave}
//           >
//             <div className="relative">
//               <img 
//                 src={course.image} 
//                 alt={course.title} 
//                 className="w-full h-52 object-cover transition-transform duration-700 ease-in-out"
//                 style={{
//                   transform: activeIndex === index ? "scale(1.05)" : "scale(1)"
//                 }}
//               />
//               <div className={`absolute top-4 right-4 bg-gradient-to-r ${course.color} text-white text-sm font-medium py-2 px-4 rounded-full shadow-lg`}>
//                 {course.category}
//               </div>
//               <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent opacity-70"></div>
//             </div>
            
//             <div className="p-6 relative">
//               <div className="absolute -top-10 left-6 bg-white rounded-full p-3 shadow-lg">
//                 <div className={`w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r ${course.color} text-white`}>
//                   {course.icon}
//                 </div>
//               </div>
              
//               <h3 className="text-2xl font-bold text-gray-800 mt-4 mb-2">{course.title}</h3>
//               <p className="text-gray-600 mb-4">{course.description}</p>
              
//               <div className="flex items-center mb-5">
//                 <div className="flex mr-2">
//                   {renderStars(course.rating)}
//                 </div>
//                 <span className="text-gray-600 text-sm">{course.rating} ({course.students} students)</span>
//               </div>
              
//               <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-lg">
//                 <div className="flex items-center text-gray-700">
//                   <User size={18} className="mr-2" />
//                   <span>{course.instructor}</span>
//                 </div>
//                 <div className="flex items-center text-gray-700">
//                   <Clock size={18} className="mr-2" />
//                   <span>{course.duration}</span>
//                 </div>
//               </div>
              
//               <button 
//                 className={`w-full bg-gradient-to-r ${course.color} text-white py-3 px-6 rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-lg transform hover:scale-105`}
//                 onClick={course.onEnroll || (() => console.log(`Enrolled in ${course.title}`))}   onClick={() => {
//               const el = document.getElementById("RegisterForm");
//               if (el) {
//                 el.scrollIntoView({ behavior: "smooth" });
//               }
//             }}
//               >
//                 <span className="font-medium">Enroll Now</span>
//                 <ArrowRight size={18} className={`ml-2 transform transition-transform duration-300 ${activeIndex === index ? "translate-x-1" : ""}`} />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

     
//       <style jsx>{`
//         @keyframes fadeSlideUp {
//           0% {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes fadeSlideDown {
//           0% {
//             opacity: 0;
//             transform: translateY(-30px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes fadeIn {
//           0% {
//             opacity: 0;
//           }
//           100% {
//             opacity: 1;
//           }
//         }
        
//         @keyframes blob {
//           0% {
//             transform: scale(1) translate(0px, 0px);
//           }
//           33% {
//             transform: scale(1.1) translate(30px, -30px);
//           }
//           66% {
//             transform: scale(0.9) translate(-30px, 30px);
//           }
//           100% {
//             transform: scale(1) translate(0px, 0px);
//           }
//         }
        
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
        
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
        
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
        
//         .animate-fadeIn {
//           animation: fadeIn 1s forwards;
//         }
        
//         .animation-delay-1000 {
//           animation-delay: 1s;
//         }
//       `}</style>
//     </div>
//   );
// };

// // Default courses data
// const defaultCourses = [
//   {
//     id: 1,
//     title: "Web Development ",
//     description: "Build professional websites and web applications with modern technologies.",
//     image: mern,
//     instructor: "Sarah Johnson",
//     duration: "8 weeks",
//     students: 1245,
//     rating: 4.8,
//     category: "Development",
//     color: "from-[#e05527] to-[#e05527]",
//     icon: <Settings size={20} />
//   },
//   {
//     id: 2,
//     title: "Data Science & Analytics",
//     description: "Extract meaningful insights from complex datasets using Python and ML techniques.",
//     image:dataScience,
//     instructor: "Michael Chen, PhD",
//     duration: "10 weeks",
//     students: 980,
//     rating: 4.9,
//     category: "Data Science",
//     color: "from-[#e05527] to-[#e05527]",
//     icon: <Award size={20} />
//   },
//   {
//     id: 3,
//     title: "UX/UI Design Masterclass",
//     description: "Create stunning user experiences with modern design principles and tools.",
//     image: UI,
//     instructor: "Emma Rodriguez",
//     duration: "6 weeks",
//     students: 765,
//     rating: 4.7,
//     category: "Design",
//     color: "from-[#e05527] to-[#e05527]",
//     icon: <Book size={20} />
//   },
//   {
//     id: 4,
//     title: "Mobile App Development",
//     description: "Develop cross-platform mobile applications for iOS and Android using React Native.",
//     image: App,
//     instructor: "Jason Miller",
//     duration: "12 weeks",
//     students: 1050,
//     rating: 4.6,
//     category: "Development",
//     color: "from-[#e05527] to-[#e05527]",
//     icon: <Settings size={20} />
//   },
//   {
//     id: 5,
//     title: "Artificial Intelligence",
//     description: "Master machine learning algorithms and build intelligent systems for real-world applications.",
//     image: Ai,
//     instructor: "Dr. Alisha Patel",
//     duration: "9 weeks",
//     students: 1320,
//     rating: 4.9,
//     category: "AI & ML",
//     color: "from-[#e05527] to-[#e05527]",
//     icon: <Award size={20} />
//   },
//   {
//     id: 6,
//     title: "Digital Marketing Strategy",
//     description: "Learn advanced strategies for SEO, social media marketing, and digital advertising campaigns.",
//     image: DM,
//     instructor: "David Thompson",
//     duration: "7 weeks",
//     students: 895,
//     rating: 4.7,
//     category: "Marketing",
//     color: "from-[#e05527] to-[#e05527]",
//     icon: <Book size={20} />
//   }
// ];

// export default CoursesOverview;




import { useState, useEffect, useRef } from "react";
import { Clock, User, ArrowRight, Star, Award, Settings, Book } from "lucide-react";
import mern from "../../assets/images/mern.png"
import dataScience from "../../assets/images/data_Science.jpg"
import UI from "../../assets/images/uiux.jpg"
import App from "../../assets/images/app.jpg"
import Ai from "../../assets/images/Ai.jpg"
import DM from "../../assets/images/digitalM.jpg"
// Reusable component that can be imported into any page
const CoursesOverview = ({ 
  title = "Discover Our Elite Courses",
  subtitle = "Unleash your potential with our industry-leading courses designed by experts",
  
  courses = defaultCourses,
 
  animationEnabled = true
}) => {
  const [visibleCourses, setVisibleCourses] = useState(animationEnabled ? [] : courses);
  const [activeIndex, setActiveIndex] = useState(null);
  const [animationComplete, setAnimationComplete] = useState(!animationEnabled);
  const headerRef = useRef(null);

  useEffect(() => {
    if (!animationEnabled) return;
    
    // Header entrance animation
    if (headerRef.current) {
      headerRef.current.style.animation = "fadeSlideDown 1s ease-out forwards";
    }
    
    // Staggered courses animation
    const interval = setInterval(() => {
      setVisibleCourses(prev => {
        if (prev.length < courses.length) {
          return [...prev, courses[prev.length]];
        }
        clearInterval(interval);
        setAnimationComplete(true);
        return prev;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [courses, animationEnabled]);

  const renderStars = (rating) => {
    const starCount = 5;
    return Array(starCount).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={`${i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"} 
                   ${i === Math.floor(rating) && (rating % 1) > 0 ? "text-yellow-400" : ""}`}
        fill={i < Math.floor(rating) ? "#FBBF24" : "none"}
      />
    ));
  };

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-20 relative bg-white">
      {/* Background decoration */}
     
      <div ref={headerRef} className={`text-center mb-20 ${animationEnabled ? 'opacity-0' : 'opacity-100'}`}>
       
        <h2 className="text-5xl font-bold mb-6 bg-[#e05527] inline-block text-transparent bg-clip-text">
          {title}
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleCourses.map((course, index) => (
          <div 
            key={course.id}
            className="bg-white backdrop-filter backdrop-blur-lg bg-opacity-95 rounded-2xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl"
            style={{
              opacity: animationEnabled ? 0 : 1,
              animation: animationEnabled ? `fadeSlideUp 0.7s ease-out ${index * 0.15}s forwards` : 'none',
              transform: activeIndex === index ? "translateY(-10px) scale(1.03)" : "translateY(0) scale(1)",
              boxShadow: activeIndex === index ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : "",
              transition: "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.5s ease"
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-52 object-cover transition-transform duration-700 ease-in-out"
                style={{
                  transform: activeIndex === index ? "scale(1.05)" : "scale(1)"
                }}
              />
              {/* Premium animated discount badge */}
              <div className="absolute top-3 right-3 overflow-hidden">
                <div className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 text-white font-semibold px-6 py-1 rounded-md shadow-lg transform -skew-x-12 border border-white/30 flex items-center justify-center animate-pulse">
                  <span className="mr-1">SAVE</span>
                  <span className="text-lg">{course.offer}</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            </div>
            
            <div className="p-6 relative">
              <div className="absolute -top-10 left-6 bg-white rounded-full p-3 shadow-lg">
                <div className={`w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r ${course.color} text-white`}>
                  {course.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mt-4 mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              
              <div className="flex items-center mb-5">
                <div className="flex mr-2">
                  {renderStars(course.rating)}
                </div>
                <span className="text-gray-600 text-sm">{course.rating} ({course.students} students)</span>
              </div>
              
              <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center text-gray-700">
                  <User size={18} className="mr-2" />
                  <span>{course.instructor}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Clock size={18} className="mr-2" />
                  <span>{course.duration}</span>
                </div>
              </div>
              
              <button 
                className={`w-full bg-gradient-to-r ${course.color} text-white py-3 px-6 rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-lg transform hover:scale-105`}
                onClick={course.onEnroll || (() => {
                  const el = document.getElementById("RegisterForm");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                })}
              >
                <span className="font-medium">Enroll Now</span>
                <ArrowRight size={18} className={`ml-2 transform transition-transform duration-300 ${activeIndex === index ? "translate-x-1" : ""}`} />
              </button>
            </div>
          </div>
        ))}
      </div>

     
      <style jsx>{`
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeSlideDown {
          0% {
            opacity: 0;
            transform: translateY(-30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        
        @keyframes blob {
          0% {
            transform: scale(1) translate(0px, 0px);
          }
          33% {
            transform: scale(1.1) translate(30px, -30px);
          }
          66% {
            transform: scale(0.9) translate(-30px, 30px);
          }
          100% {
            transform: scale(1) translate(0px, 0px);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s forwards;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

// Default courses data
const defaultCourses = [
  {
    id: 1,
    title: "Web Development ",
    description: "Build professional websites and web applications with modern technologies.",
    image: mern,
    instructor: "Sarah Johnson",
    duration: "8 weeks",
    students: 1245,
    rating: 4.8,
    category: "Development",
    offer: "20% OFF",
    color: "from-[#e05527] to-[#e05527]",
    icon: <Settings size={20} />
  },
  {
    id: 2,
    title: "Data Science & Analytics",
    description: "Extract meaningful insights from complex datasets using Python and ML techniques.",
    image: dataScience,
    instructor: "Michael Chen, PhD",
    duration: "10 weeks",
    students: 980,
    rating: 4.9,
    category: "Data Science",
    offer: "30% OFF",
    color: "from-[#e05527] to-[#e05527]",
    icon: <Award size={20} />
  },
  {
    id: 3,
    title: "UX/UI Design Masterclass",
    description: "Create stunning user experiences with modern design principles and tools.",
    image: UI,
    instructor: "Emma Rodriguez",
    duration: "6 weeks",
    students: 765,
    rating: 4.7,
    category: "Design",
    offer: "50% OFF",
    color: "from-[#e05527] to-[#e05527]",
    icon: <Book size={20} />
  },
  {
    id: 4,
    title: "Mobile App Development",
    description: "Develop cross-platform mobile applications for iOS and Android using React Native.",
    image: App,
    instructor: "Jason Miller",
    duration: "12 weeks",
    students: 1050,
    rating: 4.6,
    category: "Development",
    offer: "15% OFF",
    color: "from-[#e05527] to-[#e05527]",
    icon: <Settings size={20} />
  },
  {
    id: 5,
    title: "Artificial Intelligence",
    description: "Master machine learning algorithms and build intelligent systems for real-world applications.",
    image: Ai,
    instructor: "Dr. Alisha Patel",
    duration: "9 weeks",
    students: 1320,
    rating: 4.9,
    category: "AI & ML",
    offer: "25% OFF",
    color: "from-[#e05527] to-[#e05527]",
    icon: <Award size={20} />
  },
  {
    id: 6,
    title: "Digital Marketing Strategy",
    description: "Learn advanced strategies for SEO, social media marketing, and digital advertising campaigns.",
    image: DM,
    instructor: "David Thompson",
    duration: "7 weeks",
    students: 895,
    rating: 4.7,
    category: "Marketing",
    offer: "40% OFF",
    color: "from-[#e05527] to-[#e05527]",
    icon: <Book size={20} />
  }
];

export default CoursesOverview;