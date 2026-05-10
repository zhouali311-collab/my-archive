import { Link } from 'react-router-dom'

export default function WorkCard({ work, index = 0 }) {
  return (
    <Link 
      to={`/works`}
      className="group block opacity-0 animate-slide-up card-hover"
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
    >
      {/* Color block with gradient */}
      <div className={`relative aspect-square rounded-sm overflow-hidden bg-gradient-to-br ${work.coverColor} mb-4`}>
        {/* Decorative elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 border border-white/20 rounded-full" />
          <div className="absolute w-12 h-12 bg-white/10 rounded-sm rotate-12" />
        </div>

        {/* Year badge */}
        <span className="absolute top-4 right-4 text-xs px-2 py-1 bg-white/20 backdrop-blur-sm rounded-sm">
          {work.year}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h3 className="font-serif text-lg group-hover:text-sage transition-colors">
          {work.title}
        </h3>
        <p className="text-sm text-light-gray">{work.description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {work.tags.map((tag) => (
            <span 
              key={tag}
              className="text-xs px-2 py-1 bg-cream-dark/50 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Items count */}
      <div className="mt-4 text-xs opacity-60">
        {work.items.length} 个项目
      </div>
    </Link>
  )
}
