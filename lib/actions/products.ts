// import { db } from "@/firebase/admin"; // Adjusted the path to point to the correct location
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
const urldeployed = "https://counter-feit-detection-system.vercel.app/";
const urlLocal = "http://localhost:3000/";
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

export async function fetchScanData(
  userId: string
): Promise<scaninfo[] | null> {
  const q = await query(
    collection(dbc, "scans"),
    where("userId", "==", userId),
    orderBy("ScannedDate", "desc")
  );
  console.log("snap", q);
  const scans = await getDocs(q);
  // console.log(scans);
  console.log("scans", scans.docs);
  const scanInfo: scaninfo[] = scans.docs.map((doc) => {
    const data = doc.data();

    // Return formatted scan data
    return {
      scannedDate: data.ScannedDate || "",
      productID: data.productID || "",
      scanId: doc.id,
      infoUrl: `${urlLocal}/dashboard/scans/${doc.id}`, // Include the document ID
      scannedLongitude: data.longitude || "no data ",
      scannedLatitude: data.latitude || "no data",
    };
  });
  console.log("scanInfo", scanInfo);
  return scanInfo;
}

export async function getUserByProductId(ProductID: string) {
  const docRef = doc(dbc, "products", ProductID);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    return data.userId; // Only get 'name' field
  } else {
    console.log("No such document!");
    return null;
  }
}
