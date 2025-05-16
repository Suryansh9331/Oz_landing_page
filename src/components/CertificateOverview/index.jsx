// import React, { useState, useEffect } from 'react';
// import { Award, CheckCircle, Calendar, Users, Trophy, BookOpen, Star, Download, Shield, Globe } from 'lucide-react';

// const CertificateOverview = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [currentFeature, setCurrentFeature] = useState(0);

//   useEffect(() => {
//     setIsVisible(true);
//     const interval = setInterval(() => {
//       setCurrentFeature((prev) => (prev + 1) % 4);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const features = [
//     {
//       icon: Award,
//       title: "Industry Recognition",
//       description: "Globally recognized certification that enhances your professional credibility"
//     },
//     {
//       icon: BookOpen,
//       title: "Comprehensive Learning",
//       description: "Complete curriculum covering all essential topics and practical applications"
//     },
//     {
//       icon: Calendar,
//       title: "Flexible Timeline",
//       description: "Self-paced learning with 6-month validity and lifetime access to materials"
//     },
//     {
//       icon: Users,
//       title: "Expert Support",
//       description: "Guidance from industry experts and 24/7 student support community"
//     }
//   ];

//   const stats = [
//     { label: "Successful Graduates", value: "10,000+", icon: Users },
//     { label: "Industry Partners", value: "500+", icon: Trophy },
//     { label: "Course Rating", value: "4.9/5", icon: Star },
//     { label: "Completion Rate", value: "95%", icon: CheckCircle }
//   ];

//   const credentials = [
//     { icon: Shield, title: "Verified Credentials", desc: "Blockchain-secured certification" },
//     { icon: Globe, title: "Global Recognition", desc: "Accepted worldwide by employers" },
//     { icon: Download, title: "Digital & Physical", desc: "Get both digital badge and certificate" }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//           <div className="inline-block bg-gradient-to-r from-orange-600 to-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
//             Excellence in Education
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className="text-gray-800">Your Journey to </span>
//             <span className="text-orange-600 bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
//               Certification Excellence
//             </span>
//           </h2>
//           <p className="text-xl text-blue-800 max-w-3xl mx-auto">
//             Discover how our comprehensive certification program will transform your career and unlock new opportunities
//           </p>
//         </div>

