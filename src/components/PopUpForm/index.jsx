// import formimg from "../../assets/images/formimg.jpg";
// import { useState, useEffect } from "react";

// export default function PopupForm({
//   isOpen: externalIsOpen,
//   setIsOpen: externalSetIsOpen,
// }) {
//   // Internal state only used if no external control is provided
//   const [isInternalOpen, setIsInternalOpen] = useState(false);

//   const isControlled =
//     externalIsOpen !== undefined && externalSetIsOpen !== undefined;
//   const isOpen = isControlled ? externalIsOpen : isInternalOpen;

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     course: "",
//     captcha: "",
//   });

//   // Show popup initially after 3 seconds (internal only)
//   useEffect(() => {
//     if (!isControlled) {
//       const initialTimer = setTimeout(() => {
//         setIsInternalOpen(true);
//         document.body.style.overflow = "hidden";
//       }, 6000);

//       return () => {
//         clearTimeout(initialTimer);
//         document.body.style.overflow = "auto";
//       };
//     }
//   }, [isControlled]);

//   // Reopen popup after 10 seconds of closing (internal only)
//   useEffect(() => {
//     if (!isControlled) {
//       let reopenTimer;
//       if (!isInternalOpen) {
//         reopenTimer = setTimeout(() => {
//           setIsInternalOpen(true);
//           document.body.style.overflow = "hidden";
//         }, 10000);
//       }
//       return () => {
//         clearTimeout(reopenTimer);
//       };
//     }
//   }, [isInternalOpen, isControlled]);

//   const handleClose = () => {
//     if (isControlled) {
//       externalSetIsOpen(false);
//     } else {
//       setIsInternalOpen(false);
//     }
//     document.body.style.overflow = "auto";
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Basic captcha validation
//     if (formData.captcha !== "135") {
//       alert("answer is wrong ,please fill up the right answer");
//       return;
//     }

//     try {
//       const response = await fetch("https://sheetdb.io/api/v1/ouzt6gbqw3ow1", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ data: formData }),
//       });

//       if (response.ok) {
//         alert("Form submitted successfully!");
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           course: "",
//           captcha: "",
//         });
//         handleClose();
//       } else {
//         alert("Failed to submit form. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("An error occurred. Please try again.");
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-all duration-500 ease-in-out animate-fadeBackdrop">
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
//               {/* Technology icons */}
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
//                 +91-9171453224
//               </span>
//             </p>
//           </div>

//           <form
//             onSubmit={handleSubmit}
//             className="space-y-4 animate-fadeIn delay-300"
//           >
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="E-mail"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//             />
//             <div className="flex">
//               <div className="w-12 flex items-center justify-center border border-r-0 border-gray-300 bg-gray-50 rounded-l-lg">
//                 <span className="text-gray-500">🇮🇳</span>
//               </div>
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//               />
//             </div>
//             <select
//               name="course"
//               value={formData.course}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//             >
//               <option value="" disabled>
//                 Select Course
//               </option>
//               <option value="web-development">Web Development</option>
//               <option value="app-development">App Development</option>
//               <option value="data-science">Data Science</option>
//               <option value="ui-ux">UI/UX Design</option>
//             </select>
//             <div className="flex items-center">
//               <span className="mr-2 font-medium text-gray-700">15 * 9 = </span>
//               <input
//                 type="text"
//                 name="captcha"
//                 placeholder="??"
//                 value={formData.captcha}
//                 onChange={handleChange}
//                 className="w-20 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//               />
//             </div>
//             <button
//               type="submit"
//               disabled={
//                 !formData.name ||
//                 !formData.email ||
//                 !formData.phone ||
//                 !formData.course ||
//                 !formData.captcha
//               }
//               className={`w-full py-3 px-4 font-bold rounded-lg shadow-md transition-all ${
//                 !formData.name ||
//                 !formData.email ||
//                 !formData.phone ||
//                 !formData.course ||
//                 !formData.captcha
//                   ? "bg-orange-300 cursor-not-allowed"
//                   : "bg-orange-500 hover:bg-orange-600 text-white hover:shadow-lg"
//               }`}
//             >
//               Book now
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Animation styles (optional — if not already globally declared)
// const styles = `
// @keyframes fadeIn {
//   from { opacity: 0; transform: scale(0.9); }
//   to { opacity: 1; transform: scale(1); }
// }
// .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }
// `;

// const styleTag = document.createElement("style");
// styleTag.textContent = styles;
// document.head.appendChild(styleTag);

// import formimg from "../../assets/images/formimg.jpg";
// import { useState, useEffect } from "react";

// export default function PopupForm({
//   isOpen: externalIsOpen,
//   setIsOpen: externalSetIsOpen,
// }) {
//   // Internal state only used if no external control is provided
//   const [isInternalOpen, setIsInternalOpen] = useState(false);
//   // Add a state to track if form was successfully submitted - stored in localStorage to persist across button clicks
//   const [formSubmitted, setFormSubmitted] = useState(() => {
//     // Check if form was previously submitted in this session
//     return localStorage.getItem('formSubmitted') === 'true';
//   });

