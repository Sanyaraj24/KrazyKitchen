//mport React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center space-y-6 md:space-y-0 md:space-x-12">
          {/* Company Info */}
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Krafty Kitchen</h3>
            <p className="text-gray-400">Delicious recipes from our kitchen to your kitchen.</p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="list-none space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition duration-300">Home</a></li>
              <li><a href="/recipes" className="text-gray-300 hover:text-white transition duration-300">Recipes</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition duration-300">About Us</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <ul className="list-none space-y-2">
              <li className="text-gray-300">123 Food Street</li>
              <li className="text-gray-300">Surat, Gujarat 395001</li>
              <li><a href="mailto:info@kraftykitchen.com" className="text-gray-300 hover:text-white transition duration-300">info@kraftykitchen.com</a></li>
              <li><a href="tel:+919999999999" className="text-gray-300 hover:text-white transition duration-300">+91 99999 99999</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h4 className="text-lg font-semibold mb-2 mr-56">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://facebook.com/kraftykitchen" className="text-gray-300 hover:text-white transition duration-300 text-xl">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/kraftykitchen" className="text-gray-300 hover:text-white transition duration-300 text-xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com/kraftykitchen" className="text-gray-300 hover:text-white transition duration-300 text-xl">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">© 2024 Krafty Kitchen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
