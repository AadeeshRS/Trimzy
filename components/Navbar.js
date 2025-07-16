"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-green-900 text-white p-3 px-5 w-full">
      <div className="flex justify-between items-center">
        <div className="logo font-bold text-xl">
          <Link href="/">Trimzy</Link>
        </div>
        <button
          className="md:hidden flex flex-col justify-center items-center"
          onClick={() => setMenuOpen(!menuOpen)}>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
        <ul className="hidden md:flex justify-center gap-5 items-center">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/shorten">Shorten</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
          <li className='flex gap-5'>
            <Link href="/shorten">
              <button className='bg-green-400 p-1.5 px-3 rounded-md cursor-pointer font-bold text-black hover:text-black hover:bg-green-500 transition-all duration-150'>Try Now</button>
            </Link>
            <Link href="https://github.com/AadeeshRS/Trimzy">
              <button className='bg-green-400 p-1.5 px-3 rounded-md cursor-pointer font-bold text-black hover:text-black hover:bg-green-500 transition-all duration-150'>Github</button>
            </Link>
          </li>
        </ul>
      </div>
      
      {menuOpen && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden animate-fade-in">
          <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link href="/shorten" onClick={() => setMenuOpen(false)}>Shorten</Link></li>
          <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
          <li className='flex flex-col gap-2'>
            <Link href="/shorten" onClick={() => setMenuOpen(false)}>
              <button className='bg-green-400 p-1.5 px-3 rounded-md cursor-pointer font-bold text-black hover:text-black hover:bg-green-500 transition-all duration-150 w-full'>Try Now</button>
            </Link>
            <Link href="/github" onClick={() => setMenuOpen(false)}>
              <button className='bg-green-400 p-1.5 px-3 rounded-md cursor-pointer font-bold text-black hover:text-black hover:bg-green-500 transition-all duration-150 w-full'>Github</button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
