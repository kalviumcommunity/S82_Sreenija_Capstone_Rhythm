import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { Button } from '../common/Button'
import { Modal } from '../common/Modal'
import LoginForm from '../auth/LoginForm'
import SignupForm from '../auth/SignupForm'
import Logo from '../../assets/Logo.png'

export const Navbar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <>
<nav className="bg-[#0A0A0A] border-b border-gray-800 px-8 py-4 shadow-md">
  <div className="flex items-center justify-between">
    {/* Logo + Brand */}
    <Link to="/" className="flex items-center space-x-3 group">
      <img
        src={Logo}
        alt="Rhythm Logo"
        className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
        style={{ maxHeight: '40px' }}
      />
      <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Rhythm
      </span>
    </Link>

    {/* Navigation Links */}
    <div className="flex items-center space-x-6 text-gray-300">
      {isAuthenticated ? (
        <>
          <Link
            to="/explore"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Explore
          </Link>
          <Link
            to="/leaderboard"
            className="hover:text-purple-400 transition-colors duration-300"
          >
            Leaderboard
          </Link>
          <Link
            to="/lessons"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Lessons
          </Link>
          <Link
            to="/profile"
            className="hover:text-purple-400 transition-colors duration-300"
          >
            Profile
          </Link>
          <Button
            variant="outline"
            onClick={handleLogout}
            className="border border-blue-500 text-blue-400 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300"
          >
            Logout
          </Button>
        </>
      ) : (
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            onClick={() => setIsLoginModalOpen(true)}
            className="border border-blue-500 text-blue-400 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300"
          >
            Login
          </Button>
          <Button
            onClick={() => setIsSignupModalOpen(true)}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
          >
            Sign Up
          </Button>
        </div>
      )}
    </div>
  </div>
</nav>


      <Modal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)}>
        <LoginForm onSuccess={() => setIsLoginModalOpen(false)} />
      </Modal>

      <Modal isOpen={isSignupModalOpen} onClose={() => setIsSignupModalOpen(false)}>
        <SignupForm onSuccess={() => setIsSignupModalOpen(false)} />
      </Modal>
    </>
  )
}