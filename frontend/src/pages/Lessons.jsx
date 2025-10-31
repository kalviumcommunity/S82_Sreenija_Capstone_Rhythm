import React, { useState } from 'react'
import { TeacherCard } from '../components/widgets/TeacherCard'
import { Button } from '../components/common/Button'

const Lessons = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Teachers' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' },
    { id: 'classical', name: 'Classical' },
    { id: 'pop', name: 'Pop' },
    { id: 'jazz', name: 'Jazz' },
  ]

  // Mock teachers data
  const teachers = [
    {
      id: 1,
      name: "Sarah Johnson",
      specialty: "Vocal Coach & Opera Singer",
      avatar: "/api/placeholder/80/80",
      bio: "Professional vocal coach with 15 years of experience. Specialized in classical and pop vocals.",
      rating: 4.9,
      reviews: 127,
      students: 450,
      price: 75,
      categories: ['classical', 'pop', 'advanced']
    },
    {
      id: 2,
      name: "Mike Chen",
      specialty: "Contemporary Voice Specialist",
      avatar: "/api/placeholder/80/80",
      bio: "Helping singers find their unique voice with modern techniques and personalized training.",
      rating: 4.8,
      reviews: 89,
      students: 320,
      price: 60,
      categories: ['pop', 'jazz', 'beginner', 'intermediate']
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      specialty: "Breath Control Expert",
      avatar: "/api/placeholder/80/80",
      bio: "Focus on breath control and vocal health. Transform your singing with proper technique.",
      rating: 5.0,
      reviews: 64,
      students: 210,
      price: 85,
      categories: ['classical', 'advanced']
    },
    {
      id: 4,
      name: "David Kim",
      specialty: "Performance Coach",
      avatar: "/api/placeholder/80/80",
      bio: "From stage presence to microphone technique, master the art of performance.",
      rating: 4.7,
      reviews: 42,
      students: 180,
      price: 55,
      categories: ['pop', 'jazz', 'intermediate']
    },
  ]

  const filteredTeachers = teachers.filter(teacher =>
    activeCategory === 'all' || teacher.categories.includes(activeCategory)
  )

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Find Your Perfect Teacher</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Learn from professional singers and vocal coaches. Improve your skills with personalized lessons.
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map(category => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? 'primary' : 'outline'}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Teachers Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredTeachers.map(teacher => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </div>

      {filteredTeachers.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🎓</div>
          <h3 className="text-xl font-semibold mb-2">No teachers found</h3>
          <p className="text-gray-400">Try adjusting your filter criteria</p>
        </div>
      )}

      {/* How It Works */}
      <div className="bg-dark-300 rounded-lg p-8 mt-12">
        <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl mb-4">1</div>
            <h3 className="font-semibold mb-2">Find a Teacher</h3>
            <p className="text-gray-400">Browse profiles and find the perfect match for your goals</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-4">2</div>
            <h3 className="font-semibold mb-2">Book a Lesson</h3>
            <p className="text-gray-400">Schedule your first lesson at a time that works for you</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-4">3</div>
            <h3 className="font-semibold mb-2">Start Learning</h3>
            <p className="text-gray-400">Join your lesson online and begin your singing journey</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lessons