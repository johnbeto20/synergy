// Componente de ilustraciones SVG personalizadas para SYNERGY

export const FitnessIllustration = ({ className = "w-full h-64" }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Fondo con gradiente */}
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF5733" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#33BFFF" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#grad1)" rx="20" />
    
    {/* Silueta de persona haciendo ejercicio */}
    <circle cx="200" cy="80" r="25" fill="#FF5733" opacity="0.8" />
    <ellipse cx="200" cy="140" rx="40" ry="50" fill="#33BFFF" opacity="0.6" />
    
    {/* Pesas */}
    <rect x="120" y="180" width="20" height="60" rx="10" fill="#FF5733" />
    <rect x="120" y="170" width="60" height="20" rx="10" fill="#FF5733" />
    <rect x="260" y="180" width="20" height="60" rx="10" fill="#FF5733" />
    <rect x="240" y="170" width="60" height="20" rx="10" fill="#FF5733" />
    
    {/* Líneas de energía */}
    <path d="M150 50 Q200 30 250 50" stroke="#33BFFF" strokeWidth="3" fill="none" opacity="0.5" />
    <path d="M100 100 Q200 80 300 100" stroke="#FF5733" strokeWidth="3" fill="none" opacity="0.5" />
  </svg>
)

export const NutritionIllustration = ({ className = "w-full h-64" }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#33BFFF" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#FF5733" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#grad2)" rx="20" />
    
    {/* Plato */}
    <ellipse cx="200" cy="180" rx="100" ry="80" fill="#E5E7EB" opacity="0.3" />
    <ellipse cx="200" cy="180" rx="80" ry="60" fill="white" opacity="0.5" />
    
    {/* Comida */}
    <circle cx="170" cy="160" r="15" fill="#FF5733" opacity="0.8" />
    <circle cx="230" cy="160" r="15" fill="#33BFFF" opacity="0.8" />
    <rect x="185" y="190" width="30" height="20" rx="5" fill="#FFC300" opacity="0.8" />
    
    {/* Utensilios */}
    <rect x="120" y="100" width="4" height="60" rx="2" fill="#9CA3AF" />
    <rect x="276" y="100" width="4" height="60" rx="2" fill="#9CA3AF" />
  </svg>
)

export const ProgressIllustration = ({ className = "w-full h-64" }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF5733" stopOpacity="0.15" />
        <stop offset="50%" stopColor="#33BFFF" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#FF5733" stopOpacity="0.15" />
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#grad3)" rx="20" />
    
    {/* Gráfico de barras ascendente */}
    <rect x="80" y="200" width="40" height="60" rx="5" fill="#FF5733" opacity="0.8" />
    <rect x="140" y="180" width="40" height="80" rx="5" fill="#33BFFF" opacity="0.8" />
    <rect x="200" y="160" width="40" height="100" rx="5" fill="#FF5733" opacity="0.8" />
    <rect x="260" y="140" width="40" height="120" rx="5" fill="#33BFFF" opacity="0.8" />
    
    {/* Flecha ascendente */}
    <path d="M320 220 L340 200 L360 220 M340 200 L340 240" stroke="#FF5733" strokeWidth="4" fill="none" strokeLinecap="round" />
    
    {/* Estrellas de logro */}
    <path d="M100 100 L105 115 L120 115 L108 125 L113 140 L100 130 L87 140 L92 125 L80 115 L95 115 Z" fill="#FFC300" opacity="0.8" />
    <path d="M300 100 L305 115 L320 115 L308 125 L313 140 L300 130 L287 140 L292 125 L280 115 L295 115 Z" fill="#FFC300" opacity="0.8" />
  </svg>
)

export const EmptyStateIllustration = ({ className = "w-full h-48" }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E5E7EB" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#9CA3AF" stopOpacity="0.3" />
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#grad4)" rx="20" />
    
    {/* Icono de calendario */}
    <rect x="150" y="80" width="100" height="120" rx="10" fill="white" opacity="0.5" />
    <rect x="150" y="80" width="100" height="30" rx="10" fill="#FF5733" opacity="0.3" />
    <line x1="170" y1="130" x2="230" y2="130" stroke="#9CA3AF" strokeWidth="2" />
    <line x1="170" y1="160" x2="230" y2="160" stroke="#9CA3AF" strokeWidth="2" />
    <line x1="170" y1="190" x2="230" y2="190" stroke="#9CA3AF" strokeWidth="2" />
  </svg>
)
