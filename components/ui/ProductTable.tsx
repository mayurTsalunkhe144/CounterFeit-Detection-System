import React from "react";


const ProductTable: React.FC<ProductsListProps> = ({ products }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-sm">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products?.map((row, rowIndex) => (
            <tr key={products.id}>
              
                <td >
                  
                </td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
