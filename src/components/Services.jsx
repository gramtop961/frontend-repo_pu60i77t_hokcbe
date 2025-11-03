import { Wrench, Car, Shield, Clock } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Repairs & Diagnostics',
    desc: 'Computerized diagnostics, engine and transmission repair done right with OEM parts.',
  },
  {
    icon: Car,
    title: 'Maintenance Packages',
    desc: 'Oil changes, filters, brakes, tires, and tune-ups to keep you road-ready.',
  },
  {
    icon: Shield,
    title: 'Inspections & Warranty',
    desc: 'Certified multi-point inspections and post-repair warranties on all work.',
  },
  {
    icon: Clock,
    title: 'Same-Day Service',
    desc: 'Express slots available. Get back on the road faster with priority care.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-white via-white to-blue-50/50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-3 text-gray-600">
            Everything your car needs — performed by certified professionals using the latest equipment.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
              <div className="mt-4 text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition">Learn more →</div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-white font-medium shadow-sm hover:bg-blue-700">
            Get a free quote
          </a>
        </div>
      </div>
    </section>
  );
}
