import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { SongCard } from "../components/cards/SongCard";
import { LeaderboardCard } from "../components/widgets/LeaderboardCard";
import { Button } from "../components/common/Button";
import Avatar1 from '../assets/Avatar1.png';
import Avatar2 from '../assets/Avatar2.png';
import Avatar3 from '../assets/Avatar3.png';

const Home = () => {
  const { isAuthenticated } = useAuth();

  // Featured songs with real images
  const featuredSongs = [
    {
      id: 1,
      title: "Bohemian Rhapsody",
      artist: "Queen",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/9/9f/Bohemian_Rhapsody.png",
      duration: "5:55",
      isKaraoke: true,
    },
    {
      id: 2,
      title: "Dance Monkey",
      artist: "Tones and I",
      thumbnail:
         "https://lh5.googleusercontent.com/proxy/gGJGEhMf0CxnB7UuJXtf_TO2aCMYazw-bMrh0ei5z4PQ-qjMLsVDJjT-o97NnPNGKPHMhZWOGWmiKr6EQGp4C6mQxeh48umnvB6r9b5V",
      duration: "3:29",
      isKaraoke: true,
    },
    {
      id: 3,
      title: "Blinding Lights",
      artist: "The Weeknd",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png",
      duration: "3:20",
      isKaraoke: true,
    },
  ];

  const topUsers = [
    {
      id: 1,
      username: "singing_pro",
      avatar: {Avatar1},
      points: 12500,
      streak: 42,
      accuracy: 94,
    },
    {
      id: 2,
      username: "karaoke_queen",
      avatar: {Avatar2},
      points: 11800,
      streak: 35,
      accuracy: 92,
    },
    {
      id: 3,
      username: "music_lover",
      avatar: {Avatar3},
      points: 11200,
      streak: 28,
      accuracy: 89,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b002b] via-[#1b003d] to-[#0b002b] text-white px-6 py-12 space-y-16">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
          Welcome to Rhythm
        </h1>
        <p className="text-xl text-gray-300 mb-10 leading-relaxed">
          Step into the world of music and karaoke — where singing meets social
          connection. Stream, perform, and learn like never before.
        </p>

        <div className="flex items-center justify-center space-x-6">
          {!isAuthenticated ? (
            <>
              <Link to="/explore">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  Explore Music
                </Button>
              </Link>
              <Link to="/lessons">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white transition-all"
                >
                  Start Learning
                </Button>
              </Link>
            </>
          ) : (
            <Link to="/karaoke/lobby">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-xl hover:scale-105 transition-transform duration-300"
              >
                Start Karaoke Session
              </Button>
            </Link>
          )}
        </div>
      </section>

      {/* Featured Songs */}
      <section className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Featured Songs
          </h2>
          <Link
            to="/explore"
            className="text-pink-400 hover:text-pink-300 transition-colors"
          >
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredSongs.map((song) => (
            <div
              key={song.id}
              className="bg-[#1a0033] rounded-xl shadow-md hover:shadow-pink-500/20 p-4 transition-all hover:scale-105"
            >
              <SongCard song={song} />
            </div>
          ))}
        </div>
      </section>

      {/* Stats & Leaderboard */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Quick Stats */}
        <div className="lg:col-span-2 bg-[#15002a] rounded-2xl p-8 shadow-lg hover:shadow-purple-500/20 transition-all">
          <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Why Choose Rhythm?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">🎤</div>
              <h4 className="font-semibold mb-2 text-pink-400">Live Karaoke</h4>
              <p className="text-gray-400 text-sm">
                Sing with friends in real-time sessions.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🏆</div>
              <h4 className="font-semibold mb-2 text-purple-400">
                Compete & Win
              </h4>
              <p className="text-gray-400 text-sm">
                Climb leaderboards and earn rewards.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎓</div>
              <h4 className="font-semibold mb-2 text-indigo-400">
                Learn from Pros
              </h4>
              <p className="text-gray-400 text-sm">
                Professional singing lessons from experts.
              </p>
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <LeaderboardCard users={topUsers} timeframe="weekly" />
      </div>
    </div>
  );
};

export default Home;
