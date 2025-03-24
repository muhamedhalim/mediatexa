"use client";
import { useState } from "react";
import Link from "next/link";
import { cn } from "../../../untils/cn";
import Image from "next/image";

export const Navbar = () => {
  const [active, setActive] = useState("Home");

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="flex items-center justify-between p-4 bg-amber-50 text-white border-b border-gray-200">
    {/* Logo Section */}
    <div className="flex items-center gap-2">
      <Link href="/">
        <Image src="/Untitled-1.png" alt="Logo" width={70} height={70} className="rounded-full cursor-pointer" />
      </Link>
    </div>
      
      {/* Navigation Links - Centered */}
      <div className="flex-grow flex justify-center">
        <div className="flex bg-black text-white p-2 rounded-full border border-gray-800 relative">
          {navItems.map((item, index) => (
            <Link 
              key={index}
              href={item.link}
              onClick={() => setActive(item.name)}
              className={cn(
                "relative px-6 py-2 text-sm font-medium transition-all duration-300 rounded-full",
                active === item.name
                  ? "bg-white text-black shadow-md"
                  : "hover:bg-yellow-500 hover:text-black"
              )}
            >
              {item.name}
              {active === item.name && (
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-600 rounded-full blur-md opacity-40"></span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
