import ProductScanTable from "@/components/ui/ProductScanTable";

import { fetchScanData } from "@/lib/actions/products";
import { auth } from "@clerk/nextjs/server";

const ScansPage = async () => {
  const { userId } = await auth();
  const userScans = await fetchScanData(userId as string);
  // console.log(userScans);
  return (
    <div className="flex w-screen h-screen overflow-auto">
      <ProductScanTable scans={userScans || []} />
    </div>
  );
};

export default ScansPage;
