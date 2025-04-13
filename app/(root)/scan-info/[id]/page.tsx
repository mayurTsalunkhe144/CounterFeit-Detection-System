import ProductInfo from "@/components/ui/ProductInfo";

import { getProductById } from "@/lib/actions/products";
import React from "react";

const product_scan = async ({ params }: RouteParams) => {
  const { id } = await params;

  const userProduct = await getProductById(id);
  const isoTimestamp = userProduct?.createdAt;
  const dateObj = new Date(isoTimestamp || "");
  const formatted = dateObj.toLocaleString("en-US", {
    timeZone: "UTC",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const ProductinfoData = [
    { label: "Product Name", value: userProduct?.productName || "" },
    { label: "Customer Name", value: userProduct?.customerName || "" },
    { label: "Manufacturer Name", value: userProduct?.manufacturerName || "" },
    { label: "Product Description", value: userProduct?.description || "" },
    { label: "Purched Date ", value: formatted || "" },
    {
      label: "ManuFacturing Date",
      value: userProduct?.manufacturingDate || "",
    },
  ];

  return (
    <div className="flex  items-center flex-col h-full w-screen">
      <h1 className="text-4xl text-blue-900 capitalize">
        {" "}
        {userProduct?.productName}
      </h1>
      <div className="bg-blue-50 h-full">
        <ProductInfo
          fields={ProductinfoData}
          backgroundColor="bg-blue-50"
          labelColor="text-blue-800"
          valueColor="text-blue-600"
          gap="gap-2"
        />
      </div>
    </div>
  );
};

export default product_scan;
