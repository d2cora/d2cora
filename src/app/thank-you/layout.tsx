import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | d2cora",
  description: "Thank you for contacting d2cora. We will be in touch shortly.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
