import { Link } from 'react-router-dom';
import { exhibitions, journal, works } from '../data/mockData';

export default function Home() {
  const featuredExhibitions = exhibitions.slice(0, 3);
  const featuredWorks = works.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Magazine Cover Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream-dark to-yellow-light" />
        
        {/* Decorative Elements - Paper Collage Shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full bg-purple-light/30 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-72 md:h-72 rounded-full bg-yellow-mid/40 blur-2xl" />
        <div className="absolute top-1/3 right-1/3 w-32 h-32 md:w-48 md:h-48 rounded-full bg-purple-dark/20 blur-2xl" />
        
        {/* Decorative Lines */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-px h-32 bg-border" />
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-px h-32 bg-border" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Issue Number */}
          <p className="font-sans text-xs tracking-[0.3em] text-text-muted mb-8 md:mb-12 fade-in">
            — VOL. 01, 2024 —
          </p>

          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-4 md:mb-6 leading-none fade-in-delay-1">
            my Archive
          </h1>

          {/* Subtitle / English */}
          <p className="font-display italic text-xl md:text-2xl text-text-secondary mb-8 md:mb-12 fade-in-delay-2">
            A Personal Exhibition Space
          </p>

          {/* Decorative Separator */}
          <div className="flex items-center justify-center gap-4 mb-8 md:mb-12 fade-in-delay-2">
            <span className="w-12 h-px bg-border" />
            <span className="w-2 h-2 rounded-full bg-purple-mid" />
            <span className="w-12 h-px bg-border" />
          </div>

          {/* Tagline */}
          <p className="font-sans text-sm md:text-base text-text-muted tracking-wide mb-12 md:mb-16 fade-in-delay-3">
            个人艺术档案馆 / 线上展览空间
          </p>

          {/* Enter Button - Magazine Style */}
          <Link
            to="/exhibitions"
            className="inline-flex items-center gap-3 px-8 py-4 border border-border hover:bg-sage hover:border-sage hover:text-cream transition-all duration-400 fade-in-delay-3 group"
          >
            <span className="font-sans text-sm tracking-wider">Enter Exhibition</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted">
          <span className="font-sans text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-border to-transparent" />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 md:py-28 bg-cream-dark">
        <div className="container-narrow">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <p className="tag mb-6">About This Space</p>
              <h2 className="font-display text-3xl md:text-4xl leading-tight">
                一个关于影像、记忆与日常的线上档案馆
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="curatorial-note mb-6">
                "这里收藏着我对世界的观察——街道上的光影、城市的声响、以及那些被忽略的日常瞬间。"
              </p>
              <p className="text-text-secondary leading-relaxed mb-6">
                my Archive 是一个持续生长的个人创作档案。它不是简历，也不是作品集，而是一个真实的、关于创作过程和思考的记录空间。每一次展览、每一篇文章、每一个作品，都是我与这个世界对话的方式。
              </p>
              <Link to="/about" className="btn-ghost group">
                <span>More About Me</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Exhibitions */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container-wide">
          {/* Section Header */}
          <div className="flex items-end justify-between mb-12 md:mb-16 px-6 md:px-0">
            <div>
              <p className="exhibit-number mb-2">01</p>
              <h2 className="font-display text-3xl md:text-4xl">Exhibitions</h2>
            </div>
            <Link to="/exhibitions" className="btn-ghost group hidden md:flex">
              <span>View All</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Exhibition Cards */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 px-6 md:px-0">
            {featuredExhibitions.map((exhibition, index) => (
              <Link
                key={exhibition.id}
                to={`/exhibitions/${exhibition.id}`}
                className="exhibition-card group"
              >
                {/* Image Area */}
                <div className="exhibition-card-image relative overflow-hidden">
                  <div className={`absolute inset-0 ${exhibition.coverGradient || 'bg-gradient-to-br from-purple-light to-purple-mid'}`} />
                  {/* Number Overlay */}
                  <div className="absolute top-4 left-4">
                    <span className="font-sans text-xs tracking-widest text-text-muted/60">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="art-card-content">
                  <div className="art-card-meta">
                    <span className="tag">{exhibition.category}</span>
                    <span className="text-xs text-text-muted">{exhibition.year}</span>
                  </div>
                  <h3 className="art-card-title group-hover:text-sage transition-colors duration-300">
                    {exhibition.title}
                  </h3>
                  <p className="art-card-description line-clamp-2">
                    {exhibition.description}
                  </p>
                  {/* Exhibition Label */}
                  <div className="mt-4 pt-4 border-t border-border-light flex items-center justify-between">
                    <span className="card-label">View Exhibition →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/exhibitions" className="btn-secondary">
              View All Exhibitions
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Works - Masonry Style */}
      <section className="py-20 md:py-28 bg-cream-dark">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-12 md:mb-16 px-6 md:px-0">
            <div>
              <p className="exhibit-number mb-2">02</p>
              <h2 className="font-display text-3xl md:text-4xl">Selected Works</h2>
            </div>
            <Link to="/works" className="btn-ghost group hidden md:flex">
              <span>Browse All</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Works Grid - Staggered */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 px-6 md:px-0">
            {featuredWorks.map((work, index) => (
              <Link
                key={work.id}
                to={`/works/${work.id}`}
                className={`works-card group ${
                  index % 3 === 1 ? 'md:mt-12' : ''
                } ${index % 3 === 2 ? 'md:mt-6' : ''}`}
              >
                <div className="works-card-image relative">
                  <div className={`absolute inset-0 ${work.gradient || 'bg-gradient-to-br from-yellow-light to-yellow-mid'}`} />
                  {/* Number */}
                  <div className="absolute top-3 left-3">
                    <span className="font-sans text-xs tracking-widest text-text-muted/60">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                <div className="art-card-content p-4">
                  <p className="card-label mb-1">{work.category}</p>
                  <h3 className="font-display text-lg">{work.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Journal Preview */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container-narrow">
          <div className="flex items-end justify-between mb-12 md:mb-16">
            <div>
              <p className="exhibit-number mb-2">03</p>
              <h2 className="font-display text-3xl md:text-4xl">Journal</h2>
            </div>
            <Link to="/journal" className="btn-ghost group hidden md:flex">
              <span>Read All</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Journal List */}
          <div className="space-y-0">
            {journal.slice(0, 3).map((article, index) => (
              <Link
                key={article.id}
                to={`/journal/${article.id}`}
                className="block py-6 border-b border-border-light group"
              >
                <div className="flex items-start gap-6 md:gap-12">
                  <span className="exhibit-number mt-1 shrink-0">{String(index + 1).padStart(2, '0')}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="tag text-2xs">{article.category}</span>
                      <span className="text-xs text-text-muted">{article.date}</span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl mb-2 group-hover:text-sage transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-sm text-text-secondary line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                  <svg className="w-4 h-4 text-text-muted mt-2 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Archive CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-purple-light/50 via-cream-dark to-yellow-light/30">
        <div className="container-narrow text-center">
          <p className="exhibit-number mb-4">04</p>
          <h2 className="font-display text-3xl md:text-4xl mb-4">Explore the Archive</h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            在时间线中回溯所有的创作、展览与文字记录
          </p>
          <Link to="/archive" className="btn-primary">
            Enter Archive
          </Link>
        </div>
      </section>
    </div>
  );
}
