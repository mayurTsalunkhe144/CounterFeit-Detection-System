import ProductScanDetails from "@/components/ui/ProductScanDetails";
import { getProductById, getScanById } from "@/lib/actions/products";
import React from "react";

const page = async ({ params }: RouteParams) => {
  const { id } = await params;
  const ScanInfo = await getScanById(id);
  //   console.log(ScanInfo);
  if (!ScanInfo) {
    throw new Error("Scan information not found");
  }
  const product = await getProductById(ScanInfo.productID);
  const productData = {
    productName: product?.productName || "Unknown Product",
    manufacturedDate: product?.manufacturingDate || "Unknown Date",
    purchasedDate: product?.createdAt || "Unknown Date",
    customerName: product?.customerName || "Unknown Customer",
    manufacturerName: product?.manufacturerName || "Unknown Manufacturer",
    description: product?.description || "No description available",
    scannedDate: ScanInfo?.ScannedDate || "Unknown Date",
    scannedLongitude: ScanInfo?.longitude || "Unknown Longitude",
    scannedLatitude: ScanInfo?.latitude || "Unknown Latitude",
  };
  //   console.log(productData);
  return (
    <div>
      <ProductScanDetails {...productData} />;
    </div>
  );
};

export default page;
