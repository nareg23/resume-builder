import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="text-4xl text-cyan-600">
      <Link href={"/studio"}>studio {"->"}</Link>
    </main>
  );
}
