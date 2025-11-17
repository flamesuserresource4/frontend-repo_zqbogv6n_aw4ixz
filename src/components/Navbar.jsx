import { Menu, Phone, Sparkles } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 border-b border-purple-900/20 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-600 to-purple-500 shadow-lg flex items-center justify-center">
            <Phone className="h-4 w-4 text-white" />
          </div>
          <span className="text-white font-semibold tracking-tight">Dialio</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#dashboard" className="text-gray-300 hover:text-white transition-colors">Dashboard</a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-1 text-sm text-gray-300 hover:text-white">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span>Book a demo</span>
          </button>
          <a href="#cta" className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md bg-purple-600 hover:bg-purple-500 text-white shadow">
            Get started
          </a>
          <button className="md:hidden inline-flex items-center p-2 rounded-md text-gray-300 hover:text-white">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
