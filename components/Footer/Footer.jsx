import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-sky-900 h-68 to-indigo-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <h1 className="text-3xl font-bold">The Inclusive India</h1>
            <p className="mt-2">Your daily dose of unbiased news</p>
          </div>
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul>
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3">
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="hover:text-gray-400"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#twitter"
                aria-label="Twitter"
                className="hover:text-gray-400"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="hover:text-gray-400"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="hover:text-gray-400"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p>&copy; 2024 The Inclusive India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
