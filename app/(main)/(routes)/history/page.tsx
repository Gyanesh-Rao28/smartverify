import React from "react";

import { DeleteFile } from "@/components/history/deleteFile";
import { ViewFileResult } from "@/components/history/viewFileResult";
import Sidebar from "@/components/sidebar";
import { db } from "@/libs/db";
import { currentProfile } from "@/libs/currentProfile";
import { RedirectToSignIn } from "@clerk/nextjs";

const ContractsPage = async () => {
  // Sample data

  const profile = await currentProfile()

  if(!profile){
    return RedirectToSignIn
  }

  const files = await db.contract.findMany({
    where: {
      profileId: profile?.id
    },
    include:{
      profile: true
    }
  })


  return (
    <div className="flex bg-gray-900 font-poppins h-lvh">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="flex flex-col items-center w-full">
          <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-3xl mt-20 mx-auto">
            <h1 className="text-xl font-semibold text-white mb-4 text-center">
              Contract History
            </h1>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs uppercase bg-purple-500 text-white">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      <span className="sr-only">Check</span>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      File Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Author
                    </th>
                    <th scope="col" className="px-6 py-3">
                      View
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {files.map((item) => (
                    <tr
                      key={item.id}
                      className="bg-gray-700 border-b border-gray-600 text-white"
                    >
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          className="text-purple-600 rounded"
                        />
                      </td>
                      <td className="px-6 py-4">{item.contractName}</td>
                      <td className="px-6 py-4">{item.profile.name}</td>
                      <td className="px-6 py-4">
                        <ViewFileResult fileUrlId={item.id} />
                        {/* VIEW  */}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <DeleteFile fileId={item.id} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractsPage;
