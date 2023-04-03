import Link from "next/link";

export default function Home() {
  return (
    <main className="text-4xl text-cyan-600">
      <Link href={"/studio"}>studio {"->"}</Link>
    </main>
  );
}
