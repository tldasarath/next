"use client"
import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        });
    };

    return (
        <>
            <div className="min-h-screen flex justify-center items-center py-20 container-custom  bg-gradient-to-br">
                <div className=" xl:max-w-7xl [@media(min-width:1440px)_and_(max-width:1535px)]:max-w-6xl lg:max-w-4xl w-full mx-auto mt-16 md:mt-20 lg:mt-0">
                    <div className="text-center mb-14 ">
                        <h1 className="text-3xl md:text-5xl font-extrabold sm:text-5xl">
                            Contact Us
                        </h1>
                    </div>

                    <div className="rounded-2xl overflow-hidden bg-stone-50/10" style={{ boxShadow: "0 25px 70px rgba(0,0,0,0.5)" }}>
                        <div className="flex flex-col lg:flex-row">
                            {/* Left Side - Contact Form */}
                            <div className="w-full lg:w-1/2 p-8">
                                <h2 className="text-xl md:text-2xl font-bold mb-6">Send us a message</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                        <div>
                                            <label htmlFor="firstName" className="block text-lg font-medium mb-2">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                id="firstName"
                                                required
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="mt-1 block w-full border bg-white border-gray-300 rounded-lg shadow-sm py-2 px-4 text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="lastName" className="block text-lg font-medium mb-2">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                id="lastName"
                                                required
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="mt-1 block w-full border text-black bg-white border-gray-300 rounded-lg shadow-sm py-2 px-4 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-lg font-medium mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border bg-white text-black border-gray-300 rounded-lg shadow-sm py-2 px-4 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-lg font-medium mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="mt-1 block w-full border bg-white text-black border-gray-300 rounded-lg shadow-sm py-2 px-4 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>

                                    <div>
                                                                                                                              <button
                                            type="submit"
                                            className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-lg text-white 
             bg-gradient-to-r from-purple-500 to-pink-500 
             hover:from-purple-600 hover:to-pink-600
             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 
             transition-colors duration-300"
                                        >
                                            Submit
                                        </button>

                                    </div>
                                </form>
                            </div>

                            {/* Divider - Increased space for xl screens */}
                            <div className="hidden lg:block w-9 xl:w-16 bg-transparent"></div>

                            {/* Right Side - Get in Touch */}
                            <div className="w-full lg:w-1/2 p-8 text-white">
                                <h2 className="text-xl md:text-2xl font-bold mb-4">Get in Touch</h2>

                                <div className="mb-6">
                                    <p className=" text-base leading-relaxed">
                                        We're here to help and answer any questions you might have.
                                        We look forward to hearing from you and will get back to you as soon as possible.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 bg-indigo-500 p-2 rounded-lg">
                                            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-medium">Address</h3>
                                            <p className="mt-1  text-base">
                                                Arzoo building<br />
                                                (Sharjah Islamic Bank),<br />
                                                Al Qusais 2 , Dubai
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 bg-indigo-500 p-2 rounded-lg">
                                            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-medium">Phone</h3>
                                            <p className="mt-1  text-base">+971 52 516 2071, +971564712381</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 bg-indigo-500 p-2 rounded-lg">
                                            <svg className="h-6 w-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-medium">Email</h3>
                                            <p className="mt-1  text-base">info.nextdms@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}