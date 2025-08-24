"use client";
import { useState } from "react";
import UnsplashImage from "../components/UnsplashImage";

export default function Book() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    adventureType: "",
    startDate: "",
    endDate: "",
    participants: 1,
    specialRequests: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const adventureTypes = [
    {
      id: "mountain-hiking",
      name: "Mountain Hiking",
      description: "Explore breathtaking mountain trails with experienced guides",
      image: "/camel-hill.jpg",
      duration: "1-7 days",
      difficulty: "Beginner to Advanced"
    },
    {
      id: "forest-camping",
      name: "Forest Camping",
      description: "Immerse yourself in nature with guided camping experiences",
      image: "/explore-bg.jpg",
      duration: "2-5 days",
      difficulty: "Beginner to Intermediate"
    },
    {
      id: "wildlife-safari",
      name: "Wildlife Safari",
      description: "Discover amazing wildlife in their natural habitats",
      image: "/red-mountain.jpg",
      duration: "1-3 days",
      difficulty: "All Levels"
    },
    {
      id: "water-adventures",
      name: "Water Adventures",
      description: "Kayaking, rafting, and water-based exploration",
      image: "/chumig-brook.jpg",
      duration: "1-4 days",
      difficulty: "Beginner to Advanced"
    },
    {
      id: "cultural-tours",
      name: "Cultural Tours",
      description: "Experience local cultures and traditions",
      image: "/havana-street.jpg",
      duration: "1-5 days",
      difficulty: "All Levels"
    },
    {
      id: "photography-expeditions",
      name: "Photography Expeditions",
      description: "Capture stunning landscapes with professional guidance",
      image: "/vacation1.jpg",
      duration: "2-6 days",
      difficulty: "Intermediate to Advanced"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage("✅ " + result.message);
        setFormData({
          name: "",
          email: "",
          phone: "",
          adventureType: "",
          startDate: "",
          endDate: "",
          participants: 1,
          specialRequests: ""
        });
      } else {
        setSubmitMessage("❌ " + result.message);
      }
    } catch (error) {
      setSubmitMessage("❌ Failed to send booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#e6e94f]">Book Your Adventure</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Ready to embark on an unforgettable journey? Choose your adventure and let us handle the rest.
        </p>
      </section>

      {/* Adventure Types */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#e6e94f]">Choose Your Adventure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adventureTypes.map((adventure) => (
              <div 
                key={adventure.id}
                className={`bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer border-2 ${
                  formData.adventureType === adventure.id ? 'border-[#e6e94f]' : 'border-transparent'
                }`}
                onClick={() => setFormData(prev => ({ ...prev, adventureType: adventure.id }))}
              >
                <div className="relative">
                  <UnsplashImage src={adventure.image} alt={adventure.name} />
                  <div className="absolute top-4 right-4 bg-[#e6e94f] text-[#181d1f] px-3 py-1 rounded-full text-sm font-bold">
                    {adventure.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{adventure.name}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{adventure.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#e6e94f] text-sm font-medium">Difficulty: {adventure.difficulty}</span>
                    <button 
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        formData.adventureType === adventure.id
                          ? 'bg-[#e6e94f] text-[#181d1f]'
                          : 'bg-gray-700 text-gray-300 hover:bg-[#e6e94f] hover:text-[#181d1f]'
                      }`}
                    >
                      {formData.adventureType === adventure.id ? 'Selected' : 'Select'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#e6e94f]">Book Your Adventure</h2>
            
            {submitMessage && (
              <div className={`mb-6 p-4 rounded-lg text-center font-medium ${
                submitMessage.includes('✅') 
                  ? 'bg-green-900 text-green-100 border border-green-700' 
                  : 'bg-red-900 text-red-100 border border-red-700'
              }`}>
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-[#e6e94f] focus:outline-none focus:ring-2 focus:ring-[#e6e94f] focus:ring-opacity-50"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-[#e6e94f] focus:outline-none focus:ring-2 focus:ring-[#e6e94f] focus:ring-opacity-50"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-[#e6e94f] focus:outline-none focus:ring-2 focus:ring-[#e6e94f] focus:ring-opacity-50"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="participants" className="block text-white font-medium mb-2">Number of Participants *</label>
                  <select
                    id="participants"
                    name="participants"
                    value={formData.participants}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-[#e6e94f] focus:outline-none focus:ring-2 focus:ring-[#e6e94f] focus:ring-opacity-50"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="startDate" className="block text-white font-medium mb-2">Start Date *</label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-[#e6e94f] focus:outline-none focus:ring-2 focus:ring-[#e6e94f] focus:ring-opacity-50"
                  />
                </div>
                
                <div>
                  <label htmlFor="endDate" className="block text-white font-medium mb-2">End Date *</label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleInputChange}
                    required
                    min={formData.startDate || new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-[#e6e94f] focus:outline-none focus:ring-2 focus:ring-[#e6e94f] focus:ring-opacity-50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="specialRequests" className="block text-white font-medium mb-2">Special Requests</label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-[#e6e94f] focus:outline-none focus:ring-2 focus:ring-[#e6e94f] focus:ring-opacity-50"
                  placeholder="Any special requirements or requests for your adventure..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.adventureType}
                  className={`px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                    isSubmitting || !formData.adventureType
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      : 'bg-[#e6e94f] text-[#181d1f] hover:bg-white hover:text-[#e6e94f]'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Book Your Adventure'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#e6e94f]">Why Book With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#e6e94f] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-[#181d1f] text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Expert Guides</h3>
              <p className="text-gray-300">Our certified guides ensure safe and memorable adventures.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#e6e94f] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-[#181d1f] text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Safe & Secure</h3>
              <p className="text-gray-300">Your safety is our top priority with comprehensive insurance coverage.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#e6e94f] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-[#181d1f] text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Quality Equipment</h3>
              <p className="text-gray-300">We provide top-quality gear and equipment for all adventures.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}