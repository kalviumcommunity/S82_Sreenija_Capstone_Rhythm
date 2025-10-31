import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

export const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-gray-800 px-6 py-10 relative overflow-hidden">
      {/* Gradient background blur for subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 blur-3xl opacity-40 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={Logo}
                alt="Rhythm"
                className="h-10 w-auto object-contain drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Rhythm
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Social music streaming and karaoke platform.  
              <span className="text-gray-300 font-medium"> Sing, learn, and connect </span> with your friends.
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Features</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link
                  to="/explore"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Music Streaming
                </Link>
              </li>
              <li>
                <Link
                  to="/karaoke"
                  className="hover:text-purple-400 transition-colors duration-200"
                >
                  Karaoke
                </Link>
              </li>
              <li>
                <Link
                  to="/lessons"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Singing Lessons
                </Link>
              </li>
              <li>
                <Link
                  to="/leaderboard"
                  className="hover:text-purple-400 transition-colors duration-200"
                >
                  Leaderboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors duration-200">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Legal</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors duration-200">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold">
              Rhythm
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
