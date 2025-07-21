import React from 'react'
import { Link } from '@tanstack/react-router'

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-gray-900">
            Welcome
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            to="/signin"
            className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </nav>
      </div>
    </header>
  )
}
