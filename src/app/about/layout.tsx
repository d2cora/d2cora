import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | d2cora Digital Marketing Agency",
  description: "Learn more about d2cora, a premier digital marketing agency specializing in helping D2C brands scale and grow through strategic performance marketing.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
