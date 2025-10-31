import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Logo from "../../assets/Logo.png";

export const Sidebar = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  const menuItems = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/explore", label: "Explore", icon: "🔍" },
    ...(isAuthenticated
      ? [
          { path: "/profile", label: "Profile", icon: "👤" },
          { path: "/karaoke/lobby", label: "Karaoke", icon: "🎤" },
        ]
      : []),
    { path: "/leaderboard", label: "Leaderboard", icon: "🏆" },
    { path: "/lessons", label: "Lessons", icon: "🎓" },
  ];

  return (
    <aside className="w-64 min-h-screen bg-[#0A0A0A] border-r border-gray-800 p-6 flex flex-col justify-between shadow-lg">
      {/* Top Section — Logo and Navigation */}
      <div>

        {/* Menu Items */}
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 p-3 rounded-lg font-medium transition-all duration-300 ${
                location.pathname === item.path
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md scale-[1.02]"
                  : "text-gray-300 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 hover:text-white"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom Section — Streak (Visible only if logged in) */}
      {isAuthenticated && (
        <div className="mt-10 p-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-gray-700 backdrop-blur-md">
          <h3 className="font-semibold text-gray-200 mb-2">🔥 Your Streak</h3>
          <div className="flex items-center space-x-2">
            <span className="text-3xl">🔥</span>
            <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              7 days
            </span>
          </div>
        </div>
      )}
    </aside>
  );
};
