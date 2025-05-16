import { useState, useEffect, useRef } from 'react';
import { ChevronRight, Award, Users, BookOpen, TrendingUp, Quote } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('mission');
  const [quoteVisible, setQuoteVisible] = useState(false);
  const quoteRef = useRef(null);

  useEffect(() => {
    // Set component as visible after a short delay to trigger animations
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    // Observer for the quote section
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setQuoteVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    
    if (quoteRef.current) {
      observer.observe(quoteRef.current);
    }
    
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  // Demo data for the institute
  const aboutData = {
    mission: {
      title: "Our Mission",
      description: "We strive to transform education through innovative teaching methodologies and cutting-edge research. Our commitment is to prepare students for the challenges of tomorrow's world.",
      icon: <BookOpen className="text-orange-500" size={24} />
    },
    values: {
      title: "Our Values",
      description: "Excellence, integrity, and innovation form the cornerstone of our educational philosophy. We believe in nurturing well-rounded individuals who contribute positively to society.",
      icon: <Award className="text-orange-500" size={24} />
    },
    team: {
      title: "Our Team",
      description: "Our faculty comprises industry leaders and academic experts who bring real-world experience into the classroom, offering students a blend of theoretical knowledge and practical skills.",
      icon: <Users className="text-orange-500" size={24} />
    },
    growth: {
      title: "Our Growth",
      description: "Since our inception, we have expanded our programs and facilities, reaching more students each year while maintaining our commitment to personalized education and excellence.",
      icon: <TrendingUp className="text-orange-500" size={24} />
    }
  };

  // Stats for the institute
  const stats = [
    { number: "95%", label: "Graduate Employment Rate" },
    { number: "15+", label: "Years of Excellence" },
    { number: "50+", label: "Industry Partners" },
    { number: "10k+", label: "Alumni Network" }
  ];

  return (
    <div className="w-full bg-gray-50 py-16">
      <div className={`max-w-6xl mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-2">
            <div className="h-1 w-10 bg-orange-500 rounded mr-2"></div>
            <span className="text-orange-500 font-medium">ABOUT US</span>
            <div className="h-1 w-10 bg-orange-500 rounded ml-2"></div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ color: '#11182b' }}>
            Discover Our Institute
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
            We are dedicated to providing exceptional educational experiences that prepare our students
            for successful careers and meaningful contributions to society.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image with overlapping accent */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <div className="bg-gray-300 h-80 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-transparent opacity-20"></div>
                <img src="/api/placeholder/600/480" alt="Campus life" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-lg" style={{ backgroundColor: '#e05527', opacity: 0.9 }}></div>
            <div className="absolute -top-6 -left-6 w-20 h-20 rounded-lg" style={{ backgroundColor: '#fff3e3', opacity: 0.6 }}></div>
          </div>

          {/* Right Column - Tabs */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4" style={{ borderColor: '#e05527' }}>
              {/* Tabs navigation */}
              <div className="flex flex-wrap mb-6 gap-2">
                {Object.keys(aboutData).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
                      activeTab === tab 
                        ? 'bg-orange-100 text-orange-600' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                    style={{ backgroundColor: activeTab === tab ? '#fff3e3' : '', color: activeTab === tab ? '#e05527' : '' }}
                  >
                    {aboutData[tab].icon}
                    <span className="ml-2">{aboutData[tab].title}</span>
                  </button>
                ))}
              </div>

              {/* Tab content */}
              {Object.keys(aboutData).map((tab) => (
                <div 
                  key={tab} 
                  className={`transition-all duration-500 ${
                    activeTab === tab ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 absolute'
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#11182b' }}>
                    {aboutData[tab].title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {aboutData[tab].description}
                  </p>
                  <button 
                    className="flex items-center font-medium transition-all duration-300"
                    style={{ color: '#e05527' }}
                  >
                    Learn more about {aboutData[tab].title.toLowerCase()} 
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1"
              style={{ backgroundColor: '#fff3e3' }}
            >
              <h3 
                className="text-3xl font-bold mb-2" 
                style={{ color: '#e05527' }}
              >
                {stat.number}
              </h3>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button 
            className="px-8 py-3 rounded-lg font-bold text-white transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            style={{ backgroundColor: '#e05527' }}
          >
            Schedule a Visit
          </button>
        </div>
        
        {/* Message from CEO/Founder Section */}
        <div 
          ref={quoteRef}
          className="mt-24 mb-12 relative"
        >
          {/* Background decorative elements */}
          <div className="absolute -top-8 -left-4 w-24 h-24 rounded-full opacity-20" style={{ backgroundColor: '#e05527' }}></div>
          <div className="absolute -bottom-8 -right-4 w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: '#11182b' }}></div>
          
          <div className={`relative bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-1500 transform 
            ${quoteVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
          >
            <div className="absolute top-0 left-0 h-full w-2" style={{ backgroundColor: '#e05527' }}></div>
            
            <div className="grid md:grid-cols-5 items-center">
              {/* CEO Image Column */}
              <div className="md:col-span-2 relative h-full">
                <div className={`h-full transition-all duration-1000 delay-300 transform ${quoteVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  <div className="relative h-80 md:h-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                    <img src="/api/placeholder/400/600" alt="CEO Portrait" className="w-full h-full object-cover" />
                    <div 
                      className="absolute bottom-0 left-0 right-0 p-4 text-white"
                      style={{ backgroundColor: 'rgba(17, 24, 43, 0.8)' }}
                    >
                      <h4 className="text-xl font-bold">Dr. Jane Smith</h4>
                      <p className="text-sm opacity-90">Founder & CEO</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quote Column */}
              <div className="md:col-span-3 p-8 md:p-12">
                <div className={`transition-all duration-1000 delay-500 transform ${quoteVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                  <div className="mb-6">
                    <Quote size={36} style={{ color: '#e05527' }} />
                  </div>
                  
                  <p className="text-xl italic leading-relaxed mb-8" style={{ color: '#11182b' }}>
                    Education is not just about filling minds with knowledge, but about igniting a passion for lifelong learning. 
                    At our institute, we're committed to developing not just skilled professionals, but thoughtful leaders who will 
                    shape tomorrow's world with integrity and vision.
                  </p>
                  
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="w-12 h-1 rounded" style={{ backgroundColor: '#e05527' }}></div>
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: '#11182b' }}>Dr. Jane Smith</p>
                      <p className="text-sm text-gray-600">Founder & CEO, Est. 2008</p>
                    </div>
                  </div>
                  
                  <div className={`mt-8 flex space-x-4 transition-all duration-1000 delay-700 transform ${quoteVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="flex items-center px-4 py-2 rounded-lg bg-gray-100">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: '#fff3e3' }}>
                        <BookOpen size={16} style={{ color: '#e05527' }} />
                      </div>
                      <div className="text-sm">
                        <p className="font-medium">PhD in Education</p>
                        <p className="text-gray-500 text-xs">Stanford University</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center px-4 py-2 rounded-lg bg-gray-100">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: '#fff3e3' }}>
                        <Award size={16} style={{ color: '#e05527' }} />
                      </div>
                      <div className="text-sm">
                        <p className="font-medium">15+ Awards</p>
                        <p className="text-gray-500 text-xs">Industry Recognition</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}