import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLeaderboard, setTimeframe } from '../features/social/leaderboardSlice'
import { Button } from '../components/common/Button'
import Avatar1 from '../assets/Avatar1.png';
import Avatar2 from '../assets/Avatar2.png';
import Avatar3 from '../assets/Avatar3.png';

const Leaderboard = () => {
  const dispatch = useDispatch()
  const { users, loading, error, timeframe } = useSelector(state => state.leaderboard)
  const [activeCategory, setActiveCategory] = useState('overall')

  useEffect(() => {
    dispatch(fetchLeaderboard(timeframe))
  }, [dispatch, timeframe])

  const timeframes = [
    { id: 'daily', name: 'Daily' },
    { id: 'weekly', name: 'Weekly' },
    { id: 'monthly', name: 'Monthly' },
    { id: 'alltime', name: 'All Time' },
  ]

  const categories = [
    { id: 'overall', name: 'Overall' },
    { id: 'accuracy', name: 'Accuracy' },
    { id: 'streak', name: 'Streak' },
    { id: 'songs', name: 'Songs Sung' },
  ]

  const getRankColor = (rank) => {
    switch (rank) {
      case 1: return 'from-yellow-400 to-yellow-600'
      case 2: return 'from-gray-400 to-gray-600'
      case 3: return 'from-orange-400 to-orange-600'
      default: return 'from-dark-200 to-dark-300'
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

  // Mock data for demonstration
  const mockUsers = [
    {
      id: 1,
      username: "singing_pro",
      avatar: {Avatar1},
      points: 12500,
      streak: 42,
      accuracy: 94,
      songsCount: 156,
      rank: 1
    },
    {
      id: 2,
      username: "karaoke_queen",
      avatar: {Avatar2},
      points: 11800,
      streak: 35,
      accuracy: 92,
      songsCount: 142,
      rank: 2
    },
    {
      id: 3,
      username: "music_lover",
      avatar: {Avatar3},
      points: 11200,
      streak: 28,
      accuracy: 89,
      songsCount: 138,
      rank: 3
    },
    // Add more mock users...
  ]

  const displayUsers = users.length > 0 ? users : mockUsers

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Leaderboard</h1>
        <p className="text-gray-400">Compete with singers from around the world</p>
      </div>

      {/* Timeframe Selector */}
      <div className="flex justify-center space-x-2">
        {timeframes.map(tf => (
          <Button
            key={tf.id}
            variant={timeframe === tf.id ? 'primary' : 'outline'}
            onClick={() => dispatch(setTimeframe(tf.id))}
          >
            {tf.name}
          </Button>
        ))}
      </div>

      {/* Category Selector */}
      <div className="flex justify-center space-x-2">
        {categories.map(category => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? 'primary' : 'outline'}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Leaderboard */}
      <div className="bg-dark-300 rounded-lg overflow-hidden">
        {loading ? (
          <div className="p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
            <p className="mt-4 text-gray-400">Loading leaderboard...</p>
          </div>
        ) : error ? (
          <div className="p-8 text-center text-red-500">
            Error loading leaderboard: {error}
          </div>
        ) : (
          <div className="divide-y divide-dark-200">
            {displayUsers.map((user, index) => (
              <div
                key={user.id}
                className={`flex items-center space-x-4 p-6 ${
                  index < 3 ? 'bg-gradient-to-r ' + getRankColor(index + 1) : ''
                }`}
              >
                {/* Rank */}
                <div className="w-12 text-center">
                  <span className={`text-lg font-bold ${
                    index < 3 ? 'text-white' : 'text-gray-300'
                  }`}>
                    {getRankIcon(index + 1)}
                  </span>
                </div>

                {/* Avatar */}
                <img
                  src={user.avatar}
                  alt={user.username}
                  className="w-12 h-12 rounded-full"
                />

                {/* User Info */}
                <div className="flex-1 min-w-0">
                  <h3 className={`font-semibold truncate ${
                    index < 3 ? 'text-white' : 'text-white'
                  }`}>
                    {user.username}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className={index < 3 ? 'text-white/80' : 'text-gray-400'}>
                      🔥 {user.streak} day streak
                    </span>
                    <span className={index < 3 ? 'text-white/80' : 'text-gray-400'}>
                      🎤 {user.songsCount} songs
                    </span>
                  </div>
                </div>

                {/* Stats */}
                <div className="text-right">
                  <div className={`text-xl font-bold ${
                    index < 3 ? 'text-white' : 'text-primary-500'
                  }`}>
                    {user.points.toLocaleString()}
                  </div>
                  <div className={`text-sm ${
                    index < 3 ? 'text-white/80' : 'text-gray-400'
                  }`}>
                    {user.accuracy}% accuracy
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* User's Rank (if authenticated) */}
      <div className="bg-primary-500/20 border border-primary-500 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold">Your Position</h3>
            <p className="text-gray-400">See how you rank against others</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary-500">#156</div>
            <div className="text-sm text-gray-400">8,900 points</div>
          </div>
        </div>
      </div>

      {/* How to Climb */}
      <div className="bg-dark-300 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">How to Climb the Leaderboard</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
              🔥
            </div>
            <div>
              <h4 className="font-semibold">Maintain Streaks</h4>
              <p className="text-sm text-gray-400">Sing daily to earn bonus points</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              ⭐
            </div>
            <div>
              <h4 className="font-semibold">Improve Accuracy</h4>
              <p className="text-sm text-gray-400">Higher accuracy = more points</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
              🎤
            </div>
            <div>
              <h4 className="font-semibold">Sing More Songs</h4>
              <p className="text-sm text-gray-400">Each song adds to your total</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
              👥
            </div>
            <div>
              <h4 className="font-semibold">Social Singing</h4>
              <p className="text-sm text-gray-400">Duets and groups earn extra</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard