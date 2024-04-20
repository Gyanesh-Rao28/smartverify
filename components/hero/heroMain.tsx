"use client";
import React from "react";
import { MoveRight } from "lucide-react";
import Head from "next/head";
import { Vortex } from "@/ui/vortex";
import { HoverEffect } from "@/ui/card-hover-effect";
import { SignInButton, SignOutButton } from "@clerk/nextjs";
import { projects } from "@/libs/projects";

const HeroMain = () => {
  return (
    <>
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-screen overflow-hidden"
      >
        <header className="w-full flex justify-between p-5 text-white absolute top-0">
          <div className="font-bold text-lg">SmartVerify</div>
          <div className="flex space-x-4">
            <a
              href="https://dev.to/retr0kernel/smartverify-securing-smart-contracts-our-ml-powered-solidity-vulnerability-scanner-webapp-3afa "
              className="p-2 px-7"
            >
              Blog
            </a>
            <div className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
              <SignInButton />
            </div>
          </div>
        </header>

        <main className="flex-grow flex flex-col items-center justify-center text-center text-white p-4 z-10">
          <h1 className="text-5xl font-bold mb-4">SmartVerify:</h1>
          <p className="text-2xl mb-6">Making contracts sustainable</p>
          <button className="bg-purple-600 text-white font-bold py-2 px-12 rounded flex items-center">
            <a href="/upload" className="flex">
              <MoveRight />
            </a>
          </button>
        </main>

        <footer className="text-white text-center p-4 absolute bottom-0 w-full">
          <p>Team N-Bytes | Rebase&lt;01&gt;</p>
        </footer>
      </Vortex>

      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-screen overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-12 margin z-10">
          <HoverEffect items={projects} />
        </div>
      </Vortex>
    </>
  );
};

export default HeroMain;
