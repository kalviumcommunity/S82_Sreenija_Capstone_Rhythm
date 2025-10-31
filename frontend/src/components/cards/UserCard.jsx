import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../common/Button'

export const UserCard = ({ user, showFollowButton = true }) => {
  return (
    <div className="bg-dark-300 rounded-lg p-4 hover:bg-dark-200 transition-colors">
      <div className="flex items-center space-x-4">
        <img
          src={user.avatar}
          alt={user.username}
          className="w-16 h-16 rounded-full object-cover"
        />
        
        <div className="flex-1 min-w-0">
          <Link to={`/profile/${user.id}`}>
            <h3 className="font-semibold hover:text-primary-500 transition-colors">
              {user.username}
            </h3>
          </Link>
          <p className="text-sm text-gray-400 truncate">{user.bio || 'Music enthusiast'}</p>
          
          <div className="flex items-center space-x-4 mt-2 text-sm">
            <span>🎤 {user.songsCount} songs</span>
            <span>🔥 {user.streak} day streak</span>
            <span>⭐ {user.rating}/5</span>
          </div>
        </div>

        {showFollowButton && (
          <Button variant="outline" size="sm">
            {user.isFollowing ? 'Following' : 'Follow'}
          </Button>
        )}
      </div>
    </div>
  )
}