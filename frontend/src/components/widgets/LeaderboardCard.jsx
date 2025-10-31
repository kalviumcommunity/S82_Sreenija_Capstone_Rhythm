import React from 'react'
import { Link } from 'react-router-dom'

export const LeaderboardCard = ({ users, timeframe = 'weekly' }) => {
  const getRankColor = (rank) => {
    switch (rank) {
      case 1: return 'text-yellow-400'
      case 2: return 'text-gray-400'
      case 3: return 'text-orange-400'
      default: return 'text-gray-300'
    }
  }

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1: return '🥇'
      case 2: return '🥈'
      case 3: return '🥉'
      default: return rank
    }
  }

  return (
    <div className="bg-dark-300 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Top Singers - {timeframe}</h3>
        <Link to="/leaderboard" className="text-primary-500 hover:text-primary-400 text-sm">
          View All
        </Link>
      </div>

      <div className="space-y-3">
        {users.map((user, index) => (
          <div
            key={user.id}
            className="flex items-center space-x-4 p-3 rounded-lg hover:bg-dark-200 transition-colors"
          >
            <span className={`text-lg font-bold w-6 ${getRankColor(index + 1)}`}>
              {getRankIcon(index + 1)}
            </span>
            
            <img
              src={user.avatar}
              alt={user.username}
              className="w-10 h-10 rounded-full"
            />
            
            <div className="flex-1 min-w-0">
              <Link to={`/profile/${user.id}`}>
                <h4 className="font-medium hover:text-primary-500 transition-colors truncate">
                  {user.username}
                </h4>
              </Link>
              <p className="text-sm text-gray-400">{user.points} points</p>
            </div>

            <div className="text-right">
              <div className="font-semibold">🔥 {user.streak}</div>
              <div className="text-sm text-gray-400">{user.accuracy}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}