"use client"
import { useState } from 'react';

export default function ServicesSection() {
    const [activeService, setActiveService] = useState(0);

    const services = [
        {
            id: 1,
            title: "WEB DESIGN & DEVELOPMENT",
            description: "We create modern, responsive, and user-friendly websites tailored to your business needs. From corporate and e-commerce sites to landing pages and microsites, our web solutions focus on functionality, design excellence, and seamless user experience.",
            image: "/images/services/web-design.jpg",
            points: ["Custom Website Design",
                "E-Commerce Solutions",
                "UX/UI Design",
                "Website Maintenance & Support",]
        },
        {
            id: 2,
            title: "VIDEOGRAPHY SERVICES ",
            description: " Bring your story to life through dynamic visuals. We produce professional promo videos, interviews, reels, and event highlights with high-quality editing, motion graphics, and storytelling that leaves a lasting impact.",
            image: "/images/services/videography.jpg",
            points: ["Promotional Videos",
                "Product Videos",
                "Event/Wedding Coverage",
                "Social Media Reels",
                "Podcast Shoot"]
        },
        {
            id: 3,
            title: "BRANDING & IDENTITY",
            description: "We craft memorable brand identities that reflect your values and vision. From logos and naming to complete brand strategies, guidelines, and visual elements like taglines, colors, and typography — we help you build a brand that truly stands out.",
            image: "/images/services/branding-idendity.jpg",
            points: ["Brand Strategy & Positioning",
                "Logo Design & Visual Identity",
                "Brand Guidelines & Messaging"]
        },
        {
            id: 4,
            title: "PHOTOGRAPHY SERVICES ",
            description: "Capture every moment with precision and creativity. From corporate portraits to product showcases and event coverage, our photography services highlight your brand’s best angles with clarity and style.",
            image: "/images/services/IMAGES.jpg",
            points: ["Product Photography",
                "Event Photography",
                "Personal Photoshoot",
                "Wedding Photography"]
        },
        {
            id: 5,
            title: "SOCIAL MEDIA MARKETING",
            description: "Boost your online presence with our end-to-end digital marketing solutions. We manage social media, run targeted Google Ads, optimize websites for SEO, and execute data-driven email campaigns — ensuring visibility, engagement, and conversions.",
            image: "/images/services/social-media-marketing-concept-marketing.jpg",
            points: ["Content Planning & Creation",
                "Account Management",
                "Community Engagement",
                "Social Media Advertising"]
        },
        {
            id: 6,
            title: "CONTENT MARKETING",
            description: "Our creative team delivers powerful designs that speak louder than words. Whether it’s brochures, flyers, business cards, company profiles, pitch decks, banners, or corporate stationery, we design to impress across print and digital platforms.",
            image: "/images/services/content-marketing.jpg",
            points: ["Blog & Article Writing",
                "Graphic Design & Visual Content",
                "Video Production & Editing"]
        }
    ];

    return (
        <section className=" pt-32 md:pt-24 lg:pt-36 container-custom">
            <div className="w-full">

                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold sm:text-5xl">
                        Our Services
                    </h2>
                </div>

                <div className="space-y-16">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-11 items-stretch min-h-[28rem] w-full xl:w-[100%] 2xl:w-[100%] mx-auto hover:shadow-3xl rounded-2xl overflow-hidden transition-all duration-300 bg-stone-50/10`}
                            style={{ boxShadow: "0 25px 70px rgba(0,0,0,0.5)" }}
                        >
                            {/* Image Section */}
                            <div className="w-full lg:w-1/2">
                                <div className="w-full h-full">
                                    <div className="relative group h-full">
                                        <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                                        <div className="relative h-full">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="rounded-lg shadow-xl w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full lg:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                                <div className="max-w-lg mx-auto lg:mx-0">
                                    <h3 className="text-3xl font-bold mb-6">
                                        {service.title}
                                    </h3>
                                    <p className="text-lg mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Bullet points section */}
                                    <ul className="mb-6 space-y-2">
                                        {service.points.map((point, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <span className="text-white mr-2 mt-1">•</span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}