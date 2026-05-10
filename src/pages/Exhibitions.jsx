import { useEffect, useState } from 'react'
import { exhibitions } from '../data/exhibitions'
import ExhibitionCard from '../components/ExhibitionCard'

export default function Exhibitions() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    return () => setIsLoaded(false)
  }, [])

  return (
    <div className="pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-sage" />
            <span className="text-xs tracking-widest opacity-60">Exhibitions</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl mb-4">展览</h1>
          <p className="text-lg text-light-gray max-w-2xl">
            线上展览空间，把照片、材料、记忆和观点整理成可观看的形式。
          </p>
        </div>

        {/* Exhibitions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {exhibitions.map((exhibition, index) => (
            <ExhibitionCard key={exhibition.id} exhibition={exhibition} index={index} />
          ))}
        </div>

        {/* Decorative line */}
        <div className="mt-24 flex items-center justify-center">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-sage/30" />
          <div className="px-8 py-4 text-xs opacity-40">档案持续生长中</div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-sage/30" />
        </div>
      </div>
    </div>
  )
}
