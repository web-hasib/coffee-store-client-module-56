import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';



const Footer = () => {
  return (
    <div style={{backgroundImage:`url('https://i.ibb.co/CpCMtPPK/13.jpg')`}}>
    <footer className="max-w-7xl mx-auto py-10  flex flex-wrap justify-around items-start  border-gray-800">
      {/* Left Section */}
      <div className="flex-1 min-w-[300px] m-5">
        <img className='w-20' src="https://i.ibb.co/0RydLbzP/logo1.png" alt="" />
        <h2 className="text-2xl text-[#4a2c2a] mb-3 primary-font">Espresso Emporium</h2>
        <p className="text-sm text-gray-600 mb-5">
          Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.
        </p>
        <div className="flex gap-3 mb-5">
          <a href="#" className="text-gray-800 hover:text-[#4a2c2a]"><FaFacebookF size={24} /></a>
          <a href="#" className="text-gray-800 hover:text-[#4a2c2a]"><FaTwitter size={24} /></a>
          <a href="#" className="text-gray-800 hover:text-[#4a2c2a]"><FaInstagram size={24} /></a>
          <a href="#" className="text-gray-800 hover:text-[#4a2c2a]"><FaLinkedinIn size={24} /></a>
        </div>
        <div className="text-sm text-gray-600 primary-font">
          <h3 className="text-lg text-[#4a2c2a] mb-3">Get in Touch</h3>
          <p className="mb-2 flex items-center"><FaPhoneAlt className="mr-2" /> +88 01533 333 333</p>
          <p className="mb-2 flex items-center"><FaEnvelope className="mr-2" /> info@gmail.com</p>
          <p className="flex items-center"><FaMapMarkerAlt className="mr-2" /> 72, Wall Street, King Road, Dhaka</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 min-w-[300px] m-5">
        <h2 className="text-2xl text-[#4a2c2a] mb-5">Connect with Us</h2>
        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Name"
            className="p-3 bg-white border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#4a2c2a]"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 border bg-white border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#4a2c2a]"
            required
          />
          <textarea
            placeholder="Message"
            className="p-3 border bg-white border-gray-200 rounded-md text-sm h-20 resize-none focus:outline-none focus:ring-1 focus:ring-[#4a2c2a]"
            required
          />
          <button
            type="submit"
            className="self-end px-5 py-2 border border-[#4a2c2a] text-[#4a2c2a] rounded-full hover:bg-[#4a2c2a] hover:text-white transition primary-font "
          >
            Send Message
          </button>
        </form>
      </div>

    </footer>
      {/* Copyright */}
      <div style={{ backgroundImage: `url('https://i.ibb.co/KpHkpK0v/8.png')`,
      textShadow: '0 0 1px #ffff00, 0 0 1px #00ff00, 0 0 1px #eeff00, 0 0 1px #ffffee'
       }} className="w-full text-gray-300  text-center py-3 py-5 primary-font">
        © Copyright Espresso Emporium ! All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;