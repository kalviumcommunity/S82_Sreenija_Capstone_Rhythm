import React, { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { Button } from '../common/Button'

const SignupForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const { register, loading, error, clearError } = useAuth()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    if (error) clearError()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      return
    }
    
    try {
      await register(formData)
      onSuccess()
    } catch (err) {
      // Error handled by Redux
    }
  }

  return (
    <div className="w-96">
      <h2 className="text-2xl font-bold mb-6 text-center">Join Rhythm</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-500 px-4 py-3 rounded">
            {error}
          </div>
        )}
        
        <div>
          <label className="block text-sm font-medium mb-2">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-dark-300 border border-dark-200 rounded-lg focus:outline-none focus:border-primary-500"
            placeholder="Choose a username"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-dark-300 border border-dark-200 rounded-lg focus:outline-none focus:border-primary-500"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-dark-300 border border-dark-200 rounded-lg focus:outline-none focus:border-primary-500"
            placeholder="Create a password"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-dark-300 border border-dark-200 rounded-lg focus:outline-none focus:border-primary-500"
            placeholder="Confirm your password"
          />
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Creating Account...' : 'Sign Up'}
        </Button>
      </form>
    </div>
  )
}

export default SignupForm