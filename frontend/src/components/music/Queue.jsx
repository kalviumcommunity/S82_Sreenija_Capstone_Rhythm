import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentSong } from '../../features/player/playerSlice'
import { SongCard } from '../cards/SongCard'

const Queue = () => {
  const dispatch = useDispatch()
  const { queue, currentIndex } = useSelector(state => state.player)

  const handleSongSelect = (index) => {
    dispatch(setCurrentSong(queue[index]))
  }

  if (queue.length === 0) {
    return (
      <div className="bg-dark-300 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Queue</h3>
        <p className="text-gray-400 text-center">No songs in queue</p>
      </div>
    )
  }

  return (
    <div className="bg-dark-300 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Queue</h3>
      <div className="space-y-2">
        {queue.map((song, index) => (
          <div
            key={`${song.id}-${index}`}
            className={`p-3 rounded-lg cursor-pointer transition-colors ${
              index === currentIndex
                ? 'bg-primary-500'
                : 'hover:bg-dark-200'
            }`}
            onClick={() => handleSongSelect(index)}
          >
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-400 w-6">{index + 1}</span>
              <img
                src={song.thumbnail}
                alt={song.title}
                className="w-10 h-10 rounded"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-medium truncate">{song.title}</h4>
                <p className="text-sm text-gray-400 truncate">{song.artist}</p>
              </div>
              <span className="text-sm text-gray-400">{song.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Queue