"use client";
import React from "react";
import { MoveRight } from "lucide-react";
import { Vortex } from "@/ui/vortex";
import { HoverEffect } from "@/ui/card-hover-effect";
import { projects } from "@/libs/projects";
import { useRouter } from "next/navigation";

const HeroMain = () => {
    const router = useRouter()
    return (
      <>
        <Vortex
          backgroundColor="black"
          rangeY={800}
          particleCount={500}
          baseHue={120}
          className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-screen overflow-hidden"
        >
          <div className="w-full flex justify-between p-5 text-white absolute top-0">
            <div className="font-bold text-lg">SmartVerify</div>
          </div>

          <div className="flex-grow flex flex-col items-center justify-center text-center text-white p-4 z-10">
            <h1 className="text-5xl font-bold mb-4">SmartVerify:</h1>
            <p className="text-2xl mb-6">Making contracts sustainable</p>
            <button className="bg-purple-600 text-white font-bold py-2 px-12 rounded flex items-center" onClick={()=>{router.push('/upload')}}>
              <MoveRight />
            </button>
          </div>

          <div className="text-white text-center p-4 absolute bottom-0 w-4/5">
            <p>Team N-Bytes | Rebase&lt;01&gt;</p>
          </div>
        </Vortex>

        <Vortex
          backgroundColor="black"
          rangeY={800}
          particleCount={500}
          baseHue={120}
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-screen overflow-hidden"
        >
          <div className="max-w-5xl mx-auto px-12 margin z-10">
            <HoverEffect items={projects} />
          </div>
        </Vortex>
      </>
    );
};

export default HeroMain;
