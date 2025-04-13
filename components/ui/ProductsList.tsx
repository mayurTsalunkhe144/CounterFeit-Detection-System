"use client";

import Link from "next/link";

interface ProductsListProps {
  products: ProductDetails[] | null;
}

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  function toggleMenu(id: string): void {
    console.log(id);
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Product Inventory
      </h1>

      <div className="space-y-4">
        {products &&
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow duration-300 flex justify-between items-center p-4"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-4">
                  <h2 className="text-lg font-semibold text-gray-800 truncate">
                    {product.productName}
                  </h2>
                  <span className="inline-flex items-center px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full text-xs">
                    {product.customerName}
                  </span>
                </div>
                <div className="mt-1 text-sm text-gray-600 truncate">
                  <span>Manufacturer: {product.manufacturerName}</span>
                  <span className="mx-2">•</span>
                  <span>
                    Made:{" "}
                    {new Date(product.manufacturingDate).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-3 ml-4">
                <Link
                  href={`/dashboard/manage-products/${product.id}/info`}
                  className="p-1 text-gray-400 hover:text-blue-500 transition-colors"
                  title="Product details"
                >
                  <button
                    onClick={() => toggleMenu(product.id)}
                    className="p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600"
                    aria-label="Product actions"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductsList;
