import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/common/Button'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-9xl font-bold text-primary-500 mb-4">404</div>
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-xl text-gray-400 mb-8 max-w-md">
          Oops! The page you're looking for seems to have hit a wrong note. 
          Let's get you back to the rhythm.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <Link to="/">
            <Button size="lg">Back to Home</Button>
          </Link>
          <Link to="/explore">
            <Button variant="outline" size="lg">Explore Music</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound