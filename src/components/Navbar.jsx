import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-white/70 shadow-sm' : 'bg-white/60 backdrop-blur'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold text-xl tracking-tight text-gray-900">AutoGlow</a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#services" className="text-gray-700 hover:text-gray-900">Services</a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors"
          >
            Book Appointment
          </a>
        </div>
        <details className="md:hidden">
          <summary className="list-none cursor-pointer rounded-md px-3 py-2 hover:bg-gray-100">Menu</summary>
          <div className="absolute right-4 mt-2 w-48 rounded-lg border bg-white shadow-lg p-2 flex flex-col">
            <a href="#services" className="px-3 py-2 rounded hover:bg-gray-50">Services</a>
            <a href="#contact" className="px-3 py-2 rounded hover:bg-gray-50">Contact</a>
            <a href="#contact" className="px-3 py-2 mt-1 rounded bg-blue-600 text-white text-center hover:bg-blue-700">Book</a>
          </div>
        </details>
      </nav>
    </header>
  );
}
