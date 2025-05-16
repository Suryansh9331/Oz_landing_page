// import { useState, useEffect } from 'react';
// import { ChevronRight, CheckCircle, X, BookOpen, PhoneCall, MapPin, Mail, User, Brain } from 'lucide-react';

// export default function StudentRegistrationForm() {
//   const [formState, setFormState] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: '',
//     course: '',
//     mathAnswer: '',
//     submitted: false,
//     error: null
//   });
  
//   const [mathProblem, setMathProblem] = useState({ num1: 0, num2: 0, answer: 0 });
//   const [formStep, setFormStep] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
  
//   const courses = [
//     "Web Development Fundamentals",
//     "Advanced React & State Management",
//     "Full-Stack JavaScript Masterclass",
//     "UI/UX Design Principles",
//     "Mobile App Development"
//   ];
  
//   // Generate random math problem
//   useEffect(() => {
//     const num1 = Math.floor(Math.random() * 10) + 5;
//     const num2 = Math.floor(Math.random() * 10) + 5;
//     setMathProblem({
//       num1,
//       num2,
//       answer: num1 * num2
//     });
//   }, []);
  
//   const handleChange = (e) => {
//     setFormState({
//       ...formState,
//       [e.target.name]: e.target.value
//     });
//   };
  
//   const validateStep = () => {
//     if (formStep === 0) {
//       return formState.name && formState.email;
//     } else if (formStep === 1) {
//       return formState.phone && formState.address;
//     } else if (formStep === 2) {
//       return formState.course;
//     } else if (formStep === 3) {
//       return parseInt(formState.mathAnswer) === mathProblem.answer;
//     }
//     return false;
//   };
  
//   const nextStep = () => {
//     if (validateStep()) {
//       setIsAnimating(true);
//       setTimeout(() => {
//         setFormStep(formStep + 1);
//         setIsAnimating(false);
//       }, 300);
//     } else if (formStep === 3 && parseInt(formState.mathAnswer) !== mathProblem.answer) {
//       setFormState({
//         ...formState,
//         error: "Incorrect answer to math problem. Please try again."
//       });
//     }
//   };
  