//   const isControlled =
//     externalIsOpen !== undefined && externalSetIsOpen !== undefined;
//   // Prevent opening even in controlled mode if form was submitted
//   const isOpen = (isControlled && !formSubmitted) ? externalIsOpen : (!formSubmitted && isInternalOpen);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     course: "",
//     captcha: "",
//   });

//   // Show popup initially after 6 seconds (internal only) if form hasn't been submitted
//   useEffect(() => {
//     if (!isControlled && !formSubmitted) {
//       const initialTimer = setTimeout(() => {
//         setIsInternalOpen(true);
//         document.body.style.overflow = "hidden";
//       }, 6000);

//       return () => {
//         clearTimeout(initialTimer);
//         document.body.style.overflow = "auto";
//       };
//     }
//   }, [isControlled, formSubmitted]);

//   // Reopen popup after 10 seconds of closing (internal only) if form hasn't been submitted
//   useEffect(() => {
//     if (!isControlled && !formSubmitted) {
//       let reopenTimer;
//       if (!isInternalOpen) {
//         reopenTimer = setTimeout(() => {
//           setIsInternalOpen(true);
//           document.body.style.overflow = "hidden";
//         }, 10000);
//       }
//       return () => {
//         clearTimeout(reopenTimer);
//       };
//     }
//   }, [isInternalOpen, isControlled, formSubmitted]);

//   const handleClose = () => {
//     if (isControlled) {
//       externalSetIsOpen(false);
//     } else {
//       setIsInternalOpen(false);
//     }
//     document.body.style.overflow = "auto";
//   };

//   // Function to override external opening attempts if form was submitted
//   useEffect(() => {
//     if (formSubmitted && isControlled && externalIsOpen) {
//       externalSetIsOpen(false);
//     }
//   }, [externalIsOpen, formSubmitted, isControlled, externalSetIsOpen]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Basic captcha validation
//     if (formData.captcha !== "135") {
//       alert("answer is wrong, please fill up the right answer");
//       return;
//     }

//     try {
//       const response = await fetch("https://sheetdb.io/api/v1/ouzt6gbqw3ow1", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ data: formData }),
//       });

//       if (response.ok) {
//         alert("Form submitted successfully!");
//         // Clear form data
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           course: "",
//           captcha: "",
//         });
//         // Set form as submitted to prevent reopening and store in localStorage
//         setFormSubmitted(true);
//         localStorage.setItem('formSubmitted', 'true');
//         handleClose();
//       } else {
//         alert("Failed to submit form. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("An error occurred. Please try again.");
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-all duration-500 ease-in-out animate-fadeBackdrop">
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
//               {/* Technology icons */}
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
//                 +91-9171453224
//               </span>
//             </p>
//           </div>

//           <form
//             onSubmit={handleSubmit}
//             className="space-y-4 animate-fadeIn delay-300"
//           >
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="E-mail"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//             />
//             <div className="flex">
//               <div className="w-12 flex items-center justify-center border border-r-0 border-gray-300 bg-gray-50 rounded-l-lg">
//                 <span className="text-gray-500">🇮🇳</span>
//               </div>
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//               />
//             </div>
//             <select
//               name="course"
//               value={formData.course}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//             >
//               <option value="" disabled>
//                 Select Course
//               </option>
//               <option value="web-development">Web Development</option>
//               <option value="app-development">App Development</option>
//               <option value="data-science">Data Science</option>
//               <option value="ui-ux">UI/UX Design</option>
//             </select>
//             <div className="flex items-center">
//               <span className="mr-2 font-medium text-gray-700">15 * 9 = </span>
//               <input
//                 type="text"
//                 name="captcha"
//                 placeholder="??"
//                 value={formData.captcha}
//                 onChange={handleChange}
//                 className="w-20 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//               />
//             </div>
//             <button
//               type="submit"
//               disabled={
//                 !formData.name ||
//                 !formData.email ||
//                 !formData.phone ||
//                 !formData.course ||
//                 !formData.captcha
//               }
//               className={`w-full py-3 px-4 font-bold rounded-lg shadow-md transition-all ${
//                 !formData.name ||
//                 !formData.email ||
//                 !formData.phone ||
//                 !formData.course ||
//                 !formData.captcha
//                   ? "bg-orange-300 cursor-not-allowed"
//                   : "bg-orange-500 hover:bg-orange-600 text-white hover:shadow-lg"
//               }`}
//             >
//               Book now
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Animation styles (optional — if not already globally declared)
// const styles = `
// @keyframes fadeIn {
//   from { opacity: 0; transform: scale(0.9); }
//   to { opacity: 1; transform: scale(1); }
// }
// .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }
// `;

// // Only add style if not already present
// if (!document.getElementById('popup-form-styles')) {
//   const styleTag = document.createElement("style");
//   styleTag.id = 'popup-form-styles';
//   styleTag.textContent = styles;
//   document.head.appendChild(styleTag);
// }

import formimg from "../../assets/images/formimg.jpg";
import { useState, useEffect } from "react";

export default function PopupForm({
  isOpen: externalIsOpen,
  setIsOpen: externalSetIsOpen,
}) {
  // Internal state only used if no external control is provided
  const [isInternalOpen, setIsInternalOpen] = useState(false);

  // Store submission status in sessionStorage instead of localStorage
  // sessionStorage gets cleared when the browser/tab is closed, unlike localStorage
  const [formSubmitted, setFormSubmitted] = useState(() => {
    // Check if form was previously submitted in this session
    return sessionStorage.getItem("formSubmitted") === "true";
  });

  const isControlled =
    externalIsOpen !== undefined && externalSetIsOpen !== undefined;
  // Prevent opening even in controlled mode if form was submitted
  const isOpen =
    isControlled && !formSubmitted
      ? externalIsOpen
      : !formSubmitted && isInternalOpen;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    captcha: "",
  });

  // Show popup initially after 6 seconds (internal only) if form hasn't been submitted
  useEffect(() => {
    if (!isControlled && !formSubmitted) {
      const initialTimer = setTimeout(() => {
        setIsInternalOpen(true);
        document.body.style.overflow = "hidden";
      }, 6000);

      return () => {
        clearTimeout(initialTimer);
        document.body.style.overflow = "auto";
      };
    }
  }, [isControlled, formSubmitted]);

  // Reopen popup after 10 seconds of closing (internal only) if form hasn't been submitted
  useEffect(() => {
    if (!isControlled && !formSubmitted) {
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
  }, [isInternalOpen, isControlled, formSubmitted]);

  const handleClose = () => {
    if (isControlled) {
      externalSetIsOpen(false);
    } else {
      setIsInternalOpen(false);
    }
    document.body.style.overflow = "auto";
  };

  // Function to override external opening attempts if form was submitted
  useEffect(() => {
    if (formSubmitted && isControlled && externalIsOpen) {
      externalSetIsOpen(false);
    }
  }, [externalIsOpen, formSubmitted, isControlled, externalSetIsOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Function to handle form submission
  useEffect(() => {
    const clearStorageOnUnload = () => {
      sessionStorage.clear();
    };

    window.addEventListener("beforeunload", clearStorageOnUnload);

    return () => {
      window.removeEventListener("beforeunload", clearStorageOnUnload);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic captcha validation
    if (formData.captcha !== "135") {
      alert("answer is wrong, please fill up the right answer");
      return;
    }

    try {
      const response = await fetch("https://sheetdb.io/api/v1/ouzt6gbqw3ow1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formData }),
      });

      if (response.ok) {
        alert("Thank you for your submission ! we will contact you soon.");
        // Clear form data
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          captcha: "",
        });
        // Set form as submitted to prevent reopening and store in sessionStorage
        setFormSubmitted(true);
        sessionStorage.setItem("formSubmitted", "true");
        handleClose();
      } else {
        alert("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Image - hidden on mobile */}
        <div className="hidden md:block w-1/2 bg-orange-100 relative">
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full animate-subtle-float">
              <img
                src={formimg}
                alt="Web development course"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
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
            <h2 className="text-3xl font-bold text-orange-600 animate-slideUp">
              15% Off.
            </h2>
            <h3 className="text-2xl font-bold text-gray-900 mt-1 animate-slideUp delay-100">
              Limited Seats are available!
            </h3>
          </div>

          <div className="mb-6 animate-fadeIn delay-200">
            <p className="text-gray-700">
              Talk to us:{" "}
              <span className="font-bold text-orange-600 hover:text-orange-700 transition-colors duration-300">
                +91-9171453224
              </span>
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 animate-fadeIn delay-300"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
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
              <option value="" disabled>
                Select Course
              </option>
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
              disabled={
                !formData.name ||
                !formData.email ||
                !formData.phone ||
                !formData.course ||
                !formData.captcha
              }
              className={`w-full py-3 px-4 font-bold rounded-lg shadow-md transition-all ${
                !formData.name ||
                !formData.email ||
                !formData.phone ||
                !formData.course ||
                !formData.captcha
                  ? "bg-orange-300 cursor-not-allowed"
                  : "bg-orange-500 hover:bg-orange-600 text-white hover:shadow-lg"
              }`}
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

// Only add style if not already present
if (!document.getElementById("popup-form-styles")) {
  const styleTag = document.createElement("style");
  styleTag.id = "popup-form-styles";
  styleTag.textContent = styles;
  document.head.appendChild(styleTag);
}
