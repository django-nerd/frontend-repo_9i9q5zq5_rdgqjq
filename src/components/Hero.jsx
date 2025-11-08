import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-gradient-to-b from-black via-zinc-950 to-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 backdrop-blur">
              Precision-Built Performance
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
              Performance Exhausts
              <span className="block bg-gradient-to-r from-white via-white to-red-500 bg-clip-text text-transparent">Engineered to Roar</span>
            </h1>
            <p className="mt-4 text-gray-300 max-w-xl">
              Designed for maximum flow, tuned acoustics, and a refined dark aesthetic. Built with aerospace-grade materials for the street and the track.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#products" className="inline-flex items-center justify-center rounded-md bg-red-600 px-5 py-3 text-sm font-medium text-white shadow hover:bg-red-500">
                Explore Products
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10">
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
    </section>
  );
}
