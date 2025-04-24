"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    title: "Sign In Securely",
    description:
      "Create your account or sign in securely to access our counterfeit detection platform. We use industry-standard security protocols to protect your data.",
    icon: "/images/accuracy-icon.png",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Register Your Product",
    description:
      "Add your product details including name, description, brand, and other identifying characteristics. Upload high-quality images for better recognition.",
    icon: "/images/analyze-step.png",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Generate Secure QR Code",
    description:
      "Our system generates a unique, encrypted QR code for your product. This code contains secured product information and authentication details.",
    icon: "/images/integration-icon.png",
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Track & Monitor",
    description:
      "Access real-time tracking and monitoring of your products. View scan history, detect potential counterfeits, and protect your brand integrity.",
    icon: "/images/real-time.png",
    color: "from-green-500 to-emerald-500",
  },
];

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#3343ff] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-pattern.png"
            alt="Background Pattern"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
              >
                How It Works
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-xl text-gray-100 max-w-3xl mx-auto"
              >
                Protect your brand with our advanced counterfeit detection
                system in four simple steps
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div
                  className={`
                  bg-white rounded-2xl shadow-xl overflow-hidden
                  transform hover:scale-[1.02] transition-all duration-300
                `}
                >
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="relative w-24 h-24 flex-shrink-0">
                        <div
                          className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-20 animate-pulse`}
                        ></div>
                        <Image
                          src={step.icon}
                          alt={step.title}
                          width={96}
                          height={96}
                          className="relative rounded-full p-4"
                        />
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start mb-4">
                          <span className="bg-[#3343ff] text-white text-sm font-semibold px-3 py-1 rounded-full mr-3">
                            Step {index + 1}
                          </span>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2">
                      <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-[#3343ff]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-br from-[#3343ff] to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cta-pattern.png"
            alt="Background Pattern"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Protect Your Brand?
            </h2>
            <p className="text-xl text-gray-100 mb-12 max-w-2xl mx-auto">
              Join leading brands using our counterfeit detection system to
              ensure product authenticity and protect customer trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/dashboard">
                <button className="bg-white text-[#3343ff] px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Started Now
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
