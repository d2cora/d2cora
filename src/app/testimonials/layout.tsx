import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Testimonials & Wall of Love | d2cora",
  description: "Read testimonials from founders and D2C brands who have partnered with d2cora to achieve explosive growth and marketing success.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
