import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getArticleById } from '../data/journal'

export default function JournalDetail() {
  const { id } = useParams()
  const [isLoaded, setIsLoaded] = useState(false)
  
  const article = getArticleById(id)

  useEffect(() => {
    setIsLoaded(true)
    return () => setIsLoaded(false)
  }, [id])

  if (!article) {
    return (
      <div className="pt-32 px-6 md:px-12 min-h-screen">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-2xl mb-4">文章未找到</h1>
          <Link to="/journal" className="text-sage hover:underline">返回随笔</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-24">
      {/* Header */}
      <header className={`px-6 md:px-12 py-16 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-3xl mx-auto">
          <Link 
            to="/journal"
            className="inline-flex items-center gap-2 text-sm text-light-gray hover:text-sage transition-colors mb-12"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span>返回随笔</span>
          </Link>

          <div className="mb-6">
            <span className="text-xs px-3 py-1 bg-sage/10 text-sage-dark rounded-sm">
              {article.category}
            </span>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl leading-relaxed">
            {article.title}
          </h1>

          <div className="mt-6 flex items-center gap-4 text-sm text-light-gray">
            <span>{article.date}</span>
            <span className="w-1 h-1 bg-light-gray rounded-full" />
            <div className="flex gap-2">
              {article.tags.map(tag => (
                <span key={tag}>#{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="h-px bg-gradient-to-r from-sage/20 via-sage/10 to-transparent mb-12" />
          
          <article className="prose prose-lg">
            {article.content.trim().split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 leading-relaxed text-warm-gray">
                {paragraph.trim()}
              </p>
            ))}
          </article>

          <div className="h-px bg-gradient-to-r from-transparent via-sage/10 to-sage/20 mt-12 mb-12" />
        </div>
      </section>

      {/* Navigation */}
      <section className="px-6 md:px-12 py-12">
        <div className="max-w-3xl mx-auto">
          <Link 
            to="/journal"
            className="inline-flex items-center gap-2 text-sm hover:text-sage transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" dName="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span>返回随笔</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
