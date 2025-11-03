import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Book your visit</h2>
          <p className="mt-3 text-gray-600">
            Tell us what your car needs. We’ll confirm your appointment and send you a quote.
          </p>

          <div className="mt-8 space-y-4">
            <a href="tel:+1234567890" className="flex items-center gap-3 text-gray-700 hover:text-gray-900">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <Phone className="h-5 w-5" />
              </span>
              <span className="font-medium">+1 (234) 567-890</span>
            </a>
            <a href="mailto:service@autoglow.shop" className="flex items-center gap-3 text-gray-700 hover:text-gray-900">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <Mail className="h-5 w-5" />
              </span>
              <span className="font-medium">service@autoglow.shop</span>
            </a>
            <div className="flex items-start gap-3 text-gray-700">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="font-medium">1250 Mechanic Ave, Suite B</div>
                <div className="text-gray-600">Riverton, CA 94000</div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const data = new FormData(form);
              const subject = encodeURIComponent('Service Appointment Request');
              const body = encodeURIComponent(
                `Name: ${data.get('name')}\nPhone: ${data.get('phone')}\nService: ${data.get('service')}\nMessage: ${data.get('message')}`
              );
              window.location.href = `mailto:service@autoglow.shop?subject=${subject}&body=${body}`;
              form.reset();
            }}
            className="grid gap-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input name="phone" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Service</label>
              <select name="service" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Diagnostics</option>
                <option>Oil change</option>
                <option>Brakes</option>
                <option>Engine repair</option>
                <option>Detailing</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea name="message" rows={4} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-white font-medium shadow-sm hover:bg-blue-700">
              Request booking
            </button>
          </form>
        </div>
      </div>

      <div className="mt-20 text-center text-sm text-gray-500">© {new Date().getFullYear()} AutoGlow. All rights reserved.</div>
    </section>
  );
}
