import ProductDisplayProps from "@/components/ui/ProductDisplayProps";
import { getProductById } from "@/lib/actions/products";
import { SCANS_URl_Deployed, SCANS_URl_Local } from "@/lib/utils";
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
<<<<<<< HEAD:app/(root)/dashboard/scans/[id]/info/page.tsx
          qrData={`${SCANS_URl_Deployed}${id}/info`}
=======
          qrData={`${SCANS_URl_Local}/${id}`}
>>>>>>> mayur:app/(root)/dashboard/manage-products/[id]/info/page.tsx
        />
      </h2>
    </div>
  );
};

export default page;
