import { Bot, Handshake, Headphones, Timer, Workflow, BarChart3 } from 'lucide-react'

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-xl border border-purple-900/30 bg-[#0a0a0a] p-6 hover:border-purple-700/50 transition-colors">
      <div className="h-10 w-10 rounded-lg bg-purple-600/20 text-purple-300 flex items-center justify-center mb-4">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-white font-medium text-lg">{title}</h3>
      <p className="text-gray-400 mt-2 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

function Features() {
  return (
    <section id="features" className="relative bg-black py-20">
      <div className="absolute inset-0 pointer-events-none opacity-60 bg-[radial-gradient(700px_400px_at_20%_10%,rgba(126,34,206,0.25),transparent_60%),radial-gradient(500px_400px_at_80%_90%,rgba(147,51,234,0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-purple-300/80 text-sm font-medium tracking-wide">Why Dialio</p>
          <h2 className="text-3xl sm:text-4xl text-white font-semibold tracking-tight mt-2">Everything you need to scale conversations</h2>
          <p className="text-gray-400 mt-3">Automate calls without sacrificing quality. Integrate with your tools, follow custom playbooks, and track results in real time.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          <Feature icon={Bot} title="Human-like AI" desc="Natural voice, interruption handling, and memory for fluid conversations." />
          <Feature icon={Handshake} title="Lead qualification" desc="Score, route, and book meetings directly into your calendar." />
          <Feature icon={Workflow} title="Playbooks" desc="Customizable flows for sales, support, and reminders." />
          <Feature icon={Headphones} title="Inbound & Outbound" desc="Answer, route or dial at scale with intelligent retries." />
          <Feature icon={Timer} title="Instant setup" desc="Go live in minutes with templates and one-click integrations." />
          <Feature icon={BarChart3} title="Analytics" desc="Track connection rate, bookings, ROI and more from one place." />
        </div>
      </div>
    </section>
  )
}

export default Features