//         {/* Certificate Preview */}
//         <div className={`relative mb-20 transition-all duration-1500 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
//           <div className="bg-gradient-to-br from-amber-50 via-white to-blue-50 p-8 rounded-3xl shadow-2xl border border-orange-100 transform perspective-1000 hover:rotate-x-2 transition-all duration-700">
//             <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100">
//               <div className="text-center">
//                 <div className="mb-6 relative">
//                   <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-500 w-20 h-20 rounded-full mx-auto opacity-20 animate-pulse"></div>
//                   <Award className="w-20 h-20 text-blue-900  mx-auto relative z-10 animate-bounce" />
//                 </div>
//                 <h3 className="text-3xl font-bold text-blue-900 mb-4">Certificate of Excellence</h3>
//                 <div className="h-1 w-32 bg-gradient-to-r from-orange-600 via-red-500 to-blue-600 mx-auto mb-6"></div>
//                 <p className="text-lg text-gray-600 mb-4">This certifies that</p>
//                 <h4 className="text-2xl font-bold text-blue-800 mb-4">[Student Name]</h4>
//                 <p className="text-gray-600 mb-6">has successfully completed the</p>
//                 <h5 className="text-xl font-semibold text-orange-600 mb-8">[Course Title]</h5>
//                 <div className="flex justify-between items-center text-sm text-gray-500 border-t border-blue-100 pt-4">
//                   <span>Date: [Date]</span>
//                   <span>Certificate ID: [ID]</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Features Section */}
//         <div className="mb-20">
//           <h3 className="text-3xl font-bold text-center text-blue-900 mb-12">Why Choose Our Certification?</h3>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className={`text-center p-6 rounded-2xl transition-all duration-700 ${
//                   currentFeature === index
//                     ? 'bg-gradient-to-br from-orange-500 to-red-500 text-white transform scale-105 shadow-2xl'
//                     : 'bg-white text-gray-700 shadow-lg hover:shadow-xl border border-blue-100'
//                 } hover:transform hover:scale-105`}
//               >
//                 <feature.icon className="w-12 h-12 mx-auto mb-4" />
//                 <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
//                 <p className="text-sm opacity-90">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Credentials Section */}
//         <div className="mb-20">
//           <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-12 text-white">
//             <h3 className="text-3xl font-bold text-center mb-12">Certificate Features</h3>
//             <div className="grid md:grid-cols-3 gap-8">
//               {credentials.map((cred, index) => (
//                 <div
//                   key={index}
//                   className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
//                   style={{ transitionDelay: `${index * 200}ms` }}
//                 >
//                   <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <cred.icon className="w-10 h-10 text-black" />
//                   </div>
//                   <h4 className="text-xl font-semibold mb-3">{cred.title}</h4>
//                   <p className="text-blue-200">{cred.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Statistics */}
//         <div className="bg-gradient-to-r from-orange-600 to-red-500 rounded-3xl p-8 mb-20 text-white">
//           <h3 className="text-3xl font-bold text-center mb-12">Our Success Stories</h3>
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div
//                 key={index}
//                 className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
//                 style={{ transitionDelay: `${index * 200}ms` }}
//               >
//                 <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <stat.icon className="w-8 h-8 text-black" />
//                 </div>
//                 <div className="text-3xl font-bold mb-2">{stat.value}</div>
//                 <div className="text-md  ">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Process Timeline */}
//         <div className="mb-20">
//           <h3 className="text-3xl font-bold text-center text-blue-900 mb-12">Your Certification Journey</h3>
//           <div className="max-w-4xl mx-auto">
//             <div className="relative">
//               <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-orange-600 via-red-500 to-blue-600"></div>
//               <div className="space-y-12">
//                 {[
//                   { step: 1, title: "Enroll & Begin", desc: "Start your learning journey with our expert-curated content", color: "orange" },
//                   { step: 2, title: "Learn & Practice", desc: "Engage with interactive lessons and hands-on projects", color: "red" },
//                   { step: 3, title: "Assessment", desc: "Complete comprehensive evaluations and practical tests", color: "orange" },
//                   { step: 4, title: "Certification", desc: "Receive your official certificate and digital badge", color: "blue" }
//                 ].map((item, index) => (
//                   <div
//                     key={index}
//                     className={`flex items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
//                     style={{ transitionDelay: `${index * 300}ms` }}
//                   >
//                     <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8 order-2'}`}>
//                       <div className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} p-6 rounded-2xl shadow-lg border border-blue-100`}>
//                         <h4 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h4>
//                         <p className="text-gray-600">{item.desc}</p>
//                       </div>
//                     </div>
//                     <div className={`flex-shrink-0 w-16 h-16 ${
//                       item.color === 'blue' ? 'bg-blue-600' : 
//                       item.color === 'red' ? 'bg-red-500' : 'bg-orange-600'
//                     } rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
//                       {item.step}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className={`text-center bg-gradient-to-br from-amber-50 via-white to-blue-50 rounded-3xl p-12 border border-blue-100 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//           <h3 className="text-3xl font-bold text-blue-900 mb-6">Ready to Earn Your Certificate?</h3>
//           <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//             Join thousands of successful graduates who have transformed their careers with our certification program
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-gradient-to-r from-orange-600 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
//               Enroll Now
//             </button>
//             <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 bg-white">
//               View Sample Certificate
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CertificateOverview;








import React, { useState, useEffect } from 'react';
import { Award, CheckCircle, Calendar, Users, Trophy, BookOpen, Star, Download, Shield, Globe } from 'lucide-react';

