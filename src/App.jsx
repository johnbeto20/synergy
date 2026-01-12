import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Onboarding from './components/Onboarding'
import Dashboard from './components/Dashboard'
import Exercise from './components/Exercise'
import Nutrition from './components/Nutrition'
import BottomNav from './components/BottomNav'
import Navbar from './components/Navbar'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [userData, setUserData] = useState(null)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Cargar datos del usuario desde localStorage
    const savedData = localStorage.getItem('synergyUserData')
    if (savedData) {
      setUserData(JSON.parse(savedData))
    }

    // Cargar preferencia de tema
    const savedTheme = localStorage.getItem('synergyTheme')
    if (savedTheme === 'dark') {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const handleOnboardingComplete = (data) => {
    setUserData(data)
    localStorage.setItem('synergyUserData', JSON.stringify(data))
  }

  const handleLogout = () => {
    setUserData(null)
  }

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('synergyTheme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('synergyTheme', 'light')
    }
  }

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 pb-20 pt-0">
        {!userData && <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
        {userData && (
          <Navbar
            userData={userData}
            onLogout={handleLogout}
            isDarkMode={isDarkMode}
            toggleTheme={toggleTheme}
          />
        )}
        
        <Routes>
          <Route 
            path="/" 
            element={
              userData ? <Navigate to="/dashboard" replace /> : <Onboarding onComplete={handleOnboardingComplete} />
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              userData ? <Dashboard userData={userData} /> : <Navigate to="/" replace />
            } 
          />
          <Route 
            path="/exercise" 
            element={
              userData ? <Exercise userData={userData} /> : <Navigate to="/" replace />
            } 
          />
          <Route 
            path="/nutrition" 
            element={
              userData ? <Nutrition userData={userData} /> : <Navigate to="/" replace />
            } 
          />
        </Routes>

        {userData && <BottomNav />}
      </div>
    </Router>
  )
}

export default App
