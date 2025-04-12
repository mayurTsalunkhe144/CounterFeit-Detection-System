"use client";
import React from "react";

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
};

const ProductInfo: React.FC<InfoLineProps> = ({
  fields,
  backgroundColor = "bg-black",
  labelColor = "text-gray-400",
  valueColor = "text-white",
  gap = "gap-6",
  padding = "px-8 py-6",
  className = "",
}) => {
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
