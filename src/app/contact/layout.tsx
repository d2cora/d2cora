import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | d2cora Digital Marketing Agency",
  description: "Get in touch with d2cora to discuss how our digital marketing experts can help accelerate your D2C brand's growth and revenue.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
