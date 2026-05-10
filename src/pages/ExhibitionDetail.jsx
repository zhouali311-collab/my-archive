import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getExhibitionById } from '../data/exhibitions'

export default function ExhibitionDetail() {
  const { id } = useParams()
  const [isLoaded, setIsLoaded] = useState(false)
  
  const exhibition = getExhibitionById(id)

  useEffect(() => {
    setIsLoaded(true)
    return () => setIsLoaded(false)
  }, [id])

  if (!exhibition) {
    return (
      <div className="pt-32 px-6 md:px-12 min-h-screen">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-2xl mb-4">展览未找到</h1>
          <Link to="/exhibitions" className="text-sage hover:underline">返回展览</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-24">
      {/* Hero Section */}
      <section className={`px-6 md:px-12 py-16 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-5xl mx-auto">
          <Link 
            to="/exhibitions"
            className="inline-flex items-center gap-2 text-sm text-light-gray hover:text-sage transition-colors mb-12"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span>返回展览</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Info */}
            <div>
              <span className="text-xs tracking-widest opacity-60">{exhibition.date}</span>
              <h1 className="mt-4 font-serif text-4xl md:text-5xl">{exhibition.title}</h1>
              <p className="mt-2 text-xl opacity-60 italic">{exhibition.subtitle}</p>
              <p className="mt-6 text-light-gray">{exhibition.description}</p>
            </div>

            {/* Right: Cover */}
            <div className={`aspect-[4/3] rounded-sm bg-gradient-to-br ${exhibition.coverColor} flex items-center justify-center`}>
              <div className="w-24 h-24 border border-white/30 rounded-sm rotate-45" />
            </div>
          </div>
        </div>
      </section>

      {/* Curator Note */}
      <section className="px-6 md:px-12 py-16 bg-cream-dark/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xs uppercase tracking-widest opacity-60 mb-6">策展前言</h2>
          <p className="font-serif text-xl leading-relaxed">
            {exhibition.curatorNote}
          </p>
        </div>
      </section>

      {/* Works Section */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs uppercase tracking-widest opacity-60 mb-12">作品</h2>
          
          <div className="space-y-16">
            {exhibition.works.map((work, index) => (
              <div 
                key={work.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start"
              >
                {/* Image placeholder */}
                <div className={`aspect-[4/3] rounded-sm bg-gradient-to-br ${exhibition.coverColor} flex items-center justify-center ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="w-16 h-16 border border-white/30 rounded-sm rotate-12" />
                </div>

                {/* Work info */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <span className="text-xs opacity-40 font-serif">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="mt-2 font-serif text-2xl">{work.title}</h3>
                  <p className="text-sm opacity-60 italic">{work.subtitle}</p>
                  <p className="mt-4 text-light-gray">{work.description}</p>
                  
                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-cream-dark rounded-sm">{work.medium}</span>
                    <span className="text-xs px-3 py-1 bg-cream-dark rounded-sm">{work.date}</span>
                    {work.tags.map(tag => (
                      <span key={tag} className="text-xs px-3 py-1 bg-sage/10 text-sage-dark rounded-sm">#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="px-6 md:px-12 py-16 bg-cream-dark/20">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="font-serif text-xl md:text-2xl leading-relaxed">
            {exhibition.closingStatement}
          </blockquote>
        </div>
      </section>

      {/* Navigation to other exhibitions */}
      <section className="px-6 md:px-12 py-12">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link 
            to="/exhibitions"
            className="inline-flex items-center gap-2 text-sm hover:text-sage transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span>返回全部展览</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
