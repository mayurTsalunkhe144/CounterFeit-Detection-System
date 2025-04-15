import { db } from "@/firebase/admin"; // Adjusted the path to point to the correct location
import { dbc } from "@/firebase/client"; // Adjusted the path to point to the correct location
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  getDoc,
  doc,
} from "firebase/firestore";

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
  // const products = await db
  //   .collection("products")
  //   .where("userId", "==", userId)
  //   .get();
  const q = query(collection(dbc, "products"), where("userId", "==", userId));
  const products = await getDocs(q);
  // console.log(products);
  return products.docs.map((doc) => ({
    ...doc.data(),
  })) as ProductDetails[];
}

export async function getProductById(
  ProductId: string
): Promise<ProductDetails | null> {
  const docref = doc(dbc, "products", ProductId);
  const product = await getDoc(docref);

  if (product.exists()) {
    console.log("product", product.data());
    return { ...product.data(), id: product.id } as ProductDetails;
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
  const docref = doc(dbc, "scans", ScanId);
  const scan = await getDoc(docref);

  if (scan.exists()) {
    console.log("scanData", scan.data());
    return { ...scan.data() } as scaninfomap;
  }
  return null;
}

export async function fetchScanData(): Promise<scaninfo[] | null> {
  // const scans = await db
  //   .collection("scans")
  //   .orderBy("ScannedDate", "desc")
  //   .get();
  const q = query(collection(dbc, "scans"), orderBy("ScannedDate", "desc"));
  const scans = await getDocs(q);
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
  console.log("scanInfo", scanInfo);
  return scanInfo;
}
