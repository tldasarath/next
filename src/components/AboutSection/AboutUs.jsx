'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const teamMembers = [
  { id: 1, name: 'SHAFI', position: 'UI/UX', image: '/images/about-us/person.png' },
  { id: 2, name: 'SARFAS', position: 'Graphic Designer', image: '/images/about-us/person.png' },
  { id: 6, name: 'DIYA', position: 'Graphic Designer', image: '/images/about-us/person.png' },
  { id: 3, name: 'DASARATH', position: 'Fullstack Developer', image: '/images/about-us/person.png' },
  { id: 5, name: 'ARJUN', position: 'Fullstack Developer', image: '/images/about-us/person.png' },
  { id: 4, name: 'NAZMAL', position: 'Digital Marketing', image: '/images/about-us/person.png' },
  { id: 7, name: 'DIYA KRISHNA', position: 'Digital Marketing', image: '/images/about-us/person.png' },
  { id: 8, name: 'EMMA', position: 'Social Media', image: '/images/about-us/person.png' }
];

export default function AboutUs() {
  return (
    <section className="py-12 container-custom pt-32 md:pt-24 lg:pt-36">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold sm:text-5xl md:pt-6 lg:pt-0">About Us</h2>
        </div>

        <div className="space-y-12 text-start ">
          {/* About Section */}
          <div className="flex flex-col lg:flex-row-reverse items-stretch min-h-[24rem] w-full xl:w-[100%] 2xl:w-[100%] mx-auto hover:shadow-3xl rounded-2xl overflow-hidden transition-all duration-300">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 h-72 md:h-96 relative">
              <div className="relative group h-full w-full">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative h-full w-full">
                  <Image
                    src="/images/about-us/image1.jpg"
                    alt="About Next Digital"
                    fill
                    className="rounded-lg shadow-xl object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 py-5 xl:pr-4 md:py-6 flex flex-col justify-start">
              <div className="max-w-2xl mx-auto lg:mx-0">
                <h3 className="text-2xl font-bold mb-1">About Us</h3>
                <p className="mb-3 text-md xl:text-base">
                  At Next Digital, we believe in the power of creativity and strategy to
                  create creative goals and work hardiness. We are a dynamic digital
                  solution system that specializes in collaboration with innovative brands,
                  strategy actions, practical sound media marketing, cutting-edge web
                  design and development, and professional vision and growth.
                </p>
                <p className="mb-3 text-md xl:text-base">
                  Production technology can match up in high businesses based again in
                  the market, build a strong brand identity and accelerate their growth
                  through tailored digital solutions.
                </p>
                <p className="text-md xl:text-base">
                  For retail vendors, we empower brands, the digital age, front
                  of them, and creating new technologies for our experience. Next
                  channel, engage with former Wembley users or sellers simply to
                  maintain energy and excellence to showcase existing standards, as well
                  as providing positive energy deep drives way.
                </p>
              </div>
            </div>
          </div>

          {/* Mission & Vision Section */}
          <div className="flex flex-col lg:flex-row gap-6 items-stretch min-h-[24rem] w-full xl:w-[100%] 2xl:w-[100%] mx-auto hover:shadow-3xl rounded-2xl overflow-hidden transition-all duration-300">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 h-72 md:h-96 relative ">
              <div className="relative group h-full w-full">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative h-full w-full">
                  <Image
                    src="/images/about-us/image2.jpg"
                    alt="Next Digital Mission"
                    fill
                    className="rounded-lg shadow-xl object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 p-5 md:p-6 flex flex-col justify-center gap-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                <p className="text-sm md:text-base">
                  To deliver innovative, slow-driven marketing solutions that
                  encourage customers to grow, engage their audience and achieve
                  measurable success.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
                <p className="text-sm md:text-base">
                  To become a leading global marketing
                  system, recognises the momentum brands,
                  through creativity, strategy, and technology.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-10">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-8xl xl:gap-y-8 2xl:gap-x-36 xl:gap-0 mx-auto">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex flex-col items-center group">
                <div className="relative h-72 w-64 mx-auto mb-4 rounded-xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={256}
                    height={288}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p>{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      
    </section>
  );
}
