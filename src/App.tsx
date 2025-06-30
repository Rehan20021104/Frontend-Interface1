import React from 'react';
import { ChevronRight, ArrowRight, Car, Wrench, Shield, Clock, Phone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold mb-6">Your Trusted Auto Service Partner</h1>
              <p className="text-xl mb-8">Professional car repair and maintenance services to keep your vehicle running smoothly</p>
              <button className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold flex items-center hover:bg-red-700 transition">
                Book Appointment <ChevronRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Car, title: 'Diagnostics', desc: 'Complete vehicle diagnostic services' },
              { icon: Wrench, title: 'Repairs', desc: 'Professional repair services' },
              { icon: Clock, title: 'Maintenance', desc: 'Regular maintenance services' }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                <service.icon className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <a href="#" className="text-red-600 font-semibold flex items-center">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Certified Experts', desc: 'ASE certified mechanics' },
              { icon: Clock, title: 'Quick Service', desc: 'Fast and efficient service' },
              { icon: Wrench, title: 'Quality Parts', desc: 'Genuine OEM parts' },
              { icon: Phone, title: '24/7 Support', desc: 'Always here to help' }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon className="w-12 h-12 mx-auto text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-red-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Get Started?</h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the best in automotive care
          </p>
          <button className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold inline-flex items-center hover:bg-gray-100 transition">
            Schedule Service <ChevronRight className="ml-2" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-400">Professional auto repair services with over 20 years of experience.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Diagnostics</li>
                <li>Repairs</li>
                <li>Maintenance</li>
                <li>Tire Services</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>123 Auto Street</li>
                <li>City, State 12345</li>
                <li>(555) 123-4567</li>
                <li>info@autoservice.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Hours</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Mon-Fri: 8am - 6pm</li>
                <li>Saturday: 9am - 4pm</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Auto Service. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;