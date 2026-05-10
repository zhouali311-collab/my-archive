import { useEffect, useState } from 'react'

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    return () => setIsLoaded(false)
  }, [])

  const keywords = [
    '图像', '身体', '城市', '青年', '表达',
    '摄影', '设计', '写作', '策展', '实验'
  ]

  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className={`px-6 md:px-12 py-16 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-sage" />
            <span className="text-xs tracking-widest opacity-60">About</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl mb-6">关于我</h1>
          <p className="text-xl text-light-gray">
            一个正在学习用视觉和文字记录世界的人。
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 md:px-12 py-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left column */}
          <div className="space-y-12">
            {/* Who am I */}
            <div>
              <h2 className="text-xs uppercase tracking-widest opacity-60 mb-6">我是谁</h2>
              <div className="space-y-4 text-light-gray leading-relaxed">
                <p>
                  我是一个关注图像、身体、城市与青年表达的创作者。目前主要从事视觉设计、内容策划和文字写作。
                </p>
                <p>
                  在这个网站里，你不会看到标准的简历格式。我更想分享的是我关心什么、我在做什么、以及我如何理解周遭的世界。
                </p>
              </div>
            </div>

            {/* What I care about */}
            <div>
              <h2 className="text-xs uppercase tracking-widest opacity-60 mb-6">我关心什么</h2>
              <div className="space-y-4 text-light-gray leading-relaxed">
                <p>
                  我关心青年在当代城市中的处境——关于表达、关于身份、关于如何在快速变化的世界中找到自己的位置。
                </p>
                <p>
                  我关心媒介如何塑造我们的感知，以及在这个图像过载的时代，我们如何保持对视觉的敏感。
                </p>
                <p>
                  我关心身体如何承载记忆、如何被制度塑造、如何成为自我表达的载体。
                </p>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-12">
            {/* Why this site */}
            <div>
              <h2 className="text-xs uppercase tracking-widest opacity-60 mb-6">为什么做这个网站</h2>
              <div className="space-y-4 text-light-gray leading-relaxed">
                <p>
                  我希望这里不是一个标准化简历，而是一个能持续生长的个人空间。
                </p>
                <p>
                  它记录我看见的世界、正在形成的判断，以及那些还没被完全解释清楚的经验。
                </p>
                <p>
                  这是一个关于"未完成"的尝试。过程本身就是作品的一部分，草稿和失败同样值得被保存。
                </p>
              </div>
            </div>

            {/* Keywords */}
            <div>
              <h2 className="text-xs uppercase tracking-widest opacity-60 mb-6">关键词</h2>
              <div className="flex flex-wrap gap-2">
                {keywords.map((keyword, index) => (
                  <span 
                    key={keyword}
                    className="text-sm px-4 py-2 bg-cream-dark rounded-sm hover:bg-sage/20 transition-colors cursor-default"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 md:px-12 py-16 bg-cream-dark/20 mt-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs uppercase tracking-widest opacity-60 mb-8">联系方式</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-light-gray mb-4">
                如果你有任何问题、合作意向，或者只是想打个招呼，欢迎联系我。
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <span className="text-xs opacity-60 block mb-1">Email</span>
                <a 
                  href="mailto:hello@myarchive.com" 
                  className="text-sage hover:underline"
                >
                  hello@myarchive.com
                </a>
              </div>
              <div>
                <span className="text-xs opacity-60 block mb-1">所在地</span>
                <span className="text-warm-gray">中国</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative quote */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <blockquote className="font-serif text-xl leading-relaxed">
            "艺术不是逃离现实，而是用另一种方式理解现实。"
          </blockquote>
        </div>
      </section>
    </div>
  )
}
