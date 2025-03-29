"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
    <nav className="flex items-center justify-between p-2 bg-black text-white w-full shadow-lg border-b-2 fixed top-0 left-0 right-0 z-50">
      {/* Logo */}
      <div className="flex items-center p-2">
        <Link href="/">
          <Image src="/logo1.png" alt="Logo" width={200} height={200} className="cursor-pointer" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6">
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
                className="absolute inset-0 bg-[#10e34fff] rounded-full"
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
        className="md:hidden p-2 rounded-lg focus:outline-none z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation with Side Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed top-0 right-0 h-full w-3/4 md:w-1/3 border-l-4 bg-black text-white flex flex-col items-center py-4 space-y-4 shadow-lg z-40"
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-lg focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              <X size={28} />
            </button>
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
                    className="absolute inset-0 bg-[#10e34fff] rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {item.icon} {item.name}
                </span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
