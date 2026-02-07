import Image from "next/image";
import Social from "./component/social";
import Hours from "./component/hours";
import Link from "next/link";


export default function ContactPage() {
  return (
    <section className="bg-[#F7F6F3] px-8  bg-violet-200">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center  h-screen ">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Let’s Connect 
          </h1>

          <p className="text-gray-700 mb-10 leading-relaxed text-xl">
            Starting therapy is a meaningful and courageous step. Whether you
            have questions about the therapy process or are interested in
            scheduling a free 15-minute consultation, I’d love to hear from you.
            You don’t need to have everything figured out — reaching out is
            enough.
          </p>

         <Link href="/consulting">
          <button className="bg-purple-700 text-white px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition">
            Book a Consultation
          </button>
         </Link>
        </div>

       
        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
          <Image
            src="/demo.png"
            alt="Calm therapy space"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
       <Hours />
       <Social />
    </section>
   
  );
}
