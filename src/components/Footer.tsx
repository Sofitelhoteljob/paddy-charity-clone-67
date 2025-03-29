
import React from 'react';
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charity-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 text-charity-green" size={18} />
                <span>Plot 123, Charity Street, Kampala, Uganda</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-charity-green" size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-charity-green" size={18} />
                <span>info@paddydemo.org</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="bg-charity-green p-2 rounded-full hover:bg-charity-green-light transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-charity-green p-2 rounded-full hover:bg-charity-green-light transition">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-charity-green p-2 rounded-full hover:bg-charity-green-light transition">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-charity-green p-2 rounded-full hover:bg-charity-green-light transition">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-6">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/causes" className="hover:text-charity-green transition flex items-center">
                  <span className="text-charity-green mr-2">›</span> Causes
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-charity-green transition flex items-center">
                  <span className="text-charity-green mr-2">›</span> Events
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-charity-green transition flex items-center">
                  <span className="text-charity-green mr-2">›</span> Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-charity-green transition flex items-center">
                  <span className="text-charity-green mr-2">›</span> Blog
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="hover:text-charity-green transition flex items-center">
                  <span className="text-charity-green mr-2">›</span> Volunteer
                </Link>
              </li>
              <li>
                <Link to="/donate" className="hover:text-charity-green transition flex items-center">
                  <span className="text-charity-green mr-2">›</span> Donate
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Gallery */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="h-20 bg-gray-700 rounded overflow-hidden">
                  <img 
                    src={`/placeholder.svg`} 
                    alt="Gallery" 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Paddy Demo. All Rights Reserved.</p>
          <p className="mt-2">Kampala, Uganda</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
