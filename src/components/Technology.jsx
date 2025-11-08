import { CheckCircle } from 'lucide-react';

export default function Technology() {
  const features = [
    'Mandrel-bent piping for consistent diameter',
    'CNC TIG-welded collectors and flanges',
    'Helmholtz tuning to reduce cabin drone',
    'High-temp ceramic and PVD coating options',
    'V-band quick release for modular setups',
  ];

  return (
    <section id="technology" className="relative bg-gradient-to-b from-black to-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Crafted for Flow and Sound</h2>
            <p className="mt-3 text-gray-300 max-w-2xl">
              Every component is designed with CFD-backed flow modeling and acoustics in mind. The result is a system that breathes better and sounds right.
            </p>
            <ul className="mt-6 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-gray-200">
                  <CheckCircle className="mt-0.5 text-red-500" size={18} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-zinc-900 p-6">
            <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-red-600/20 blur-2xl" />
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="rounded-lg bg-black/40 p-6">
                <div className="text-3xl font-semibold">+18 hp</div>
                <div className="mt-1 text-xs text-gray-400">Average Gains</div>
              </div>
              <div className="rounded-lg bg-black/40 p-6">
                <div className="text-3xl font-semibold">-6.4 kg</div>
                <div className="mt-1 text-xs text-gray-400">Weight Reduction</div>
              </div>
              <div className="rounded-lg bg-black/40 p-6">
                <div className="text-3xl font-semibold">92 dB</div>
                <div className="mt-1 text-xs text-gray-400">Track Safe</div>
              </div>
              <div className="rounded-lg bg-black/40 p-6">
                <div className="text-3xl font-semibold">10 yr</div>
                <div className="mt-1 text-xs text-gray-400">Warranty</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
