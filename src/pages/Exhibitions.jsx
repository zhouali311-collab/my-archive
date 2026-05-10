import { Link } from 'react-router-dom';
import { exhibitions } from '../data/mockData';

export default function Exhibitions() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-light/30 to-cream" />
        <div className="absolute top-20 right-1/4 w-64 h-64 rounded-full bg-purple-light/40 blur-3xl" />
        
        <div className="container-narrow relative z-10">
          <p className="exhibit-number mb-4">EXHIBITIONS</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
            线上展览
          </h1>
          <p className="curatorial-note max-w-2xl">
            每一个展览都是一个独立的策展项目。通过影像、文字与空间叙事，探索不同的主题与创作方向。
          </p>
        </div>
      </section>

      {/* Exhibitions List */}
      <section className="pb-20 md:pb-28">
        <div className="container-wide">
          <div className="space-y-16 md:space-y-24 px-6 md:px-0">
            {exhibitions.map((exhibition, index) => (
              <article key={exhibition.id} className="group">
                <Link to={`/exhibitions/${exhibition.id}`}>
                  {/* Exhibition Header */}
                  <div className="grid md:grid-cols-12 gap-6 items-start mb-8">
                    <div className="md:col-span-3">
                      <span className="exhibit-number">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="md:col-span-9">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="tag">{exhibition.category}</span>
                        <span className="text-sm text-text-muted">{exhibition.year}</span>
                      </div>
                      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl group-hover:text-sage transition-colors duration-300">
                        {exhibition.title}
                      </h2>
                    </div>
                  </div>

                  {/* Exhibition Image Area */}
                  <div className="relative overflow-hidden mb-8">
                    <div className={`aspect-[16/9] md:aspect-[21/9] ${exhibition.coverGradient || 'bg-gradient-to-br from-purple-light to-purple-mid'}`}>
                      {/* Placeholder Pattern */}
                      <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-1/2 left-1/4 w-px h-32 bg-border" />
                        <div className="absolute top-1/2 right-1/4 w-px h-32 bg-border" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-border" />
                      </div>
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-text-primary/0 group-hover:bg-text-primary/10 transition-colors duration-500" />
                  </div>

                  {/* Exhibition Info */}
                  <div className="grid md:grid-cols-12 gap-6">
                    <div className="md:col-span-3" />
                    <div className="md:col-span-6">
                      <p className="text-text-secondary leading-relaxed mb-6">
                        {exhibition.description}
                      </p>
                      {/* Curatorial Note */}
                      {exhibition.curatorialNote && (
                        <div className="p-6 bg-yellow-light/30 border-l-2 border-yellow-mid">
                          <p className="card-label mb-2">Curatorial Note / 策展前言</p>
                          <p className="curatorial-note">{exhibition.curatorialNote}</p>
                        </div>
                      )}
                    </div>
                    <div className="md:col-span-3">
                      <div className="p-4 bg-cream-dark border border-border-light">
                        <p className="card-label mb-3">Exhibition Info</p>
                        <dl className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <dt className="text-text-muted">Year</dt>
                            <dd>{exhibition.year}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-text-muted">Works</dt>
                            <dd>{exhibition.works?.length || 0}</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>

                  {/* View Button */}
                  <div className="grid md:grid-cols-12 gap-6 mt-8">
                    <div className="md:col-span-3" />
                    <div className="md:col-span-9">
                      <div className="flex items-center gap-4">
                        <span className="font-sans text-sm tracking-wider text-sage">
                          Enter Exhibition →
                        </span>
                        <span className="h-px flex-1 bg-border" />
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
