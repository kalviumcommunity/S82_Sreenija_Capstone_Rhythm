import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../api/axios'

export const fetchLeaderboard = createAsyncThunk(
  'leaderboard/fetch',
  async (timeframe = 'weekly', { rejectWithValue }) => {
    try {
      const response = await api.get(`/leaderboard?timeframe=${timeframe}`)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState: {
    users: [],
    loading: false,
    error: null,
    timeframe: 'weekly',
  },
  reducers: {
    setTimeframe: (state, action) => {
      state.timeframe = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeaderboard.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchLeaderboard.fulfilled, (state, action) => {
        state.loading = false
        state.users = action.payload
      })
      .addCase(fetchLeaderboard.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload?.message || 'Failed to fetch leaderboard'
      })
  },
})

export const { setTimeframe } = leaderboardSlice.actions
export default leaderboardSlice.reducer