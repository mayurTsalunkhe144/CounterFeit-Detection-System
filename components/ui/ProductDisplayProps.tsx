"use client";
import { useState } from "react";

import Image from "next/image";

interface ProductDisplayProps {
  productName: string;
  customerName: string;
  manufacturerName: string;
  productDescription: string;
  purchaseDate: string;
  manufacturingDate: string;
  qrData?: string; // Optional QR code data string
  imageSrc?: string; // Optional image source (if not using QR)
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({
  productName,
  customerName,
  manufacturerName,
  productDescription,
  purchaseDate,
  manufacturingDate,
  qrData,
  imageSrc,
}) => {
  // Generate QR code URL if qrData is provided
  const qrCodeUrl = qrData
    ? `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
        qrData
      )}`
    : imageSrc;

  // Use the QR code URL or fallback to the provided image source
  const displayImageSrc = qrCodeUrl || "/placeholder-image.jpg";

  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    if (downloading) return;
    setDownloading(true);

    try {
      // Fetch the image data
      const response = await fetch(displayImageSrc);
      const blob = await response.blob();

      // Create object URL for the blob
      const blobUrl = window.URL.createObjectURL(blob);

      // Create temporary download link
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = qrData
        ? `${productName}-qrcode.png`
        : `${productName}-${manufacturerName}.jpg`;

      // Append to body, click and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up the blob URL
      setTimeout(() => {
        window.URL.revokeObjectURL(blobUrl);
      }, 100);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to download the image. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  // Format the manufacturing date to be more readable
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
      <div className="p-8">
        <div className="uppercase tracking-wide text-indigo-500 font-semibold text-xl mb-1">
          {productName}
        </div>
        <div className="border-b border-gray-200 mb-4 pb-2">
          <p className="text-gray-500">
            For:{" "}
            <span className="font-medium text-gray-700">{customerName}</span>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-gray-500 text-sm">Manufacturer</p>
            <p className="font-medium">{manufacturerName}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Description</p>
            <p className="font-medium">{productDescription}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Purchased On</p>
            <p className="font-medium">{purchaseDate}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Manufacturing Date</p>
            <p className="font-medium">{formatDate(manufacturingDate)}</p>
          </div>
        </div>

        {/* Image or QR Code section */}
        <div className="mt-4 border-t border-gray-200 pt-4">
          <div className="relative h-64 w-full flex justify-center items-center">
            {qrData ? (
              // For QR codes, we use standard img tag
              <img
                src={displayImageSrc}
                alt="QR Code"
                className="h-full object-contain rounded-lg"
              />
            ) : (
              // For regular images, use Next Image component if imageSrc is provided
              <div className="relative h-full w-full">
                {imageSrc ? (
                  <Image
                    src={imageSrc}
                    alt={productName}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    No image available
                  </div>
                )}
              </div>
            )}
          </div>

          <button
            onClick={handleDownload}
            disabled={downloading || (!qrData && !imageSrc)}
            className={`mt-4 w-full font-bold py-3 px-4 rounded-lg inline-flex items-center justify-center transition duration-300 ${
              downloading || (!qrData && !imageSrc)
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 text-white"
            }`}
          >
            {downloading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Downloading...
              </>
            ) : (
              <>
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  ></path>
                </svg>
                Download {qrData ? "QR Code" : "Image"}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
