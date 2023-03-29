import PdfOps from "@/components/PdfOps";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="text-4xl text-cyan-600">
      <PdfOps />
    </main>
  );
}
