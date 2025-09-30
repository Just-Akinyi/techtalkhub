import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <div
      className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-red-900 text-white py-16 px-6 md:px-20 overflow-hidden"
      style={{
        backgroundImage: 'url("/your-image.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay with blur effect */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between">
        {/* Left: Form Section */}
        <div className="w-full md:w-2/3 mb-10 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="mb-10 text-gray-300 max-w-md">
            Don’t be shy. Give us a call or drop us a line. Let’s make some
            magic together.
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-md text-black">
            <input
              type="text"
              placeholder="First Name"
              className="p-3 border rounded"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-3 border rounded"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="p-3 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 border rounded"
            />
            <input
              type="text"
              placeholder="Group or Company"
              className="p-3 border rounded md:col-span-2"
            />
            <textarea
              placeholder="How can we help?"
              rows="4"
              className="p-3 border rounded md:col-span-2"
            ></textarea>
            <button className="bg-red-600 text-white font-semibold py-3 rounded-md hover:bg-red-700 transition md:col-span-2">
              &#9993; SUBMIT
            </button>
          </form>
        </div>

        {/* Right: Contact Info Section */}
        <div className="w-full md:w-1/3 bg-gray-900/90 p-6 rounded-md backdrop-blur-sm">
          <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>
          <div className="mb-4 flex items-center space-x-3">
            <FaPhone className="text-red-500" />
            <span>+254 704 494 504</span>
          </div>
          <div className="mb-4 flex items-center space-x-3">
            <FaEnvelope className="text-red-500" />
            <span>admin@techtalkhub.com</span>
          </div>
          <div className="flex space-x-4 mt-6">
            <a href="https://www.facebook.com/" className="text-white hover:text-red-500">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com/" className="text-white hover:text-red-500">
              <FaTwitter />
            </a>
            <a href="https://www.youtube.com/" className="text-white hover:text-red-500">
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com/" className="text-white hover:text-red-500">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}