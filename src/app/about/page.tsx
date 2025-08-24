import UnsplashImage from "../components/UnsplashImage";

export default function About() {
  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#e6e94f]">About Adventure</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          We are passionate about nature and adventure, dedicated to creating unforgettable experiences for travelers worldwide.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#e6e94f]">Our Mission</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                At Adventure, we believe that everyone deserves to experience the wonders of nature. Our mission is to connect people with the most breathtaking destinations on Earth, providing authentic, sustainable, and unforgettable travel experiences.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We're committed to preserving the natural beauty of our planet while sharing it with responsible travelers who appreciate and respect the environment.
              </p>
            </div>
            <div className="relative">
              <UnsplashImage src="/explore-bg.jpg" alt="Nature Exploration" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl mx-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#e6e94f]">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-[#e6e94f] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-[#181d1f] text-3xl font-bold">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Sustainability</h3>
              <p className="text-gray-300 leading-relaxed">
                We prioritize eco-friendly practices and support local communities to ensure our adventures benefit both travelers and destinations.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-[#e6e94f] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-[#181d1f] text-3xl font-bold">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Safety First</h3>
              <p className="text-gray-300 leading-relaxed">
                Your safety is our top priority. We maintain the highest standards in all our adventures and partner with certified guides.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-[#e6e94f] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-[#181d1f] text-3xl font-bold">💎</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Quality Experience</h3>
              <p className="text-gray-300 leading-relaxed">
                We curate only the best experiences, ensuring every adventure exceeds your expectations and creates lasting memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#e6e94f]">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#e6e94f] mb-2">20M+</div>
              <p className="text-gray-300">Happy Travelers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#e6e94f] mb-2">150+</div>
              <p className="text-gray-300">Destinations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#e6e94f] mb-2">15+</div>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#e6e94f] mb-2">98%</div>
              <p className="text-gray-300">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#e6e94f]">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="/priya menon.jpeg" 
                  alt="Team Member 1" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Sarah Johnson</h3>
              <p className="text-[#e6e94f] font-medium mb-2">Founder & CEO</p>
              <p className="text-gray-300 text-sm">
                Passionate adventurer with 20+ years of experience in sustainable tourism.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="/rahul verma.jpeg" 
                  alt="Team Member 2" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Mike Chen</h3>
              <p className="text-[#e6e94f] font-medium mb-2">Head of Operations</p>
              <p className="text-gray-300 text-sm">
                Expert in logistics and ensuring smooth adventure experiences worldwide.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="/sneha rao.jpeg" 
                  alt="Team Member 3" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Emma Rodriguez</h3>
              <p className="text-[#e6e94f] font-medium mb-2">Lead Guide</p>
              <p className="text-gray-300 text-sm">
                Certified wilderness guide with expertise in mountain and forest adventures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#e6e94f]">Ready to Start Your Adventure?</h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Join thousands of travelers who have discovered the world with us. Let's create your next unforgettable experience together.
          </p>
          <a 
            href="/book" 
            className="inline-block bg-[#e6e94f] text-[#181d1f] px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#e6e94f] transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book Your Adventure
          </a>
        </div>
      </section>
    </div>
  );
}