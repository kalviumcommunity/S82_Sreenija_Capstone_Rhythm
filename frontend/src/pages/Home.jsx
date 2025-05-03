import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-black to-indigo-900 text-white">
      {/* Navbar */}
      <nav className="flex flex-col md:flex-row justify-between items-center p-6 bg-gray-800 bg-opacity-90 shadow-md space-y-4 md:space-y-0">
        <h1 className="text-2xl font-bold tracking-wider text-white">🎵 Rhythm</h1>
        <div className="space-x-4">
          <Link to="/login" className="hover:text-gray-300 transition-colors">Login</Link>
          <Link to="/register" className="hover:text-gray-300 transition-colors">Register</Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <h2 className="text-5xl font-extrabold mb-6 text-pink-400">Rhythm</h2>
        <p className="text-xl max-w-xl mb-8">
          Experience music like never before. Sing karaoke with your friends, build streaks, and learn from amazing vocal teachers — all in one app.
        </p>
        <div className="space-x-4">
          <Link to="/login">
            <button className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-lg font-medium shadow-md">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-medium shadow-md">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
