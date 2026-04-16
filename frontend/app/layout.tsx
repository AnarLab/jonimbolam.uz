import type { Metadata } from "next";
import "./globals.css";
import { LayoutShell } from "../components/LayoutShell";

export const metadata: Metadata = {
  title: "Health Clinic Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}

