import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Sidebar } from './components/layout/Sidebar'
import ProtectedRoute from './routes/ProtectedRoute'
import Home from './pages/Home'
import Explore from './pages/Explore'
import SongPage from './pages/SongPage'
import KaraokeRoom from './pages/KaraokeRoom'
import Profile from './pages/Profile'
import TeacherProfile from './pages/TeacherProfile'
import Lessons from './pages/Lessons'
import Leaderboard from './pages/Leaderboard'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-100 to-dark-200 text-white">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/song/:id" element={<SongPage />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/teacher/:id" element={<TeacherProfile />} />
            <Route 
              path="/karaoke/:roomId" 
              element={
                <ProtectedRoute>
                  <KaraokeRoom />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App