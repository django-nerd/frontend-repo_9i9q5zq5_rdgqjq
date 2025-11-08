import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Technology from './components/Technology';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Technology />
        <Contact />
        <footer className="border-t border-white/10 bg-black">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <div>© {new Date().getFullYear()} Apex Exhaust. All rights reserved.</div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#contact" className="hover:text-white">Support</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
