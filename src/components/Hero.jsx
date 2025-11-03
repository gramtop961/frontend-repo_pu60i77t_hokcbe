import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="py-6">
          <span className="inline-block rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium mb-4">
            Premium Car Care • Same-Day Service
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Keep your car in peak condition
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Expert mechanics, transparent pricing, and fast turnaround. From diagnostics to detailing — we do it right the first time.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-blue-700 transition-colors">
              Book an appointment <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 rounded-md bg-gray-100 px-5 py-3 text-gray-900 font-medium hover:bg-gray-200">
              Explore services
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
            <div>
              <span className="font-semibold text-gray-900">4.9/5</span> rating
            </div>
            <div>Warranty on all repairs</div>
            <div>Free inspection</div>
          </div>
        </div>
        <div className="relative h-[420px] sm:h-[520px] md:h-[560px] rounded-2xl overflow-hidden bg-white shadow-lg">
          <div className="absolute inset-0">
            <Spline scene="https://prod.spline.design/sbnqZNZdJSLK7U2A/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
