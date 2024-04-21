"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/sidebar";
import axios from "axios";
import { Loader2 } from "lucide-react";

const UploadPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    contractName: "default",
    contractLink: "default",
    tags: "default",
    description: "default",
  });

  const [isLoading, setIsLoading] = useState(false);


  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));  
  };

  const handleSubmit = async (event: React.FormEvent) => {
    try {
      setIsLoading(true);
      event.preventDefault();
  
      const fileUpload = await axios.post("/api/upload", formData);
      console.log("fileUpload: ", fileUpload);

  
      const res = await axios.post(
        process.env.NEXT_PUBLIC_MODEL_API_URL+"/check_vulnerabilities",
        {
          solidity_file_url: fileUpload.data.contractFileUrl,
          file_id: fileUpload.data.id,
        }
      );
      console.log("res: ", res);
  
      const result = await axios.post('/api/result', {
        "contractFileId": fileUpload.data.id,
        "DelegateCallVulnerability": res.data.DelegateCallVulnerability.result,
        "IntegerOverflowVulnerability": res.data.IntegerOverflowVulnerability.result,
        "ReentrancyVulnerability": res.data.ReentrancyVulnerability.result,
        "TimestampDependencyVulnerability": res.data.TimestampDependencyVulnerability.result,
      });
      console.log("result: ", result);
  
      setIsLoading(false);
      router.push(`/history/result/${fileUpload.data.id}`);
    } catch (error) {
      console.error("An error occurred:", error);
      setIsLoading(false);
    }
  };

  // const url = process.env.NEXT_PUBLIC_MODEL_API_URL;
  // console.log(url)
  

  return (
    <div className="flex h-screen bg-gray-900 font-poppins">
      <Sidebar /> {/* Sidebar component on the left */}
      <div className="flex flex-1 justify-center items-center">
        <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Input fields and other form elements */}
            <div>
              <label
                htmlFor="contract-name"
                className="block text-sm font-semibold text-gray-400"
              >
                Contract Name
              </label>
              <input
                type="text"
                id="contract-name"
                name="contractName"
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-700 text-gray-300 border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>

            {/* Other input fields omitted for brevity */}
            <div>
              <label
                htmlFor="tags"
                className="block text-sm font-semibold text-gray-400"
              >
                Tags
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-700 text-gray-300 border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-semibold text-gray-400"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                onChange={handleInputChange}
                rows={4}
                className="mt-1 block w-full px-4 py-2 bg-gray-700 text-gray-300 border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>

            <div>
              <label
                htmlFor="contractLink"
                className="block text-sm font-semibold text-gray-400"
              >
                {`".sol" File Link`}
              </label>
              <input
                type="text"
                id="contractLink"
                name="contractLink"
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-700 text-gray-300 border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>

            {
              isLoading ? <><div className="flex items-center justify-center">
              <Loader2 className="h-5 w-5 text-purple-600 animate-spin mt-2" />
            </div></>:(<button
              type="submit"
              className="w-full px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            >
              Submit
            </button>)
            }
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
