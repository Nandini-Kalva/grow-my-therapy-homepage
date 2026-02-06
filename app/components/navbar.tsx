import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-8 py-6 bg-[#FAF9F7] border-b border-gray-200 ">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="font-serif text-xl">Dr. Maya Reynolds</h1>

        <div className="flex gap-8">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
