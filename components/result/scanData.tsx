import React from "react";

interface ScanDataProps{
  createdAt? : string,
  finishedAt?: string,
  desc?: string,
  author?: string
}

export const ScanData = ({createdAt,desc,author,finishedAt}:ScanDataProps) => {

  const reportData = {
    target: "contract.sol",
    overallRiskLevel: "Low",
    high: 0,
    medium: 0,
    low: 4,
    info: 14,
    scanStatus: "Finished",
    startTime: "2024-04-14 10:54:29 (GMT+5:30)",
    finishTime: "2024-04-14 10:55:02 (GMT+5:30)",
    scanDuration: "33 seconds",
    author: "Ani",
  };

  return (
    <div>
      <div className="mb-4">
        <p className="text-sm text-white">Scan status</p>
        <p className="text-sm font-semibold text-green-400">
        Finished
        </p>
      </div>
      <div className="mb-4">
        <p className="text-sm text-white">Created time</p>
        <p className="text-sm font-semibold text-gray-300">
          {createdAt}
        </p>
      </div>
      <div className="mb-4">
        <p className="text-sm text-white">Finished time</p>
        <p className="text-sm font-semibold text-gray-300">
          {finishedAt}
        </p>
      </div>
      <div className="mb-4">
        <p className="text-sm text-white">File Description</p>
        <p className="text-sm font-semibold text-gray-300">
          {desc}
        </p>
      </div>
      <div className="mb-4">
        <p className="text-sm text-white">File Tag</p>
        <p className="text-sm font-semibold text-gray-300">
          {author}
        </p>
      </div>
    </div>
  );
};
