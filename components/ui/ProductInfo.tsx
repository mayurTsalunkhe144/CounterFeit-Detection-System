"use client";
import { dbc } from "@/firebase/client";
import { getUserByProductId } from "@/lib/actions/products";

import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import React, { useEffect } from "react";

type InfoField = {
  label: string;
  value: string | number;
  unit?: string;
};

type InfoLineProps = {
  fields: InfoField[];
  backgroundColor?: string;
  labelColor?: string;
  valueColor?: string;
  gap?: string;
  padding?: string;
  className?: string;
  productID?: string;
};
type ScanInfo = {
  longitude: string;
  latitude: string;
  ScannedDate: string;
  productId?: string;
};

const storeScanData = async (ScanInfo: ScanInfo, userId: string) => {
  await addDoc(collection(dbc, "scans"), {
    ...ScanInfo,
    userId: userId,
  })
    .then(async (docref) => {
      console.log(docref.id);
      await updateDoc(doc(dbc, "scans", docref.id), {
        id: docref,
      });
    })
    .catch((e) => {
      console.log("Error", e);
    });
};

const ProductInfo: React.FC<InfoLineProps> = ({
  fields,
  backgroundColor = "bg-black",
  labelColor = "text-gray-400",
  valueColor = "text-white",
  gap = "gap-6",
  padding = "px-8 py-6",
  className = "",
  productID,
}) => {
  useEffect(() => {
    const fetchUserAndStoreData = async () => {
      const userId = productID ? await getUserByProductId(productID) : null;
      if (!userId) {
        console.error("User ID is null or undefined.");
        return;
      }
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const ScannedDate = new Date().toLocaleString();
            const ScanInfo = {
              longitude: longitude.toString(),
              latitude: latitude.toString(),
              ScannedDate: ScannedDate,
              productID: productID,
            };
            storeScanData(ScanInfo, userId);
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    };

    fetchUserAndStoreData();
  }, []);
  return (
    <div
      className={`w-screen relative left-1/2 right-1/2 -mx-[50vw] ${backgroundColor} ${padding} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col ${gap}`}>
          {fields.map((field, index) => (
            <div key={index} className="flex flex-col">
              <span
                className={`text-xs uppercase tracking-wider font-medium mb-1 ${labelColor}`}
              >
                {field.label}
              </span>
              <span
                className={`text-xl font-bold ${valueColor} flex items-center`}
              >
                {field.value}
                {field.unit && (
                  <span className="ml-2 text-sm font-normal opacity-70">
                    {field.unit}
                  </span>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
