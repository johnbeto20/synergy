import { Zap } from 'lucide-react'

const Logo = ({ size = 'default', showText = true }) => {
  const sizes = {
    small: 'w-6 h-6',
    default: 'w-8 h-8',
    large: 'w-12 h-12',
  }

  const textSizes = {
    small: 'text-lg',
    default: 'text-2xl',
    large: 'text-4xl',
  }

  return (
    <div className="flex items-center gap-2">
      <div className={`${sizes[size]} relative`}>
        {/* Logo con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary rounded-xl transform rotate-12 shadow-lg"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary rounded-xl transform -rotate-12 opacity-80"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Zap className={`${size === 'small' ? 'w-4 h-4' : size === 'large' ? 'w-7 h-7' : 'w-5 h-5'} text-white`} fill="white" />
        </div>
      </div>
      {showText && (
        <span className={`${textSizes[size]} font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent`}>
          SYNERGY
        </span>
      )}
    </div>
  )
}

export default Logo
