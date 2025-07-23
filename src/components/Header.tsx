import React from 'react'
import { Link } from '@tanstack/react-router'
import { useUser } from '@/features/user/state'
// import { useAuth } from '../contexts/AuthContext';

export const Header: React.FC = () => {
  const { user, isAuthenticated, signOut } = useUser();

  const handleSignOut = async () => {
    try {
      await signOut();
      // Navigation will be handled by route protection
    } catch (error) {
      console.error('Sign out failed:', error)
    }
  }

  if (!user || !isAuthenticated) {
    return 'Not authenticated'
  }

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <Link to="/dashboard" className="text-xl font-bold text-gray-900">
            Dashboard
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <img
              src={
                user.avatar ||
                `https://github.com/shadcn.png`
              }
              alt={user.name}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm font-medium text-gray-700">
              {user.name}
            </span>
          </div>
          <button
            onClick={handleSignOut}
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Sign Out
          </button>
        </div>
      </nav>
      </div>
    </header>
  )
}
