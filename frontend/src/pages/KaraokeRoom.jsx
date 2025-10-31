import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCurrentSong, addToQueue } from '../features/player/playerSlice'
import { Button } from '../components/common/Button'

const SongPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  // Mock data - in real app, fetch from API
  const song = {
    id: 1,
    title: "Bohemian Rhapsody",
    artist: "Queen",
    thumbnail: "/api/placeholder/400/400",
    duration: "5:55",
    genre: "Rock",
    releaseYear: 1975,
    isKaraoke: true,
    lyrics: [
      "Is this the real life?",
      "Is this just fantasy?",
      "Caught in a landslide,",
      "No escape from reality",
      // ... more lyrics
    ]
  }

  const handlePlay = () => {
    dispatch(setCurrentSong(song))
  }

  const handleAddToQueue = () => {
    dispatch(addToQueue(song))
  }

  const handleStartKaraoke = () => {
    // Navigate to karaoke room
    window.location.href = `/karaoke/${id}`
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Song Header */}
      <div className="flex items-start space-x-8">
        <img
          src={song.thumbnail}
          alt={song.title}
          className="w-80 h-80 rounded-lg object-cover"
        />
        
        <div className="flex-1">
          <div className="mb-4">
            <span className="text-sm text-primary-500 font-medium">{song.genre}</span>
            <h1 className="text-4xl font-bold mt-2">{song.title}</h1>
            <h2 className="text-2xl text-gray-300 mt-1">{song.artist}</h2>
          </div>

          <div className="flex items-center space-x-4 text-sm text-gray-400 mb-6">
            <span>Released {song.releaseYear}</span>
            <span>•</span>
            <span>{song.duration}</span>
            {song.isKaraoke && (
              <>
                <span>•</span>
                <span className="text-primary-500">Karaoke Available</span>
              </>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <Button onClick={handlePlay} size="lg">
              ▶ Play Song
            </Button>
            <Button variant="outline" onClick={handleAddToQueue}>
              Add to Queue
            </Button>
            {song.isKaraoke && (
              <Button variant="primary" onClick={handleStartKaraoke}>
                🎤 Start Karaoke
              </Button>
            )}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="text-center p-4 bg-dark-300 rounded-lg">
              <div className="text-2xl font-bold text-primary-500">1,234</div>
              <div className="text-sm text-gray-400">Plays</div>
            </div>
            <div className="text-center p-4 bg-dark-300 rounded-lg">
              <div className="text-2xl font-bold text-green-500">85%</div>
              <div className="text-sm text-gray-400">Avg. Accuracy</div>
            </div>
            <div className="text-center p-4 bg-dark-300 rounded-lg">
              <div className="text-2xl font-bold text-yellow-500">4.8</div>
              <div className="text-sm text-gray-400">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Lyrics Section */}
      <div className="bg-dark-300 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Lyrics</h3>
        <div className="space-y-4">
          {song.lyrics.map((line, index) => (
            <p key={index} className="text-gray-300 leading-relaxed">
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Similar Songs */}
      <div>
        <h3 className="text-xl font-bold mb-4">Similar Songs</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Similar songs would be mapped here */}
          <div className="text-center py-8 text-gray-400">
            Similar songs will appear here
          </div>
        </div>
      </div>
    </div>
  )
}

export default SongPage