//   const prevStep = () => {
//     setIsAnimating(true);
//     setTimeout(() => {
//       setFormStep(formStep - 1);
//       setIsAnimating(false);
//     }, 300);
//   };
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (parseInt(formState.mathAnswer) === mathProblem.answer) {
//       setFormState({
//         ...formState,
//         submitted: true,
//         error: null
//       });
//     } else {
//       setFormState({
//         ...formState,
//         error: "Incorrect answer to math problem. Please try again."
//       });
//     }
//   };
  
//   if (formState.submitted) {
//     return (
//       <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out">
//         <div className="p-8 text-center">
//           <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
//             <CheckCircle className="h-8 w-8 text-green-600" />
//           </div>
//           <h2 className="text-2xl font-bold text-gray-800 mb-2">Registration Successful!</h2>
//           <p className="text-gray-600 mb-6">Thank you for registering for our course. We'll contact you shortly with further details.</p>
//           <div className="bg-gray-50 p-4 rounded-lg mb-6">
//             <h3 className="font-medium text-gray-800 mb-2">Registration Details:</h3>
//             <p className="text-gray-600"><span className="font-medium">Name:</span> {formState.name}</p>
//             <p className="text-gray-600"><span className="font-medium">Course:</span> {formState.course}</p>
//             <p className="text-gray-600"><span className="font-medium">Email:</span> {formState.email}</p>
//           </div>
//           <button 
//             className="w-full py-3 bg-[#e05527] text-white font-bold rounded-lg shadow hover:bg-[#d04517] transition-all duration-300"
//             onClick={() => setFormState({...formState, submitted: false})}
//           >
//             Register Another Student
//           </button>
//         </div>
//       </div>
//     );
//   }
  
//   const getStepContent = () => {
//     switch (formStep) {
//       case 0:
//         return (
//           <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 transform translate-x-10' : 'opacity-100'}`}>
//             <h2 className="text-xl font-bold text-gray-800 mb-6">Personal Information</h2>
//             <div className="space-y-4">
//               <div className="relative">
//                 <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="name">Full Name <span className="text-red-500">*</span></label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <User className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formState.name}
//                     onChange={handleChange}
//                     className="pl-10 block w-full rounded-md border border-gray-300 px-3 py-3 shadow-sm focus:border-[#e05527] focus:outline-none focus:ring-1 focus:ring-[#e05527]"
//                     placeholder="John Doe"
//                     required
//                   />
//                 </div>
//               </div>
              
//               <div className="relative">
//                 <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">Email Address <span className="text-red-500">*</span></label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <Mail className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formState.email}
//                     onChange={handleChange}
//                     className="pl-10 block w-full rounded-md border border-gray-300 px-3 py-3 shadow-sm focus:border-[#e05527] focus:outline-none focus:ring-1 focus:ring-[#e05527]"
//                     placeholder="johndoe@example.com"
//                     required
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       case 1:
//         return (
//           <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 transform translate-x-10' : 'opacity-100'}`}>
//             <h2 className="text-xl font-bold text-gray-800 mb-6">Contact Details</h2>
//             <div className="space-y-4">
//               <div className="relative">
//                 <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="phone">Phone Number <span className="text-red-500">*</span></label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <PhoneCall className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formState.phone}
//                     onChange={handleChange}
//                     className="pl-10 block w-full rounded-md border border-gray-300 px-3 py-3 shadow-sm focus:border-[#e05527] focus:outline-none focus:ring-1 focus:ring-[#e05527]"
//                     placeholder="+1 (123) 456-7890"
//                     required
//                   />
//                 </div>
//               </div>
              
//               <div className="relative">
//                 <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="address">Address <span className="text-red-500">*</span></label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <MapPin className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     type="text"
//                     id="address"
//                     name="address"
//                     value={formState.address}
//                     onChange={handleChange}
//                     className="pl-10 block w-full rounded-md border border-gray-300 px-3 py-3 shadow-sm focus:border-[#e05527] focus:outline-none focus:ring-1 focus:ring-[#e05527]"
//                     placeholder="123 Main St, City, Country"
//                     required
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       case 2:
//         return (
//           <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 transform translate-x-10' : 'opacity-100'}`}>
//             <h2 className="text-xl font-bold text-gray-800 mb-6">Course Selection</h2>
//             <div className="space-y-2">
//               <label className="block text-gray-700 text-sm font-medium mb-1">Select Course <span className="text-red-500">*</span></label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <BookOpen className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <select
//                   name="course"
//                   value={formState.course}
//                   onChange={handleChange}
//                   className="pl-10 block w-full rounded-md border border-gray-300 px-3 py-3 shadow-sm focus:border-[#e05527] focus:outline-none focus:ring-1 focus:ring-[#e05527] bg-white"
//                   required
//                 >
//                   <option value="">Select a course</option>
//                   {courses.map((course, index) => (
//                     <option key={index} value={course}>{course}</option>
//                   ))}
//                 </select>
//               </div>
              
//               <div className="mt-6 p-4 bg-[#fff9eb] rounded-lg border border-yellow-200">
//                 <h3 className="font-bold text-gray-800 mb-2 flex items-center">
//                   Course Details
//                 </h3>
//                 <p className="text-gray-600 text-sm">
//                   {formState.course ? 
//                     `You've selected: ${formState.course}. Our expert instructors will guide you through every step of the learning process.` : 
//                     "Please select a course to see more details."
//                   }
//                 </p>
//                 {formState.course && (
//                   <p className="text-sm text-[#e05527] font-medium mt-2">15% discount available for a limited time!</p>
//                 )}
//               </div>
//             </div>
//           </div>
//         );
//       case 3:
//         return (
//           <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 transform translate-x-10' : 'opacity-100'}`}>
//             <h2 className="text-xl font-bold text-gray-800 mb-6">Verification</h2>
            
//             <div className="p-4 bg-[#fff9eb] rounded-lg border border-yellow-200 mb-4">
//               <h3 className="font-bold text-gray-800 mb-2 flex items-center">
//                 <Brain className="h-5 w-5 mr-2 text-[#e05527]" />
//                 Quick Math Challenge
//               </h3>
//               <p className="text-gray-600 text-sm mb-2">Please solve this simple math problem to complete your registration:</p>
              
//               <div className="flex items-center justify-center p-3 bg-white rounded-lg shadow-sm">
//                 <span className="text-xl font-bold text-gray-800">{mathProblem.num1} × {mathProblem.num2} = ?</span>
//               </div>
//             </div>
            
//             <div className="relative">
//               <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="mathAnswer">Your Answer <span className="text-red-500">*</span></label>
//               <input
//                 type="number"
//                 id="mathAnswer"
//                 name="mathAnswer"
//                 value={formState.mathAnswer}
//                 onChange={handleChange}
//                 className="block w-full rounded-md border border-gray-300 px-3 py-3 shadow-sm focus:border-[#e05527] focus:outline-none focus:ring-1 focus:ring-[#e05527]"
//                 placeholder="Enter your answer"
//                 required
//               />
//             </div>
            
//             {formState.error && (
//               <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded-md">
//                 <p className="text-sm text-red-600">{formState.error}</p>
//               </div>
//             )}
            
//             <div className="mt-6 p-4 bg-gray-50 rounded-lg">
//               <h3 className="font-medium text-gray-800 mb-2">Registration Summary:</h3>
//               <p className="text-gray-600 text-sm"><span className="font-medium">Name:</span> {formState.name}</p>
//               <p className="text-gray-600 text-sm"><span className="font-medium">Email:</span> {formState.email}</p>
//               <p className="text-gray-600 text-sm"><span className="font-medium">Phone:</span> {formState.phone}</p>
//               <p className="text-gray-600 text-sm"><span className="font-medium">Course:</span> {formState.course}</p>
//             </div>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };
  
//   return (
//     <div className="h-auto flex items-start justify-center bg-gradient-to-br from-[#fff9eb] to-white py-12 sm:px-6 lg:px-8">
//       <div className="w-full max-w-md">
//         <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out hover:shadow-xl">
//           {/* Form Header */}
//           <div className="bg-[#e05527] px-6 py-4">
//             <div className="flex justify-between items-center">
//               <h1 className="text-2xl font-bold text-white">Student Registration</h1>
//               <div className="bg-white/30 px-2 py-1 rounded-md">
//                 <span className="text-white text-sm font-bold">15% OFF</span>
//               </div>
//             </div>
//             <p className="text-white/80 text-sm">Join our courses and start your learning journey today!</p>
//           </div>
          
//           {/* Progress Bar */}
//           <div className="px-6 pt-4">
//             <div className="flex justify-between mb-2">
//               {['Personal', 'Contact', 'Course', 'Verify'].map((step, index) => (
//                 <div key={index} className="flex flex-col items-center">
//                   <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 transition-all duration-500 ${
//                     index < formStep ? 'bg-[#e05527] border-[#e05527] text-white' :
//                     index === formStep ? 'border-[#e05527] text-[#e05527]' :
//                     'border-gray-300 text-gray-300'
//                   }`}>
//                     {index < formStep ? <CheckCircle className="h-5 w-5" /> : index + 1}
//                   </div>
//                   <span className={`text-xs mt-1 ${
//                     index <= formStep ? 'text-[#e05527]' : 'text-gray-400'
//                   }`}>{step}</span>
//                 </div>
//               ))}
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-1.5 mb-6">
//               <div 
//                 className="bg-[#e05527] h-1.5 rounded-full transition-all duration-500"
//                 style={{ width: `${(formStep / 3) * 100}%` }}
//               ></div>
//             </div>
//           </div>
          
//           {/* Form Content */}
//           <form onSubmit={handleSubmit} className="px-6 py-4">
//             {getStepContent()}
            
//             {/* Form Navigation */}
//             <div className="mt-8 flex justify-between">
//               {formStep > 0 && (
//                 <button
//                   type="button"
//                   onClick={prevStep}
//                   className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-300"
//                 >
//                   Back
//                 </button>
//               )}
              
//               {formStep < 3 ? (
//                 <button
//                   type="button"
//                   onClick={nextStep}
//                   disabled={!validateStep()}
//                   className={`ml-auto px-4 py-2 rounded-md flex items-center ${
//                     validateStep() 
//                       ? 'bg-[#e05527] text-white hover:bg-[#d04517]' 
//                       : 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                   } transition-colors duration-300`}
//                 >
//                   Continue <ChevronRight className="h-4 w-4 ml-1" />
//                 </button>
//               ) : (
//                 <button
//                   type="submit"
//                   className="ml-auto px-6 py-2 bg-[#e05527] text-white rounded-md hover:bg-[#d04517] transition-colors duration-300 font-medium"
//                 >
//                   Register Now
//                 </button>
//               )}
//             </div>
//           </form>
          
//           {/* Form Footer */}
//           <div className="px-6 py-4 bg-gray-50">
//             <div className="flex items-center justify-center text-sm text-gray-500">
//               <PhoneCall className="h-4 w-4 mr-1" />
//               <span>Need help? Call us: 8775517741</span>
//             </div>
//           </div>
//         </div>
        
//         {/* Limited Time Offer Badge */}
//         <div className="absolute top-4 right-4 bg-[#e05527] text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg transform rotate-3 animate-pulse">
//           Limited Time Offer!
//         </div>
//       </div>
//     </div>
//   );
// }




import boy from "../../assets/images/boy.jpg";



import { useState, useEffect } from 'react';
import { ChevronRight, CheckCircle, X, BookOpen, PhoneCall, MapPin, Mail, User, Brain } from 'lucide-react';

export default function StudentRegistrationForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    course: '',
    mathAnswer: '',
    submitted: false,
    error: null
  });
  
  const [mathProblem, setMathProblem] = useState({ num1: 0, num2: 0, answer: 0 });
  const [formStep, setFormStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const courses = [
    "Web Development Fundamentals",
    "Advanced React & State Management",
    "Full-Stack JavaScript Masterclass",
    "UI/UX Design Principles",
    "Mobile App Development"
  ];
  
  // Generate random math problem
  useEffect(() => {
    const num1 = Math.floor(Math.random() * 10) + 5;
    const num2 = Math.floor(Math.random() * 10) + 5;
    setMathProblem({
      num1,
      num2,
      answer: num1 * num2
    });
  }, []);
  
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const validateStep = () => {
    if (formStep === 0) {
      return formState.name && formState.email;
    } else if (formStep === 1) {
      return formState.phone && formState.address;
    } else if (formStep === 2) {
      return formState.course;
    } else if (formStep === 3) {
      return parseInt(formState.mathAnswer) === mathProblem.answer;
    }
    return false;
  };
  
  const nextStep = () => {
    if (validateStep()) {
      setIsAnimating(true);
      setTimeout(() => {
        setFormStep(formStep + 1);
        setIsAnimating(false);
      }, 300);
    } else if (formStep === 3 && parseInt(formState.mathAnswer) !== mathProblem.answer) {
      setFormState({
        ...formState,
        error: "Incorrect answer to math problem. Please try again."
      });
    }
  };
  
  const prevStep = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setFormStep(formStep - 1);
      setIsAnimating(false);
    }, 300);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(formState.mathAnswer) === mathProblem.answer) {
      setFormState({
        ...formState,
        submitted: true,
        error: null
      });
    } else {
      setFormState({
        ...formState,
        error: "Incorrect answer to math problem. Please try again."
      });
    }
  };
  
  if (formState.submitted) {
    return (
      <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out">
        <div className="p-8 text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Registration Successful!</h2>
          <p className="text-gray-600 mb-6">Thank you for registering for our course. We'll contact you shortly with further details.</p>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="font-medium text-gray-800 mb-2">Registration Details:</h3>
            <p className="text-gray-600"><span className="font-medium">Name:</span> {formState.name}</p>
            <p className="text-gray-600"><span className="font-medium">Course:</span> {formState.course}</p>
            <p className="text-gray-600"><span className="font-medium">Email:</span> {formState.email}</p>
          </div>
          <button 
            className="w-full py-3 bg-[#e05527] text-white font-bold rounded-lg shadow hover:bg-[#d04517] transition-all duration-300"
            onClick={() => setFormState({...formState, submitted: false})}
          >
            Register Another Student
          </button>
        </div>
      </div>
    );
  }
  
  const getStepContent = () => {
    switch (formStep) {
      case 0:
        return (
          <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 transform translate-x-10' : 'opacity-100'}`}>
            <h2 className="text-xl font-bold text-gray-800 mb-6">Personal Information</h2>
            <div className="space-y-4">
              <div className="relative">
                <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="name">Full Name <span className="text-red-500">*</span></label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="pl-10 block w-full rounded-md border border-gray-300 px-3 py-3 shadow-sm focus:border-[#e05527] focus:outline-none focus:ring-1 focus:ring-[#e05527]"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">Email Address <span className="text-red-500">*</span></label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="pl-10 block w-full rounded-md border border-gray-300 px-3 py-3 shadow-sm focus:border-[#e05527] focus:outline-none focus:ring-1 focus:ring-[#e05527]"
                    placeholder="johndoe@example.com"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 transform translate-x-10' : 'opacity-100'}`}>
            <h2 className="text-xl font-bold text-gray-800 mb-6">Contact Details</h2>
            <div className="space-y-4">
              <div className="relative">
                <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="phone">Phone Number <span className="text-red-500">*</span></label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <PhoneCall className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="pl-10 block w-full rounded-md border border-gray-300 px-3 py-3 shadow-sm focus:border-[#e05527] focus:outline-none focus:ring-1 focus:ring-[#e05527]"
                    placeholder="+1 (123) 456-7890"
                    required
                  />
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="address">Address <span className="text-red-500">*</span></label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formState.address}
                    onChange={handleChange}
                    className="pl-10 block w-full rounded-md border border-gray-300 px-3 py-3 shadow-sm focus:border-[#e05527] focus:outline-none focus:ring-1 focus:ring-[#e05527]"
                    placeholder="123 Main St, City, Country"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 transform translate-x-10' : 'opacity-100'}`}>
            <h2 className="text-xl font-bold text-gray-800 mb-6">Course Selection</h2>
            <div className="space-y-2">
              <label className="block text-gray-700 text-sm font-medium mb-1">Select Course <span className="text-red-500">*</span></label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <BookOpen className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  name="course"
                  value={formState.course}
                  onChange={handleChange}
                  className="pl-10 block w-full rounded-md border border-gray-300 px-3 py-3 shadow-sm focus:border-[#e05527] focus:outline-none focus:ring-1 focus:ring-[#e05527] bg-white"
                  required
                >
                  <option value="">Select a course</option>
                  {courses.map((course, index) => (
                    <option key={index} value={course}>{course}</option>
                  ))}
                </select>
              </div>
              
              <div className="mt-6 p-4 bg-[#fff9eb] rounded-lg border border-yellow-200">
                <h3 className="font-bold text-gray-800 mb-2 flex items-center">
                  Course Details
                </h3>
                <p className="text-gray-600 text-sm">
                  {formState.course ? 
                    `You've selected: ${formState.course}. Our expert instructors will guide you through every step of the learning process.` : 
                    "Please select a course to see more details."
                  }
                </p>
                {formState.course && (
                  <p className="text-sm text-[#e05527] font-medium mt-2">15% discount available for a limited time!</p>
                )}
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 transform translate-x-10' : 'opacity-100'}`}>
            <h2 className="text-xl font-bold text-gray-800 mb-6">Verification</h2>
            
            <div className="p-4 bg-[#fff9eb] rounded-lg border border-yellow-200 mb-4">
              <h3 className="font-bold text-gray-800 mb-2 flex items-center">
                <Brain className="h-5 w-5 mr-2 text-[#e05527]" />
                Quick Math Challenge
              </h3>
              <p className="text-gray-600 text-sm mb-2">Please solve this simple math problem to complete your registration:</p>
              
              <div className="flex items-center justify-center p-3 bg-white rounded-lg shadow-sm">
                <span className="text-xl font-bold text-gray-800">{mathProblem.num1} × {mathProblem.num2} = ?</span>
              </div>
            </div>
            
            <div className="relative">
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="mathAnswer">Your Answer <span className="text-red-500">*</span></label>
              <input
                type="number"
                id="mathAnswer"
                name="mathAnswer"
                value={formState.mathAnswer}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 px-3 py-3 shadow-sm focus:border-[#e05527] focus:outline-none focus:ring-1 focus:ring-[#e05527]"
                placeholder="Enter your answer"
                required
              />
            </div>
            
            {formState.error && (
              <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded-md">
                <p className="text-sm text-red-600">{formState.error}</p>
              </div>
            )}
            
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">Registration Summary:</h3>
              <p className="text-gray-600 text-sm"><span className="font-medium">Name:</span> {formState.name}</p>
              <p className="text-gray-600 text-sm"><span className="font-medium">Email:</span> {formState.email}</p>
              <p className="text-gray-600 text-sm"><span className="font-medium">Phone:</span> {formState.phone}</p>
              <p className="text-gray-600 text-sm"><span className="font-medium">Course:</span> {formState.course}</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="h-auto flex items-center justify-center bg-gradient-to-br from-[#fff9eb] to-white py-18 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row overflow-hidden bg-white rounded-2xl shadow-xl">
          {/* Form Section - Left side */}
          <div className="w-full lg:w-1/2 p-0  lg:border-r-2  rounded-xl">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out hover:shadow-xl">
              {/* Form Header */}
              <div className="bg-[#e05527] px-6 py-4">
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-bold text-white">Registration Form</h1>
                  <div className="bg-white/30 px-2 py-1 rounded-md">
                    <span className="text-white text-sm font-bold">15% OFF</span>
                  </div>
                </div>
                <p className="text-white/80 text-sm">Join our courses and start your learning journey today!</p>
              </div>
              
              {/* Progress Bar */}
              <div className="px-6 pt-4">
                <div className="flex justify-between mb-2">
                  {['Personal', 'Contact', 'Course', 'Verify'].map((step, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className={`w-8 h-8 flex items-center justify-center rounded-full border-2 transition-all duration-500 ${
                        index < formStep ? 'bg-[#e05527] border-[#e05527] text-white' :
                        index === formStep ? 'border-[#e05527] text-[#e05527]' :
                        'border-gray-300 text-gray-300'
                      }`}>
                        {index < formStep ? <CheckCircle className="h-5 w-5" /> : index + 1}
                      </div>
                      <span className={`text-xs mt-1 ${
                        index <= formStep ? 'text-[#e05527]' : 'text-gray-400'
                      }`}>{step}</span>
                    </div>
                  ))}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-6">
                  <div 
                    className="bg-[#e05527] h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${(formStep / 3) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              {/* Form Content */}
              <form  id="RegisterForm" onSubmit={handleSubmit} className="px-6 py-4">
                {getStepContent()}
                
                {/* Form Navigation */}
                <div className="mt-8 flex justify-between">
                  {formStep > 0 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-300"
                    >
                      Back
                    </button>
                  )}
                  
                  {formStep < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!validateStep()}
                      className={`ml-auto px-4 py-2 rounded-md flex items-center ${
                        validateStep() 
                          ? 'bg-[#e05527] text-white hover:bg-[#d04517]' 
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      } transition-colors duration-300`}
                    >
                      Continue <ChevronRight className="h-4 w-4 ml-1" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="ml-auto px-6 py-2 bg-[#e05527] text-white rounded-md hover:bg-[#d04517] transition-colors duration-300 font-medium"
                    >
                      Register Now
                    </button>
                  )}
                </div>
              </form>
              
              {/* Form Footer */}
              <div className="px-6 py-4 bg-gray-50">
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <PhoneCall className="h-4 w-4 mr-1" />
                  <span>Need help? Call us: 8775517741</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image Section - Right side (hidden on mobile) */}
          <div className="hidden lg:flex lg:w-1/2 bg-blue-50 relative overflow-hidden">
          <img className='object-cover' src={boy} alt="" />
          </div>
        </div>
        
        {/* Limited Time Offer Badge */}
        <div className="absolute top-4 right-4 bg-[#e05527] text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg transform rotate-3 animate-pulse">
          Limited Time Offer!
        </div>
      </div>
    </div>
  );
}