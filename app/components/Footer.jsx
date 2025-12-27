"use client";
import Link from 'next/link';

export default function Footer({ currentPage, openModal }) {
  const services = [
    { name: 'Residential Moving', id: 'residential-moving' },
    { name: 'Commercial Moving', id: 'commercial-moving' },
    { name: 'Packing Services', id: 'packing-services' },
    { name: 'Storage Solutions', id: 'storage-solutions' },
    { name: 'Long Distance', id: 'long-distance' },
    { name: 'Specialty Items', id: 'specialty-items' }
  ];

  const scrollToSection = (sectionId, page = 'home') => {
    // Navigate to the page first
    window.location.href = page === 'home' ? '/' : `/${page}`;
    // Then scroll to the section after a small delay
    setTimeout(() => {
      if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);
  };

  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">MH27 Packers & Movers</h3>
            <p className="text-gray-300 text-sm mb-4">Your trusted partner for all your moving and packing needs. We make relocation simple, efficient, and stress-free.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <i className="fab fa-facebook text-lg"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <i className="fab fa-instagram text-lg"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="mr-2">•</span> Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="mr-2">•</span> All Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="mr-2">•</span> About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="mr-2">•</span> Contact Us
                </Link>
              </li>
              <li>
                <button 
                  onClick={openModal}
                  className="text-gray-300 hover:text-white transition-colors text-sm flex items-center w-full text-left"
                >
                  <span className="mr-2">•</span> Get a Free Quote
                </button>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={`/services#${service.id}`}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center"
                  >
                    <span className="mr-2">•</span> {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info - Moved to the rightmost */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-blue-400"></i>
                <span className="text-gray-300 text-sm">123 Business Street, City, State 12345</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-blue-400"></i>
                <a href="tel:+911234567890" className="text-gray-300 hover:text-white transition-colors text-sm">+91 12345 67890</a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-blue-400"></i>
                <a href="mailto:info@mh27packers.com" className="text-gray-300 hover:text-white transition-colors text-sm">info@mh27packers.com</a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock mr-3 text-blue-400"></i>
                <span className="text-gray-300 text-sm">Mon-Sun: 24/7 Available</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} MH27 Packers & Movers. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button onClick={() => scrollToSection('privacy')} className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </button>
              <button onClick={() => scrollToSection('terms')} className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </button>
              <a href="/sitemap.xml" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
