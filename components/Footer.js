import Link from "next/link";
import React from "react";


const Footer = () => {
  return (
    <footer className="w-full text-center py-4 bg-green-900 text-white mt-6 flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-between px-4 md:px-10 fixed bottom-0">
      <div>
        MADE WITH <span className="text-red-500">♥</span> BY AADEESH
      </div>
      <div className="flex gap-4 text-sm flex-wrap justify-center">
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
        <Link href="https://github.com/AadeeshRS/Trimzy" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</Link>
      </div>
      <div className="text-xs text-gray-300 mt-1">
        &copy; {new Date().getFullYear()} Trimzy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;