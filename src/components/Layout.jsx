import Navigation from './Navigation'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Grain overlay for paper texture */}
      <div className="grain-overlay" aria-hidden="true" />
      
      <Navigation />
      
      <main className="flex-1 page-fade-in">
        {children}
      </main>
      
      <Footer />
    </div>
  )
}
