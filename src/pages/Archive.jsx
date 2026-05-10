import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { exhibitions } from '../data/exhibitions'
import { journalArticles } from '../data/journal'
import { works } from '../data/works'

export default function Archive() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    setIsLoaded(true)
    return () => setIsLoaded(false)
  }, [])

  const allItems = [
    ...exhibitions.map(e => ({ ...e, type: 'exhibition' })),
    ...journalArticles.map(a => ({ ...a, type: 'journal' })),
    ...works.map(w => ({ ...w, type: 'work' }))
  ]

  const filteredItems = activeFilter === 'all' 
    ? allItems 
    : allItems.filter(item => item.type === activeFilter)

  const getTypeLabel = (type) => {
    switch(type) {
      case 'exhibition': return '展览'
      case 'journal': return '随笔'
      case 'work': return '作品'
      default: return ''
    }
  }

  const getTypeColor = (type) => {
    switch(type) {
      case 'exhibition': return 'bg-sage/10 text-sage-dark'
      case 'journal': return 'bg-soft-yellow/20 text-warm-gray'
      case 'work': return 'bg-soft-purple/20 text-warm-gray'
      default: return ''
    }
  }

  return (
    <div className="pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`mb-12 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-sage" />
            <span className="text-xs tracking-widest opacity-60">Archive</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl mb-4">档案库</h1>
          <p className="text-lg text-light-gray max-w-2xl">
            长期积累的展览、随笔与作品。时间线、标签与分类筛选。
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mb-12 flex flex-wrap gap-4 border-b border-sage/10 pb-4">
          {[
            { id: 'all', label: '全部', count: allItems.length },
            { id: 'exhibition', label: '展览', count: exhibitions.length },
            { id: 'journal', label: '随笔', count: journalArticles.length },
            { id: 'work', label: '作品', count: works.length }
          ].map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`text-sm px-4 py-2 rounded-sm transition-all ${
                activeFilter === filter.id 
                  ? 'bg-sage text-white' 
                  : 'bg-transparent hover:bg-cream-dark'
              }`}
            >
              {filter.label}
              <span className="ml-2 text-xs opacity-60">({filter.count})</span>
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-sage/20" />

          <div className="space-y-12">
            {filteredItems.map((item, index) => (
              <div 
                key={`${item.type}-${item.id}`}
                className={`relative pl-12 md:pl-0 ${
                  index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%]'
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-1/2 top-2 w-3 h-3 bg-sage rounded-full transform -translate-x-1/2 border-2 border-cream ${
                  index % 2 === 0 ? 'md:ml-2' : 'md:-ml-2'
                }`} />

                <div className={`card-hover ${index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'}`}>
                  {/* Type badge */}
                  <span className={`inline-block text-xs px-2 py-1 rounded-sm mb-2 ${getTypeColor(item.type)}`}>
                    {getTypeLabel(item.type)}
                  </span>

                  {/* Link */}
                  {item.type === 'exhibition' && (
                    <Link to={`/exhibitions/${item.id}`} className="block group">
                      <h3 className="font-serif text-xl group-hover:text-sage transition-colors">
                        {item.title}
                      </h3>
                    </Link>
                  )}
                  {item.type === 'journal' && (
                    <Link to={`/journal/${item.id}`} className="block group">
                      <h3 className="font-serif text-xl group-hover:text-sage transition-colors">
                        {item.title}
                      </h3>
                    </Link>
                  )}
                  {item.type === 'work' && (
                    <h3 className="font-serif text-xl">{item.title}</h3>
                  )}

                  {/* Description or excerpt */}
                  <p className="mt-2 text-sm text-light-gray line-clamp-2">
                    {item.description || item.excerpt || item.subtitle}
                  </p>

                  {/* Date */}
                  <span className="mt-2 block text-xs opacity-40">
                    {item.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-light-gray">暂无内容</p>
          </div>
        )}

        {/* Decorative footer */}
        <div className="mt-24 text-center">
          <p className="text-xs opacity-40">档案持续更新中</p>
        </div>
      </div>
    </div>
  )
}
