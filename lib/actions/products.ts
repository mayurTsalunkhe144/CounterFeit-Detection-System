import { db } from "@/firebase/admin"; // Adjusted the path to point to the correct location

// Define the data type

// Function to add a user to Firestore

export async function getProductsByUserId(
  userId: string
): Promise<ProductDetails[] | null> {
  console.log(userId);
  const products = await db
    .collection("products")
    .where("userId", "==", userId)
    .get();
  console.log(products);
  return products.docs.map((doc) => ({
    ...doc.data(),
  })) as ProductDetails[];
}

export async function getProductById(
  ProductId: string
): Promise<ProductDetails | null> {
  const product = await db
    .collection("products")
    .where("id", "==", ProductId)
    .get();

  if (!product.empty) {
    const productData = product.docs[0].data() as ProductDetails;
    return productData;
  }
  return null;
}
