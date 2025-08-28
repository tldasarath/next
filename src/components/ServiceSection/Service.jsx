"use client"
import { useState } from 'react';

export default function ServicesSection() {
    const [activeService, setActiveService] = useState(0);

    const services = [
        {
            id: 1,
            title: "WEB DESIGN & DEVELOPMENT",
            description: "We create responsive, modern websites that work seamlessly across all devices. Our web development services include front-end and back-end development using the latest technologies.",
            image: "/images/services/web-design.jpg",
            points: ["Custom Website Design",
                "E-Commerce Solutions",
                "UX/UI Design",
                "Website Maintenance & Support",]
        },
        {
            id: 2,
            title: "VIDEOGRAPHY SERVICES ",
            description: "Our team builds native and cross-platform mobile applications for iOS and Android. We focus on creating intuitive user experiences with smooth performance.",
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
            description: "We design beautiful and functional user interfaces that enhance user engagement. Our process includes user research, wireframing, prototyping, and testing.",
            image: "/images/services/branding-idendity.jpg",
            points: ["Brand Strategy & Positioning",
                "Logo Design & Visual Identity",
                "Brand Guidelines & Messaging"]
        },
        {
            id: 4,
            title: "PHOTOGRAPHY SERVICES ",
            description: "Our digital marketing strategies help businesses grow their online presence. We offer SEO, content marketing, social media management, and PPC advertising services.",
            image: "/images/services/IMAGES.jpg",
            points: ["Product Photography",
                "Event Photography",
                "Personal Photoshoot",
                "Wedding Photography"]
        },
        {
            id: 5,
            title: "SOCIAL MEDIA MARKETING",
            description: "We provide cloud migration, deployment, and management services. Our experts help businesses leverage cloud technologies for scalability and efficiency.",
            image: "/images/services/social-media-marketing-concept-marketing.jpg",
            points: ["Content Planning & Creation",
                "Account Management",
                "Community Engagement",
                "Social Media Advertising"]
        },
        {
            id: 6,
            title: "CONTENT MARKETING",
            description: "We build robust e-commerce platforms that drive sales and provide seamless shopping experiences. Our solutions include payment integration, inventory management, and analytics.",
            image: "/images/services/content-marketing.jpg",
            points: ["Blog & Article Writing",
                "Graphic Design & Visual Content",
                "Video Production & Editing"]
        }
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 pt-36 md:pt-28 lg:pt-44">
<div className="mx-auto max-w-full md:max-w-2xl lg:max-w-4xl xl:max-w-[1700px] [@media(min-width:1440px)_and_(max-width:1535px)]:max-w-[1200px]">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold sm:text-5xl">
                        Our Services
                    </h2>
                </div>

                <div className="space-y-16">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-11 items-stretch min-h-[28rem] w-full xl:w-[95%] 2xl:w-[90%] mx-auto hover:shadow-3xl rounded-2xl overflow-hidden transition-all duration-300 bg-stone-50/10`}
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