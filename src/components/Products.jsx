export default function Products() {
  const items = [
    {
      title: 'Carbon Series Cat-Back',
      desc: 'Ultra-lightweight, deep tone, maximum flow. Ideal for street and track.',
      spec: '3.0" Mandrel-Bent • T304 SS • Resonated',
      price: 'From $1,199'
    },
    {
      title: 'Titanium Track Exhaust',
      desc: 'Featherweight titanium with aggressive, motorsport-tuned acoustics.',
      spec: '3.5" Titanium • V-Band • Non-Resonated',
      price: 'From $1,899'
    },
    {
      title: 'Stealth Performance Axle-Back',
      desc: 'Refined sound with minimal drone. Designed for daily performance.',
      spec: '2.5" T304 SS • Helmholtz Chamber',
      price: 'From $749'
    },
  ];

  return (
    <section id="products" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Signature Systems</h2>
            <p className="mt-2 text-gray-400 max-w-2xl">Engineered for optimal flow, sound, and longevity. Each system is hand-assembled and tested.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-500">Request Fitment</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-6">
              <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-red-600/20 blur-2xl" />
              <h3 className="text-xl font-medium">{item.title}</h3>
              <p className="mt-2 text-gray-300">{item.desc}</p>
              <p className="mt-4 text-sm text-gray-400">{item.spec}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-red-400 font-semibold">{item.price}</span>
                <a href="#contact" className="text-sm text-white/80 hover:text-white underline underline-offset-4">Check Availability</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
