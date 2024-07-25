import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  description: "Description from about page",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      Layout
      {children}
    </div>
  );
}
