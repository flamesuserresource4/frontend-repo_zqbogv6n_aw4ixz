function CTA() {
  return (
    <section id="cta" className="relative bg-black py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_400px_at_50%_0%,rgba(126,34,206,0.25),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="rounded-2xl border border-purple-900/40 bg-gradient-to-b from-[#0a0a0a] to-[#0b0013] p-8 sm:p-10">
          <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
            <div className="max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">Launch your first AI calling agent today</h3>
              <p className="text-gray-400 mt-2">Start free, scale as you grow. No credit card required.</p>
            </div>
            <form className="w-full md:w-auto flex gap-3">
              <input type="email" required placeholder="Work email" className="w-full md:w-80 px-4 py-3 rounded-md bg-black/60 border border-purple-900/50 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600" />
              <button className="px-5 py-3 rounded-md bg-purple-600 hover:bg-purple-500 text-white font-medium">Get started</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
