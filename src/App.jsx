import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Auth from './components/Auth'
import Dashboard from './components/dashboard'
import HobbyistProfileForm from './components/hobbyist-profile-form'
import RepairRequestForm from './components/repair-request-form'
import HobbyistProfileView from './components/hobbyist-profile-view'
import { auth } from './firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const handleSignOut = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-slate-50 to-green-50 flex items-center justify-center">
        <div className="text-slate-600">Loading...</div>
      </div>
    )
  }

  return (
    <Router>
      <Routes>
        {user ? (
          <>
            <Route path="/dashboard" element={<Dashboard user={user} onSignOut={handleSignOut} />} />
            <Route path="/profile" element={<HobbyistProfileForm user={user} />} />
            <Route path="/repair-request" element={<RepairRequestForm user={user} />} />
            <Route path="/hobbyist/:id" element={<HobbyistProfileView user={user} />} />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          </>
        ) : (
          <>
            <Route path="/auth" element={<Auth />} />
            <Route path="*" element={<Navigate to="/auth" replace />} />
          </>
        )}
      </Routes>
    </Router>
  )
}

export default App
