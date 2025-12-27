import HomeServices from './HomeServices';
import WhoWeAre from './WhoWeAre';
import { useMediaQuery } from '@mui/material';

export default function Home({ setPage, openModal }) {
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:960px)');

  return (
    <div className="fade-in">
      <section>
        <div className="hero-bg h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] flex items-center justify-center text-center relative">
          <div className="absolute inset-0 bg-black opacity-40"></div>

          <div className="relative z-10 text-white max-w-4xl px-4 sm:px-6 md:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6">
              Reliable Packers & Movers <br />
              <span className="text-blue-400">Since 2013</span>
            </h1>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <button 
                onClick={openModal} 
                className="bg-orange-500 hover:bg-orange-600 transition-colors px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base"
              >
                Book Now
              </button>
              <button
                onClick={() => setPage("services")}
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
    </div>
  );
}