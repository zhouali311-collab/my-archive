import { Link } from 'react-router-dom'

export default function ExhibitionCard({ exhibition, index = 0 }) {
  return (
    <Link 
      to={`/exhibitions/${exhibition.id}`}
      className="group block opacity-0 animate-slide-up card-hover"
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
    >
      {/* Image/Color block */}
      <div className={`relative aspect-[4/3] rounded-sm overflow-hidden bg-gradient-to-br ${exhibition.coverColor} mb-4`}>
        {/* Placeholder for actual images */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border border-white/30 rounded-sm rotate-45" />
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-sage/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Index number */}
        <span className="absolute top-4 left-4 text-xs opacity-40 font-serif">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-2">
        <div className="flex items-baseline justify-between">
          <h3 className="font-serif text-lg group-hover:text-sage transition-colors">
            {exhibition.title}
          </h3>
          <span className="text-xs opacity-40">{exhibition.date}</span>
        </div>
        <p className="text-xs opacity-60">{exhibition.subtitle}</p>
        <p className="text-sm text-light-gray line-clamp-2">{exhibition.description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {exhibition.works.slice(0, 3).map((work, i) => (
            <span 
              key={work.id}
              className="text-xs px-2 py-1 bg-cream-dark/50 rounded-sm"
            >
              {work.medium}
            </span>
          ))}
        </div>
      </div>

      {/* View button */}
      <div className="mt-4 flex items-center gap-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
        <span>进入展览</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </Link>
  )
}
