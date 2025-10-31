import { createSlice } from '@reduxjs/toolkit'

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    currentSong: null,
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    volume: 50,
    queue: [],
    currentIndex: 0,
    isKaraokeMode: false,
  },
  reducers: {
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload
      state.isPlaying = true
    },
    togglePlay: (state) => {
      state.isPlaying = !state.isPlaying
    },
    setCurrentTime: (state, action) => {
      state.currentTime = action.payload
    },
    setDuration: (state, action) => {
      state.duration = action.payload
    },
    setVolume: (state, action) => {
      state.volume = action.payload
    },
    addToQueue: (state, action) => {
      state.queue.push(action.payload)
    },
    clearQueue: (state) => {
      state.queue = []
    },
    nextSong: (state) => {
      if (state.currentIndex < state.queue.length - 1) {
        state.currentIndex += 1
        state.currentSong = state.queue[state.currentIndex]
      }
    },
    prevSong: (state) => {
      if (state.currentIndex > 0) {
        state.currentIndex -= 1
        state.currentSong = state.queue[state.currentIndex]
      }
    },
    setKaraokeMode: (state, action) => {
      state.isKaraokeMode = action.payload
    },
  },
})

export const {
  setCurrentSong,
  togglePlay,
  setCurrentTime,
  setDuration,
  setVolume,
  addToQueue,
  clearQueue,
  nextSong,
  prevSong,
  setKaraokeMode,
} = playerSlice.actions

export default playerSlice.reducer