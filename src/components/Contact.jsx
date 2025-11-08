import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // For now, just simulate submission
    console.log('Quote request:', data);
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Request a Quote</h2>
            <p className="mt-3 text-gray-300 max-w-xl">
              Tell us your vehicle and goals. We’ll confirm fitment and lead times.
            </p>
            <div className="mt-6 rounded-xl border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-6">
              <div className="text-sm text-gray-400">Email</div>
              <div className="text-white">sales@apexexhaust.com</div>
              <div className="mt-4 text-sm text-gray-400">Location</div>
              <div className="text-white">Worldwide shipping from USA</div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-2xl font-semibold">Thanks! We’ll be in touch.</div>
                <p className="mt-2 text-gray-400">Expect a response within 1-2 business days.</p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-300">Name</label>
                    <input name="name" required className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600" placeholder="Alex Rivera" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-300">Email</label>
                    <input type="email" name="email" required className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600" placeholder="you@example.com" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm text-gray-300">Vehicle</label>
                    <input name="vehicle" required className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600" placeholder="2023 Supra A91, BMW M2 G87, etc." />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm text-gray-300">Goals</label>
                    <textarea name="goals" rows={4} className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600" placeholder="Sound preference, track noise limits, material choice..." />
                  </div>
                </div>
                <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-md bg-red-600 px-5 py-3 text-sm font-medium text-white shadow hover:bg-red-500">Send Request</button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
