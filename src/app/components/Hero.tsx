import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaSnapchat, FaTelegram } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="flex flex-col pt-42 items-center justify-center text-center min-h-screen h-auto text-white px-6 bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat pb-20">
      <h2 className="text-4xl font-semibold text-gray-300">Your Ultimate Marketing & Branding Partner</h2>
      <h1 className="text-6xl font-bold mt-4">
        {/* <span className="text-green-400">Online Business </span>
        <span className="text-white">With </span> */}
        <span className="text-green-400">MediaTexa</span>
      </h1>
      <p className="text-lg text-gray-400 mt-6 max-w-3xl">
        At <span className="text-green-400">MediaTexa</span>, we bring your brand to life with innovative marketing solutions, cutting-edge designs, and strategic digital campaigns. Whether you're looking for a powerful online presence, impactful advertising, or high-quality printing, we’ve got you covered. Let’s transform your ideas into reality!
      </p>

      {/* Social Media Icons Section */}
      <div className="flex flex-wrap justify-center space-x-4 mt-8">
        {[
          { icon: <FaFacebookF />, link: "https://www.facebook.com/share/1Ha29LBQGg/" },
          { icon: <FaSnapchat />, link: "https://www.snapchat.com/add/mediatexa?share_id=1pPBwPDsRjOzu4ieKnc8sw&locale=en_US" },
          { icon: <FaInstagram />, link: "https://www.instagram.com/mediatexa?igsh=dDhwb3h1dnl3Ynpp" },
          { icon: <FaTiktok />, link: "https://www.tiktok.com/@media.texa?_t=ZS-8uDPpqhcgTa&_r=1" },
          { icon: <FaYoutube />, link: "https://youtube.com/@mediatexa?si=C0rKEjEDhRpdG1Un" },
          { icon: <FaTelegram />, link: "https://t.me/mediatexa" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="w-14 h-14 flex items-center justify-center bg-green-400 hover:bg-green-700 text-black rounded-full text-2xl transition-transform transform hover:scale-110"
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* Custom Section */}
      <div className="relative w-full max-w-6xl mx-auto rounded-2xl overflow-hidden mt-10">
        {/* Background Image */}
        <div
          className="h-64 md:h-80 bg-cover bg-center"
          style={{ backgroundImage: "url('/mt.png')" }}
        ></div>

        {/* Play Button */}
        <button className="absolute bottom-4 right-4 w-24 h-24 flex items-center justify-center bg-black bg-opacity-70 text-white rounded-full text-2xl hover:scale-110 transition-transform">
          ▶
        </button>
      </div>
    </div>
  );
};

export default Hero;
