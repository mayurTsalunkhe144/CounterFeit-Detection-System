"use client";
import { dbc } from "@/firebase/client";

import { useUser } from "@clerk/nextjs";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";

import { useState } from "react";
import {
  FiCheckCircle,
  FiAlertCircle,
  FiCalendar,
  FiUser,
  FiBox,
  FiFileText,
  FiX,
} from "react-icons/fi";

type FormData = {
  productName: string;
  customerName: string;
  manufacturerName: string;
  manufacturingDate: string;
  description: string;
  termsAccepted: boolean;
};

export default function ProductRegistrationForm() {
  const { user } = useUser();
  const [formData, setFormData] = useState<FormData>({
    productName: "",
    customerName: "",
    manufacturerName: "",
    manufacturingDate: "",
    description: "",
    termsAccepted: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // if (!user) {
    //   setError("Please login to register a product");
    //   return;
    // }
    // formData.userId = user?.id;

    setError(null);

    if (!formData.termsAccepted) {
      setError("You must accept the terms and conditions to submit");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      let docref: string = "";
      await addDoc(collection(dbc, "products"), {
        ...formData,
        userId: user?.id,
        createdAt: new Date().toLocaleString(),
      })
        .then((DocRef) => {
          console.log("data added with id ", DocRef.id);
          docref = DocRef.id;
        })
        .catch((e) => {
          console.log("Error", e);
        });
      await new Promise((resolve) => setTimeout(resolve, 2000));

      await updateDoc(doc(dbc, "products", docref), {
        id: docref,
      });

      // On successful submission
      setShowSuccess(true);
      // Clear form
      setFormData({
        productName: "",
        customerName: "",
        manufacturerName: "",
        manufacturingDate: "",
        description: "",
        termsAccepted: false,
      });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 p-6 relative">
      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full relative">
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FiX size={24} />
            </button>
            <div className="text-center">
              <FiCheckCircle className="mx-auto text-green-500 text-5xl mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Success!
              </h3>
              <p className="text-gray-600 mb-6">
                Product data has been successfully stored.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="w-full max-w-7xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Register New Product
          </h2>
          <p className="text-lg text-gray-600">
            Fill in the details below to register your product
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-4 bg-red-50 text-red-700 rounded-lg flex items-start">
              <FiAlertCircle className="mt-1 mr-3 flex-shrink-0 text-xl" />
              <div>{error}</div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Name */}
            <div className="space-y-2">
              <label
                htmlFor="productName"
                className="block text-sm font-medium text-gray-700 flex items-center"
              >
                <FiBox className="mr-2 text-blue-500" /> Product Name *
              </label>
              <input
                type="text"
                id="productName"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-5 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                placeholder="Enter product name"
              />
            </div>

            {/* Customer Name */}
            <div className="space-y-2">
              <label
                htmlFor="customerName"
                className="block text-sm font-medium text-gray-700 flex items-center"
              >
                <FiUser className="mr-2 text-blue-500" /> Customer Name *
              </label>
              <input
                type="text"
                id="customerName"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-5 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                placeholder="Enter customer name"
              />
            </div>

            {/* Manufacturer Name */}
            <div className="space-y-2">
              <label
                htmlFor="manufacturerName"
                className="block text-sm font-medium text-gray-700 flex items-center"
              >
                <FiUser className="mr-2 text-blue-500" /> Manufacturer Name *
              </label>
              <input
                type="text"
                id="manufacturerName"
                name="manufacturerName"
                value={formData.manufacturerName}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-5 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                placeholder="Enter manufacturer name"
              />
            </div>

            {/* Manufacturing Date */}
            <div className="space-y-2">
              <label
                htmlFor="manufacturingDate"
                className="block text-sm font-medium text-gray-700 flex items-center"
              >
                <FiCalendar className="mr-2 text-blue-500" /> Manufacturing Date
                *
              </label>
              <input
                type="date"
                id="manufacturingDate"
                name="manufacturingDate"
                value={formData.manufacturingDate}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-5 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              />
            </div>
          </div>

          {/* Description - Full width */}
          <div className="space-y-2">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 flex items-center"
            >
              <FiFileText className="mr-2 text-blue-500" /> Product Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={6}
              disabled={isSubmitting}
              className="w-full px-5 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              placeholder="Describe the product features and specifications"
            />
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start pt-6">
            <div className="flex items-center h-5">
              <input
                id="termsAccepted"
                name="termsAccepted"
                type="checkbox"
                checked={formData.termsAccepted}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-6 h-6 text-blue-600 border-gray-300 rounded focus:ring-blue-500 disabled:bg-gray-100"
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="termsAccepted"
                className="font-medium text-gray-700 flex items-center"
              >
                <FiCheckCircle
                  className={`mr-2 text-xl ${
                    formData.termsAccepted ? "text-green-500" : "text-gray-400"
                  }`}
                />
                I certify that all information provided is accurate *
              </label>
              <p className="text-gray-500 mt-2 text-base">
                By checking this box, you confirm the authenticity of the
                product details
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-8">
            <button
              type="submit"
              disabled={isSubmitting || !formData.termsAccepted}
              className={`w-full flex justify-center items-center py-5 px-6 border border-transparent rounded-xl shadow-sm text-xl font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 ${
                isSubmitting || !formData.termsAccepted
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:shadow-lg"
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Storing Data...
                </>
              ) : (
                "Register Product"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
