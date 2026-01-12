import { Zap } from 'lucide-react'

const BrandBadge = ({ text = "SYNERGY", size = "default" }) => {
  const sizes = {
    small: "text-xs px-2 py-1",
    default: "text-sm px-3 py-1.5",
    large: "text-base px-4 py-2",
  }

  return (
    <div className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 dark:border-primary/20 ${sizes[size]}`}>
      <Zap className={`${size === 'small' ? 'w-3 h-3' : size === 'large' ? 'w-5 h-5' : 'w-4 h-4'} text-primary`} fill="#FF5733" />
      <span className="font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        {text}
      </span>
    </div>
  )
}

export default BrandBadge
