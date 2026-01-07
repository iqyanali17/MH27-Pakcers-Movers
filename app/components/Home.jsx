import HomeServices from './HomeServices';
import WhoWeAre from './WhoWeAre';
import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home({ setPage, openModal }) {
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:960px)');
  const router = useRouter();

  return (
    <div className="fade-in">
      <section>
        <div className="hero-bg h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] flex items-center justify-center text-center relative">
          <div className="absolute inset-0 bg-black opacity-40"></div>

          <div className="relative z-10 text-white max-w-4xl px-4 sm:px-6 md:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6">
              We are providing Packers & Movers all over india <br />
              <span className="text-blue-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">All india service available</span>
            </h1>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <button 
                onClick={openModal} 
                className="bg-orange-500 hover:bg-orange-600 transition-colors px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base"
              >
                Book Now
              </button>
              <button
                onClick={() => router.push('/services')}
                className="border-2 border-white hover:bg-white hover:bg-opacity-10 transition-colors px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base"
              >
                Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <WhoWeAre />

      {/* Services Section */}
      <HomeServices />

      {/* Important Links Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Important Information</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Everything you need to know about our services, policies, and terms
            </p>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-blue-500 mx-auto mt-4 sm:mt-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white rounded-lg shadow-md sm:shadow-lg p-4 sm:p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-blue-100 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Privacy Policy</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-2">
                Learn how we protect your personal information and ensure your privacy is maintained throughout our service.
              </p>
              <Link href="/privacy" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base">
                Read Privacy Policy
                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md sm:shadow-lg p-4 sm:p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-green-100 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Terms of Service</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-2">
                Understand our terms, conditions, and service agreements for a transparent moving experience.
              </p>
              <Link href="/terms" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base">
                Read Terms of Service
                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md sm:shadow-lg p-4 sm:p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-orange-100 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Refund Policy</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-2">
                Clear information about our cancellation and refund policies for your peace of mind.
              </p>
              <Link href="/refund" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base">
                Read Refund Policy
                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}