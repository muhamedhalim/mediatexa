"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X, Home, User, Briefcase, Layers, Mail, BookOpen } from "lucide-react"; 

export const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/", icon: <Home size={18} /> },
    { name: "About", link: "/about", icon: <User size={18} /> },
    { name: "Services", link: "/services", icon: <Briefcase size={18} /> },
    { name: "Portfolio", link: "/portfolio", icon: <Layers size={18} /> },
    { name: "Contact", link: "/contact", icon: <Mail size={18} /> },
    { name: "Blog", link: "/blog", icon: <BookOpen size={18} /> },
  ];

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-400 text-white">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image src="/Untitled-1.png" alt="Logo" width={50} height={50} className="cursor-pointer" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex relative bg-black p-2 rounded-full space-x-4">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            onClick={() => setActive(item.name)}
            className="relative flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300"
          >
            {active === item.name && (
              <motion.div
                layoutId="active"
                className="absolute inset-0 bg-yellow-500 rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1">
              {item.icon} {item.name}
            </span>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-lg focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-400 text-white flex flex-col items-center py-4 space-y-4 md:hidden">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              onClick={() => {
                setActive(item.name);
                setIsOpen(false);
              }}
              className="relative flex items-center gap-2 px-4 py-2 text-lg font-medium transition-all duration-300 w-full text-center"
            >
              {active === item.name && (
                <motion.div
                  layoutId="active-mobile"
                  className="absolute inset-0 bg-yellow-500 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {item.icon} {item.name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
