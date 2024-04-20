"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface ViewFileResultProps{
  fileUrlId:string
}

export const ViewFileResult = ({fileUrlId}:ViewFileResultProps) => {
  const router = useRouter();
  return (
    <div>
      <button
        className="text-white hover:text-purple-500"
        onClick={() => {
          router.push(`history/result/${fileUrlId}`);
        }}
      >
        View
      </button>
    </div>
  );
};
