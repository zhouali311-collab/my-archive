import { useEffect, useState } from 'react'
import { works, workCategories } from '../data/works'
import WorkCard from '../components/WorkCard'

export default function Works() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    return () => setIsLoaded(false)
  }, [])

  const filteredWorks = activeCategory === 'all' 
    ? works 
    : works.filter(w => w.category === activeCategory)

  return (
    <div className="pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`mb-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-sage" />
            <span className="text-xs tracking-widest opacity-60">Works</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl mb-4">作品集</h1>
          <p className="text-lg text-light-gray max-w-2xl">
            设计、策划、写作、影像与项目。
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-4">
          {workCategories.map(category => (
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

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work, index) => (
            <WorkCard key={work.id} work={work} index={index} />
          ))}
        </div>

        {/* Empty state */}
        {filteredWorks.length === 0 && (
          <div className="text-center py-16">
            <p className="text-light-gray">暂无作品</p>
          </div>
        )}

        {/* Decorative line */}
        <div className="mt-24 flex items-center justify-center">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-sage/30" />
          <div className="px-8 py-4 text-xs opacity-40">持续创作中</div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-sage/30" />
        </div>
      </div>
    </div>
  )
}
