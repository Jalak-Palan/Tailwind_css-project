import React from 'react'

function Footer() {
    return (
       <footer className="bg-[#0f172a] text-gray-300 pt-16 pb-8">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

    {/* Brand */}
    <div>
      <h2 className="text-2xl font-bold text-white">
        Gen<span className="text-yellow-500">-Z</span>
      </h2>
      <p className="mt-4 text-sm">
        Helping brands grow with strategy, creativity and technology.
      </p>

      <div className="flex gap-4 mt-4 text-yellow-500">
        <i className="ri-facebook-fill"></i>
        <i className="ri-twitter-x-line"></i>
        <i className="ri-instagram-line"></i>
        <i className="ri-linkedin-box-fill"></i>
      </div>
    </div>

    {/* Links */}
    <div>
      <h3 className="text-white font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-yellow-500">Home</a></li>
        <li><a href="#" className="hover:text-yellow-500">About</a></li>
        <li><a href="#" className="hover:text-yellow-500">Career</a></li>
        <li><a href="#" className="hover:text-yellow-500">Services</a></li>
        <li><a href="#" className="hover:text-yellow-500">Contact</a></li>
      </ul>
    </div>

    {/* Services */}
    <div>
      <h3 className="text-white font-semibold mb-4">Services</h3>
      <ul className="space-y-2">
        <li>UI/UX Design</li>
        <li>Web Development</li>
        <li>Brand Strategy</li>
        <li>SEO</li>
        <li>Digital Marketing</li>
      </ul>
    </div>

    {/* Newsletter */}
    <div>
      <h3 className="text-white font-semibold mb-4">Newsletter</h3>
      <p className="text-sm mb-4">
        Subscribe to get updates about our latest projects.
      </p>

      <div className="flex">
        <input
          type="email"
          placeholder="Enter email"
          className="w-full px-3 py-2 rounded-l-md text-black outline-none bg-gray-200"
        />
        <button className="bg-yellow-500 px-4 rounded-r-md text-black font-semibold">
          Join
        </button>
      </div>
    </div>

  </div>

  {/* Bottom */}
  <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
    &copy; 2026 Gen-Z . All rights reserved.
  </div>
</footer>
    )
}

export default Footer