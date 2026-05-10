import { Link } from 'react-router-dom'

export default function JournalCard({ article, index = 0, variant = 'default' }) {
  const isFeatured = variant === 'featured'

  return (
    <Link 
      to={`/journal/${article.id}`}
      className={`group block opacity-0 animate-slide-up card-hover ${
        isFeatured ? 'bg-cream-dark/30 p-6 rounded-sm' : ''
      }`}
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
    >
      {/* Category & Date */}
      <div className="flex items-center gap-4 mb-3">
        <span className="text-xs px-2 py-1 bg-sage/10 text-sage-dark rounded-sm">
          {article.category}
        </span>
        <span className="text-xs opacity-40">{article.date}</span>
      </div>

      {/* Title */}
      <h3 className={`font-serif group-hover:text-sage transition-colors ${isFeatured ? 'text-xl' : 'text-lg'}`}>
        {article.title}
      </h3>

      {/* Excerpt */}
      <p className="mt-3 text-sm text-light-gray line-clamp-3">
        {article.excerpt}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {article.tags.map((tag) => (
          <span 
            key={tag}
            className="text-xs text-light-gray"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Read more */}
      <div className="mt-4 flex items-center gap-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
        <span>阅读更多</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </Link>
  )
}
