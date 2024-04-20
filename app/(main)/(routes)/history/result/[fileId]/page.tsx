import React from "react";
import { ScanResult } from "@/components/result/scanResult";
import { ScanData } from "@/components/result/scanData";
import { db } from "@/libs/db";
import { currentProfile } from "@/libs/currentProfile";
import { RedirectToSignIn } from "@clerk/nextjs";

interface ReportPageProps {
  params: {
    fileId: string;
  };
}

const ReportPage = async({ params }: ReportPageProps) => {
  

  const profile = await currentProfile()

  if(!profile){
    return RedirectToSignIn
  }


  const result = await db.result.findFirst({
    where: {
      contractId:params.fileId
    },
    include:{
      contract:true
    }
  });

  // console.log(result)



  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900 font-poppins">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h1 className="text-2xl font-semibold text-white mb-6">
          Vulnerablity Report File: {`${result?.id}`}
        </h1>
        <div className="flex justify-between items-center mb-8">
          <p className="text-sm text-gray-400">{result?.contract.contractName}.sol</p>
  
        </div>

        <h2 className="text-lg font-semibold text-white mb-4">
          → Scan summary
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <ScanResult DelegateCallVulnerability={result?.DelegateCallVulnerability} IntegerOverflowVulnerability={result?.IntegerOverflowVulnerability}
            ReentrancyVulnerability={result?.ReentrancyVulnerability} TimestampDependencyVulnerability={result?.TimestampDependencyVulnerability}/>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg">
            <ScanData createdAt={result?.contract?.createdAt.toTimeString().split(' ')[0]} finishedAt={result?.createdAt.toTimeString().split(' ')[0]} desc={result?.contract.description||""} author={result?.contract.tag||""}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
