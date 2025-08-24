import UnsplashImage from "../components/UnsplashImage";

export default function Blogs() {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Mountain Hiking Destinations for 2024",
      excerpt: "Discover the most breathtaking mountain trails that will challenge and inspire you this year.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      category: "Hiking",
      readTime: "5 min read",
      image: "/camel-hill.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Essential Camping Gear for Beginners",
      excerpt: "Everything you need to know about camping equipment when starting your outdoor adventure journey.",
      author: "Mike Chen",
      date: "March 12, 2024",
      category: "Camping",
      readTime: "8 min read",
      image: "/havana-street.jpg"
    },
    {
      id: 3,
      title: "Sustainable Travel: How to Explore Responsibly",
      excerpt: "Learn about eco-friendly travel practices that help preserve our planet's natural beauty.",
      author: "Emma Rodriguez",
      date: "March 10, 2024",
      category: "Sustainability",
      readTime: "6 min read",
      image: "/chumig-brook.jpg"
    },
    {
      id: 4,
      title: "Wildlife Photography Tips for Nature Enthusiasts",
      excerpt: "Capture stunning wildlife moments with these professional photography techniques.",
      author: "David Wilson",
      date: "March 8, 2024",
      category: "Photography",
      readTime: "7 min read",
      image: "/red-mountain.jpg"
    },
    {
      id: 5,
      title: "Best Time to Visit National Parks",
      excerpt: "Plan your national park visits with our seasonal guide for optimal experiences.",
      author: "Lisa Thompson",
      date: "March 5, 2024",
      category: "Travel Tips",
      readTime: "4 min read",
      image: "/vacation1.jpg"
    },
    {
      id: 6,
      title: "Adventure Safety: Essential Guidelines",
      excerpt: "Stay safe during your outdoor adventures with these crucial safety tips and guidelines.",
      author: "John Davis",
      date: "March 3, 2024",
      category: "Safety",
      readTime: "9 min read",
      image: "/vacation2.jpg"
    }
  ];

  const categories = ["All", "Hiking", "Camping", "Sustainability", "Photography", "Travel Tips", "Safety"];

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#e6e94f]">Adventure Blog</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Discover inspiring stories, expert tips, and insider knowledge to enhance your outdoor adventures.
        </p>
      </section>

      {/* Categories */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  category === "All"
                    ? "bg-[#e6e94f] text-[#181d1f]"
                    : "bg-gray-700 text-gray-300 hover:bg-[#e6e94f] hover:text-[#181d1f]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-[#e6e94f]">Featured Post</h2>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              <div className="relative">
                <UnsplashImage src={blogPosts[0].image} alt={blogPosts[0].title} />
                <div className="absolute top-4 left-4 bg-[#e6e94f] text-[#181d1f] px-3 py-1 rounded-full text-sm font-bold">
                  Featured
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-[#e6e94f] text-[#181d1f] px-3 py-1 rounded-full text-sm font-bold">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-gray-400 text-sm">{blogPosts[0].readTime}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#e6e94f] flex items-center justify-center">
                      <span className="text-[#181d1f] font-bold text-sm">
                        {blogPosts[0].author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-medium">{blogPosts[0].author}</p>
                      <p className="text-gray-400 text-sm">{blogPosts[0].date}</p>
                    </div>
                  </div>
                  <button className="bg-[#e6e94f] text-[#181d1f] px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-[#e6e94f] transition-all duration-300">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-[#e6e94f]">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="relative">
                  <UnsplashImage src={post.image} alt={post.title} />
                  <div className="absolute top-4 left-4 bg-[#e6e94f] text-[#181d1f] px-3 py-1 rounded-full text-sm font-bold">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                    <span className="text-gray-400 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#e6e94f] flex items-center justify-center">
                        <span className="text-[#181d1f] font-bold text-xs">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-white text-sm font-medium">{post.author}</span>
                    </div>
                    <button className="text-[#e6e94f] hover:text-white transition-colors duration-300 font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl mx-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#e6e94f]">Stay Updated</h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Subscribe to our newsletter for the latest adventure tips, destination guides, and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-[#e6e94f] focus:outline-none focus:ring-2 focus:ring-[#e6e94f] focus:ring-opacity-50"
            />
            <button className="bg-[#e6e94f] text-[#181d1f] px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-[#e6e94f] transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}