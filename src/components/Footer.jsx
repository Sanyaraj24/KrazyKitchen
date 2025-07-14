//import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-bold mb-4">Krafty Kitchen</h3>
            <p className="text-gray-400 leading-relaxed">Delicious recipes from our kitchen to your kitchen.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-white transition">Home</a></li>
              <li><a href="/recipes" className="text-gray-300 hover:text-white transition">Recipes</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition">About Us</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-300">
              <li>123 Food Street</li>
              <li>Surat, Gujarat 395001</li>
              <li><a href="mailto:info@kraftykitchen.com" className="hover:text-white transition">info@kraftykitchen.com</a></li>
              <li><a href="tel:+919999999999" className="hover:text-white transition">+91 99999 99999</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-6">
              <a href="https://facebook.com/kraftykitchen" className="text-gray-300 hover:text-white transition text-3xl">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com/kraftykitchen" className="text-gray-300 hover:text-white transition text-3xl">
                <FaTwitter />
              </a>
              <a href="https://instagram.com/kraftykitchen" className="text-gray-300 hover:text-white transition text-3xl">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12 border-t border-gray-700 pt-6">
          <p className="text-gray-500 text-sm">© 2024 Krafty Kitchen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}