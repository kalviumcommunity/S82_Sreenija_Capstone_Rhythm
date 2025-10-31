import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { togglePlay, setCurrentTime, setVolume, nextSong, prevSong } from '../../features/player/playerSlice'
import { Button } from '../common/Button'

const MusicPlayer = () => {
  const dispatch = useDispatch()
  const { currentSong, isPlaying, currentTime, duration, volume, queue, currentIndex } = useSelector(state => state.player)

  if (!currentSong) {
    return null
  }

  const handlePlayPause = () => {
    dispatch(togglePlay())
  }

  const handleNext = () => {
    dispatch(nextSong())
  }

  const handlePrevious = () => {
    dispatch(prevSong())
  }

  const handleTimeUpdate = (e) => {
    dispatch(setCurrentTime(parseFloat(e.target.value)))
  }

  const handleVolumeChange = (e) => {
    dispatch(setVolume(parseFloat(e.target.value)))
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-dark-100 border-t border-dark-300 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Song Info */}
        <div className="flex items-center space-x-4 w-1/4">
          <img 
            src={currentSong.thumbnail} 
            alt={currentSong.title}
            className="w-12 h-12 rounded"
          />
          <div>
            <h4 className="font-semibold">{currentSong.title}</h4>
            <p className="text-sm text-gray-400">{currentSong.artist}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center space-y-2 w-2/4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={handlePrevious} disabled={currentIndex === 0}>
              ⏮
            </Button>
            <Button variant="primary" onClick={handlePlayPause} className="w-12 h-12 rounded-full">
              {isPlaying ? '⏸' : '▶'}
            </Button>
            <Button variant="ghost" onClick={handleNext} disabled={currentIndex === queue.length - 1}>
              ⏭
            </Button>
          </div>
          
          <div className="flex items-center space-x-2 w-full">
            <span className="text-sm text-gray-400">{formatTime(currentTime)}</span>
            <input
              type="range"
              min="0"
              max={duration || 100}
              value={currentTime}
              onChange={handleTimeUpdate}
              className="flex-1"
            />
            <span className="text-sm text-gray-400">{formatTime(duration)}</span>
          </div>
        </div>

        {/* Volume */}
        <div className="flex items-center space-x-2 w-1/4 justify-end">
          <span>🔊</span>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            className="w-24"
          />
        </div>
      </div>
    </div>
  )
}

export default MusicPlayer