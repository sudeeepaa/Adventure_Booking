import UnsplashImage from "./components/UnsplashImage";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center mb-16 overflow-hidden">
        {/* Background Image */}
        <img
          src="/hero.jpg"
          alt="Mountain Adventure"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 w-full h-full bg-opacity-50" style={{ zIndex: 1 }} />
        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-4">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white tracking-widest mb-6 drop-shadow-2xl">
            ADVENTURE
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-[#e6e94f] font-medium max-w-2xl drop-shadow-lg">
            Create Your Outdoor Adventure. Discover With Us.
          </p>
          <a 
            href="/book" 
            className="mt-8 bg-[#e6e94f] text-[#181d1f] px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#e6e94f] transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Start Your Journey
          </a>
        </div>
      </section>

      {/* Wonders of Nature */}
      <section className="py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#e6e94f]">The Wonders Of Nature</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We seek to provide the authentic content for travellers around the world
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <UnsplashImage src="/camel-hill.jpg" alt="Camel Hill" />
          <UnsplashImage src="/havana-street.jpg" alt="Havana Street" />
          <UnsplashImage src="/chumig-brook.jpg" alt="Chumig Brook" />
          <UnsplashImage src="/red-mountain.jpg" alt="Red Mountain" />
        </div>
      </section>

      {/* Reasons */}
      <section className="py-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl my-16 mx-4">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#e6e94f]">
            Reasons For Choosing Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-[#e6e94f] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-[#181d1f] text-3xl font-bold">✓</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Tried and Trusted</h3>
              <p className="text-gray-300 leading-relaxed">
                We're trusted worldwide by 20 million travellers just like you.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-[#e6e94f] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-[#181d1f] text-3xl font-bold">☎</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Reliable Support</h3>
              <p className="text-gray-300 leading-relaxed">
                We're here for you. Reach out to us anytime by phone, email, or chat.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-[#e6e94f] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-[#181d1f] text-3xl font-bold">👥</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">One-stop Travel Partner</h3>
              <p className="text-gray-300 leading-relaxed">
                Your entire needs here. We've got your entire trip covered!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vacation Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <UnsplashImage src="/vacation1.jpg" alt="Vacation 1" />
            <UnsplashImage src="/vacation2.jpg" alt="Vacation 2" />
            <UnsplashImage src="/vacation3.jpg" alt="Vacation 3" />
            <UnsplashImage src="/vacation4.jpg" alt="Vacation 4" />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#e6e94f]">
              Here's what makes a vacation <span className="text-white">perfect for you!</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether you're planning a family vacation with your pet, a relaxing weekend getaway, or an adventurous excursion, vacation rentals are ideal for trips of all types. You can find everything from charming mountain cabins and lakeside lodges to breathtaking destinations.
            </p>
            <a 
              href="/book" 
              className="inline-block bg-[#e6e94f] text-[#181d1f] px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#e6e94f] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

            {/* Explore Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#e6e94f]">
            Explore The Nature With Us
          </h2>
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
            <UnsplashImage src="/explore-bg.jpg" alt="Forest" className="w-full h-[500px] object-cover" />

            {/* Overlayed labels */}
            <div className="absolute top-8 left-8 bg-[#181d1f]/80 text-[#e6e94f] px-6 py-4 rounded-lg max-w-xs">
              <p className="text-base md:text-lg leading-relaxed">
                Whether you're planning a family vacation with your pet, a relaxing weekend getaway, or connecting with 2 million travelers worldwide.
              </p>
            </div>

            <div className="absolute top-40 right-8 bg-[#181d1f]/80 text-[#e6e94f] px-6 py-4 rounded-lg max-w-xs">
              <p className="text-base md:text-lg leading-relaxed">
                Find the perfect trip—relaxing, adventurous, or family-friendly.
              </p>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-[#181d1f]/80 text-[#e6e94f] px-6 py-4 rounded-lg max-w-md text-center">
              <p className="text-base md:text-lg leading-relaxed">
                Create memories with vacations that truly fit your lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
