"use client";
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { HiDevicePhoneMobile, HiEnvelope, HiMapPin } from "react-icons/hi2";
import { CONTACT_INFO } from '@/lib/constants';

const Contact = () => {
    const containerAnimation = useSpring({
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0 },
        config: { tension: 280, friction: 60 },
    });

    return (
        <section className="section-padding bg-gray-900" id="contact">
            <animated.div style={containerAnimation} className="container-custom">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
                        Let&rsquo;s Connect
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Feel free to reach out. I&rsquo;m always open to discussing new opportunities or projects.
                    </p>
                </div>

                {/* Main Content */}
                <div className="max-w-4xl mx-auto">
                    {/* Contact Information Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {[
                            {
                                icon: HiEnvelope,
                                title: "Email",
                                content: CONTACT_INFO.email,
                                link: `mailto:${CONTACT_INFO.email}`,
                                description: "For project inquiries and collaboration",
                                color: "from-yellow-400 to-yellow-500"
                            },
                            {
                                icon: HiDevicePhoneMobile,
                                title: "Phone",
                                content: CONTACT_INFO.phone,
                                link: `tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`,
                                description: "Available for calls during business hours",
                                color: "from-yellow-400 to-yellow-500"
                            },
                            {
                                icon: HiMapPin,
                                title: "Location",
                                content: CONTACT_INFO.location,
                                link: null,
                                description: "Based in Belgium, open to remote work",
                                color: "from-yellow-400 to-yellow-500"
                            }
                        ].map((contact, index) => (
                            <div
                                key={index}
                                className="group bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:transform hover:scale-105"
                            >
                                <div className={`w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br ${contact.color} mb-4`}>
                                    <contact.icon className="w-6 h-6 text-gray-900" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2">{contact.title}</h3>
                                <p className="text-gray-400 text-sm mb-3">{contact.description}</p>

                                {contact.link ? (
                                    <a
                                        href={contact.link}
                                        className="text-yellow-400 hover:text-yellow-300 font-medium transition-colors inline-flex items-center gap-1"
                                    >
                                        {contact.content}
                                    </a>
                                ) : (
                                    <p className="text-yellow-400 font-medium">{contact.content}</p>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Availability Note - Clean & Centered */}
                    <div className="text-center mt-12">
                        <div className="inline-flex items-center gap-2 bg-gray-800/50 px-6 py-3 rounded-full border border-gray-700">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                            <span className="text-gray-300 text-sm font-medium">
                                I typically respond within 24 hours
                            </span>
                        </div>
                    </div>
                </div>
            </animated.div>
        </section>
    );
};

export default Contact;