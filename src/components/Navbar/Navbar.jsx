'use client'
import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    if (!isSidebarOpen) {
      setIsSidebarOpen(true);
      setIsTransitioning(true);
    } else {
      setIsTransitioning(false);
      setTimeout(() => setIsSidebarOpen(false), 300);
    }
  };

  // Close sidebar when clicking on overlay
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleSidebar();
    }
  };

  // Close sidebar when pressing Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isSidebarOpen) {
        toggleSidebar();
      }
    };

    if (isSidebarOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isSidebarOpen]);

  // Check if current page is home
  const isHomePage = pathname === '/';
  const isContactPage = pathname === '/contact';
  const isServicePage = pathname === '/services';
  const isAboutUsPage = pathname === '/aboutus';

  return (
    <>
      <nav className="fixed w-full h-24 container-custom z-40 bg-black">
        <div className="h-full w-full  flex items-center justify-between">
          {/* Logo - forced to left */}
          <div className="flex-shrink-0   ">
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
          <div className="hidden md:flex xl:space-x-24 lg:space-x-12  md:space-x-8 md:text-sm  lg:text-base mx-4 flex-grow justify-center navbar-custom">
            <Link
              href="/"
              className={`${isHomePage ? 'text-transparent bg-clip-text bg-gradient-to-b from-[#F53A7A] to-[#190CD2]' : 'text-white'} hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300`}
            >
              Home
            </Link>
            <Link href="/aboutus" 
              className={`${isAboutUsPage ? 'text-transparent bg-clip-text bg-gradient-to-b from-[#F53A7A] to-[#190CD2]' : 'text-white'} hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300`}
             > About Us
            </Link>
            <Link href="/services"
              className={`${isServicePage ? 'text-transparent bg-clip-text bg-gradient-to-b from-[#F53A7A] to-[#190CD2]' : 'text-white'} hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300`}
            > Services
            </Link>
            {/* <Link href="#" className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300">
              Clients
            </Link> */}
            <Link href="#" className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300">
              Projects
            </Link>
            <Link href="/contact"
              className={`${isContactPage ? 'text-transparent bg-clip-text bg-gradient-to-b from-[#F53A7A] to-[#190CD2]' : 'text-white'} hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300`}
            > Contact
            </Link>
          </div>

          {/* Menu button - forced to right */}
          <div className="flex-shrink-0   ">
            <button
              onClick={toggleSidebar}
              type="button"
              className="text-white "
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

      {/* Overlay with opacity effect - Fixed z-index */}
      {(isSidebarOpen || isTransitioning) && (
        <div
          className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${isTransitioning && isSidebarOpen ? 'bg-opacity-40 z-30' : 'bg-opacity-0 z-0'}`}
          onClick={handleOverlayClick}
          aria-hidden="true"
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 z-40 h-full bg-gray-900/80 backdrop-blur-sm lg:w-2/5 xl:w-1/5 md:w-1/2 w-full flex flex-col px-8 transform transition-all duration-500 ease-out overflow-auto  ${isSidebarOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
      >
        {/* Close button */}
        <div className="flex justify-end pt-6">
          <button
            onClick={toggleSidebar}
            className="p-2  "
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 md:h-12 md:w-12 "
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
        </div>

        <div className="w-full  pt-10">
          {/* Logo inside the menu */}
          <div className=" ml-3 mb-10">
            <Image
              src="/logos/logo1.png"
              width={150}
              height={50}
              alt="Company Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Menu items */}
          <div className="mb-10 pl-4">
            <ul className="flex flex-col  space-y-6 text-xl">
              {/* Mobile-only navigation items */}
              <li className="md:hidden ">
                <Link
                  href="/"
                  className="block py-2 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300"
                  onClick={toggleSidebar}
                >
                  Home
                </Link>
              </li>
              <li className="md:hidden">
                <Link
                  href="/aboutus"
                  className="block py-2 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300"
                  onClick={toggleSidebar}
                >
                  About Us
                </Link>
              </li>
              <li className="md:hidden">
                <Link
                  href="/services"
                  className="block py-2 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300"
                  onClick={toggleSidebar}
                >
                  Services
                </Link>
              </li>
              <li className="md:hidden">
                <Link
                  href="#"
                  className="block py-2 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300"
                  onClick={toggleSidebar}
                >
                  Clients
                </Link>
              </li>
              <li className="md:hidden">
                <Link
                  href="#"
                  className="block py-2 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300"
                  onClick={toggleSidebar}
                >
                  Projects
                </Link>
              </li>
              <li className="md:hidden">
                <Link
                  href="/contact"
                  className="block py-2 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300"
                  onClick={toggleSidebar}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/values"
                  className="block py-2 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300"
                  onClick={toggleSidebar}
                >
                  Our Values
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="block py-2 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300"
                  onClick={toggleSidebar}
                >
                  Our Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div className="border-t border-gray-700 my-6 w-4/5 mx-auto"></div>
          <div className="flex space-x-6 pl-4 p-6 md:p-4">
            {/* Facebook */}
            <a href="#" className="text-white hover:text-pink-500 transition-all duration-300">
              <FaFacebookF className="w-6 h-6" />
            </a>

            {/* Instagram */}
            <a href="#" className="text-white hover:text-pink-500 transition-all duration-300">
              <FaInstagram className="w-6 h-6" />
            </a>

            {/* YouTube */}
            <a href="#" className="text-white hover:text-pink-500 transition-all duration-300">
              <FaYoutube className="w-6 h-6" />
            </a>

            {/* LinkedIn */}
            <a href="#" className="text-white hover:text-pink-500 transition-all duration-300">
              <FaLinkedinIn className="w-6 h-6" />
            </a>
          </div>
          <div className="border-t border-gray-700 my-6 w-4/5 mx-auto"></div>

          {/* Get in Touch */}
          <div className="mb-10">
            <h3 className="text-white text-lg font-semibold mb-6 pl-4">Get in Touch</h3>
            <div className="space-y-4 text-white text-sm pl-4">

              {/* Phone */}
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-pink-500" />
                <span>+971 52 516 2071, +971564712381</span>
              </div>

              {/* Email */}
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-pink-500" />
                <span>info.nextdms@gmail.com</span>
              </div>

              {/* Location */}
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-pink-500" />
                <span>
                  Arzoo building<br />
                  (Sharjah Islamic Bank),<br />
                  Al Qusais 2 , Dubai
                </span>
              </div>

            </div>
          </div>


          <div className="border-t border-gray-700 my-6 w-4/5 mx-auto"></div>

          {/* Social Icons */}

        </div>
      </div>
    </>
  );
};

export default Navbar;