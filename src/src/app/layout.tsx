import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AMOG SOLUTIONS",
  description: "Sistemas Inteligentes & RevOps",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="bg-[#F8FAFC] text-[#0F172A] antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
