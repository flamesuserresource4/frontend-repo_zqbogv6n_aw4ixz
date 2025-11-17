import { LineChart, Calendar, PhoneCall, Users, CheckCircle2 } from 'lucide-react'

function Stat({ label, value, delta }) {
  return (
    <div className="rounded-lg border border-purple-900/40 bg-[#0b0b0b] p-4">
      <p className="text-sm text-gray-400">{label}</p>
      <div className="flex items-baseline gap-2 mt-1">
        <p className="text-2xl font-semibold text-white">{value}</p>
        {delta && <span className="text-xs text-purple-300">{delta}</span>}
      </div>
    </div>
  )
}

function DashboardMock() {
  return (
    <section id="dashboard" className="relative bg-black py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_400px_at_80%_20%,rgba(126,34,206,0.25),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="text-purple-300/80 text-sm font-medium tracking-wide">See it in action</p>
            <h2 className="text-3xl sm:text-4xl text-white font-semibold tracking-tight mt-2">A snapshot of your control center</h2>
            <p className="text-gray-400 mt-3 max-w-2xl">Monitor performance, drill into calls, and manage campaigns — all in a clean, focused workspace.</p>
          </div>
          <a href="#cta" className="inline-flex items-center px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-500 text-white">Try it now</a>
        </div>

        {/* Mocked dashboard card */}
        <div className="mt-10 rounded-2xl border border-purple-900/40 bg-[#0a0a0a] overflow-hidden">
          <div className="border-b border-purple-900/40 px-4 sm:px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-300">
              <LineChart className="h-4 w-4 text-purple-300" />
              <span className="text-sm">Performance Overview</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Calendar className="h-3.5 w-3.5" />
              Last 7 days
            </div>
          </div>
          <div className="p-4 sm:p-6 grid md:grid-cols-5 gap-4">
            <div className="md:col-span-3">
              <div className="h-44 rounded-lg bg-gradient-to-b from-purple-900/20 to-purple-900/5 border border-purple-900/40" />
              <div className="grid grid-cols-3 gap-3 mt-4">
                <Stat label="Calls placed" value="12,482" delta="+8%" />
                <Stat label="Connection rate" value="42%" delta="+3%" />
                <Stat label="Meetings booked" value="318" delta="+11%" />
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="rounded-lg border border-purple-900/40 bg-[#0b0b0b] p-4">
                <p className="text-sm font-medium text-white">Today’s queue</p>
                <div className="mt-3 space-y-3">
                  {[
                    { name: 'Prospect follow-up', icon: PhoneCall, count: 340 },
                    { name: 'Demo reminders', icon: Calendar, count: 126 },
                    { name: 'Trial check-ins', icon: Users, count: 89 },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-2 px-3 rounded-md bg-[#0f0f0f] border border-purple-900/40">
                      <div className="flex items-center gap-2 text-gray-300">
                        <item.icon className="h-4 w-4 text-purple-300" />
                        <span className="text-sm">{item.name}</span>
                      </div>
                      <span className="text-xs text-gray-400">{item.count}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2 text-green-400 text-sm">
                  <CheckCircle2 className="h-4 w-4" />
                  Live agents healthy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DashboardMock
