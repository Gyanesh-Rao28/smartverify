import type { Metadata } from "next";

import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";



export const metadata: Metadata = {
  title: "Smart Verify",
  description:
    "The increasing use of blockchain technologies highlights the importance of smart contract security. Recognizing this need, our team has developed a web application to examine and scan Solidity files, which are the foundation of Ethereum smart contracts. The web application ensures that the smart contracts are safe, effective and are scaleable, that is, keeping in mind the gas fees using a machine learning model.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
