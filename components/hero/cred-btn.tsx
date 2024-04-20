
import { SignInButton, SignOutButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import React from 'react'

const CredBtn = async() => {

    const profile = await currentUser()
   
  return (
    <>
      <div className="flex space-x-4 absolute top-4 right-6">
        <a
          href="https://dev.to/retr0kernel/smartverify-securing-smart-contracts-our-ml-powered-solidity-vulnerability-scanner-webapp-3afa "
          className="p-2 px-7"
        >
          Blog
        </a>
        <div className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
          {!profile?<SignInButton />:<SignOutButton/>}
        </div>
      </div>
    </>
  );
}

export default CredBtn