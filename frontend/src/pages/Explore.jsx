import React, { useState } from 'react'
import { SongCard } from '../components/cards/SongCard'
import { Button } from '../components/common/Button'

const Explore = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'all', name: 'All Songs' },
    { id: 'pop', name: 'Pop' },
    { id: 'rock', name: 'Rock' },
    { id: 'hiphop', name: 'Hip Hop' },
    { id: 'rb', name: 'R&B' },
    { id: 'karaoke', name: 'Karaoke Ready' },
  ]

  // Mock data
  const songs = [
    {
      id: 1,
      title: "Bohemian Rhapsody",
      artist: "Queen",
      thumbnail: "/api/placeholder/200/200",
      duration: "5:55",
      isKaraoke: true,
      genre: "rock"
    },
    {
      id: 2,
      title: "Dance Monkey",
      artist: "Tones and I",
      thumbnail: "/api/placeholder/200/200",
      duration: "3:29",
      isKaraoke: true,
      genre: "pop"
    },
    {
      id: 3,
      title: "Blinding Lights",
      artist: "The Weeknd",
      thumbnail: "/api/placeholder/200/200",
      duration: "3:20",
      isKaraoke: true,
      genre: "pop"
    },
    {
      id: 4,
      title: "Shape of You",
      artist: "Ed Sheeran",
      thumbnail: "/api/placeholder/200/200",
      duration: "3:53",
      isKaraoke: true,
      genre: "pop"
    },
    {
      id: 5,
      title: "Sweet Child O' Mine",
      artist: "Guns N' Roses",
      thumbnail: "/api/placeholder/200/200",
      duration: "5:56",
      isKaraoke: true,
      genre: "rock"
    },
    {
      id: 6,
      title: "God's Plan",
      artist: "Drake",
      thumbnail: "/api/placeholder/200/200",
      duration: "3:18",
      isKaraoke: false,
      genre: "hiphop"
    },
  ]

  const filteredSongs = songs.filter(song => {
    const matchesCategory = activeCategory === 'all' || 
      (activeCategory === 'karaoke' ? song.isKaraoke : song.genre === activeCategory)
    
    const matchesSearch = song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesCategory && matchesSearch
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Explore Music</h1>
        
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search songs or artists..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 bg-dark-300 border border-dark-200 rounded-lg focus:outline-none focus:border-primary-500 w-64"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {categories.map(category => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? 'primary' : 'outline'}
            onClick={() => setActiveCategory(category.id)}
            className="whitespace-nowrap"
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Songs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredSongs.map(song => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>

      {filteredSongs.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🎵</div>
          <h3 className="text-xl font-semibold mb-2">No songs found</h3>
          <p className="text-gray-400">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  )
}

export default Explore