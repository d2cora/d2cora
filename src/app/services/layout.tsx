import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | d2cora Digital Marketing Agency",
  description: "Explore the comprehensive digital marketing services offered by d2cora, including CRO, performance marketing, and scalable growth strategies.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
