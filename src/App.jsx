import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import DashboardMock from './components/DashboardMock'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DashboardMock />
        <CTA />
        <footer className="bg-black border-t border-purple-900/30 py-10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400">© {new Date().getFullYear()} Dialio. All rights reserved.</p>
            <div className="flex items-center gap-6 text-gray-400">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Security</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
