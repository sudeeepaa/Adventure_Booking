"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#181d1f] border-b-2 border-[#e6e94f] px-6 py-4 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="font-bold text-3xl text-[#e6e94f] hover:text-white transition-colors duration-300 cursor-pointer">
          Adventure
        </div>
        <div className="hidden md:flex gap-8 text-lg">
          <Link href="/" className="hover:text-white transition-colors duration-300 font-medium">
            Home
          </Link>
          <Link href="/about" className="hover:text-white transition-colors duration-300 font-medium">
            About
          </Link>
          <Link href="/blogs" className="hover:text-white transition-colors duration-300 font-medium">
            Blogs
          </Link>
          <Link href="/book" className="hover:text-white transition-colors duration-300 font-medium">
            Book Now
          </Link>
        </div>
        <button className="bg-[#e6e94f] text-[#181d1f] px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-[#e6e94f] transition-all duration-300 transform hover:scale-105 shadow-lg">
          Login
        </button>
      </div>
    </nav>
  );
}