import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getFeaturedExhibitions } from '../data/exhibitions'
import { getFeaturedArticles } from '../data/journal'
import { works } from '../data/works'
import ExhibitionCard from '../components/ExhibitionCard'
import JournalCard from '../components/JournalCard'
import WorkCard from '../components/WorkCard'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const featuredExhibitions = getFeaturedExhibitions()
  const featuredArticles = getFeaturedArticles()
  const recentWorks = works.slice(0, 3)

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 py-12">
        <div className={`max-w-4xl transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          {/* Site name */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-8 h-px bg-sage" />
            <span className="text-sm tracking-widest opacity-60">my Archive</span>
          </div>

          {/* Main title */}
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight text-balance">
            "一个关于图像、身体、城市与青年表达的未完成档案。"
          </h1>
          
          <p className="mt-6 text-lg md:text-xl opacity-60 italic">
            An unfinished archive of images, motion, cities, and thoughts.
          </p>

          {/* Decorative elements */}
          <div className="mt-16 flex items-center gap-8">
            <div className="flex gap-2">
              <span className="w-2 h-2 bg-sage rounded-full" />
              <span className="w-2 h-2 bg-sage/50 rounded-full" />
              <span className="w-2 h-2 bg-sage/30 rounded-full" />
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-sage/30 to-transparent" />
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 flex items-center gap-3 text-xs opacity-40">
            <span>向下滚动</span>
            <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Entry Cards Section */}
      <section className="px-6 md:px-12 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Exhibitions Card */}
            <Link 
              to="/exhibitions"
              className="group p-8 bg-gradient-to-br from-sage/10 to-soft-purple/10 rounded-sm card-hover"
            >
              <span className="text-xs tracking-widest opacity-60">01</span>
              <h2 className="mt-4 font-serif text-2xl group-hover:text-sage transition-colors">
                Exhibitions
              </h2>
              <p className="mt-2 text-sm opacity-60">展览</p>
              <p className="mt-6 text-sm text-light-gray leading-relaxed">
                把照片、材料、记忆和观点整理成可观看的线上展览。
              </p>
              <div className="mt-8 flex items-center gap-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                <span>进入</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>

            {/* Journal Card */}
            <Link 
              to="/journal"
              className="group p-8 bg-gradient-to-br from-soft-yellow/20 to-cream-dark/30 rounded-sm card-hover"
            >
              <span className="text-xs tracking-widest opacity-60">02</span>
              <h2 className="mt-4 font-serif text-2xl group-hover:text-sage transition-colors">
                Journal
              </h2>
              <p className="mt-2 text-sm opacity-60">随笔</p>
              <p className="mt-6 text-sm text-light-gray leading-relaxed">
                记录我对校园、城市、运动、媒介与公共议题的观察。
              </p>
              <div className="mt-8 flex items-center gap-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                <span>阅读</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>

            {/* Works Card */}
            <Link 
              to="/works"
              className="group p-8 bg-gradient-to-br from-cream-dark/40 to-soft-purple/10 rounded-sm card-hover"
            >
              <span className="text-xs tracking-widest opacity-60">03</span>
              <h2 className="mt-4 font-serif text-2xl group-hover:text-sage transition-colors">
                Works
              </h2>
              <p className="mt-2 text-sm opacity-60">作品</p>
              <p className="mt-6 text-sm text-light-gray leading-relaxed">
                收纳我做过的设计、策划、写作、影像与项目。
              </p>
              <div className="mt-8 flex items-center gap-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                <span>查看</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="px-6 md:px-12 py-24 bg-cream-dark/20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-sage" />
              <span className="text-xs tracking-widest opacity-60">精选内容</span>
            </div>
            <h2 className="font-serif text-3xl">Recent Highlights</h2>
          </div>

          {/* Three columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Exhibitions */}
            <div>
              <h3 className="text-xs uppercase tracking-widest opacity-60 mb-6">正在展出</h3>
              <div className="space-y-8">
                {featuredExhibitions.slice(0, 2).map((exhibition, i) => (
                  <ExhibitionCard key={exhibition.id} exhibition={exhibition} index={i} />
                ))}
              </div>
              <Link 
                to="/exhibitions"
                className="mt-6 inline-flex items-center gap-2 text-sm text-sage hover:underline"
              >
                <span>查看全部展览</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Journal */}
            <div>
              <h3 className="text-xs uppercase tracking-widest opacity-60 mb-6">最近写下</h3>
              <div className="space-y-6">
                {featuredArticles.slice(0, 3).map((article, i) => (
                  <JournalCard key={article.id} article={article} index={i} />
                ))}
              </div>
              <Link 
                to="/journal"
                className="mt-6 inline-flex items-center gap-2 text-sm text-sage hover:underline"
              >
                <span>查看全部文章</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Works */}
            <div>
              <h3 className="text-xs uppercase tracking-widest opacity-60 mb-6">最近完成</h3>
              <div className="space-y-8">
                {recentWorks.map((work, i) => (
                  <WorkCard key={work.id} work={work} index={i} />
                ))}
              </div>
              <Link 
                to="/works"
                className="mt-6 inline-flex items-center gap-2 text-sm text-sage hover:underline"
              >
                <span>查看全部作品</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Summary Section */}
      <section className="px-6 md:px-12 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <span className="text-xs tracking-widest opacity-60">关于这里</span>
          </div>
          <blockquote className="font-serif text-xl md:text-2xl leading-relaxed">
            "我希望这里不是一个标准化简历，而是一个能持续生长的个人空间。它记录我看见的世界、正在形成的判断，以及那些还没被完全解释清楚的经验。"
          </blockquote>
          <Link 
            to="/about"
            className="mt-12 inline-flex items-center gap-3 text-sm group"
          >
            <span className="w-8 h-px bg-sage group-hover:w-12 transition-all" />
            <span className="group-hover:text-sage transition-colors">了解更多关于我</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
