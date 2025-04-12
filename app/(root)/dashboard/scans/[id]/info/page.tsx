import ProductDisplayProps from "@/components/ui/ProductDisplayProps";
import { getProductById } from "@/lib/actions/products";
import React from "react";

const page = async ({ params }: RouteParams) => {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const userProducts = await getProductById(id);
  return (
    <div>
      <h2>
        <ProductDisplayProps
          productName={userProducts?.productName || ""}
          customerName={userProducts?.customerName || ""}
          manufacturerName={userProducts?.manufacturerName || ""}
          productDescription={userProducts?.description || ""}
          purchaseDate={userProducts?.createdAt || ""}
          manufacturingDate={userProducts?.manufacturingDate || ""}
          qrData={`https://counter-feit-detection-system.vercel.app/${id}`}
        />
      </h2>
    </div>
  );
};

export default page;
