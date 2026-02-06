import Link from "next/link";


export default function CTA() {
  return (
    <section className="py-24 bg-blue-400 text-white text-center px-6 h-96">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Start Your Therapy Journey Today
      </h2>

      <p className="max-w-2xl mx-auto text-lg mb-10 opacity-90">
        Connect with licensed therapists from the comfort of your home.
        Safe, confidential, and tailored to your needs.
      </p>

      
     <Link href="/consulting">
  <button className="bg-purple-700 text-white px-8 py-4 rounded-lg bg-pink-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-800 shadow-md hover:scale-105 hover:shadow-lg transition tranform">
    Book a Consultation
  </button>
</Link>


    
    </section>
  );
}
