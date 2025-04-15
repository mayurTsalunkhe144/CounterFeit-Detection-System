// ProductScanDetails.tsx
import React from "react";

interface ProductScanDetailsProps {
  productName: string;
  manufacturedDate: string;
  purchasedDate: string;
  customerName: string;
  manufacturerName: string;
  description: string;
  scannedDate: string;
  scannedLongitude: string;
  scannedLatitude: string;
}

const ProductScanDetails: React.FC<ProductScanDetailsProps> = ({
  productName,
  manufacturedDate,
  purchasedDate,
  customerName,
  manufacturerName,
  description,
  scannedDate,
  scannedLongitude,
  scannedLatitude,
}) => {
  // Create Google Maps URL with coordinates
  const googleMapsUrl = `https://www.google.com/maps?q=${scannedLatitude},${scannedLongitude}&z=15&output=embed`;

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">{productName}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Product Details Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-600 px-6 py-4">
              <h2 className="text-xl font-semibold text-white">
                Product Details
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Product Name
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    {productName}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Manufacturer
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    {manufacturerName}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Manufactured Date
                    </p>
                    <p className="text-lg font-semibold text-gray-800">
                      {manufacturedDate}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Purchased Date
                    </p>
                    <p className="text-lg font-semibold text-gray-800">
                      {purchasedDate}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">Customer</p>
                  <p className="text-lg font-semibold text-gray-800">
                    {customerName}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Description
                  </p>
                  <p className="text-gray-700">{description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Scan Details Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-green-600 px-6 py-4">
              <h2 className="text-xl font-semibold text-white">Scan Details</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Scanned Date
                  </p>
                  <p className="text-lg font-semibold text-gray-800">
                    {scannedDate}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Latitude
                    </p>
                    <p className="text-lg font-semibold text-gray-800">
                      {scannedLatitude}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Longitude
                    </p>
                    <p className="text-lg font-semibold text-gray-800">
                      {scannedLongitude}
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="mt-4 w-full h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden shadow border border-gray-200">
                <iframe
                  title="Product Scan Location"
                  src={googleMapsUrl}
                  className="w-full h-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScanDetails;
