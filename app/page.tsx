import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full p-4">
      <Link href={"/toast"}>Toast</Link>
    </div>
  );
}
