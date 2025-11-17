import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-black">
      {/* Background gradient - black dominant with subtle dark purple */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(126,34,206,0.25),transparent_60%),radial-gradient(800px_400px_at_10%_120%,rgba(147,51,234,0.15),transparent_60%)]" />

      {/* Spline 3D Scene */}
      <div className="relative h-[70vh] md:h-[78vh] lg:h-[82vh] w-full">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-full flex flex-col md:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="pointer-events-auto md:max-w-xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              AI Calling Agents that connect, qualify, and book — 24/7
            </h1>
            <p className="mt-5 text-base sm:text-lg text-gray-300">
              Dialio handles outbound and inbound calls with human-like voice, real-time CRM updates, and smart follow-ups. Faster response, higher conversion.
            </p>
            <div className="mt-7 pointer-events-auto flex flex-wrap gap-3">
              <a href="#cta" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-purple-600 hover:bg-purple-500 text-white font-medium shadow">
                Start free trial
              </a>
              <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-purple-900/40 text-gray-200 hover:bg-purple-950/30">
                Explore features
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              No code. No setup fees. Cancel anytime.
            </div>
          </motion.div>
        </div>
      </div>

      {/* subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}

export default Hero
