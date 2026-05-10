import { useEffect, useState } from 'react'
import { journalArticles, categories } from '../data/journal'
import JournalCard from '../components/JournalCard'

export default function Journal() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    return () => setIsLoaded(false)
  }, [])

  const filteredArticles = activeCategory === 'all' 
    ? journalArticles 
    : journalArticles.filter(a => a.category === activeCategory)

  return (
    <div className="pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className={`mb-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-sage" />
            <span className="text-xs tracking-widest opacity-60">Journal</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl mb-4">随笔</h1>
          <p className="text-lg text-light-gray max-w-2xl">
            记录我对校园、城市、运动、媒介与公共议题的观察。
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-4">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`text-sm px-4 py-2 rounded-sm transition-all ${
                activeCategory === category.id 
                  ? 'bg-sage text-white' 
                  : 'bg-cream-dark hover:bg-sage/20'
              }`}
            >
              {category.name}
              <span className="ml-2 text-xs opacity-60">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Articles List */}
        <div className="space-y-12">
          {filteredArticles.map((article, index) => (
            <JournalCard key={article.id} article={article} index={index} />
          ))}
        </div>

        {/* Empty state */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <p className="text-light-gray">暂无文章</p>
          </div>
        )}

        {/* Decorative line */}
        <div className="mt-24 flex items-center justify-center">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-sage/30" />
          <div className="px-8 py-4 text-xs opacity-40">笔触未停</div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-sage/30" />
        </div>
      </div>
    </div>
  )
}
