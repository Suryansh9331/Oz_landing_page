import React from 'react';
import { FaRegClock } from 'react-icons/fa';

const TimelineMarquee = () => {
  return (
    <div className="relative overflow-hidden bg-[#e05527] text-white py-4">
      <div
        className="flex items-center whitespace-nowrap animate-[marquee_55s_linear_infinite]"
        style={{
          animation: 'marquee 55s linear infinite',
        }}
      >
        <span className="text-black animate-bounce mx-4">
          <FaRegClock size={28} />
        </span>

        <p className="mx-4 text-lg font-semibold inline-block">
          2020 - Started Learning Web Development 👉 2021 - Built First Project 👉 2022 - Internship Experience 👉 2023 - Freelancing & Growth 👉 2024 - Job Ready
        </p>

        <span className="text-black animate-bounce mx-4">
          <FaRegClock size={28} />
        </span>
      </div>

      {/* Inline @keyframes added using a style tag */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </div>
  );
};

export default TimelineMarquee;
