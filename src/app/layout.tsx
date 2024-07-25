import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hi from root layout",
  description: "Description from root layout",
  openGraph: {
    lastName: "Singh",
    firstName: "Ashish",
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h1>hi</h1>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/team">team</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
