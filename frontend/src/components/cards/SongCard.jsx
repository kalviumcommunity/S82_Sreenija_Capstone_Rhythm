import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentSong, addToQueue } from '../../features/player/playerSlice'
import { Button } from '../common/Button'

export const SongCard = ({ song, showActions = true }) => {
  const dispatch = useDispatch()

  const handlePlay = () => {
    dispatch(setCurrentSong(song))
  }

  const handleAddToQueue = () => {
    dispatch(addToQueue(song))
  }

  return (
    <div className="bg-dark-300 rounded-lg p-4 hover:bg-dark-200 transition-colors group">
      <div className="relative">
        <img
          src={song.thumbnail}
          alt={song.title}
          className="w-full aspect-square object-cover rounded-lg mb-3"
        />
        
        {showActions && (
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2 rounded-lg">
            <Button onClick={handlePlay} className="w-12 h-12 rounded-full">
              ▶
            </Button>
            <Button variant="outline" onClick={handleAddToQueue}>
              +
            </Button>
          </div>
        )}
      </div>

      <div>
        <h3 className="font-semibold truncate">{song.title}</h3>
        <p className="text-sm text-gray-400 truncate">{song.artist}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-gray-500">{song.duration}</span>
          {song.isKaraoke && (
            <span className="text-xs bg-primary-500 px-2 py-1 rounded">Karaoke</span>
          )}
        </div>
      </div>
    </div>
  )
}