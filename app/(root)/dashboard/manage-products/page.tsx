import ProductsList from "@/components/ui/ProductsList";
import { getProductsByUserId } from "@/lib/actions/products";

import { auth } from "@clerk/nextjs/server";

import React from "react";

const ManegeProductsPage = async () => {
  const { userId } = await auth();

  const userProducts = await getProductsByUserId(userId as string);

  return (
    <div>
      <ProductsList products={userProducts} />
    </div>
  );
};

export default ManegeProductsPage;