const CertificateOverview = ({setIsOpen}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Globally recognized certification that enhances your professional credibility"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Learning",
      description: "Complete curriculum covering all essential topics and practical applications"
    },
    {
      icon: Calendar,
      title: "Flexible Timeline",
      description: "Self-paced learning with 6-month validity and lifetime access to materials"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Guidance from industry experts and 24/7 student support community"
    }
  ];

  const stats = [
    { label: "Successful Graduates", value: "10,000+", icon: Users },
    { label: "Industry Partners", value: "500+", icon: Trophy },
    { label: "Course Rating", value: "4.9/5", icon: Star },
    { label: "Completion Rate", value: "95%", icon: CheckCircle }
  ];

  const credentials = [
    { icon: Shield, title: "Verified Credentials", desc: "Blockchain-secured certification" },
    { icon: Globe, title: "Global Recognition", desc: "Accepted worldwide by employers" },
    { icon: Download, title: "Digital & Physical", desc: "Get both digital badge and certificate" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block bg-gradient-to-r from-orange-600 to-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            Excellence in Education
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-800">Your Journey to </span>
            <span className="text-orange-600 bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
              Certification Excellence
            </span>
          </h2>
          <p className="text-xl text-blue-800 max-w-3xl mx-auto">
            Discover how our comprehensive certification program will transform your career and unlock new opportunities
          </p>
        </div>

        {/* Certificate Preview */}
        <div className={`relative mb-20 transition-all duration-1500 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="bg-gradient-to-br from-amber-50 via-white to-blue-50 p-8 rounded-3xl shadow-2xl border border-orange-100 transform perspective-1000 hover:rotate-x-2 transition-all duration-700">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100">
              <div className="text-center">
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-500 w-20 h-20 rounded-full mx-auto opacity-20 animate-pulse"></div>
                  <Award className="w-20 h-20 text-blue-900  mx-auto relative z-10 animate-bounce" />
                </div>
                <h3 className="text-3xl font-bold text-blue-900 mb-4">Certificate of Excellence</h3>
                <div className="h-1 w-32 bg-gradient-to-r from-orange-600 via-red-500 to-blue-600 mx-auto mb-6"></div>
                <p className="text-lg text-gray-600 mb-4">This certifies that</p>
                <h4 className="text-2xl font-bold text-blue-800 mb-4">[Student Name]</h4>
                <p className="text-gray-600 mb-6">has successfully completed the</p>
                <h5 className="text-xl font-semibold text-orange-600 mb-8">[Course Title]</h5>
                <div className="flex justify-between items-center text-sm text-gray-500 border-t border-blue-100 pt-4">
                  <span>Date: [Date]</span>
                  <span>Certificate ID: [ID]</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-blue-900 mb-12">Why Choose Our Certification?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-2xl transition-all duration-700 ${
                  currentFeature === index
                    ? 'bg-gradient-to-br from-orange-500 to-red-500 text-white transform scale-105 shadow-2xl'
                    : 'bg-white text-gray-700 shadow-lg hover:shadow-xl border border-blue-100'
                } hover:transform hover:scale-105`}
              >
                <feature.icon className="w-12 h-12 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                <p className="text-sm opacity-90">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Credentials Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold text-center mb-12">Certificate Features</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {credentials.map((cred, index) => (
                <div
                  key={index}
                  className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <cred.icon className="w-10 h-10 text-black" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{cred.title}</h4>
                  <p className="text-blue-200">{cred.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-orange-600 to-red-500 rounded-3xl p-8 mb-20 text-white">
          <h3 className="text-3xl font-bold text-center mb-12">Our Success Stories</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-black" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-md  ">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-blue-900 mb-12">Your Certification Journey</h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-orange-600 via-red-500 to-blue-600"></div>
              <div className="space-y-12">
                {[
                  { step: 1, title: "Enroll & Begin", desc: "Start your learning journey with our expert-curated content", color: "orange" },
                  { step: 2, title: "Learn & Practice", desc: "Engage with interactive lessons and hands-on projects", color: "red" },
                  { step: 3, title: "Assessment", desc: "Complete comprehensive evaluations and practical tests", color: "orange" },
                  { step: 4, title: "Certification", desc: "Receive your official certificate and digital badge", color: "red" }
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                    style={{ transitionDelay: `${index * 300}ms` }}
                  >
                    {/* For odd indices (0, 2), content appears on the left */}
                    {index % 2 === 0 ? (
                      <>
                        <div className="w-1/2 text-right pr-8">
                          <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
                            <h4 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h4>
                            <p className="text-gray-600">{item.desc}</p>
                          </div>
                        </div>
                        <div className={`flex-shrink-0 w-16 h-16 ${
                          item.color === 'blue' ? 'bg-blue-600' : 
                          item.color === 'red' ? 'bg-red-500' : 'bg-orange-600'
                        } rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10`}>
                          {item.step}
                        </div>
                        <div className="w-1/2"></div> {/* Empty div for spacing */}
                      </>
                    ) : (
                      /* For even indices (1, 3), content appears on the right */
                      <>
                        <div className="w-1/2"></div> {/* Empty div for spacing */}
                        <div className={`flex-shrink-0 w-16 h-16 ${
                          item.color === 'blue' ? 'bg-blue-600' : 
                          item.color === 'red' ? 'bg-red-500' : 'bg-orange-600'
                        } rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10`}>
                          {item.step}
                        </div>
                        <div className="w-1/2 text-left pl-8">
                          <div className="bg-gray-50 p-6 rounded-2xl shadow-lg border border-blue-100">
                            <h4 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h4>
                            <p className="text-gray-600">{item.desc}</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center bg-gradient-to-br from-amber-50 via-white to-blue-50 rounded-3xl p-12 border border-blue-100 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-3xl font-bold text-blue-900 mb-6">Ready to Earn Your Certificate?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of successful graduates who have transformed their careers with our certification program
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button     onClick={() => {
              const el = document.getElementById("RegisterForm");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-gradient-to-r from-orange-600 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
              Enroll Now
            </button>
            <button         onClick={() => setIsOpen(true)} 
             className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 bg-white">
              Earn One Free Certificate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateOverview;