'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="fixed w-full h-24 z-40 bg-black">
        <div className="h-full w-full mx-auto px-8 flex items-center justify-between">
          {/* Logo - forced to left */}
          <div className="flex-shrink-0  lg:ml-28 navbar-logo">
            <Link href="/">
              <Image
                src="/logos/logo1.png"
                width={150}
                height={50}
                alt="Company Logo"
                className="lg:h-12 md:h-12 h-8 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - hidden on mobile */}
          <div className="hidden md:flex lg:space-x-16 md:space-x-8 md:text-sm  lg:text-base mx-4 flex-grow justify-center navbar-custom">
            <Link href="#" className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300">
              Home
            </Link>
            <Link href="#" className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300">
              About Us
            </Link>
            <Link href="#" className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300">
              Services
            </Link>
            <Link href="#" className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300">
              Clients
            </Link>
            <Link href="#" className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300">
              Projects
            </Link>
            <Link href="#" className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300">
              Contact
            </Link>
          </div>

          {/* Menu button - forced to right */}
          <div className="flex-shrink-0 lg:mr-28 navbar-menu">
            <button
              onClick={toggleSidebar}
              type="button"
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="w-10 h-10 md:w-12 md:h-12"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 z-30 h-full bg-gray-900/95 backdrop-blur-sm lg:w-1/3 md:w-1/2 w-full flex flex-col items-center justify-center px-8 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-6 right-6 p-2 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 md:h-12 md:w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="w-full max-w-md text-center">
          {/* Mobile-only menu items */}
          <div className="lg:hidden">
            <ul className="flex flex-col space-y-6 text-xl pb-8 border-b border-gray-700">
              <li><Link href="#" className="block py-2 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300" onClick={toggleSidebar}>Home</Link></li>
              <li><Link href="#" className="block py-2 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300" onClick={toggleSidebar}>About Us</Link></li>
              <li><Link href="#" className="block py-2 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300" onClick={toggleSidebar}>Services</Link></li>
              <li><Link href="#" className="block py-2 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300" onClick={toggleSidebar}>Clients</Link></li>
              <li><Link href="#" className="block py-2 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300" onClick={toggleSidebar}>Projects</Link></li>
              <li><Link href="#" className="block py-2 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300" onClick={toggleSidebar}>Contact</Link></li>
            </ul>
          </div>

          {/* Desktop-only menu items (Our Values and Our Gallery) */}

          {/* Common menu items for both mobile and desktop */}
          <ul className="flex flex-col space-y-6 pt-8 text-xl">
            <li><Link href="/values" className="block py-2 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300" onClick={toggleSidebar}>Our Values</Link></li>
            <li><Link href="/gallery" className="block py-2 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300" onClick={toggleSidebar}>Our Gallery</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;