import React, { useEffect, useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaBehance,
} from "react-icons/fa";

import logo from "../assets/logo[1].png";
import Video from '../assets/video.mp4';

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({});

  const calculateTimeLeft = () => {
    const now = new Date();
    const launchDate = new Date("2025-08-01T00:00:00");

    const difference = launchDate.getTime() - now.getTime();

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0");
    const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0");
    const minutes = String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0");
    const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, "0");

    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row w-[90%] max-w-6xl rounded-3xl overflow-hidden shadow-lg bg-white">

        {/* Left Section */}
        <div className="md:w-1/2 flex flex-col md:order-first order-last justify-center p-8 md:p-12 text-center md:text-left">
          <img src={logo} alt="SJ Furniture Logo" className="w-40 md:w-52 mb-6 mx-auto md:mx-0" />

          <h2 className="text-4xl font-extrabold text-primary">
            COMING <span className="text-secondary">SOON</span>
          </h2>

          <p className="mt-6 text-gray-700 text-base leading-relaxed">
            We're crafting a stylish experience for your space. Our new online store goes live soon — made with design lovers in mind.
          </p>

          <p className="text-sm text-gray-500 mt-2">Launch Date: 1st August 2025</p>

          {/* Countdown */}
          <div className="mt-6 text-gray-900 font-medium text-lg">
            Get ready for something beautiful:
            <div className="flex gap-4 mt-4 text-center justify-center md:justify-start">
              <div>
                <p className="text-3xl font-bold text-secondary">{timeLeft.days}</p>
                <p className="text-sm text-gray-600">Days</p>
              </div>
              <span className="text-2xl font-bold text-secondary">:</span>

              <div>
                <p className="text-3xl font-bold text-secondary">{timeLeft.hours}</p>
                <p className="text-sm text-gray-600">Hours</p>
              </div>
              <span className="text-2xl font-bold text-secondary">:</span>

              <div>
                <p className="text-3xl font-bold text-secondary">{timeLeft.minutes}</p>
                <p className="text-sm text-gray-600">Minutes</p>
              </div>
              <span className="text-2xl font-bold text-secondary">:</span>

              <div>
                <p className="text-3xl font-bold text-secondary">{timeLeft.seconds}</p>
                <p className="text-sm text-gray-600">Seconds</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 mt-8 text-primary text-xl">
            <a
              href="https://www.instagram.com/_sj_furnitures?igsh=bmlmZ2oxOXUxZ25y"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-orange-600 cursor-pointer" />
            </a>

            <a
              href="https://www.facebook.com/share/1EMqVQU2K5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:text-orange-600 cursor-pointer" />
            </a>

            <a
              href="https://www.behance.net/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBehance className="hover:text-orange-600 cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Right Section with Fullscreen Video */}
        <div className="md:w-1/2 bg-primary flex items-center justify-center p-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
