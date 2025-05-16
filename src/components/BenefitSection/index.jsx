import { useState, useEffect, useRef } from 'react';
import { GraduationCap, MapPin, Sun, AlarmClock, Laptop, Wallet } from 'lucide-react';
import React from 'react';
export default function BenefitSection() {
  // Animation states
  const [isVisible, setIsVisible] = useState(false);
  const [hovered, setHovered] = useState(null);
  const sectionRef = useRef(null);

  // Set up intersection observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the section enters the viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once triggered, we can disconnect the observer
          observer.disconnect();
        }
      },
      {
        // Trigger when at least 10% of the element is visible
        threshold: 0.1,
        // Start detecting when element is 100px from entering viewport
        rootMargin: '0px 0px -100px 0px'
      }
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

  // Benefit items data with enhanced colors and descriptions
  const benefits = [
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "4000+",
      description: "Students Trained",
      color: "from-teal-400 to-teal-500",
      shadowColor: "shadow-teal-500/50",
      bgGlow: "bg-teal-400/10",
      animation: "fade-down-right"
    },
    {
      icon: <MapPin className="w-12 h-12" />,
      title: "Placement",
      description: "Guaranteed",
      color: "from-orange-400 to-orange-500",
      shadowColor: "shadow-orange-500/50",
      bgGlow: "bg-orange-400/10",
      animation: "fade-down"
    },
    {
      icon: <Sun className="w-12 h-12" />,
      title: "1-ON-1",
      description: "Grooming",
      color: "from-yellow-400 to-yellow-500",
      shadowColor: "shadow-yellow-500/50",
      bgGlow: "bg-yellow-400/10",
      animation: "fade-down-left"
    },
    {
      icon: <AlarmClock className="w-12 h-12" />,
      title: "Duration",
      description: "Flexible",
      color: "from-pink-400 to-pink-500",
      shadowColor: "shadow-pink-500/50",
      bgGlow: "bg-pink-400/10",
      animation: "fade-up-right"
    },
    {
      icon: <Laptop className="w-12 h-12" />,
      title: "Internship",
      description: "On live international Projects",
      color: "from-red-400 to-red-500",
      shadowColor: "shadow-red-500/50",
      bgGlow: "bg-red-400/10",
      animation: "fade-up"
    },
    {
      icon: <Wallet className="w-12 h-12" />,
      title: "Affordable fees",
      description: "0% Interest EMI Available",
      color: "from-cyan-400 to-cyan-500",
      shadowColor: "shadow-cyan-500/50",
      bgGlow: "bg-cyan-400/10",
      animation: "fade-up-left"
    }
  ];

  // Get animation classes based on animation type and visibility state
  const getAnimationClasses = (animationType) => {
    // Base classes for initial and animated states
    const baseClasses = {
      'fade-down': {
        initial: 'opacity-0 translate-y-[-60px]',
        animate: 'opacity-100 translate-y-0'
      },
      'fade-up': {
        initial: 'opacity-0 translate-y-[60px]',
        animate: 'opacity-100 translate-y-0'
      },
      'fade-left': {
        initial: 'opacity-0 translate-x-[-60px]',
        animate: 'opacity-100 translate-x-0'
      },
      'fade-right': {
        initial: 'opacity-0 translate-x-[60px]',
        animate: 'opacity-100 translate-x-0'
      },
      'fade-down-left': {
        initial: 'opacity-0 translate-y-[-40px] translate-x-[-40px]',
        animate: 'opacity-100 translate-y-0 translate-x-0'
      },
      'fade-down-right': {
        initial: 'opacity-0 translate-y-[-40px] translate-x-[40px]',
        animate: 'opacity-100 translate-y-0 translate-x-0'
      },
      'fade-up-left': {
        initial: 'opacity-0 translate-y-[40px] translate-x-[-40px]',
        animate: 'opacity-100 translate-y-0 translate-x-0'
      },
      'fade-up-right': {
        initial: 'opacity-0 translate-y-[40px] translate-x-[40px]',
        animate: 'opacity-100 translate-y-0 translate-x-0'
      },
      'zoom-in': {
        initial: 'opacity-0 scale-50',
        animate: 'opacity-100 scale-100'
      }
    };

    const animationState = isVisible ? 'animate' : 'initial';
    return `${baseClasses[animationType][animationState]} transition-all duration-1000 ease-out`;
  };

  return (
    <div className="w-full bg-gray-900 py-16 px-4 overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto relative">
        {/* Background glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 blur-3xl opacity-0 transition-opacity duration-1000 ${isVisible ? 'opacity-30' : ''}`}></div>
        
        {/* Title that fades in first */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-20px]'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why Choose Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mt-4"></div>
        </div>

        {/* Grid of benefits */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`flex flex-col items-center text-center relative ${
                getAnimationClasses(benefit.animation, index)
              }`}
              style={{ transitionDelay: `${isVisible ? index * 150 : 0}ms` }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Background subtle glow */}
              <div className={`absolute inset-0 rounded-xl ${benefit.bgGlow} opacity-0 transition-opacity duration-500 ${hovered === index ? 'opacity-100' : ''}`}></div>
              
              {/* Icon container with drop animation */}
              <div 
                className={`mb-5 p-4 rounded-full bg-gradient-to-br ${benefit.color} transform transition-all duration-500 ${
                  hovered === index ? 'scale-110 rotate-6' : ''
                } relative ${benefit.shadowColor} shadow-lg`}
              >
                {/* Radial pulse animation */}
                <div className={`absolute inset-0 rounded-full ${isVisible ? 'animate-ping' : ''} bg-gradient-to-br ${benefit.color} opacity-0 ${isVisible ? 'opacity-30' : ''} scale-125 duration-1000 transition-opacity`}></div>
                
                {/* Icon with white color */}
                <div className="relative">
                  {React.cloneElement(benefit.icon, { 
                    className: `w-12 h-12 text-white transition-all ${hovered === index ? 'animate-bounce' : ''}` 
                  })}
                </div>
              </div>

              {/* Text content with separate animation */}
              <div className={`z-10 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              } ${hovered === index ? 'transform scale-105' : ''}`}>
                <h3 className="text-2xl font-bold mb-2 text-white">{benefit.title}</h3>
                <p className="text-sm text-gray-300">{benefit.description}</p>
              </div>
              
              {/* Decorative line under text */}
              <div className={`h-1 w-0 bg-gradient-to-r ${benefit.color} rounded-full mt-3 transition-all duration-500 ${
                hovered === index ? 'w-16' : isVisible ? 'w-8' : 'w-0'
              }`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
