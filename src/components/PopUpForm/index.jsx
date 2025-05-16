// import formimg from "../../assets/images/formimg.jpg";

// import { useState, useEffect } from "react";

// export default function PopupForm() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     course: "",
//     captcha: "",
//   });

//   // Open popup after interval and reappear after closing
//   useEffect(() => {
//     const showPopup = () => {
//       setIsOpen(true);
//       // Prevent scrolling when popup is open
//       document.body.style.overflow = "hidden";
//     };

//     // Show popup initially after 3 seconds
//     const initialTimer = setTimeout(showPopup, 3000);

//     return () => {
//       clearTimeout(initialTimer);
//       document.body.style.overflow = "auto";
//     };
//   }, []);

//   // Set timer to reopen popup after it's closed
//   useEffect(() => {
//     let reopenTimer;

//     if (!isOpen) {
//       reopenTimer = setTimeout(() => {
//         setIsOpen(true);
//         document.body.style.overflow = "hidden";
//       }, 10000);
//     }

//     return () => {
//       clearTimeout(reopenTimer);
//     };
//   }, [isOpen]);

//   const handleClose = () => {
//     setIsOpen(false);
//     document.body.style.overflow = "auto";
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     handleClose();
//     // for handelling form data on backend after submission
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-all duration-500 ease-in-out animate-fadeBackdrop">
//       <div className="relative flex w-full max-w-4xl bg-orange-50 shadow-xl md:rounded-xl overflow-hidden animate-slideUpFade">
//         {/* Close button */}
//         <button
//           onClick={handleClose}
//           className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 hover:rotate-90 transition-all duration-300 ease-in-out transform z-10 bg-white/80 rounded-full p-1 shadow-md"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>

//         {/* Image - hidden on mobile */}
//         <div className="hidden md:block w-1/2 bg-orange-100 relative">
//           <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
//             <div className="relative w-full h-full animate-subtle-float">
//               <img
//                 src={formimg}
//                 alt="Web development course"
//                 className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
//               />

//               {/* Technology icons overlaid on image */}
//               <div className="absolute inset-0">
//                 <div className="absolute top-16 left-16 animate-bounce-slow">
//                   <div className="bg-blue-500 text-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg border-2 border-white">
//                     <span className="font-bold">HTML</span>
//                   </div>
//                 </div>
//                 <div className="absolute top-32 right-20 animate-pulse">
//                   <div className="bg-yellow-500 text-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg border-2 border-white">
//                     <span className="font-bold">JS</span>
//                   </div>
//                 </div>
//                 <div className="absolute bottom-40 left-20 animate-bounce-slow delay-300">
//                   <div className="bg-teal-500 text-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg border-2 border-white">
//                     <span className="font-bold">CSS</span>
//                   </div>
//                 </div>
//                 <div className="absolute bottom-20 right-24 animate-pulse delay-500">
//                   <div className="bg-green-500 text-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg border-2 border-white">
//                     <span className="font-bold">React</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Form */}
//         <div className="w-full md:w-1/2 p-8 bg-gradient-to-br from-orange-50 to-amber-50">
//           <div className="mb-6 animate-fadeIn">
//             <h2 className="text-3xl font-bold text-orange-600 animate-slideUp">
//               15% Off.
//             </h2>
//             <h3 className="text-2xl font-bold text-gray-900 mt-1 animate-slideUp delay-100">
//               Limited Seats are available!
//             </h3>
//           </div>

//           <div className="mb-6 animate-fadeIn delay-200">
//             <p className="text-gray-700">
//               Talk to us:{" "}
//               <span className="font-bold text-orange-600 hover:text-orange-700 transition-colors duration-300">
//                 +91-8777517741
//               </span>
//             </p>
//           </div>

//           <div className="space-y-4 animate-fadeIn delay-300">
//             <div className="transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
//               />
//             </div>

//             <div className="transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="E-mail"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
//               />
//             </div>

//             <div className="flex transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md">
//               <div className="w-12 flex items-center justify-center border border-r-0 border-gray-300 bg-gray-50 rounded-l-lg">
//                 <span className="text-gray-500">🇮🇳</span>
//               </div>
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
//               />
//             </div>

//             <div className="transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md">
//               <div className="relative">
//                 <select
//                   name="course"
//                   value={formData.course}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
//                 >
//                   <option value="" disabled>
//                     Select Course
//                   </option>
//                   <option value="web-development">Web Development</option>
//                   <option value="app-development">App Development</option>
//                   <option value="data-science">Data Science</option>
//                   <option value="ui-ux">UI/UX Design</option>
//                 </select>
//                 <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
//                   <svg
//                     className="w-5 h-5 text-gray-400"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                       clipRule="evenodd"
//                     ></path>
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             <div className="transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md">
//               <div className="flex items-center">
//                 <span className="mr-2 font-medium text-gray-700">
//                   15 * 9 ={" "}
//                 </span>
//                 <input
//                   type="text"
//                   name="captcha"
//                   placeholder="??"
//                   value={formData.captcha}
//                   onChange={handleChange}
//                   className="w-20 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
//                 />
//               </div>
//             </div>

//             <button
//               onClick={handleSubmit}
//               className="w-full py-3 px-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 hover:translate-y-[-2px] active:translate-y-0 mt-4"
//             >
//               Book now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles = `
// @keyframes fadeIn {
//   from { opacity: 0; transform: scale(0.9); }
//   to { opacity: 1; transform: scale(1); }
// }

// .animate-fadeIn {
//   animation: fadeIn 0.4s ease-out forwards;
// }
// `;

// const styleTag = document.createElement("style");
// styleTag.textContent = styles;
// document.head.appendChild(styleTag);
















import formimg from "../../assets/images/formimg.jpg";
import { useState, useEffect } from "react";

export default function PopupForm({ isOpen: externalIsOpen, setIsOpen: externalSetIsOpen }) {
  // Internal state only used if no external control is provided
  const [isInternalOpen, setIsInternalOpen] = useState(false);

  const isControlled = externalIsOpen !== undefined && externalSetIsOpen !== undefined;
  const isOpen = isControlled ? externalIsOpen : isInternalOpen;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    captcha: "",
  });

  // Show popup initially after 3 seconds (internal only)
  useEffect(() => {
    if (!isControlled) {
      const initialTimer = setTimeout(() => {
        setIsInternalOpen(true);
        document.body.style.overflow = "hidden";
      }, 6000);

      return () => {
        clearTimeout(initialTimer);
        document.body.style.overflow = "auto";
      };
    }
  }, [isControlled]);

  // Reopen popup after 10 seconds of closing (internal only)
  useEffect(() => {
    if (!isControlled) {
      let reopenTimer;
      if (!isInternalOpen) {
        reopenTimer = setTimeout(() => {
          setIsInternalOpen(true);
          document.body.style.overflow = "hidden";
        }, 10000);
      }
      return () => {
        clearTimeout(reopenTimer);
      };
    }
  }, [isInternalOpen, isControlled]);

  const handleClose = () => {
    if (isControlled) {
      externalSetIsOpen(false);
    } else {
      setIsInternalOpen(false);
    }
    document.body.style.overflow = "auto";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    handleClose();
    // You can send form data to backend here
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-all duration-500 ease-in-out animate-fadeBackdrop">
      <div className="relative flex w-full max-w-4xl bg-orange-50 shadow-xl md:rounded-xl overflow-hidden animate-slideUpFade">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 hover:rotate-90 transition-all duration-300 ease-in-out transform z-10 bg-white/80 rounded-full p-1 shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image - hidden on mobile */}
        <div className="hidden md:block w-1/2 bg-orange-100 relative">
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full animate-subtle-float">
              <img src={formimg} alt="Web development course" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              {/* Technology icons */}
              <div className="absolute inset-0">
                <div className="absolute top-16 left-16 animate-bounce-slow">
                  <div className="bg-blue-500 text-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg border-2 border-white">
                    <span className="font-bold">HTML</span>
                  </div>
                </div>
                <div className="absolute top-32 right-20 animate-pulse">
                  <div className="bg-yellow-500 text-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg border-2 border-white">
                    <span className="font-bold">JS</span>
                  </div>
                </div>
                <div className="absolute bottom-40 left-20 animate-bounce-slow delay-300">
                  <div className="bg-teal-500 text-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg border-2 border-white">
                    <span className="font-bold">CSS</span>
                  </div>
                </div>
                <div className="absolute bottom-20 right-24 animate-pulse delay-500">
                  <div className="bg-green-500 text-white rounded-full h-14 w-14 flex items-center justify-center shadow-lg border-2 border-white">
                    <span className="font-bold">React</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2 p-8 bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="mb-6 animate-fadeIn">
            <h2 className="text-3xl font-bold text-orange-600 animate-slideUp">15% Off.</h2>
            <h3 className="text-2xl font-bold text-gray-900 mt-1 animate-slideUp delay-100">Limited Seats are available!</h3>
          </div>

          <div className="mb-6 animate-fadeIn delay-200">
            <p className="text-gray-700">
              Talk to us:{" "}
              <span className="font-bold text-orange-600 hover:text-orange-700 transition-colors duration-300">
                +91-8777517741
              </span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 animate-fadeIn delay-300">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name }
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <div className="flex">
              <div className="w-12 flex items-center justify-center border border-r-0 border-gray-300 bg-gray-50 rounded-l-lg">
                <span className="text-gray-500">🇮🇳</span>
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="" disabled>Select Course</option>
              <option value="web-development">Web Development</option>
              <option value="app-development">App Development</option>
              <option value="data-science">Data Science</option>
              <option value="ui-ux">UI/UX Design</option>
            </select>
            <div className="flex items-center">
              <span className="mr-2 font-medium text-gray-700">15 * 9 = </span>
              <input
                type="text"
                name="captcha"
                placeholder="??"
                value={formData.captcha}
                onChange={handleChange}
                className="w-20 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Book now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// Animation styles (optional — if not already globally declared)
const styles = `
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
.animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }
`;

const styleTag = document.createElement("style");
styleTag.textContent = styles;
document.head.appendChild(styleTag);
