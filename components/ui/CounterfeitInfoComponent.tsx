import React from "react";

const CounterfeitInfoComponent: React.FC = () => {
  const sections = [
    {
      title: "Product Registration",
      description:
        "Register authentic products in our secure database with unique identifiers. Add product details including name, manufacturer information, production date, and authentication features to establish a verifiable record of genuine products.",
      features: [
        "Secure product registration with cryptographic signatures",
        "Batch upload support for multiple products",
        "Custom product attributes and metadata",
        "QR code and NFC tag generation for physical products",
      ],
      icon: "📝",
      link: "/dashboard/product-registration",
      color: "bg-blue-50 border-blue-200",
    },
    {
      title: "Manage Products",
      description:
        "Maintain complete control over your product database. View, edit, and update product information, track inventory, and manage authentication credentials to ensure your product data remains accurate and up-to-date.",
      features: [
        "Comprehensive product catalog management",
        "Real-time inventory tracking",
        "Edit product details and update authentication criteria",
        "Archive and restore product listings",
      ],
      icon: "🏷️",
      link: "/dashboard/manage-products",
      color: "bg-purple-50 border-purple-200",
    },
    {
      title: "Scans",
      description:
        "Track and analyze authentication scans from anywhere in the world. View scan history with geographic data, time stamps, and verification results to monitor product authenticity and identify potential counterfeit activity.",
      features: [
        "Global scan tracking with geographic visualization",
        "Chronological scan history with timestamp verification",
        "Counterfeit attempt alerts and reporting",
        "Analytics dashboard for scan patterns and insights",
      ],
      icon: "🔍",
      link: "/dashboard/scans",
      color: "bg-green-50 border-green-200",
    },
  ];

  return (
    <div className="w-full py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Counterfeit Detection System
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protect your brand integrity with our advanced counterfeit detection
            platform. Register products, manage your catalog, and track
            authentication scans worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`rounded-xl ${section.color} border p-8 shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white text-3xl mb-6 mx-auto">
                {section.icon}
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                {section.title}
              </h2>
              <p className="text-gray-700 mb-6">{section.description}</p>

              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  Key Features:
                </h3>
                <ul className="space-y-2">
                  {section.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <a
                  href={section.link}
                  className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Go to {section.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterfeitInfoComponent;
