import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set target date (2 days from now for demo)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 2);
  targetDate.setHours(0, 0, 0, 0);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate - new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="h-auto flex items-center justify-center p-4"
      style={{ backgroundColor: "#fff9eb" }}
    >
      <div className="text-center max-w-4xl mx-auto py-6">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up">
          <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
            Early Birds Special Offer
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 mb-10 animate-fade-in-up delay-200">
          Limited Time Access - 50% off for first 50 Early Birds!
        </p>

        {/* Countdown Timer */}
        <div className="mb-12 animate-fade-in-up delay-400">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Clock className="w-6 h-6 text-orange-600" />
            <span className="text-orange-600 font-semibold text-lg">
              Offer ends in:
            </span>
          </div>

          <div className="flex justify-center gap-4 md:gap-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="relative">
                  <div
                    className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-lg shadow-lg border-2 border-orange-200 animate-pulse-subtle"
                    style={{ backgroundColor: "#e05527" }}
                  >
                    <span className="text-2xl md:text-3xl font-mono font-bold text-white">
                      {value.toString().padStart(2, "0")}
                    </span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-600 rounded-full animate-ping"></div>
                </div>
                <div className="text-sm md:text-base text-gray-600 mt-2 capitalize font-medium">
                  {unit}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enroll Button */}
        <div className="animate-fade-in-up delay-600">
          <button
            onClick={() => {
              const el = document.getElementById("RegisterForm");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="group relative px-12 py-4 text-xl font-bold text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95 overflow-hidden"
            style={{ backgroundColor: "#e05527" }}
          >
            <span className="relative z-10">Enroll Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </button>

          <p className="text-gray-600 mt-4 text-sm">
            🎉 Special launch price:{" "}
            <span className="font-bold text-orange-600">50% OFF</span>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-subtle {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        .delay-600 {
          animation-delay: 0.6s;
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Timer;
