'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import QuoteModal from '../../components/QuoteModal';
import Services from '../../components/Services';

export default function SindhudurgPage() {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    moveFrom: '',
    moveTo: '',
    moveDate: '',
    items: '',
    message: ''
  });
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const handleOpenModal = () => {
    setShowQuoteForm(true);
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    console.log('Quote form submitted:', formData);
    alert('Thank you for your quote request! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      moveFrom: '',
      moveTo: '',
      moveDate: '',
      items: '',
      message: ''
    });
    setShowQuoteForm(false);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const toggleQuestion = (questionId) => {
    setExpandedQuestion(expandedQuestion === questionId ? null : questionId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header openModal={handleOpenModal} />
      
      <main className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Packers and Movers in Sindhudurg
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MH27 Packers & Movers - Professional relocation services in Sindhudurg with reliable packing and moving solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose MH27 in Sindhudurg?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Coastal District</h3>
                    <p className="text-gray-600">Strategic location serving coastal Konkan region.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Timely Service</h3>
                    <p className="text-gray-600">Punctual pickup and delivery with real-time tracking.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Affordable Pricing</h3>
                    <p className="text-gray-600">Competitive rates with no hidden charges.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Services in Sindhudurg</h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-gray-900 mb-2">Residential Moving</h3>
                  <p className="text-gray-600">Complete home relocation services.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-gray-900 mb-2">Commercial Moving</h3>
                  <p className="text-gray-600">Office and business relocation.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-gray-900 mb-2">Vehicle Transportation</h3>
                  <p className="text-gray-600">Car and bike transport services.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-gray-900 mb-2">Storage Solutions</h3>
                  <p className="text-gray-600">Short-term and long-term storage.</p>
                </div>
              </div>
            </div>

          <div className="bg-blue-50 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Areas We Serve in Sindhudurg</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Sindhudurg City</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Kudal</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Sawantwadi</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Free Quote for Sindhudurg Moving</h2>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Call Us Now: +91 12345 67890
            </button>
          </div>
        </div>
        </div>
      </main>

      <Footer currentPage="sindhudurg" openModal={handleOpenModal} />
    </div>
  );
}
