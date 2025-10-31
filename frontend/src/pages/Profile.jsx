import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { SongCard } from '../components/cards/SongCard'
import { Button } from '../components/common/Button'

const Profile = () => {
  const { user } = useAuth()

  // Mock user data
  const userData = {
    username: "music_lover",
    email: "user@example.com",
    avatar: "/api/placeholder/100/100",
    joinDate: "2024-01-15",
    bio: "Passionate singer and music enthusiast. Love exploring different genres and improving my skills!",
    stats: {
      totalSongs: 47,
      streak: 7,
      accuracy: 82,
      rank: 156,
      points: 8900
    },
    recentSongs: [
      {
        id: 1,
        title: "Dance Monkey",
        artist: "Tones and I",
        thumbnail: "/api/placeholder/200/200",
        duration: "3:29",
        isKaraoke: true,
        accuracy: 85,
        date: "2024-01-20"
      },
      {
        id: 2,
        title: "Blinding Lights",
        artist: "The Weeknd",
        thumbnail: "/api/placeholder/200/200",
        duration: "3:20",
        isKaraoke: true,
        accuracy: 78,
        date: "2024-01-19"
      },
      {
        id: 3,
        title: "Shape of You",
        artist: "Ed Sheeran",
        thumbnail: "/api/placeholder/200/200",
        duration: "3:53",
        isKaraoke: true,
        accuracy: 91,
        date: "2024-01-18"
      },
    ]
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Profile Header */}
      <div className="bg-dark-300 rounded-lg p-8">
        <div className="flex items-start space-x-6">
          <img
            src={userData.avatar}
            alt={userData.username}
            className="w-24 h-24 rounded-full object-cover"
          />
          
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold">{userData.username}</h1>
                <p className="text-gray-400 mt-1">{userData.email}</p>
                <p className="text-gray-300 mt-3 max-w-2xl">{userData.bio}</p>
              </div>
              
              <Button variant="outline">Edit Profile</Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
              <div className="text-center p-3 bg-dark-200 rounded-lg">
                <div className="text-2xl font-bold text-primary-500">{userData.stats.totalSongs}</div>
                <div className="text-sm text-gray-400">Songs</div>
              </div>
              <div className="text-center p-3 bg-dark-200 rounded-lg">
                <div className="text-2xl font-bold text-green-500">🔥 {userData.stats.streak}</div>
                <div className="text-sm text-gray-400">Day Streak</div>
              </div>
              <div className="text-center p-3 bg-dark-200 rounded-lg">
                <div className="text-2xl font-bold text-yellow-500">{userData.stats.accuracy}%</div>
                <div className="text-sm text-gray-400">Accuracy</div>
              </div>
              <div className="text-center p-3 bg-dark-200 rounded-lg">
                <div className="text-2xl font-bold text-purple-500">#{userData.stats.rank}</div>
                <div className="text-sm text-gray-400">Rank</div>
              </div>
              <div className="text-center p-3 bg-dark-200 rounded-lg">
                <div className="text-2xl font-bold text-blue-500">{userData.stats.points}</div>
                <div className="text-sm text-gray-400">Points</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userData.recentSongs.map(song => (
            <div key={song.id} className="relative">
              <SongCard song={song} />
              <div className="absolute top-3 right-3 bg-dark-100/90 px-2 py-1 rounded text-sm">
                {song.accuracy}%
              </div>
            </div>
          ))}
        </div>

        {userData.recentSongs.length === 0 && (
          <div className="text-center py-12 bg-dark-300 rounded-lg">
            <div className="text-6xl mb-4">🎵</div>
            <h3 className="text-xl font-semibold mb-2">No activity yet</h3>
            <p className="text-gray-400 mb-4">Start singing to see your activity here</p>
            <Button>Explore Songs</Button>
          </div>
        )}
      </div>

      {/* Achievements */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-dark-300 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">🎤</div>
            <h4 className="font-semibold">First Song</h4>
            <p className="text-sm text-gray-400">Sing your first song</p>
          </div>
          <div className="bg-dark-300 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">🔥</div>
            <h4 className="font-semibold">7 Day Streak</h4>
            <p className="text-sm text-gray-400">Sing for 7 consecutive days</p>
          </div>
          <div className="bg-dark-300 rounded-lg p-4 text-center opacity-50">
            <div className="text-3xl mb-2">🏆</div>
            <h4 className="font-semibold">Top 100</h4>
            <p className="text-sm text-gray-400">Reach top 100 in leaderboard</p>
          </div>
          <div className="bg-dark-300 rounded-lg p-4 text-center opacity-50">
            <div className="text-3xl mb-2">⭐</div>
            <h4 className="font-semibold">Perfect Score</h4>
            <p className="text-sm text-gray-400">Get 100% accuracy on any song</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile