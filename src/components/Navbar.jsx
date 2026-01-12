import { useState, useRef, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { User, LogOut, Moon, Sun, Settings, ChevronDown } from 'lucide-react'
import Logo from './Logo'

const Navbar = ({ userData, onLogout, isDarkMode, toggleTheme }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  const handleLogout = () => {
    setIsMenuOpen(false)
    if (onLogout) {
      onLogout()
    }
    localStorage.removeItem('synergyUserData')
    navigate('/')
  }

  // No mostrar navbar en onboarding
  if (location.pathname === '/') {
    return null
  }

  const menuItems = [
    {
      icon: User,
      label: 'Mi Perfil',
      action: () => {
        setIsMenuOpen(false)
        // Aquí se puede navegar a una página de perfil en el futuro
        alert('Próximamente: Página de perfil')
      },
    },
    {
      icon: Settings,
      label: 'Configuración',
      action: () => {
        setIsMenuOpen(false)
        // Aquí se puede navegar a configuración en el futuro
        alert('Próximamente: Configuración')
      },
    },
    {
      icon: isDarkMode ? Sun : Moon,
      label: isDarkMode ? 'Modo Claro' : 'Modo Oscuro',
      action: () => {
        toggleTheme()
        setIsMenuOpen(false)
      },
      divider: true,
    },
    {
      icon: LogOut,
      label: 'Cerrar Sesión',
      action: handleLogout,
      danger: true,
    },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-md mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300"
          >
            <Logo size="default" showText={true} />
          </button>

          {/* User Menu */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              aria-label="Menú de usuario"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm shadow-lg">
                {userData?.fitnessLevel?.charAt(0) || 'U'}
              </div>
              <ChevronDown
                className={`w-4 h-4 text-gray-600 dark:text-gray-400 transition-transform duration-300 ${
                  isMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Menú Desplegable */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-slide-down">
                {/* Header del Menú */}
                <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold shadow-lg">
                      {userData?.fitnessLevel?.charAt(0) || 'U'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                        {userData?.fitnessLevel || 'Usuario'}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                        {userData?.goalType || 'Objetivo personalizado'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Items del Menú */}
                <div className="py-2">
                  {menuItems.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={index}>
                        {item.divider && (
                          <div className="my-2 border-t border-gray-200 dark:border-gray-700" />
                        )}
                        <button
                          onClick={item.action}
                          className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${
                            item.danger
                              ? 'text-red-600 dark:text-red-400'
                              : 'text-gray-700 dark:text-gray-300'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="text-sm font-medium">{item.label}</span>
                        </button>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
