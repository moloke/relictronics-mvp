import { useState } from 'react'
import './App.css'
import Auth from './components/Auth'

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100">
      {user ? (
        <div className="p-4">
          <h1 className="text-2xl">Welcome, {user.email}</h1>
          <button
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => setUser(null)}
          >
            Logout
          </button>
        </div>
      ) : (
        <Auth setUser={setUser} />
      )}
    </div>
  )
}

export default App
