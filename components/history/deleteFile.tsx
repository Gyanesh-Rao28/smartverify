"use client";
import React from "react";
import { DeleteIcon, Trash2 } from "lucide-react";

interface DeleteFileProps{
  fileUrlId:string
}

export const DeleteFile = ({fileUrlId}:DeleteFileProps) => {
  const handleDeleteFile = async() => {
    
  };

  return (
    <div>
      <button
        className="text-purple-500 hover:text-blue-500 hover:underline"
        onClick={() => {}}
      >
        {" "}
        <Trash2 /> {" "}
      </button>
    </div>
  );
};
