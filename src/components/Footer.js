import React from 'react';
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#0D1849] text-white w-full py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left">
        <div className="flex flex-col justify-between p-4">
          <div className="flex justify-center md:justify-start">
            <img src={logo} alt="Orinix" className="h-8" />
          </div>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="https://twitter.com" aria-label="Twitter">
              <img src={logo} alt="Twitter" className="h-6" />
            </a>
            <a href="https://facebook.com" aria-label="Facebook">
              <img src={logo} alt="Facebook" className="h-6" />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <img src={logo} alt="LinkedIn" className="h-6" />
            </a>
          </div>
          <p className='mt-4 text-sm'>© 2024 Orinix reserved.</p>
        </div>
        <div className="flex flex-col pt-8 md:pt-0 text-sm">
          <h2 className="font-bold mb-2">Product</h2>
          <ul>
            <li><a href="#" className="hover:underline">Landingpage</a></li>
            <li><a href="#" className="hover:underline">Features</a></li>
            <li><a href="#" className="hover:underline">Documentation</a></li>
            <li><a href="#" className="hover:underline">Referral Program</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
          </ul>
        </div>
        <div className="flex flex-col pt-8 md:pt-0 text-sm">
          <h2 className="font-bold mb-2">Services</h2>
          <ul>
            <li><a href="#" className="hover:underline">Documentation</a></li>
            <li><a href="#" className="hover:underline">Design</a></li>
            <li><a href="#" className="hover:underline">Themes</a></li>
            <li><a href="#" className="hover:underline">Illustrations</a></li>
            <li><a href="#" className="hover:underline">UI Kit</a></li>
          </ul>
        </div>
        <div className="flex flex-col pt-8 md:pt-0 text-sm">
          <h2 className="font-bold mb-2">Company</h2>
          <ul>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Terms</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
          </ul>
        </div>
        <div className="flex flex-col pt-8 md:pt-0 text-sm">
          <h2 className="font-bold mb-2">More</h2>
          <ul>
            <li><a href="#" className="hover:underline">Documentation</a></li>
            <li><a href="#" className="hover:underline">License</a></li>
            <li><a href="#" className="hover:underline">Changelog</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
