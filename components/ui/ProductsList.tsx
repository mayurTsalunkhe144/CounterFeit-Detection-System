"use client";

import Link from "next/link";
import { useState } from "react";

interface ProductsListProps {
  products: ProductDetails[] | null;
}

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  function toggleMenu(id: string): void {
    console.log(id);
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Product Inventory
      </h1>

      <div className="space-y-6 flex gap-3">
        {products &&
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6 flex justify-between items-start">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {product.productName}
                  </h2>
                  <div className="mt-2 text-sm text-gray-600">
                    <p>Manufacturer: {product.manufacturerName}</p>
                    <p>
                      Manufactured:{" "}
                      {new Date(product.manufacturingDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center space-x-4 text-sm">
                    <span className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
                      {product.customerName}
                    </span>
                    <span className="text-gray-500">{product.description}</span>
                  </div>
                </div>

                {/* Three-dot menu */}
                <div className="relative">
                  <button
                    onClick={() => toggleMenu(product.id)}
                    className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700"
                    aria-label="Product actions"
                  ></button>

                  {activeMenu === product.id && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                      <div className="py-1">
                        <Link
                          href={`/products/${product.id}`}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setActiveMenu(null)}
                        >
                          <FiEye className="mr-3" />
                          View Details
                        </Link>
                        <Link
                          href={`/products/${product.id}/scans`}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setActiveMenu(null)}
                        >
                          <FiList className="mr-3" />
                          View Scans
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductsList;
