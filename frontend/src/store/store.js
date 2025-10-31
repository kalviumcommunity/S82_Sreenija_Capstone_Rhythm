import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import playerReducer from '../features/player/playerSlice'
import leaderboardReducer from '../features/social/leaderboardSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    player: playerReducer,
    leaderboard: leaderboardReducer,
  },
})