import { Home, Dumbbell, UtensilsCrossed } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

const BottomNav = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { path: '/dashboard', icon: Home, label: 'Inicio' },
    { path: '/exercise', icon: Dumbbell, label: 'Ejercicio' },
    { path: '/nutrition', icon: UtensilsCrossed, label: 'Nutrición' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-2xl z-40">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path
          
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-all duration-300 ${
                isActive
                  ? 'text-primary scale-110'
                  : 'text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary'
              }`}
            >
              <Icon className={`w-6 h-6 ${isActive ? 'scale-110' : ''} transition-transform duration-300`} />
              <span className={`text-xs mt-1 font-medium ${isActive ? 'text-primary' : ''}`}>
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export default BottomNav
