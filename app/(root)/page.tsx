import React from "react";
import "../globals.css";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero-pattern.png"
            alt="Background pattern"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="max-w-xl z-10">
            <h1 className="text-5xl font-bold mb-6 text-black">
              Detect Counterfeits with Confidence
            </h1>
            <p className="text-xl mb-8 text-black" >
              Advanced AI-powered solution to protect your business from counterfeit products
            </p>
            <button className="bg-black text-brand px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90">
              Get Started
            </button>
          </div>
          <div className="hidden lg:block w-1/2 relative h-[500px]">
            <Image
              src="/images/scanner-device.png"
              alt="Counterfeit Scanner"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Real-time Detection",
                description: "Instant analysis of products using advanced AI algorithms",
                icon: "/images/real-time.png"
              },
              {
                title: "High Accuracy",
                description: "99.9% accurate results with minimal false positives",
                icon: "/images/accuracy-icon.png"
              },
              {
                title: "Easy Integration",
                description: "Seamlessly integrate with your existing systems",
                icon: "/images/integration-icon.png"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 mb-6 mx-auto relative">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section (New) */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-brand -translate-y-1/2 hidden md:block"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { step: "1", title: "Scan Product", image: "/images/scan-step.png" },
                { step: "2", title: "Analyze", image: "/images/analyze-step.png" },
                { step: "3", title: "Get Results", image: "/images/result-step.png" }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center text-brand font-bold text-xl border-4 border-brand mx-auto mb-6">
                    {step.step}
                  </div>
                  <div className="text-center">
                    <div className="relative w-48 h-48 mx-auto mb-4">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill={true}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/images/cta-pattern.png"
            alt="Background pattern"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Protect Your Business?
          </h2>
          <button className="bg-brand text-black px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90">
            Start For Free!!
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
