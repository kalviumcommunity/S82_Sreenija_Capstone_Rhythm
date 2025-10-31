import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '../components/common/Button'

const TeacherProfile = () => {
  const { id } = useParams()
  const [selectedTab, setSelectedTab] = useState('about')

  // Mock teacher data
  const teacher = {
    id: 1,
    name: "Sarah Johnson",
    specialty: "Vocal Coach & Opera Singer",
    avatar: "/api/placeholder/200/200",
    coverImage: "/api/placeholder/800/300",
    bio: "Professional vocal coach with 15 years of experience. Trained at Juilliard and performed in numerous opera productions worldwide. Specialized in classical, pop, and jazz vocals.",
    rating: 4.9,
    reviews: 127,
    students: 450,
    price: 75,
    experience: "15 years",
    education: "Juilliard School of Music",
    languages: ["English", "Italian", "French"],
    specialties: ["Classical", "Pop", "Jazz", "Breath Control", "Vocal Range"],
    availability: ["Mon", "Wed", "Fri"],
    videoUrl: "https://example.com/video",
  }

  const reviews = [
    {
      id: 1,
      student: "Michael Chen",
      rating: 5,
      date: "2024-01-15",
      comment: "Sarah transformed my singing completely! Her techniques are amazing.",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 2,
      student: "Emma Davis",
      rating: 5,
      date: "2024-01-10",
      comment: "Professional, patient, and incredibly knowledgeable. Highly recommended!",
      avatar: "/api/placeholder/40/40"
    },
  ]

  const handleBookLesson = () => {
    // Implement booking logic
    console.log('Book lesson with', teacher.name)
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Teacher Header */}
      <div className="bg-dark-300 rounded-lg overflow-hidden">
        {/* Cover Image */}
        <div 
          className="h-48 bg-gradient-to-r from-primary-500 to-purple-500"
          style={{
            backgroundImage: teacher.coverImage ? `url(${teacher.coverImage})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="p-8">
          <div className="flex items-start space-x-6">
            <img
              src={teacher.avatar}
              alt={teacher.name}
              className="w-32 h-32 rounded-full object-cover -mt-20 border-4 border-dark-300"
            />
            
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-3xl font-bold">{teacher.name}</h1>
                  <p className="text-primary-400 text-xl mt-1">{teacher.specialty}</p>
                  
                  <div className="flex items-center space-x-4 mt-3">
                    <div className="flex items-center space-x-1">
                      <span>⭐</span>
                      <span className="font-semibold">{teacher.rating}</span>
                      <span className="text-gray-400">({teacher.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>🎓</span>
                      <span className="text-gray-400">{teacher.students} students</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>💼</span>
                      <span className="text-gray-400">{teacher.experience} experience</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary-500">${teacher.price}</div>
                  <div className="text-gray-400">per lesson</div>
                  <Button onClick={handleBookLesson} className="mt-4">
                    Book Lesson
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-dark-300">
        <div className="flex space-x-8">
          {['about', 'reviews', 'lessons'].map(tab => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`pb-4 px-1 border-b-2 transition-colors ${
                selectedTab === tab
                  ? 'border-primary-500 text-primary-500'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {selectedTab === 'about' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4">About</h3>
                <p className="text-gray-300 leading-relaxed">{teacher.bio}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {teacher.specialties.map(specialty => (
                    <span
                      key={specialty}
                      className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <p className="text-gray-300">{teacher.education}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Languages</h3>
                <div className="flex space-x-2">
                  {teacher.languages.map(language => (
                    <span
                      key={language}
                      className="px-3 py-1 bg-dark-200 rounded-full text-sm"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'reviews' && (
            <div className="space-y-6">
              {reviews.map(review => (
                <div key={review.id} className="bg-dark-300 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={review.avatar}
                      alt={review.student}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{review.student}</h4>
                        <div className="flex items-center space-x-1">
                          <span>⭐</span>
                          <span>{review.rating}.0</span>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-2">{review.comment}</p>
                      <span className="text-sm text-gray-400">{review.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {selectedTab === 'lessons' && (
            <div className="bg-dark-300 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Available Lessons</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-dark-200 rounded-lg">
                  <div>
                    <h4 className="font-semibold">Beginner Vocal Training</h4>
                    <p className="text-gray-400">60 minutes • Foundation building</p>
                  </div>
                  <Button>Book Now</Button>
                </div>
                <div className="flex items-center justify-between p-4 bg-dark-200 rounded-lg">
                  <div>
                    <h4 className="font-semibold">Advanced Technique</h4>
                    <p className="text-gray-400">90 minutes • Professional training</p>
                  </div>
                  <Button>Book Now</Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Availability */}
          <div className="bg-dark-300 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Availability</h3>
            <div className="space-y-2">
              {teacher.availability.map(day => (
                <div key={day} className="flex items-center justify-between">
                  <span>{day}</span>
                  <span className="text-primary-500">9:00 AM - 6:00 PM</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="bg-dark-300 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Contact Teacher</h3>
            <Button variant="outline" className="w-full justify-center mb-3">
              Send Message
            </Button>
            <Button variant="outline" className="w-full justify-center">
              Schedule Call
            </Button>
          </div>

          {/* Video Preview */}
          {teacher.videoUrl && (
            <div className="bg-dark-300 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Teaching Style</h3>
              <div className="aspect-video bg-black rounded flex items-center justify-center">
                <span className="text-gray-400">Video Preview</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TeacherProfile