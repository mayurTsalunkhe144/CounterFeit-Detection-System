import { db } from "@/firebase/admin"; // Adjusted the path to point to the correct location

export type scaninfo = {
  productID: string;
  scannedDate: string;
  scanId: string;
  infoUrl?: string;
  scannedLongitude: string;
  scannedLatitude: string; // Optional URL for the info icon to navigate to
};
// Define the data type

// Function to add a user to Firestore

export async function getProductsByUserId(
  userId: string
): Promise<ProductDetails[] | null> {
  // console.log(userId);
  const products = await db
    .collection("products")
    .where("userId", "==", userId)
    .get();
  // console.log(products);
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
export type scaninfomap = {
  ScannedDate: string;
  latitude: string;
  longitude: string;
  productID: string;
};
export async function getScanById(ScanId: string): Promise<scaninfomap | null> {
  const scanInfo = await db.collection("scans").doc(ScanId).get();

  const scanData = scanInfo.data() as scaninfomap | undefined;
  return scanData || null;
}

export async function fetchScanData(): Promise<scaninfo[] | null> {
  const scans = await db
    .collection("scans")
    .orderBy("ScannedDate", "desc")
    .get();
  // console.log(scans);
  const scanInfo: scaninfo[] = scans.docs.map((doc) => {
    const data = doc.data();

    // Return formatted scan data
    return {
      scannedDate: data.ScannedDate || "",
      productID: data.productID || "",
      scanId: doc.id,
      infoUrl: `http://localhost:3000/dashboard/scans/${doc.id}`, // Include the document ID
      scannedLongitude: data.scannedLongitude || "",
      scannedLatitude: data.scannedLatitude || "",
    };
  });
  return scanInfo;
}
