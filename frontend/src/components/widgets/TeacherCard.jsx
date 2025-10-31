import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../common/Button'

export const TeacherCard = ({ teacher }) => {
  return (
    <div className="bg-dark-300 rounded-lg p-6 hover:bg-dark-200 transition-colors">
      <div className="flex items-start space-x-4">
        <img
          src={teacher.avatar}
          alt={teacher.name}
          className="w-20 h-20 rounded-full object-cover"
        />
        
        <div className="flex-1 min-w-0">
          <Link to={`/teacher/${teacher.id}`}>
            <h3 className="text-xl font-semibold hover:text-primary-500 transition-colors">
              {teacher.name}
            </h3>
          </Link>
          
          <p className="text-primary-400 mb-2">{teacher.specialty}</p>
          <p className="text-gray-400 text-sm mb-3 line-clamp-2">
            {teacher.bio}
          </p>
          
          <div className="flex items-center space-x-4 text-sm mb-3">
            <div className="flex items-center space-x-1">
              <span>⭐</span>
              <span>{teacher.rating}</span>
              <span className="text-gray-400">({teacher.reviews} reviews)</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>🎓</span>
              <span>{teacher.students} students</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-primary-500">${teacher.price}</span>
              <span className="text-gray-400 text-sm">/lesson</span>
            </div>
            
            <Link to={`/teacher/${teacher.id}`}>
              <Button variant="primary" size="sm">
                View Profile
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}