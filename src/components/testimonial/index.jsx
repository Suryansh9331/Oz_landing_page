import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import student1 from '../../assets/images/student1.jpg';
import student2 from '../../assets/images/student2.jpg';
import student3 from '../../assets/images/student3.jpg';
import student4 from '../../assets/images/student4.jpg';
import student5 from '../../assets/images/student5.jpg';
import student6 from '../../assets/images/student6.jpg';
import student7 from '../../assets/images/student7.jpg';
import student8 from '../../assets/images/student8.jpg';
const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Sara ",
      role: "Full Stack Developer",
      image: student2,
      rating: 4,
      testimonial: "The training program completely transformed my career. The instructors were knowledgeable, and the hands-on approach made learning engaging and effective. I secured my dream job within 2 months of completing the course!"
    },
    {
      id: 2,
      name: "Priyansh",
      role: "Data Scientist",
      image: student3,
      rating: 5,
      testimonial: "Exceptional quality of education with real-world projects. The curriculum is up-to-date with industry standards, and the support from mentors was outstanding. Highly recommend to anyone looking to advance their tech career."
    },
    {
      id: 3,
      name: "Riya Sharma",
      role: "UX Designer",
      image: student4,
      rating: 4,
      testimonial: "As someone with no prior experience in tech, I was worried about keeping up. But the structured approach and patient instructors made the learning journey smooth and enjoyable. Now I'm working at a top design agency!"
    },
    {
      id: 4,
      name: "Dhruv Bhatia",
      role: "Cloud Engineer",
      image: student5,
      rating: 3,
      testimonial: "The practical approach to teaching cloud technologies gave me confidence to work on real projects. The career support team helped me land an interview at my target company. Best investment I've made in my career!"
    },
    {
      id: 5,
      name: "Harshit Kumar",
      role: "DevOps Engineer",
      image: student6,
      rating: 3,
      testimonial: "The in-depth, real-world training in cloud and DevOps technologies significantly enhanced my technical skills and prepared me for industry challenges. The dedicated career support team provided valuable guidance that led to an interview with my target company. It’s been a pivotal step forward in my professional journey."
    },
    {
      id: 6,
      name: "Aarav",
      role: "Django Developer",
      image: student7,
      rating: 4,
      testimonial: "The hands-on approach to teaching cloud technologies gave me the confidence to apply my Django skills to real-world projects. The career support team played a key role in helping me land an interview at my target company. Definitely the best investment I’ve made in my development career!"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentTestimonial]);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <div className="w-full py-12 px-4 md:py-20" style={{ backgroundColor: '#fff3e3' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#11182b' }}>
            What Our Students Say
          </h2>
          <p className="text-xl md:text-2xl opacity-80" style={{ color: '#11182b' }}>
            Join thousands of successful graduates
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative">
          <div 
            className={`bg-white rounded-3xl shadow-2xl p-8 md:p-12 transition-all duration-300 transform ${
              isAnimating ? 'scale-95 opacity-70' : 'scale-100 opacity-100'
            }`}
          >
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e05527' }}>
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Profile Image */}
              <div className="relative shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg">
                  <img 
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
                {/* Rating Stars - Floating */}
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                  <div className="flex gap-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#e05527' }} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 text-center md:text-left">
                <blockquote 
                  className="text-lg md:text-xl leading-relaxed mb-6"
                  style={{ color: '#11182b' }}
                >
                  "{testimonials[currentTestimonial].testimonial}"
                </blockquote>
                
                <div>
                  <h3 className="text-2xl font-bold mb-1" style={{ color: '#11182b' }}>
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-lg font-medium" style={{ color: '#e05527' }}>
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{ backgroundColor: '#e05527', color: '#ffffff' }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{ backgroundColor: '#e05527', color: '#ffffff' }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setCurrentTestimonial(index);
                    setIsAnimating(false);
                  }, 300);
                }
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'w-8' 
                  : 'opacity-50 hover:opacity-75'
              }`}
              style={{ backgroundColor: '#e05527' }}
            />
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: '2000+', label: 'Successful Graduates' },
            { number: '95%', label: 'Job Placement Rate' },
            { number: '4.9/5', label: 'Average Rating' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div 
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: '#e05527' }}
              >
                {stat.number}
              </div>
              <div 
                className="text-lg font-medium"
                style={{ color: '#11182b' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#e05527' }}></div>
        <div className="absolute top-40 right-20 w-3 h-3 rounded-full animate-bounce" style={{ backgroundColor: '#e05527' }}></div>
        <div className="absolute bottom-20 left-20 w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#e05527' }}></div>
      </div>
    </div>
  );
};

export default Testimonial;