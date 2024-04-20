"use client";
import React from "react";
import { Trash2 } from "lucide-react";
import axios from "axios";

interface DeleteFileProps{
  fileId:string
}

export const DeleteFile = ({fileId}:DeleteFileProps) => {
  const handleDeleteFile = async() => {
    try {
      const res = await axios.delete(`/api/file/${fileId}`);
      console.log(res.data)
    } catch (error) {
      console.log("Error: ", error)
    }
  };

  return (
    <div>
      <button
        className="text-purple-500 hover:text-blue-500 hover:underline"
        onClick={handleDeleteFile}
      >
        {" "}
        <Trash2 /> {" "}
      </button>
      {/* {fileUrlId} */}
    </div>
  );
};
