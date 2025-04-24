import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section with Animated Background */}
      <div className="relative bg-[#3343ff] text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/hero-pattern.png"
            alt="Background Pattern"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="relative py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text">
                About CounterFeit Detection
              </h1>
              <p className="mt-6 text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
                We&apos;re on a mission to protect brands and consumers from
                counterfeit products through innovative technology solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section with Gradient Border */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 relative">
                    Our Mission
                    <div className="absolute -bottom-2 left-0 w-20 h-1 bg-[#3343ff]"></div>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We strive to create a marketplace free from counterfeit
                    products by leveraging cutting-edge technology and
                    artificial intelligence. Our platform empowers businesses
                    and consumers to verify product authenticity instantly.
                  </p>
                </div>
              </div>
              <div className="relative h-96 md:h-auto">
                <Image
                  src="/images/scanner-device.png"
                  alt="Counterfeit Detection Scanner"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section with Hover Effects */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 relative inline-block">
            Our Core Values
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#3343ff]"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                icon: "🚀",
                description:
                  "Continuously pushing the boundaries of technology to provide the best anti-counterfeit solutions.",
                gradient: "from-blue-500 to-purple-500",
              },
              {
                title: "Integrity",
                icon: "🛡️",
                description:
                  "Maintaining the highest standards of honesty and transparency in all our operations.",
                gradient: "from-green-500 to-teal-500",
              },
              {
                title: "Impact",
                icon: "🌟",
                description:
                  "Making a real difference in protecting brands and consumers from counterfeit products.",
                gradient: "from-orange-500 to-pink-500",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                <div className="p-8">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-[#3343ff] to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cta-pattern.png"
            alt="Background Pattern"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Protect Your Brand?
          </h2>
          <p className="text-xl text-gray-100 mb-12 max-w-2xl mx-auto">
            Join hundreds of brands that trust our counterfeit detection
            solution.
          </p>
          <Link href="/dashboard">
            <button className="bg-white text-[#3343ff] px-8 py-4 rounded-full text-lg cursor-pointer  font-semibold hover:bg-opacity-90 transition-colors duration-300 shadow-lg">
              Get Started Today
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
