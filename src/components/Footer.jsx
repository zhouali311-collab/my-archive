import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-24 border-t border-sage/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="font-serif text-lg tracking-wide hover:text-sage transition-colors">
              my Archive
            </Link>
            <p className="mt-4 text-sm text-light-gray leading-relaxed">
              一个关于图像、身体、城市与青年表达的未完成档案。
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs uppercase tracking-widest opacity-60 mb-4">导航</h3>
            <div className="flex flex-col gap-2">
              <Link to="/exhibitions" className="text-sm hover:text-sage transition-colors">Exhibitions</Link>
              <Link to="/journal" className="text-sm hover:text-sage transition-colors">Journal</Link>
              <Link to="/works" className="text-sm hover:text-sage transition-colors">Works</Link>
              <Link to="/archive" className="text-sm hover:text-sage transition-colors">Archive</Link>
              <Link to="/about" className="text-sm hover:text-sage transition-colors">About</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-widest opacity-60 mb-4">联系</h3>
            <div className="flex flex-col gap-2 text-sm text-light-gray">
              <span>Email: hello@myarchive.com</span>
              <span>所在地: 中国</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-sage/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-light-gray">
            © {currentYear} my Archive. All rights reserved.
          </p>
          <p className="text-xs text-light-gray">
            一个持续生长的个人空间
          </p>
        </div>
      </div>
    </footer>
  )
}
