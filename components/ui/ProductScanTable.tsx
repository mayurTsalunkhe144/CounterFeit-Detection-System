import React from "react";
import { Info } from "lucide-react";
import { getProductById } from "@/lib/actions/products";

interface scaninfo {
  scans: Array<{
    productID: string;
    scannedDate: string;
    infoUrl?: string;
  }>;
}

export default function ProductScanTable({ scans = [] }: scaninfo) {
  // Ensure scans is an array
  const scanData = Array.isArray(scans) ? scans : [];
  const getProductName = async (ProductID: string) => {
    console.log("product id", ProductID);
    const product = await getProductById(ProductID);
    return product?.productName || "Unknown Product";
  };
  return (
    <div className="w-full p-4">
      <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Row */}
        <div className="flex flex-row bg-gray-100 p-4 border-b">
          <div className="flex-1 font-medium text-gray-800">Product Name</div>
          <div className="flex-1 font-medium text-gray-800">Scanned Date</div>
          <div className="w-12 font-medium text-gray-800 text-center">Info</div>
        </div>

        {/* Data Rows */}
        <div className="divide-y">
          {scanData.length > 0 ? (
            scanData.map((scan, index) => (
              <div
                key={index}
                className="flex flex-row p-4 hover:bg-gray-50 items-center"
              >
                <div className="flex-1 text-gray-700">
                  {getProductName(scan.productID)}
                </div>
                <div className="flex-1 text-gray-700">{scan.scannedDate}</div>
                <div className="w-12 flex justify-center">
                  {scan.infoUrl ? (
                    <a
                      href={scan.infoUrl}
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 transition-colors"
                    >
                      <Info size={20} />
                    </a>
                  ) : (
                    <span className="text-gray-300">
                      <Info size={20} />
                    </span>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="p-6 text-center text-gray-500">
              No scan data available
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
