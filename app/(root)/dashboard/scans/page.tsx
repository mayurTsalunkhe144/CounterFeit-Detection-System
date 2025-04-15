"use server";
import ProductScanTable from "@/components/ui/ProductScanTable";
import { fetchScanData, scaninfo } from "@/lib/actions/products";

const ScansPage = async () => {
  const scanData: scaninfo[] = (await fetchScanData()) || [];

  return (
    <div className="flex w-screen h-scree">
      <ProductScanTable scans={scanData} />
    </div>
  );
};

export default ScansPage;
