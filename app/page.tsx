
import React from "react"
import HeroMain from "@/components/hero/heroMain";
import CredBtn from "@/components/hero/cred-btn";


export default function Home() {

  // const profile = await currentProfile()
  return (
    <>
      <div>
        <title>Introducing SmartVerify</title>
        <link rel="icon" href="/favicon.ico" />
      </div>

      <HeroMain/>

      <CredBtn/>

    </>
  );
}